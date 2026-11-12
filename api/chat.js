import { buildSystemPrompt } from './_knowledge.js';

const DEFAULT_MODEL = 'gemini-3.5-flash-lite';
const DEFAULT_FALLBACK_MODELS = ['gemini-3.1-flash-lite', 'gemini-3.5-flash'];
const MODEL_NAME_REGEX = /^[a-zA-Z0-9._-]+$/;

const PER_ATTEMPT_TIMEOUT_MS = 30000;
const MAX_TOTAL_DURATION_MS = 39000;
const MIN_ATTEMPT_BUDGET_MS = 1500;

const MAX_API_MESSAGES = 6;
const MAX_USER_MESSAGE_LENGTH = 500;
const MAX_MODEL_MESSAGE_LENGTH = 2500;
const MAX_RAW_BODY_MESSAGES = 20;
const MAX_BODY_BYTES = 49152;

const MINUTE_WINDOW_MS = 60 * 1000;
const MINUTE_MAX_REQUESTS = 10;
const DAY_WINDOW_MS = 24 * 60 * 60 * 1000;
const DAY_MAX_REQUESTS = 40;

const CACHE_TTL_MS = 60 * 60 * 1000;
const CACHE_MAX_ENTRIES = 100;

const THINKING_LEVEL = 'MINIMAL';

// In-memory rate limit buckets & single-turn FAQ cache
const minuteRateStore = new Map();
const dayRateStore = new Map();
const responseCache = new Map();

function getClientIp(req) {
  const forwarded = req.headers?.['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = req.headers?.['x-real-ip'];
  if (typeof realIp === 'string' && realIp.trim()) {
    return realIp.trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function getPerAttemptTimeoutMs() {
  const raw = process.env.GEMINI_TIMEOUT_MS ?? process.env.GEMINI_TIMEOUT;
  if (typeof raw === 'string' && raw.trim()) {
    const parsed = Number.parseInt(raw.trim(), 10);
    if (Number.isFinite(parsed) && parsed > 0) {
      return Math.min(Math.max(parsed, 3000), PER_ATTEMPT_TIMEOUT_MS);
    }
  }
  return PER_ATTEMPT_TIMEOUT_MS;
}

function getModelChain() {
  const rawPrimary = typeof process.env.GEMINI_MODEL === 'string' ? process.env.GEMINI_MODEL.trim() : '';
  const primary = rawPrimary || DEFAULT_MODEL;
  if (!MODEL_NAME_REGEX.test(primary)) {
    return { error: 'Invalid primary model name' };
  }

  const rawFallbacks = process.env.GEMINI_FALLBACK_MODELS;
  const fallbackList =
    typeof rawFallbacks === 'string'
      ? rawFallbacks
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean)
      : DEFAULT_FALLBACK_MODELS;

  const chain = [];
  const seen = new Set();

  for (const candidate of [primary, ...fallbackList]) {
    if (!MODEL_NAME_REGEX.test(candidate)) {
      return { error: 'Invalid fallback model name' };
    }
    if (!seen.has(candidate)) {
      seen.add(candidate);
      chain.push(candidate);
    }
  }

  return { models: chain };
}

function pruneBucketStore(store, windowMs, now) {
  if (store.size <= 500) return;
  const cutoff = now - windowMs;
  for (const [key, timestamps] of store.entries()) {
    const fresh = timestamps.filter((t) => t > cutoff);
    if (fresh.length === 0) {
      store.delete(key);
    } else {
      store.set(key, fresh);
    }
  }
}

function checkRateLimit(ip) {
  const now = Date.now();
  pruneBucketStore(minuteRateStore, MINUTE_WINDOW_MS, now);
  pruneBucketStore(dayRateStore, DAY_WINDOW_MS, now);

  const minuteCutoff = now - MINUTE_WINDOW_MS;
  const minuteHits = (minuteRateStore.get(ip) || []).filter((t) => t > minuteCutoff);
  if (minuteHits.length >= MINUTE_MAX_REQUESTS) {
    const retryAfter = Math.max(1, Math.ceil((minuteHits[0] + MINUTE_WINDOW_MS - now) / 1000));
    return { allowed: false, retryAfter };
  }

  const dayCutoff = now - DAY_WINDOW_MS;
  const dayHits = (dayRateStore.get(ip) || []).filter((t) => t > dayCutoff);
  if (dayHits.length >= DAY_MAX_REQUESTS) {
    const retryAfter = Math.max(1, Math.ceil((dayHits[0] + DAY_WINDOW_MS - now) / 1000));
    return { allowed: false, retryAfter };
  }

  minuteHits.push(now);
  dayHits.push(now);
  minuteRateStore.set(ip, minuteHits);
  dayRateStore.set(ip, dayHits);

  return { allowed: true, retryAfter: 0 };
}

function getCachedReply(cacheKey) {
  const entry = responseCache.get(cacheKey);
  if (!entry) return null;

  if (Date.now() > entry.expiresAt) {
    responseCache.delete(cacheKey);
    return null;
  }

  // Refresh LRU order
  responseCache.delete(cacheKey);
  responseCache.set(cacheKey, entry);
  return entry.reply;
}

function setCachedReply(cacheKey, reply) {
  const now = Date.now();
  if (responseCache.size >= CACHE_MAX_ENTRIES) {
    for (const [key, entry] of responseCache.entries()) {
      if (now > entry.expiresAt) {
        responseCache.delete(key);
      }
    }
  }
  while (responseCache.size >= CACHE_MAX_ENTRIES) {
    const oldestKey = responseCache.keys().next().value;
    if (oldestKey === undefined) break;
    responseCache.delete(oldestKey);
  }
  responseCache.set(cacheKey, {
    reply,
    expiresAt: now + CACHE_TTL_MS
  });
}

async function parseRequestBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === 'object') {
      return req.body;
    }
    if (typeof req.body === 'string') {
      return JSON.parse(req.body);
    }
  }

  const chunks = [];
  let totalBytes = 0;

  for await (const chunk of req) {
    totalBytes += chunk.length;
    if (totalBytes > MAX_BODY_BYTES) {
      throw new Error('PAYLOAD_TOO_LARGE');
    }
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) {
    return null;
  }
  return JSON.parse(raw);
}

