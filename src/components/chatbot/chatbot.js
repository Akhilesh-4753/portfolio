const CHAT_STORAGE_KEY = 'akhilesh_ai_chat_history';
const MAX_STORED_MESSAGES = 20;
const MAX_API_MESSAGES = 6;
const MAX_CHAR_LENGTH = 500;
const CLIENT_REQUEST_TIMEOUT_MS = 45000;
const AUTO_RETRY_DELAY_MS = 3000;
const MOBILE_BREAKPOINT_PX = 519;

const DEFAULT_PLACEHOLDER = 'Ask about projects, skills, experience...';
const PLACEHOLDER_ROTATION_MS = 3500;
const ROTATING_PLACEHOLDERS = [
  'What projects has he built?',
  'Which technologies does he use?',
  'Tell me about his ERP work',
  'How can I contact him?'
];

const SUGGESTED_QUESTIONS = [
  { icon: 'folder', text: 'What projects has Akhilesh built?' },
  { icon: 'code', text: 'What is his tech stack?' },
  { icon: 'building', text: 'Tell me about his ERP experience' },
  { icon: 'mail', text: 'How can I contact him?' }
];

function createStrokeIcon(size, paths) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.7');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  for (const spec of paths) {
    const el = document.createElementNS(svgNS, spec.tag);
    for (const [attr, val] of Object.entries(spec.attrs)) {
      el.setAttribute(attr, String(val));
    }
    svg.appendChild(el);
  }
  return svg;
}

