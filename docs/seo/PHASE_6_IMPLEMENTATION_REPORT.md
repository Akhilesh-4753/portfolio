# Phase 6 – Implementation Report
## Content SEO & Keyword Strategy — `https://akhileshp.com`

**Date:** 2026-11-12  
**Project:** Akhilesh P. Personal Portfolio (`React 19 + Vite 8 + React Router 7 + Build-time Prerendering`)  
**Phase:** Phase 6 – Content SEO & Keyword Strategy  

---

## 1. Executive Summary

Phase 6 audited the homepage and all 12 project case studies of `https://akhileshp.com`, researched realistic hiring and project-level search intent grounded in Akhilesh P.'s verified engineering and accounting background, produced comprehensive keyword mapping and content strategy documentation, and implemented high-value content quality, metadata, and internal linking enhancements across the codebase—while preserving the visual design, layout, animations, React 19 hydration, Vite 8 prerendering, GA4 (`G-8CRCHQSJM4`), and the AI chatbot (`/api/chat`).

All local build (`npm run build`), lint (`npm run lint`), prerendered HTML output checks (13 canonical pages + `404.html`), sitemap checks (13 URLs), internal link integrity checks, and local headless Chromium hydration/navigation tests passed with zero errors after final edits. **Note:** Changes completed locally in this phase are ready for deployment to Vercel; no unverified Phase 6 live production claims are made.

---

## 2. Files Inspected (Stage A)

- Core app & build pipeline: `package.json`, `index.html`, `vite.config.js`, `vercel.json`, `src/App.jsx`, `src/main.jsx`, `src/entry-server.jsx`, `src/routes/AppRoutes.jsx`, `scripts/prerender.mjs`, `public/robots.txt`, `public/sitemap.xml`
- Data sources of truth: `src/data/seo.js`, `src/data/personal.js`, `src/data/experience.js`, `src/data/skills.js`, `src/data/services.js`, `src/data/projects.js`, `src/data/socialLinks.js`
- UI components & sections: `src/components/seo/SeoHead.jsx`, `src/components/common/Button.jsx`, `src/components/common/Footer.jsx`, `src/components/common/SectionTitle.jsx`, `src/components/navigation/Navbar.jsx`, `src/pages/HomePage.jsx`, `src/pages/ProjectDetailsPage.jsx`, `src/components/project/ProjectCard.jsx`, `src/components/project/ProjectPreview.jsx`, `src/components/project/ProjectGallery.jsx`, `src/sections/Home/Hero.jsx`, `src/sections/About/About.jsx`, `src/sections/About/CareerJourneyTimeline.jsx`, `src/sections/About/AboutAccordion.jsx`, `src/sections/Experience/Experience.jsx`, `src/sections/Experience/ExperienceTimeline.jsx`, `src/sections/Experience/FreelanceShowcase.jsx`, `src/sections/Experience/BeyondDevelopment.jsx`, `src/sections/Skills/Skills.jsx`, `src/sections/CurrentWork/CurrentWork.jsx`, `src/sections/Projects/Projects.jsx`, `src/sections/Services/Services.jsx`, `src/sections/Services/Services.css`, `src/sections/Contact/Contact.jsx`

---

## 3. Files Modified & Created

### Source Files Modified
1. `src/data/personal.js`
2. `src/data/experience.js`
3. `src/data/services.js`
4. `src/data/projects.js`
5. `src/data/seo.js`
6. `src/sections/About/About.jsx`
7. `src/sections/Experience/FreelanceShowcase.jsx`
8. `src/sections/CurrentWork/CurrentWork.jsx`
9. `src/sections/Skills/Skills.jsx`
10. `src/sections/Services/Services.jsx`
11. `src/sections/Services/Services.css`
12. `src/components/project/ProjectCard.jsx`
13. `src/pages/ProjectDetailsPage.jsx`
14. `src/components/common/Footer.jsx`

### Documentation Files Created
1. `docs/seo/PHASE_6_KEYWORD_MAPPING.md`
2. `docs/seo/PHASE_6_CONTENT_STRATEGY.md`
3. `docs/seo/PHASE_6_IMPLEMENTATION_REPORT.md`