function validateMessages(body) {
  if (!body || typeof body !== 'object' || !Array.isArray(body.messages)) {
    return { error: 'Invalid request format. Expected a JSON object with a messages array.' };
  }

  if (body.messages.length === 0 || body.messages.length > MAX_RAW_BODY_MESSAGES) {
    return { error: `Please provide between 1 and ${MAX_RAW_BODY_MESSAGES} messages.` };
  }

  const normalized = [];

  for (const item of body.messages) {
    if (!item || typeof item !== 'object') {
      return { error: 'Each message must be an object with role and text.' };
    }

    const rawRole = item.role;
    let role;
    if (rawRole === 'user') {
      role = 'user';
    } else if (rawRole === 'model' || rawRole === 'assistant') {
      role = 'model';
    } else {
      return { error: 'Invalid message role specified.' };
    }

    const text = item.text ?? item.content;
    if (typeof text !== 'string') {
      return { error: 'Each message must contain string text.' };
    }

    const maxLen = role === 'user' ? MAX_USER_MESSAGE_LENGTH : MAX_MODEL_MESSAGE_LENGTH;
    if (text.length > maxLen) {
      return { error: `Messages must not exceed ${maxLen} characters.` };
    }

    const trimmed = text.trim();
    if (!trimmed) {
      return { error: 'Messages cannot be empty.' };
    }

    normalized.push({
      role,
      parts: [{ text: trimmed }]
    });
  }

  if (normalized[normalized.length - 1].role !== 'user') {
    return { error: 'The latest message must come from the user.' };
  }

  // Keep only the last 6 messages and ensure the truncated window begins with a user turn
  let recent = normalized.slice(-MAX_API_MESSAGES);
  while (recent.length > 1 && recent[0].role !== 'user') {
    recent = recent.slice(1);
  }

  return { contents: recent };
}

function extractReplyText(geminiPayload) {
  const candidates = geminiPayload?.candidates;
  if (!Array.isArray(candidates) || candidates.length === 0) {
    return '';
  }

  const parts = candidates[0]?.content?.parts;
  if (!Array.isArray(parts)) {
    return '';
  }

  return parts
    .filter((part) => typeof part?.text === 'string' && !part?.thought)
    .map((part) => part.text)
    .join('')
    .trim();
}

