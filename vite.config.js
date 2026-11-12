import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import chatHandler from './api/chat.js';

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
    plugins: [react(), localApiChatPlugin({ mode, proxyTarget })],
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