function getNamedIcon(name, size) {
  switch (name) {
    case 'code':
      return createStrokeIcon(size, [
        { tag: 'path', attrs: { d: 'M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14' } }
      ]);
    case 'briefcase':
      return createStrokeIcon(size, [
        { tag: 'rect', attrs: { x: 2, y: 7, width: 20, height: 14, rx: 2 } },
        { tag: 'path', attrs: { d: 'M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2' } },
        { tag: 'path', attrs: { d: 'M2 12h20' } }
      ]);
    case 'map-pin':
      return createStrokeIcon(size, [
        { tag: 'path', attrs: { d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' } },
        { tag: 'circle', attrs: { cx: 12, cy: 10, r: 3 } }
      ]);
    case 'check-circle':
      return createStrokeIcon(size, [
        { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
        { tag: 'path', attrs: { d: 'm9 12 2 2 4-4' } }
      ]);
    case 'folder':
      return createStrokeIcon(size, [
        { tag: 'path', attrs: { d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' } }
      ]);
    case 'building':
      return createStrokeIcon(size, [
        { tag: 'rect', attrs: { x: 4, y: 2, width: 16, height: 20, rx: 2 } },
        { tag: 'path', attrs: { d: 'M9 22v-4h6v4' } },
        { tag: 'path', attrs: { d: 'M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01' } }
      ]);
    case 'mail':
    default:
      return createStrokeIcon(size, [
        { tag: 'rect', attrs: { x: 2, y: 4, width: 20, height: 16, rx: 2 } },
        { tag: 'path', attrs: { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' } }
      ]);
  }
}

function createSparkleStarSvg() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '10');
  svg.setAttribute('height', '10');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('aria-hidden', 'true');

  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z');
  svg.appendChild(path);
  return svg;
}

function createIntroBlock() {
  const intro = document.createElement('div');
  intro.className = 'cb-intro';

  const iconWrap = document.createElement('div');
  iconWrap.className = 'cb-intro-icon-wrap';

  const iconTile = document.createElement('span');
  iconTile.className = 'cb-intro-icon';
  iconTile.setAttribute('aria-hidden', 'true');
  iconTile.appendChild(getNamedIcon('code', 22));
  iconWrap.appendChild(iconTile);

  const sparkle = document.createElement('span');
  sparkle.className = 'cb-intro-sparkle';
  sparkle.setAttribute('aria-hidden', 'true');
  sparkle.appendChild(createSparkleStarSvg());
  iconWrap.appendChild(sparkle);

  intro.appendChild(iconWrap);

  const heading = document.createElement('h3');
  heading.className = 'cb-intro-heading';
  heading.appendChild(document.createTextNode("Hi, I'm Akhilesh's AI assistant"));
  intro.appendChild(heading);

  const desc = document.createElement('p');
  desc.className = 'cb-intro-desc';
  desc.appendChild(
    document.createTextNode(
      'I can tell you about his projects, tech stack, ERP experience and how to get in touch. Pick a topic below or ask your own question.'
    )
  );
  intro.appendChild(desc);

  const metaRow = document.createElement('div');
  metaRow.className = 'cb-intro-meta';

  const metaItems = [
    { icon: 'briefcase', label: 'Full-Stack Developer' },
    { icon: 'map-pin', label: 'Malappuram, Kerala' },
    { icon: 'check-circle', label: 'Open to opportunities' }
  ];

  for (const item of metaItems) {
    const span = document.createElement('span');
    span.className = 'cb-intro-meta-item';
    span.appendChild(getNamedIcon(item.icon, 14));
    span.appendChild(document.createTextNode(item.label));
    metaRow.appendChild(span);
  }

  intro.appendChild(metaRow);

  const tryLabel = document.createElement('p');
  tryLabel.className = 'cb-try-label';
  tryLabel.appendChild(document.createTextNode('Try asking'));
  intro.appendChild(tryLabel);

  return intro;
}

/**
 * Safely parses `**bold**` spans into a parent DOM node without ever invoking innerHTML.
 */
function appendInlineFormattedText(parent, lineText) {
  const boldPattern = /\*\*([^*\n]+)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = boldPattern.exec(lineText)) !== null) {
    if (match.index > lastIndex) {
      parent.appendChild(document.createTextNode(lineText.slice(lastIndex, match.index)));
    }
    const strong = document.createElement('strong');
    strong.appendChild(document.createTextNode(match[1]));
    parent.appendChild(strong);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < lineText.length) {
    parent.appendChild(document.createTextNode(lineText.slice(lastIndex)));
  }
}

/**
 * Renders model/assistant output using strict DOM nodes:
 * escapes HTML implicitly via createTextNode and supports line breaks, **bold**, and "- " lists.
 */
function renderSafeMessageContent(container, rawText) {
  const normalized = String(rawText || '').replace(/\r\n?/g, '\n');
  const lines = normalized.split('\n');

  let listEl = null;
  let paraEl = null;

  const flushParagraph = () => {
    paraEl = null;
  };

  const flushList = () => {
    listEl = null;
  };

  for (const line of lines) {
    const bulletMatch = /^\s*-\s+(.+)$/.exec(line);

    if (bulletMatch) {
      flushParagraph();
      if (!listEl) {
        listEl = document.createElement('ul');
        listEl.className = 'cb-list';
        container.appendChild(listEl);
      }
      const li = document.createElement('li');
      appendInlineFormattedText(li, bulletMatch[1]);
      listEl.appendChild(li);
      continue;
    }

    if (!line.trim()) {
      flushList();
      flushParagraph();
      continue;
    }

    flushList();
    if (!paraEl) {
      paraEl = document.createElement('p');
      paraEl.className = 'cb-para';
      container.appendChild(paraEl);
    } else {
      paraEl.appendChild(document.createElement('br'));
    }

    appendInlineFormattedText(paraEl, line);
  }
}

function createAssistantBadgeIcon() {
  const badge = document.createElement('span');
  badge.className = 'cb-avatar';
  badge.setAttribute('aria-hidden', 'true');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '14');
  svg.setAttribute('height', '14');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14');
  svg.appendChild(path);
  badge.appendChild(svg);

  return badge;
}

function loadStoredMessages() {
  try {
    const raw = window.sessionStorage.getItem(CHAT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (m) =>
          m &&
          (m.role === 'user' || m.role === 'model') &&
          typeof m.text === 'string' &&
          m.text.trim().length > 0
      )
      .slice(-MAX_STORED_MESSAGES);
  } catch {
    return [];
  }
}

function saveStoredMessages(messages) {
  try {
    const trimmed = messages.slice(-MAX_STORED_MESSAGES);
    if (trimmed.length === 0) {
      window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
    } else {
      window.sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(trimmed));
    }
  } catch {
    // Ignore storage access errors in restricted browsing contexts
  }
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function formatRateLimitMessage(seconds) {
  const safeSeconds = Math.max(1, Math.ceil(Number(seconds) || 1));
  return `I've reached my usage limit for the moment. Please try again in about ${safeSeconds} seconds, or reach Akhilesh through the Contact section.`;
}

export function initChatbot() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (window.__cbChatbotInitialized) {
    return;
  }

  const root = document.getElementById('cb-chatbot');
  const panel = document.getElementById('cb-panel');
  const backdrop = root?.querySelector('[data-cb-backdrop]');
  const messagesEl = document.getElementById('cb-messages');
  const form = document.getElementById('cb-form');
  const input = document.getElementById('cb-input');
  const sendBtn = document.getElementById('cb-send');
  const clearBtn = document.getElementById('cb-clear');
  const closeBtn = document.getElementById('cb-close');
  const counterEl = document.getElementById('cb-counter');
  const subtitleEl = panel?.querySelector('.cb-subtitle');

  if (!root || !panel || !messagesEl || !form || !input || !sendBtn || !clearBtn || !closeBtn || !counterEl) {
    return;
  }

  window.__cbChatbotInitialized = true;

  // Preserve original send button icon nodes for clean restoration after rate-limit countdown
  const sendButtonIconClone = Array.from(sendBtn.childNodes).map((node) => node.cloneNode(true));

  let isOpen = false;
  let isPending = false;
  let hideTimerId = null;
  let autoRetryTimerId = null;
  let cooldownTimerId = null;
  let placeholderTimerId = null;
  let placeholderIndex = 0;
  let cooldownRemaining = 0;
  let hasAutoRetriedTurn = false;
  let focusRestoreEl = null;
  let lastErrorState = null; // { kind: '429' | '503' | 'generic', message: string, retryable: boolean }
  let activeAbortController = null;
  let activeAbortReason = null;
  let savedOverflow = null;
  let history = loadStoredMessages();

  const isMobileViewport = () => window.innerWidth <= MOBILE_BREAKPOINT_PX;

  const clearAutoRetryTimer = () => {
    if (autoRetryTimerId !== null) {
      window.clearTimeout(autoRetryTimerId);
      autoRetryTimerId = null;
    }
  };

  const restoreSendButtonAppearance = () => {
    sendBtn.replaceChildren(...sendButtonIconClone.map((node) => node.cloneNode(true)));
    sendBtn.setAttribute('aria-label', 'Send message');
    delete sendBtn.dataset.cooldown;
  };

  const clearCooldownTimer = () => {
    if (cooldownTimerId !== null) {
      window.clearInterval(cooldownTimerId);
      cooldownTimerId = null;
    }
    cooldownRemaining = 0;
    restoreSendButtonAppearance();
  };

  const lockBodyScroll = () => {
    if (!isMobileViewport() || savedOverflow !== null) return;
    savedOverflow = {
      body: document.body.style.overflow,
      html: document.documentElement.style.overflow
    };
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  const unlockBodyScroll = () => {
    if (savedOverflow === null) return;
    document.body.style.overflow = savedOverflow.body;
    document.documentElement.style.overflow = savedOverflow.html;
    savedOverflow = null;
  };

  const syncScrollLockOnResize = () => {
    if (!isOpen) return;
    if (isMobileViewport()) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
  };

  const scrollToLatest = () => {
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth';
    if (typeof messagesEl.scrollTo === 'function') {
      messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior });
    } else {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  };

  const resizeInput = () => {
    input.style.height = 'auto';
    const nextHeight = Math.min(input.scrollHeight, 108);
    input.style.height = `${nextHeight}px`;
    input.style.overflowY = input.scrollHeight > 108 ? 'auto' : 'hidden';
  };

  const stopPlaceholderRotation = () => {
    if (placeholderTimerId !== null) {
      window.clearInterval(placeholderTimerId);
      placeholderTimerId = null;
    }
    placeholderIndex = 0;
    input.placeholder = DEFAULT_PLACEHOLDER;
  };

  const syncPlaceholderRotation = () => {
    const isFocused = document.activeElement === input;
    const hasText = input.value.length > 0;

    if (prefersReducedMotion() || !isOpen || isFocused || hasText) {
      stopPlaceholderRotation();
      return;
    }

    if (placeholderTimerId !== null) {
      return;
    }

    placeholderTimerId = window.setInterval(() => {
      if (prefersReducedMotion() || !isOpen || document.activeElement === input || input.value.length > 0) {
        stopPlaceholderRotation();
        return;
      }
      input.placeholder = ROTATING_PLACEHOLDERS[placeholderIndex % ROTATING_PLACEHOLDERS.length];
      placeholderIndex = (placeholderIndex + 1) % ROTATING_PLACEHOLDERS.length;
    }, PLACEHOLDER_ROTATION_MS);
  };

  const updateControls = () => {
    const len = input.value.length;
    counterEl.textContent = `${len} / ${MAX_CHAR_LENGTH}`;
    counterEl.classList.toggle('cb-counter--warn', len >= 420 && len < MAX_CHAR_LENGTH);
    counterEl.classList.toggle('cb-counter--limit', len >= MAX_CHAR_LENGTH);

    input.disabled = isPending;

    if (cooldownRemaining > 0) {
      sendBtn.disabled = true;
      sendBtn.dataset.cooldown = String(cooldownRemaining);
      sendBtn.setAttribute('aria-label', `Wait ${cooldownRemaining} seconds to send`);
      sendBtn.textContent = `${cooldownRemaining}s`;
    } else {
      restoreSendButtonAppearance();
      sendBtn.disabled = isPending || input.value.trim().length === 0;
    }

    form.classList.toggle('cb-is-loading', isPending);
    if (subtitleEl) {
      subtitleEl.textContent = isPending ? 'Generating reply...' : 'Powered by Gemini';
    }
  };

  const appendMessageBubble = (role, text) => {
    const row = document.createElement('div');
    row.className = `cb-msg cb-msg--${role === 'user' ? 'user' : 'assistant'}`;

    if (role !== 'user') {
      row.appendChild(createAssistantBadgeIcon());
    }

    const bubble = document.createElement('div');
    bubble.className = 'cb-bubble';
    if (role === 'user') {
      const p = document.createElement('p');
      p.className = 'cb-para';
      p.appendChild(document.createTextNode(text));
      bubble.appendChild(p);
    } else {
      renderSafeMessageContent(bubble, text);
    }

    row.appendChild(bubble);
    messagesEl.appendChild(row);
  };

  const appendTypingIndicator = () => {
    const row = document.createElement('div');
    row.className = 'cb-msg cb-msg--assistant';
    row.setAttribute('aria-label', 'Assistant is typing');

    row.appendChild(createAssistantBadgeIcon());

    const bubble = document.createElement('div');
    bubble.className = 'cb-bubble';
    const dots = document.createElement('div');
    dots.className = 'cb-typing-dots';

    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement('span');
      dot.className = 'cb-dot';
      dots.appendChild(dot);
    }

    bubble.appendChild(dots);
    row.appendChild(bubble);
    messagesEl.appendChild(row);
  };

  const appendErrorBanner = (errorState) => {
    const card = document.createElement('div');
    card.className = 'cb-error-card';
    card.setAttribute('role', 'alert');

    const msg = document.createElement('span');
    msg.appendChild(document.createTextNode(errorState.message));
    card.appendChild(msg);

    if (errorState.retryable) {
      const retryBtn = document.createElement('button');
      retryBtn.type = 'button';
      retryBtn.className = 'cb-retry-btn';
      retryBtn.appendChild(document.createTextNode('Retry'));
      retryBtn.addEventListener('click', () => {
        clearAutoRetryTimer();
        void retryLastRequest();
      });
      card.appendChild(retryBtn);
    }

    messagesEl.appendChild(card);
  };

  const renderMessages = () => {
    messagesEl.replaceChildren();

    if (history.length === 0 && !isPending && !lastErrorState) {
      messagesEl.appendChild(createIntroBlock());

      const chipsWrap = document.createElement('div');
      chipsWrap.className = 'cb-chips';

      for (const item of SUGGESTED_QUESTIONS) {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'cb-chip';
        chip.appendChild(getNamedIcon(item.icon, 14));
        const label = document.createElement('span');
        label.appendChild(document.createTextNode(item.text));
        chip.appendChild(label);
        chip.addEventListener('click', () => {
          if (isPending || cooldownRemaining > 0) return;
          void submitUserMessage(item.text);
        });
        chipsWrap.appendChild(chip);
      }

      messagesEl.appendChild(chipsWrap);
    } else {
      for (const entry of history) {
        appendMessageBubble(entry.role, entry.text);
      }
    }

    if (isPending) {
      appendTypingIndicator();
    } else if (lastErrorState) {
      appendErrorBanner(lastErrorState);
    }

    scrollToLatest();
  };

  const focusInputSafely = () => {
    window.requestAnimationFrame(() => {
      if (!isOpen) return;
      if (!input.disabled) {
        input.focus();
      } else {
        closeBtn.focus();
      }
    });
  };

  const startRateLimitCountdown = (retryAfterSec) => {
    clearAutoRetryTimer();
    clearCooldownTimer();

    const parsed = Number.parseInt(retryAfterSec, 10);
    cooldownRemaining = Number.isFinite(parsed) && parsed > 0 ? Math.min(parsed, 120) : 25;

    lastErrorState = {
      kind: '429',
      message: formatRateLimitMessage(cooldownRemaining),
      retryable: false
    };
    updateControls();
    renderMessages();

    cooldownTimerId = window.setInterval(() => {
      cooldownRemaining -= 1;
      if (cooldownRemaining <= 0) {
        clearCooldownTimer();
        if (lastErrorState?.kind === '429') {
          lastErrorState = null;
        }
        updateControls();
        renderMessages();
        return;
      }

      if (lastErrorState?.kind === '429') {
        lastErrorState.message = formatRateLimitMessage(cooldownRemaining);
        const alertMsg = messagesEl.querySelector('.cb-error-card span');
        if (alertMsg) {
          alertMsg.textContent = lastErrorState.message;
        }
      }
      updateControls();
    }, 1000);
  };

  const restoreFailedMessageToInput = () => {
    if (history.length > 0 && history[history.length - 1].role === 'user') {
      const lastUserTurn = history[history.length - 1];
      if (!input.value.trim()) {
        input.value = lastUserTurn.text;
        resizeInput();
      }
    }
  };

  const sendConversationToApi = async ({ isAutoRetry = false } = {}) => {
    clearAutoRetryTimer();

    if (activeAbortController) {
      activeAbortReason = 'superseded';
      activeAbortController.abort();
    }
    const controller = new AbortController();
    activeAbortController = controller;
    activeAbortReason = null;

    const clientTimeoutId = window.setTimeout(() => {
      activeAbortReason = 'timeout';
      controller.abort();
    }, CLIENT_REQUEST_TIMEOUT_MS);

    isPending = true;
    lastErrorState = null;
    updateControls();
    renderMessages();

    try {
      const recentMessages = history.slice(-MAX_API_MESSAGES).map((m) => ({
        role: m.role === 'user' ? 'user' : 'model',
        text: m.text
      }));

      const response = await window.fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: recentMessages }),
        signal: controller.signal
      });

      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        if (response.status === 429) {
          // Restore user's message into input so they never lose it during cooldown
          if (history.length > 0 && history[history.length - 1].role === 'user') {
            const failedTurn = history[history.length - 1];
            history = history.slice(0, -1);
            saveStoredMessages(history);
            if (!input.value.trim()) {
              input.value = failedTurn.text;
              resizeInput();
            }
          }
          isPending = false;
          startRateLimitCountdown(data?.retryAfter);
          return;
        }

        if (response.status === 503) {
          restoreFailedMessageToInput();
          lastErrorState = {
            kind: '503',
            message: 'The assistant is busy right now.',
            retryable: true
          };

          if (!isAutoRetry && !hasAutoRetriedTurn) {
            hasAutoRetriedTurn = true;
            autoRetryTimerId = window.setTimeout(() => {
              autoRetryTimerId = null;
              if (
                !isPending &&
                cooldownRemaining <= 0 &&
                lastErrorState?.kind === '503' &&
                history.length > 0 &&
                history[history.length - 1].role === 'user'
              ) {
                void sendConversationToApi({ isAutoRetry: true });
              }
            }, AUTO_RETRY_DELAY_MS);
          }
          return;
        }

        restoreFailedMessageToInput();
        if (response.status === 400) {
          lastErrorState = {
            kind: 'generic',
            message: 'Please check your message and try again.',
            retryable: true
          };
          return;
        }

        lastErrorState = {
          kind: 'generic',
          message: 'The assistant is busy right now.',
          retryable: true
        };
        return;
      }

      const replyText = typeof data?.reply === 'string' ? data.reply.trim() : '';
      if (!replyText) {
        restoreFailedMessageToInput();
        lastErrorState = {
          kind: 'generic',
          message: 'The assistant is busy right now.',
          retryable: true
        };
        return;
      }

      // Clear restored draft copy if reply succeeded after a prior error
      if (history.length > 0 && history[history.length - 1].role === 'user' && input.value.trim() === history[history.length - 1].text) {
        input.value = '';
        resizeInput();
      }

      hasAutoRetriedTurn = false;
      history = [...history, { role: 'model', text: replyText }].slice(-MAX_STORED_MESSAGES);
      saveStoredMessages(history);
    } catch (err) {
      if (err?.name === 'AbortError' && activeAbortReason !== 'timeout') {
        return;
      }
      restoreFailedMessageToInput();
      lastErrorState = {
        kind: 'generic',
        message: 'The assistant is busy right now.',
        retryable: true
      };
    } finally {
      window.clearTimeout(clientTimeoutId);
      if (activeAbortController === controller) {
        activeAbortController = null;
        activeAbortReason = null;
        isPending = false;
        updateControls();
        renderMessages();
        if (isOpen) {
          input.focus();
        }
      }
    }
  };

  const submitUserMessage = async (rawText) => {
    if (isPending || cooldownRemaining > 0) return;

    const trimmed = String(rawText || '').trim();
    if (!trimmed) return;

    isPending = true;
    hasAutoRetriedTurn = false;
    clearAutoRetryTimer();
    const bounded = trimmed.slice(0, MAX_CHAR_LENGTH);

    if (lastErrorState && history.length > 0 && history[history.length - 1].role === 'user') {
      history = [...history.slice(0, -1), { role: 'user', text: bounded }].slice(-MAX_STORED_MESSAGES);
    } else {
      history = [...history, { role: 'user', text: bounded }].slice(-MAX_STORED_MESSAGES);
    }

    saveStoredMessages(history);
    input.value = '';
    resizeInput();
    syncPlaceholderRotation();

    await sendConversationToApi();
  };

  const retryLastRequest = async () => {
    if (isPending || cooldownRemaining > 0 || history.length === 0) return;
    isPending = true;
    clearAutoRetryTimer();
    await sendConversationToApi();
  };

  const clearConversation = () => {
    clearAutoRetryTimer();
    clearCooldownTimer();
    hasAutoRetriedTurn = false;
    if (activeAbortController) {
      activeAbortReason = 'clear';
      activeAbortController.abort();
      activeAbortController = null;
    }
    isPending = false;
    lastErrorState = null;
    history = [];
    saveStoredMessages([]);
    renderMessages();
    updateControls();
    if (isOpen) {
      input.focus();
    }
  };

  const getFocusableElements = () =>
    Array.from(
      panel.querySelectorAll(
        'button:not([disabled]), textarea:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => el.offsetParent !== null);

  const handleDocumentKeydown = (event) => {
    if (!isOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeAIChat();
      return;
    }

    if (event.key === 'Tab') {
      const focusables = getFocusableElements();
      if (focusables.length === 0) {
        event.preventDefault();
        panel.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (!panel.contains(active)) {
        event.preventDefault();
        first.focus();
        return;
      }

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  const openAIChat = () => {
    if (hideTimerId !== null) {
      window.clearTimeout(hideTimerId);
      hideTimerId = null;
    }

    if (isOpen) {
      focusInputSafely();
      return;
    }

    focusRestoreEl = document.querySelector('[data-ai-open]') || document.activeElement;
    isOpen = true;
    root.hidden = false;
    lockBodyScroll();
    renderMessages();
    updateControls();

    if (prefersReducedMotion()) {
      root.classList.add('cb-open');
    } else {
      void panel.offsetWidth;
      root.classList.add('cb-open');
    }
    syncPlaceholderRotation();
    focusInputSafely();
  };

  const closeAIChat = () => {
    if (!isOpen) return;

    isOpen = false;
    stopPlaceholderRotation();
    root.classList.remove('cb-open');
    unlockBodyScroll();

    const finishHide = () => {
      if (!isOpen) {
        root.hidden = true;
      }
    };

    if (prefersReducedMotion()) {
      finishHide();
    } else {
      hideTimerId = window.setTimeout(() => {
        hideTimerId = null;
        finishHide();
      }, 240);
    }

    const aiTrigger = document.querySelector('[data-ai-open]');
    const targetToFocus = aiTrigger || focusRestoreEl;
    if (targetToFocus && typeof targetToFocus.focus === 'function' && targetToFocus.isConnected) {
      targetToFocus.focus();
    }
    focusRestoreEl = null;
  };

  // Initial render + listeners
  renderMessages();
  updateControls();

  input.addEventListener('input', () => {
    resizeInput();
    updateControls();
    syncPlaceholderRotation();
  });

  input.addEventListener('focus', syncPlaceholderRotation);
  input.addEventListener('blur', syncPlaceholderRotation);

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      if (!isPending && cooldownRemaining <= 0 && input.value.trim().length > 0) {
        void submitUserMessage(input.value);
      }
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    void submitUserMessage(input.value);
  });

  clearBtn.addEventListener('click', clearConversation);
  closeBtn.addEventListener('click', closeAIChat);
  backdrop?.addEventListener('click', closeAIChat);
  document.addEventListener('keydown', handleDocumentKeydown);
  window.addEventListener('resize', syncScrollLockOnResize, { passive: true });

  // Connect floating button (`data-ai-open`), custom `ai:open` event, and global helpers
  window.addEventListener('ai:open', openAIChat);
  document.addEventListener('click', (event) => {
    const trigger = event.target instanceof Element ? event.target.closest('[data-ai-open]') : null;
    if (trigger) {
      openAIChat();
    }
  });

  window.openAIChat = openAIChat;
  window.closeAIChat = closeAIChat;
}