function parseRetryDelaySeconds(rawDelay) {
  if (typeof rawDelay === 'number' && Number.isFinite(rawDelay) && rawDelay > 0) {
    return rawDelay;
  }
  if (typeof rawDelay !== 'string') {
    return null;
  }
  const trimmed = rawDelay.trim();
  if (!trimmed) return null;

  const msMatch = /^(\d+(?:\.\d+)?)ms$/i.exec(trimmed);
  if (msMatch) {
    return Number.parseFloat(msMatch[1]) / 1000;
  }

  const secMatch = /^(\d+(?:\.\d+)?)s?$/i.exec(trimmed);
  if (secMatch) {
    return Number.parseFloat(secMatch[1]);
  }

  return null;
}

function extractGeminiErrorMeta(errPayload, headers) {
  const errorStatus = typeof errPayload?.error?.status === 'string' ? errPayload.error.status : null;
  const errorMessage = typeof errPayload?.error?.message === 'string' ? errPayload.error.message : '';
  const details = Array.isArray(errPayload?.error?.details) ? errPayload.error.details : [];

  let retryDelayRaw = errPayload?.error?.retryDelay ?? null;
  if (!retryDelayRaw) {
    const retryInfo = details.find((item) => item && typeof item.retryDelay === 'string');
    if (retryInfo) {
      retryDelayRaw = retryInfo.retryDelay;
    }
  }

  let retryDelaySec = parseRetryDelaySeconds(retryDelayRaw);
  if (retryDelaySec === null && headers && typeof headers.get === 'function') {
    const headerVal = headers.get('retry-after');
    if (headerVal) {
      retryDelayRaw = retryDelayRaw || headerVal;
      retryDelaySec = parseRetryDelaySeconds(headerVal);
    }
  }

  return {
    errorStatus,
    errorMessage,
    retryDelayRaw,
    retryDelaySec
  };
}

function sendJson(res, statusCode, payload) {
  if (res.writableEnded) {
    return undefined;
  }
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(payload);
  }
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
  return undefined;
}

