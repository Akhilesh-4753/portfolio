import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import chatHandler from './api/chat.js';

function localApiChatPlugin() {
  return {
    name: 'local-api-chat',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '');
      if (env.GEMINI_API_KEY !== undefined) {
        process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;
      }
      if (env.GEMINI_MODEL !== undefined) {
        process.env.GEMINI_MODEL = env.GEMINI_MODEL;
      }
      if (env.GEMINI_FALLBACK_MODELS !== undefined) {
        process.env.GEMINI_FALLBACK_MODELS = env.GEMINI_FALLBACK_MODELS;
      }
      if (env.GEMINI_TIMEOUT_MS !== undefined) {
        process.env.GEMINI_TIMEOUT_MS = env.GEMINI_TIMEOUT_MS;
      }

      server.middlewares.use('/api/chat', async (req, res, next) => {
        if (req.url && req.url !== '/' && !req.url.startsWith('?')) {
          next();
          return;
        }
        try {
          await chatHandler(req, res);
        } catch {
          if (!res.writableEnded) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ error: 'Local API handler error. Please try again.' }));
          }
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiChatPlugin()]
});