---

## 4. Changes Implemented (With Before/After Examples)

### A. Project Content Enrichment (All Facts Verified in Repo Data)
- **File:** `src/data/projects.js`
- Enriched case study `overview`, `purpose`, `myRole`, `keyFeatures`, and `developmentApproach` across `taskflow`, `inkspace`, `pos-business-management`, `apnavilla`, `code7-erp`, `kidonex-feedback`, `movie`, `ecommerce`, `streamline`, `aishka`, and `urban-escape` using documented details from `src/data/experience.js` and `src/data/personal.js`.
- **Example (`pos-business-management` key features):**
  - *Before:* `"12 planned functional modules spanning Sales & Billing, Inventory, Purchases, Payments, Tax, and Reporting"`
  - *After:* `"12 planned functional modules across Core POS (Dashboard, Sales & Billing, Returns & Refunds, Customer Management), Procurement & Stock (Products & Categories, Inventory & Stock, Purchases & Suppliers), and Finance & Governance (Payments & Expenses, Tax & Transactions, Reports & Analytics, User & Role Management, System Settings)"`
- **Example (`code7-erp` overview):**
  - *Before:* `"Code7 ERP is a comprehensive business software suite created to manage enterprise operations with high data density, real-time validations, and reliable transactional integrity."`
  - *After:* `"Code7 ERP is an enterprise resource planning web application developed at Ebsor Infosystem Pvt. Ltd. (Malappuram, Kerala) using ASP.NET Core MVC, .NET, SQL, REST APIs, and Kendo UI. It supports structured Master, Transaction, and Report modules across data-heavy enterprise workflows."`
- **Example (`Footer.jsx` bio alignment):**
  - *Before:* `"Building digital experiences with code. Focused on scalable React frontend solutions and robust ASP.NET Core backend integrations."`
  - *After:* `"Full-stack web developer focused on React.js, Python Django, ASP.NET Core ERP systems, and practical AI integrations."`

### B. SEO Metadata Refinements
- **File:** `src/data/seo.js`
- Shortened overly long titles (`>= 64` chars) to avoid SERP truncation while tightening keyword clarity (`inkspace`, `daybook`, `apnavilla`, `code7-erp`, `kidonex-feedback`, `ecommerce`, `streamline`, `aishka`, `urban-escape`).
- **Examples:**
  - `/projects/inkspace`: `'INKSPACE — Django Blogging Platform with Gemini AI | Akhilesh P.'` -> `'INKSPACE — Django Blog & Gemini AI Platform | Akhilesh P.'` (61 chars)
  - `/projects/daybook`: `'Daybook — React Native Daily Planning & Reflection App | Akhilesh P.'` -> `'Daybook — React Native Daily Planning App | Akhilesh P.'` (55 chars)
  - `/projects/kidonex-feedback`: `'Kidonex Customer Feedback & Review — ASP.NET Core MVC | Akhilesh P.'` -> `'Kidonex Feedback & Review — ASP.NET Core MVC | Akhilesh P.'` (62 chars)
  - `/projects/streamline`: `'Streamline Consortium Website — React.js Corporate Site | Akhilesh P.'` -> `'Streamline Consortium — React Corporate Site | Akhilesh P.'` (58 chars)
  - `/projects/urban-escape`: `'Urban Escape Travel Website — Responsive Frontend | Akhilesh P.'` -> `'Urban Escape — Responsive Travel Showcase | Akhilesh P.'` (55 chars)
- Preserved all canonical URLs, Open Graph metadata, Twitter cards, `HOME_SEO`, `NOT_FOUND_SEO`, `PROJECT_NOT_FOUND_SEO`, and Schema.org JSON-LD classification rules.