function sleepWithAbort(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason || Object.assign(new Error('Aborted'), { name: 'AbortError' }));
      return;
    }
    const timer = setTimeout(() => {
      cleanup();
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      cleanup();
      reject(signal.reason || Object.assign(new Error('Aborted'), { name: 'AbortError' }));
    };
    const cleanup = () => {
      signal?.removeEventListener('abort', onAbort);
    };
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

function buildPayload(systemPrompt, contents, useThinkingConfig) {
  const generationConfig = {
    maxOutputTokens: 600
  };
  if (useThinkingConfig) {
    generationConfig.thinkingConfig = { thinkingLevel: THINKING_LEVEL };
  }
  return {
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
    contents,
    generationConfig
  };
}

async function invokeGemini({ model, endpoint, apiKey, payload, timeoutMs, parentSignal }) {
  const startedAt = Date.now();
  const attemptController = new AbortController();
  let attemptTimedOut = false;

  const timer = setTimeout(() => {
    attemptTimedOut = true;
    attemptController.abort(Object.assign(new Error('Attempt timed out'), { name: 'AbortError' }));
  }, timeoutMs);

  const onParentAbort = () => {
    attemptController.abort(parentSignal?.reason || Object.assign(new Error('Aborted'), { name: 'AbortError' }));
  };

  if (parentSignal) {
    if (parentSignal.aborted) {
      clearTimeout(timer);
      throw parentSignal.reason || Object.assign(new Error('Aborted'), { name: 'AbortError' });
    }
    parentSignal.addEventListener('abort', onParentAbort, { once: true });
  }

  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(payload),
      signal: attemptController.signal
    });

    const elapsedMs = Date.now() - startedAt;

    if (upstream.ok) {
      const data = await upstream.json();
      console.info(
        `[api/chat] gemini model=${model} status=${upstream.status} elapsedMs=${elapsedMs} errorStatus=none retryDelay=none`
      );
      return { ok: true, status: upstream.status, data };
    }

    let errPayload = null;
    try {
      errPayload = await upstream.json();
    } catch {
      errPayload = null;
    }

    const meta = extractGeminiErrorMeta(errPayload, upstream.headers);
    console.info(
      `[api/chat] gemini model=${model} status=${upstream.status} elapsedMs=${elapsedMs} errorStatus=${meta.errorStatus || 'none'} retryDelay=${meta.retryDelayRaw || 'none'}`
    );

    return {
      ok: false,
      status: upstream.status,
      meta,
      detailsText: JSON.stringify(errPayload?.error?.details || '')
    };
  } catch (err) {
    const elapsedMs = Date.now() - startedAt;
    const label = attemptTimedOut ? 'TIMEOUT' : err?.name || 'NETWORK_ERROR';
    console.info(
      `[api/chat] gemini model=${model} status=0 elapsedMs=${elapsedMs} errorStatus=${label} retryDelay=none`
    );
    return {
      ok: false,
      status: 0,
      timedOut: attemptTimedOut,
      networkError: !attemptTimedOut && err?.name !== 'AbortError',
      abortedByParent: Boolean(parentSignal?.aborted),
      meta: { errorStatus: label, errorMessage: '', retryDelayRaw: null, retryDelaySec: null }
    };
  } finally {
    clearTimeout(timer);
    parentSignal?.removeEventListener('abort', onParentAbort);
  }
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, {
      error: 'Method not allowed. Use POST.',
      code: 'METHOD_NOT_ALLOWED'
    });
  }

  const clientIp = getClientIp(req);
  const rate = checkRateLimit(clientIp);
  if (!rate.allowed) {
    res.setHeader('Retry-After', String(rate.retryAfter));
    return sendJson(res, 429, {
      error: 'Too many requests. Please wait a moment before sending another message.',
      code: 'RATE_LIMITED',
      retryAfter: rate.retryAfter
    });
  }

  let body;
  try {
    body = await parseRequestBody(req);
  } catch (err) {
    if (err?.message === 'PAYLOAD_TOO_LARGE') {
      return sendJson(res, 400, { error: 'Request payload is too large.', code: 'BAD_REQUEST' });
    }
    return sendJson(res, 400, { error: 'Invalid JSON request body.', code: 'BAD_REQUEST' });
  }

  const validation = validateMessages(body);
  if (validation.error) {
    return sendJson(res, 400, { error: validation.error, code: 'BAD_REQUEST' });
  }

  const apiKey = typeof process.env.GEMINI_API_KEY === 'string' ? process.env.GEMINI_API_KEY.trim() : '';
  if (!apiKey) {
    console.error('[api/chat] Missing GEMINI_API_KEY environment variable');
    return sendJson(res, 500, {
      error: 'The AI assistant is temporarily unavailable.',
      code: 'CONFIG_ERROR'
    });
  }

  const modelChainResult = getModelChain();
  if (modelChainResult.error) {
    console.error('[api/chat] Invalid Gemini model configuration');
    return sendJson(res, 500, {
      error: 'The AI assistant is temporarily unavailable.',
      code: 'CONFIG_ERROR'
    });
  }

  // Single-message cache lookup
  const isSingleQuestion = validation.contents.length === 1;
  const cacheKey = isSingleQuestion ? validation.contents[0].parts[0].text.toLowerCase() : null;
  if (cacheKey) {
    const cached = getCachedReply(cacheKey);
    if (cached) {
      return sendJson(res, 200, { reply: cached, cached: true });
    }
  }

  const systemPrompt = buildSystemPrompt();
  const perAttemptCapMs = getPerAttemptTimeoutMs();
  const deadlineAt = Date.now() + MAX_TOTAL_DURATION_MS;

  const overallController = new AbortController();
  let clientClosed = false;

  const onClientClose = () => {
    if (!res.writableEnded) {
      clientClosed = true;
      overallController.abort(Object.assign(new Error('Client disconnected'), { name: 'AbortError' }));
    }
  };

  if (typeof res.on === 'function') {
    res.on('close', onClientClose);
  }

  let saw429 = false;
  let last429RetryAfter = null;

  try {
    for (const model of modelChainResult.models) {
      if (clientClosed) return undefined;

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
      let useThinkingConfig = true;
      let retriedThinkingFallback = false;
      let retriedSameModelTransient = false;

      while (true) {
        const remainingMs = deadlineAt - Date.now();
        if (remainingMs < MIN_ATTEMPT_BUDGET_MS) {
          break;
        }

        const attemptTimeoutMs = Math.min(perAttemptCapMs, remainingMs);
        const payload = buildPayload(systemPrompt, validation.contents, useThinkingConfig);
        const result = await invokeGemini({
          model,
          endpoint,
          apiKey,
          payload,
          timeoutMs: attemptTimeoutMs,
          parentSignal: overallController.signal
        });

        if (clientClosed || result.abortedByParent) {
          return undefined;
        }

        if (result.ok) {
          const reply = extractReplyText(result.data);
          if (!reply) {
            // Try next model if current model returned an empty candidate
            break;
          }
          if (cacheKey) {
            setCachedReply(cacheKey, reply);
          }
          return sendJson(res, 200, { reply });
        }

        const isInvalidKey =
          result.status === 401 ||
          result.status === 403 ||
          /api key/i.test(result.meta.errorMessage) ||
          /API_KEY_INVALID/i.test(result.detailsText || '');

        if (isInvalidKey) {
          return sendJson(res, 500, {
            error: 'The AI assistant is temporarily unavailable.',
            code: 'AUTH_ERROR'
          });
        }

        // If 400 is caused by thinkingConfig/thinkingLevel, retry that same model once without thinkingConfig
        if (
          result.status === 400 &&
          useThinkingConfig &&
          !retriedThinkingFallback &&
          /thinking/i.test(result.meta.errorMessage)
        ) {
          useThinkingConfig = false;
          retriedThinkingFallback = true;
          continue;
        }

        // Handle 429: retry once if retryDelay <= 5s, otherwise advance immediately to next model
        if (result.status === 429) {
          saw429 = true;
          const delaySec = result.meta.retryDelaySec;
          if (delaySec !== null && delaySec > 0) {
            last429RetryAfter = Math.ceil(delaySec);
          }

          if (!retriedSameModelTransient && delaySec !== null && delaySec > 0 && delaySec <= 5) {
            const waitMs = Math.ceil(delaySec * 1000) + Math.floor(Math.random() * 150);
            if (deadlineAt - Date.now() > waitMs + MIN_ATTEMPT_BUDGET_MS) {
              retriedSameModelTransient = true;
              await sleepWithAbort(waitMs, overallController.signal);
              continue;
            }
          }
          break;
        }

        // Handle 503: retry once after ~1s + small jitter before moving to next model
        if (result.status === 503) {
          if (!retriedSameModelTransient) {
            const waitMs = 1000 + Math.floor(Math.random() * 300);
            if (deadlineAt - Date.now() > waitMs + MIN_ATTEMPT_BUDGET_MS) {
              retriedSameModelTransient = true;
              await sleepWithAbort(waitMs, overallController.signal);
              continue;
            }
          }
          break;
        }

        // Network error / attempt timeout / 404 / other non-OK -> move to next model cleanly
        break;
      }

      if (deadlineAt - Date.now() < MIN_ATTEMPT_BUDGET_MS) {
        break;
      }
    }

    if (clientClosed) {
      return undefined;
    }

    if (saw429) {
      const retryAfter = Math.min(Math.max(last429RetryAfter || 25, 5), 120);
      res.setHeader('Retry-After', String(retryAfter));
      return sendJson(res, 429, {
        error: 'The AI assistant has hit its temporary rate limit.',
        code: 'RATE_LIMITED',
        retryAfter
      });
    }

    const retryAfter = 5;
    res.setHeader('Retry-After', String(retryAfter));
    return sendJson(res, 503, {
      error: 'The assistant is busy right now.',
      code: 'SERVICE_UNAVAILABLE',
      retryAfter
    });
  } catch (err) {
    if (clientClosed || err?.name === 'AbortError') {
      return undefined;
    }
    const retryAfter = 5;
    res.setHeader('Retry-After', String(retryAfter));
    return sendJson(res, 503, {
      error: 'The assistant is busy right now.',
      code: 'SERVICE_UNAVAILABLE',
      retryAfter
    });
  } finally {
    if (typeof res.off === 'function') {
      res.off('close', onClientClose);
    } else if (typeof res.removeListener === 'function') {
      res.removeListener('close', onClientClose);
    }
  }
}
