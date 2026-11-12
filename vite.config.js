import fs from 'node:fs';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import chatHandler from './api/chat.js';
import { projects } from './src/data/projects.js';

const SITE_ORIGIN = 'https://akhileshp.com';

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function buildSitemapXml() {
  const urls = new Set([`${SITE_ORIGIN}/`]);

  for (const project of projects) {
    const slug = typeof project?.slug === 'string' ? project.slug.trim() : '';
    if (!slug || /[?#\s]/.test(slug) || slug.startsWith('api/')) {
      continue;
    }
    urls.add(`${SITE_ORIGIN}/projects/${slug}`);
  }

  const urlNodes = Array.from(urls)
    .map((loc) => `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlNodes}\n</urlset>\n`;
}

function sitemapGeneratorPlugin() {
  return {
    name: 'portfolio-sitemap-generator',
    buildStart() {
      const publicDir = path.resolve(process.cwd(), 'public');
      const sitemapPath = path.join(publicDir, 'sitemap.xml');
      const nextContent = buildSitemapXml();
      const existingContent = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : null;

      if (existingContent !== nextContent) {
        fs.mkdirSync(publicDir, { recursive: true });
        fs.writeFileSync(sitemapPath, nextContent, 'utf8');
      }
    }
  };
}

function syncChatEnvVars(env) {
  const keys = ['GEMINI_API_KEY', 'GEMINI_MODEL', 'GEMINI_FALLBACK_MODELS', 'GEMINI_TIMEOUT_MS'];
  for (const key of keys) {
    if (env[key] !== undefined) {
      process.env[key] = env[key];
    }
  }
}

function localApiChatPlugin({ mode, proxyTarget }) {
  return {
    name: 'local-api-chat',
    configureServer(server) {
      const activeMode = mode || server.config.mode;
      const env = loadEnv(activeMode, process.cwd(), '');
      syncChatEnvVars(env);

      const keyStatus = env.GEMINI_API_KEY && env.GEMINI_API_KEY.trim() ? 'found' : 'missing';
      const logStartupMode = () => {
        if (proxyTarget) {
          console.info(`[api-dev] /api/chat mode: proxy (${proxyTarget}) | GEMINI_API_KEY: ${keyStatus}`);
        } else {
          console.info(`[api-dev] /api/chat mode: local handler | GEMINI_API_KEY: ${keyStatus}`);
        }
      };

      if (server.httpServer) {
        server.httpServer.once('listening', logStartupMode);
      } else {
        logStartupMode();
      }

      if (proxyTarget) {
        return;
      }

      server.middlewares.use('/api/chat', async (req, res, next) => {
        if (req.url && req.url !== '/' && !req.url.startsWith('?')) {
          next();
          return;
        }

        const latestEnv = loadEnv(activeMode, process.cwd(), '');
        syncChatEnvVars(latestEnv);

        try {
          await chatHandler(req, res);
        } catch {
          if (!res.writableEnded) {
            res.statusCode = 503;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(
              JSON.stringify({
                error: 'The assistant is busy right now.',
                code: 'SERVICE_UNAVAILABLE',
                retryAfter: 5
              })
            );
          }
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const proxyTarget = typeof env.VITE_API_PROXY_TARGET === 'string' ? env.VITE_API_PROXY_TARGET.trim() : '';

  return {
    plugins: [react(), sitemapGeneratorPlugin(), localApiChatPlugin({ mode, proxyTarget })],
    ...(proxyTarget
      ? {
          server: {
            proxy: {
              '/api': {
                target: proxyTarget,
                changeOrigin: true,
                secure: true
              }
            }
          }
        }
      : {})
  };
});