### C. Descriptive Anchors & Strategic Internal Linking
- **Project Cards (`src/components/project/ProjectCard.jsx`, `src/data/projects.js`):** Replaced 12 identical `"Explore Project Details"` labels with unique `ctaLabel` text per project (e.g., `"TaskFlow Case Study"`, `"POS Architecture Study"`, `"Code7 ERP Case Study"`).
- **About -> Experience & Contact (`src/sections/About/About.jsx`):** Added contextual navigation links `"Explore detailed work experience"` (`/#experience`) and `"Discuss a role or project"` (`/#contact`) below `AboutAccordion`.
- **Experience / Freelance -> ApnaVilla (`src/sections/Experience/FreelanceShowcase.jsx`):** Added `"Read the ApnaVilla project case study"` linking to `/projects/apnavilla`.
- **Current Work -> POS (`src/sections/CurrentWork/CurrentWork.jsx`):** Added `"Explore POS Business Management Architecture"` linking to `/projects/pos-business-management`.
- **Skills -> Applied Case Studies (`src/sections/Skills/Skills.jsx`):** Added `"Applied in projects:"` badge links connecting core stacks directly to `/projects/taskflow`, `/projects/inkspace`, `/projects/code7-erp`, `/projects/ecommerce`, and `/projects/daybook`.
- **Services -> Relevant Projects (`src/data/services.js`, `src/sections/Services/Services.jsx`, `src/sections/Services/Services.css`):** Added `.sig-project-link` inside each of the 6 capability panels pointing to 6 distinct project case studies (`/projects/taskflow`, `/projects/kidonex-feedback`, `/projects/code7-erp`, `/projects/inkspace`, `/projects/apnavilla`, `/projects/streamline`).
- **Project Pages -> Related Projects & Contact (`src/pages/ProjectDetailsPage.jsx`):** Added 3 curated `relatedSlugs` cards per project under `"Related Projects & Case Studies"`, renamed standard heading to `"Purpose & Problem Addressed"`, and added `"Discuss a Similar Project"` (`/#contact`) beside `"Back to Projects Portfolio"`.

### D. Copy Accuracy Hygiene
- **File:** `src/data/personal.js` — Removed duplicate `"Excel"` badge in Stage 01 (`"Microsoft Excel"` already present) and duplicate `"SQL"` badge in Stage 03.
- **File:** `src/data/experience.js` — Fixed incomplete phrasing `"Developed Kidonex Customer Feedback & Review"` -> `"Developed the Kidonex Customer Feedback & Review module."`.

---

## 5. Build, Lint, Prerender & Functional Validation Results

### Build & Lint (`package.json` Scripts)
- **`npm run lint` (`oxlint`):** **Passed** (`0` errors, `1.3s` across `69` files). Retained **2 pre-existing Fast Refresh warnings** unrelated to Phase 6 edits:
  - `src/context/ThemeContext.jsx:19:14` (`useTheme` hook export)
  - `src/components/navigation/NavLinks.jsx:4:14` (`NAV_ITEMS` constant export)
- **`npm run build` (`vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node scripts/prerender.mjs`):** **Passed cleanly** (`dist/index.html`, all 12 `dist/projects/*.html`, `dist/404.html`, and `dist/sitemap.xml` generated). Pre-existing Vite informational chunk-size / dynamic-import notes (`index` client chunk `505.87 kB`, SSR note for `ProjectDetailsPage.jsx`/`NotFound.jsx`) remain unchanged by Phase 6.

### Prerendered HTML, Metadata, Sitemap & Internal Link Validation (Automated Post-Build Audit)
- **Pages Verified (`14/14`):** `/` + all 12 `/projects/:slug` files + `/404` HTML file present on disk (`40.5 kB`–`355.4 kB`).
- **Unique Titles (`13/13` indexable pages):** `53`–`64` characters, `0` duplicates.
- **Unique Descriptions (`13/13` indexable pages):** `141`–`178` characters, `0` duplicates.
- **Canonicals & Robots Directives:** All `13` indexable HTML files include exact `https://akhileshp.com/...` canonical `<link>` and zero `noindex` directives; `dist/404.html` includes `noindex, nofollow` and omits canonical.
- **Headings:** Exactly `1` `<h1>` rendered in raw prerendered HTML across all `14` pages.
- **Structured Data (`JSON-LD`):** Valid parseable JSON-LD on all `13` indexable pages (`['Person', 'WebSite', 'ProfilePage']` on `/`; `['Person', 'WebSite', 'BreadcrumbList', 'WebPage', 'SoftwareApplication' | 'CreativeWork']` on all 12 project pages); absent on `/404`.
- **Internal Linking:**
  - Homepage links cleanly to all `12/12` valid `/projects/:slug` routes (`0` broken links).
  - Every project page renders `3` valid related-project links directly in prerendered HTML (`0` broken links).
