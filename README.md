# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

---

## Portfolio AI Assistant (Vercel + Gemini API)

The floating AI launcher opens a Gemini-powered chat modal backed by a Vercel serverless endpoint (`/api/chat.js`) so the API key never touches client-side code.

### 1. Files
- `api/chat.js`: Serverless `POST /api/chat` proxy with model fallback chain (`GEMINI_MODEL` -> `GEMINI_FALLBACK_MODELS`), retry/backoff rules for `429`/`503`, `thinkingLevel: "MINIMAL"` with `400` fallback retry, single-question 1-hour LRU cache (100 entries), last-6 history window, per-IP rate limits (`10/min`, `40/day`), `30s` per-attempt timeout (`40s` total cap), and safe `{ error, code, retryAfter }` responses.
- `api/_knowledge.js`: Portfolio knowledge base and strict third-person system prompt (review `TODO` comments inside to verify dates/details).
- `src/components/chatbot/chatbot.css`, `src/components/chatbot/chatbot.js`, `src/components/chatbot/chatbot.html`: Scoped (`.cb-*`) vanilla CSS/JS/HTML chat modal connected to `[data-ai-open]`, `window.openAIChat()`, `window.closeAIChat()`, and `"ai:open"`, with `429` live countdown cooldown and `503` 3-second auto-retry + manual Retry.
- `.env.example`: Environment template listing `GEMINI_API_KEY`, `GEMINI_MODEL`, `GEMINI_FALLBACK_MODELS`, and `GEMINI_TIMEOUT_MS`.

### Running the chatbot locally
You have four options to test the portfolio chatbot on `localhost`:

1. **`npm run dev` (Default Vite + shared `/api/chat` middleware)**
   Copy `.env.example` to `.env.local` (ignored by `.gitignore`) and set `GEMINI_API_KEY`, `GEMINI_MODEL`, and `GEMINI_FALLBACK_MODELS`, then run:
   ```bash
   npm run dev
   ```
2. **`npm run dev:ipv4` (Windows IPv4-first DNS fix)**
   If Node `fetch` hangs on IPv6 resolution on local networks, start Vite with IPv4-first DNS ordering:
   ```bash
   npm run dev:ipv4
   ```
3. **`vercel dev` (Full Vercel Serverless Runtime)**
   Install the Vercel CLI (`npm i -g vercel`) and run:
   ```bash
   vercel dev
   ```
4. **Proxy `/api` to your deployed Vercel site**
   Set `VITE_API_PROXY_TARGET=https://your-portfolio.vercel.app` inside `.env.local` and restart `npm run dev` to forward all `/api` requests to production instead of running the local handler.

### 3. Configuring Environment Variables in Vercel
1. Open your project in the **Vercel Dashboard**.
2. Go to **Settings -> Environment Variables**.
3. Add `GEMINI_API_KEY` (paste your Google AI Studio key; enable for Production / Preview / Development).
4. Optionally add `GEMINI_MODEL` (defaults to `gemini-3.5-flash-lite`) and `GEMINI_FALLBACK_MODELS` (defaults to `gemini-3.1-flash-lite,gemini-3.5-flash`).
5. Redeploy so the serverless function picks up the updated environment variables.

### 4. Monitoring Quota & Raising Limits in Google AI Studio
1. Sign in to **Google AI Studio** (`https://aistudio.google.com`) and open the **Usage & Billing** / **Rate Limits** section from the left navigation.
2. Select your API key project to inspect **RPM** (requests per minute), **TPM** (tokens per minute), and **RPD** (requests per day) usage per Gemini model.
3. Free-tier quotas apply tight RPM/RPD caps and can trigger `429` (`RESOURCE_EXHAUSTED`) or temporary `503` load spikes. Linking a Google Cloud Billing account (**Enable Billing** in Usage & Billing) upgrades the project to Pay-as-you-go Tier 1 with substantially higher rate limits.

