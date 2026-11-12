# Akhilesh P. — Personal Developer Portfolio (`https://akhileshp.com`)

Personal developer portfolio website for **Akhilesh P.**, a Full-Stack Developer based in Malappuram, Kerala, India, showcasing full-stack web applications, enterprise `.NET` ERP experience, mobile productivity tools, and practical Gemini/Groq AI integrations.

- **Live Website:** [https://akhileshp.com](https://akhileshp.com)
- **GitHub:** [https://github.com/Akhilesh-4753](https://github.com/Akhilesh-4753)
- **LinkedIn:** [https://www.linkedin.com/in/akhilesh4753](https://www.linkedin.com/in/akhilesh4753)

---

## Tech Stack & Architecture

- **Frontend:** React 19, Vite 8, React Router 7, Framer Motion (`LazyMotion`), Lucide React, Plain CSS
- **SEO & Rendering:** Build-time static prerendering (`src/entry-server.jsx` + `scripts/prerender.mjs`) + React `hydrateRoot`, dynamic XML sitemap (`vite.config.js`), Schema.org JSON-LD (`src/data/seo.js`), genuine HTTP `404` handling on Vercel
- **Deployment & Serverless API:** Vercel Hosting (`vercel.json`) + Vercel Serverless Functions (`/api/chat.js`)
- **Analytics:** Google Analytics 4 (`G-8CRCHQSJM4`) with SPA route tracking

## Featured Case Studies

- **[TaskFlow](https://akhileshp.com/projects/taskflow)** — Python Django MVT task management platform with Neon PostgreSQL, reminders, analytics, and Gemini/Groq AI planning ([GitHub Repo](https://github.com/Akhilesh-4753/TaskFlow))
- **[INKSPACE](https://akhileshp.com/projects/inkspace)** — Python Django blogging platform with CKEditor rich-text editing and Google Gemini AI writing assistance ([GitHub Repo](https://github.com/Akhilesh-4753/INKSPACE))
- **[Daybook](https://akhileshp.com/projects/daybook)** — React Native mobile daily planning, habit tracking, and self-reflection app
- **[Code7 ERP](https://akhileshp.com/projects/code7-erp)** — Enterprise resource planning modules built with ASP.NET Core MVC, Kendo UI, SQL, and REST APIs
- **[POS Business Management Software](https://akhileshp.com/projects/pos-business-management)** — Collaborative 12-module POS functional architecture planned with ASP.NET Core / .NET and React.js
- **[ApnaVilla](https://akhileshp.com/projects/apnavilla)** — Collaborative real estate web application built with Next.js/React frontend and Laravel backend

## Local Development & Build

```bash
npm install
npm run dev      # Local development server
npm run lint     # Oxlint checks
npm run build    # Client + SSR build + prerendering for / and 12 project pages
```

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