- **Sitemap (`dist/sitemap.xml` & `public/sitemap.xml`):** Exactly `13` unique `https://akhileshp.com/...` URLs (`/` + 12 projects).

### Local Headless Chromium Runtime Validation (`vite` production `dist/` served on `127.0.0.1:4179`)
- **`/` initial hydration:** Rendered `<h1>Full-Stack Developer Building ERP, Web & AI Solutions.</h1>`, `5` skill-to-project links in `#skills`, Service tab `03` interaction switched cleanly exposing `/projects/code7-erp`, and chatbot assets remained wired (`chatbotTriggerExists: true`).
- **Client-side routing (`React Router 7`):**
  - Clicked `/projects/taskflow` card -> navigated cleanly, updated `<title>` to `TaskFlow — Django & AI Task Management App | Akhilesh P.`, rendered `3` Related Projects cards.
  - Clicked Related Project `/projects/inkspace` -> navigated cleanly, updated `<title>` to `INKSPACE — Django Blog & Gemini AI Platform | Akhilesh P.`.
- **Direct prerendered deep load & 404 fallback:**
  - Direct load of `/projects/pos-business-management` hydrated cleanly with `<h1>POS Business Management Software</h1>` and `3` related project links.
  - Direct load of `/nonexistent-test-page` rendered `Page Not Found | Akhilesh P.` with `<meta name="robots" content="noindex, nofollow">`.
- **Runtime console errors / uncaught exceptions:** `0` JS console errors, `0` hydration mismatches, `0` uncaught exceptions.
- **Production Note:** Live `https://akhileshp.com` has not yet been redeployed with Phase 6 commits; GA4 `G-8CRCHQSJM4` and `/api/chat` code paths were untouched.

---

## 6. Remaining Issues & Phase 7 Recommendations

### Remaining Content Gaps (Outside Code / Unverified Assets)
1. **Deploy Phase 6 Build to Vercel:** Push changes and verify the updated titles, enriched project copy, and internal links on live `https://akhileshp.com` (as well as verifying GA4 & `/api/chat` post-deploy).
2. **Collect Missing Project Screenshots (9 projects):** Add real screenshots or sanitized UI captures for `pos-business-management`, `apnavilla`, `code7-erp`, `kidonex-feedback`, `movie`, `ecommerce`, `streamline`, `aishka`, and `urban-escape` so those 9 detail pages and their Open Graph previews stop falling back to the author portrait image.
3. **Add Verified Repository / Live Demo Links:** Once verified repo or live links are confirmed under `https://github.com/Akhilesh-4753` or Render/Vercel, add `repoUrl` / `liveUrl` fields to `src/data/projects.js`.
4. **Pull Google Search Console & Keyword Planner Metrics (2–4 weeks post-index):** Replace qualitative SERP estimates in `docs/seo/PHASE_6_KEYWORD_MAPPING.md` with actual Search Console impression, click, CTR, and position data.

### Recommended Phase 7 Focus (Off-Page SEO & Authority Building — Not Started Here)
- Cross-link `https://akhileshp.com` and individual `/projects/:slug` case studies consistently from GitHub profile/repository READMEs and LinkedIn Featured items.
- Publish 2–3 high-signal technical articles from `docs/seo/PHASE_6_CONTENT_STRATEGY.md` (Section 5) on Dev.to/Hashnode with canonical references back to `TaskFlow`, `INKSPACE`, and `Code7 ERP`.
- Submit updated URLs / request re-indexing in Google Search Console and Bing Webmaster Tools immediately after deploying Phase 6.

