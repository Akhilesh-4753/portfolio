# Phase 7 – Off-Page Authority & Opportunity Research

**Website:** `https://akhileshp.com`  
**GitHub:** `https://github.com/Akhilesh-4753`  
**LinkedIn:** `https://www.linkedin.com/in/akhilesh4753`  
**Important:** All recommendations and drafts below await user approval. No external profiles have been edited, and no submissions or outreach have been sent.

---

## 1. Stage 7.3 – Detailed GitHub Profile & Repository Audit (`https://github.com/Akhilesh-4753`)

*Inspected directly via public GitHub API and raw profile/README HTTP checks on 2026-11-12.*

> **SEO Note:** GitHub outbound links are typically `nofollow`/`ugc` and do not pass direct PageRank in the way an editorial publication link does. However, optimizing GitHub strongly improves **developer credibility, branded entity consistency, direct recruiter referral traffic, discovery via GitHub search, and click-throughs to `https://akhileshp.com`**.

### 1.1 Profile-Level Findings & Recommended Fixes

| Profile Field | Current Verified State | Issue Identified | Recommended Update (For Approval) |
|---|---|---|---|
| **Display Name** | `Akhilesh` | Omits `"P."`, reducing exact-name consistency with `Akhilesh P.` on portfolio & LinkedIn. | Update display name to **`Akhilesh P.`**. |
| **Bio** | `null` (empty) | Missed 160-character recruiter & search summary. | **`Full-Stack Developer (React, Python/Django, ASP.NET Core) • ERP & AI Web Apps • Malappuram, Kerala`** |
| **Website (`blog`)** | `""` (empty) | Primary GitHub-to-portfolio link is completely missing! | Set to **`https://akhileshp.com`**. |
| **Location** | `null` | Missing geographic consistency with `Person` schema. | Set to **`Malappuram, Kerala, India`**. |
| **Company / Social Links** | `company: null`; LinkedIn/social slots unverified in profile UI | Add LinkedIn URL (`https://www.linkedin.com/in/akhilesh4753`) in GitHub Social Accounts fields. | Populate verified LinkedIn and portfolio links cleanly. |

### 1.2 Profile README Audit (`Akhilesh-4753/Akhilesh-4753/README.md`)

**Verified Issues in Current README:**
1. Uses placeholder wording: `<h3 align="left">👩‍💻 About Me</h3>` (mismatched emoji), `"I'm currently learning React and .NET"` (outdated — omits completed Ebsor `.NET` ERP role and Python/Django internship), `"In my free time I solve Puzzle"`.
2. Badges at the top (`LinkedIn`, `Twitter`, `Instagram`, `Gmail`, `Whatsapp`) are bare `<img>` shields without clickable links and omit `https://akhileshp.com`.
3. Skills icon row omits **Python**, **Django**, **ASP.NET Core**, **PostgreSQL**, **SQL**, **Tailwind CSS**, and **Gemini API**.

**Draft Profile README Update (Ready for User Approval — Do Not Publish Automatically):**
```markdown
<div align="center">
  <h1>Hi, I'm Akhilesh P. 👋</h1>
  <p><strong>Full-Stack Developer • React.js • Python Django • ASP.NET Core • ERP & AI Integrations</strong></p>
  <p>
    <a href="https://akhileshp.com">🌐 Portfolio (akhileshp.com)</a> ·
    <a href="https://www.linkedin.com/in/akhilesh4753">💼 LinkedIn</a> ·
    <a href="mailto:akhipn4753@gmail.com">✉️ Email</a>
  </p>
</div>

### About Me
Full-Stack Developer based in **Malappuram, Kerala, India**, transitioning from financial accounting (B.Com, myG India / SAP B1) into enterprise **.NET ERP development**, **Python Django** applications, **React.js** interfaces, and practical **Gemini / Groq AI** integrations.

- 🔭 **Portfolio & Case Studies:** [https://akhileshp.com](https://akhileshp.com)
- 💻 **Core Backend:** Python, Django, C#, ASP.NET Core MVC, REST APIs, PostgreSQL, SQL
- 🎨 **Core Frontend:** React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Tailwind CSS, Kendo UI
- 🤖 **AI Integrations:** Google Gemini API, Groq API, conversational portfolio & productivity assistants

### Featured Projects
- **[TaskFlow](https://github.com/Akhilesh-4753/TaskFlow)** — Full-stack Python Django task management app with Neon PostgreSQL, email reminders, analytics, and Gemini/Groq AI planning ([Case Study](https://akhileshp.com/projects/taskflow))
- **[INKSPACE](https://github.com/Akhilesh-4753/INKSPACE)** — Django MVT blogging platform with CKEditor rich-text editing & Google Gemini AI writing assist ([Case Study](https://akhileshp.com/projects/inkspace))
- **[Portfolio Website](https://github.com/Akhilesh-4753/portfolio)** — React 19 + Vite 8 prerendered SEO portfolio with JSON-LD & Gemini AI chatbot ([Live Site](https://akhileshp.com/))
```

### 1.3 Repository-by-Repository Audit (29 Public Repositories)

| Repository | Current Verified State | Issues Found | Recommended Action (Needs Approval) |
|---|---|---|---|
| **Pinned Set (6 slots)** | Currently pinned: `Movie-App`, `E-Commerce`, `FOODIE`, `Portfolio_old`, `Akhilesh-4753`, `Restaurant-clone`. | **Major credibility gap:** Strongest apps (`TaskFlow`, `INKSPACE`, `portfolio`) are NOT pinned, while outdated 2024 clones (`FOODIE`, `Restaurant-clone`) and `Portfolio_old` ARE pinned! | Unpin `Portfolio_old`, `FOODIE`, `Restaurant-clone`, `Akhilesh-4753`. **Pin:** `portfolio`, `TaskFlow`, `INKSPACE`, `Movie-Hub` (or strongest React repo), `HRM-LITE` / `FormPage` (C#), `Django-mvt-basics`. |
| **`portfolio`** | `description: null`; **`homepage: "https://portfolio-akhileshp.vercel.app"`** (`HTTP 302` SSO gate!); `README.md` is stock Vite/Oxlint template. | Visitors clicking repo link hit a Vercel login wall instead of `https://akhileshp.com`, and README doesn't describe your portfolio architecture! | Update GitHub repo **Website** to `https://akhileshp.com`, add clear description & topics (`react`, `vite`, `portfolio`, `seo`, `prerendering`, `gemini-api`), and replace boilerplate `README.md` with architecture summary + link to `https://akhileshp.com`. |
| **`TaskFlow`** | Great `7,489`-char README, **but** `description: null`, `homepage: null`, `topics: []`, zero mention of `akhileshp.com/projects/taskflow`. | Invisible to GitHub topic search and doesn't route readers back to your portfolio case study. | Add repo description + Render live URL (if active) or case study link (`https://akhileshp.com/projects/taskflow`), add topics (`python`, `django`, `postgresql`, `groq-api`, `task-management`), and add a **Screenshots** section + Portfolio Case Study link in `README.md`. |
| **`INKSPACE`** | Detailed `10,591`-char README, **but** `description: null`, `homepage: null`, `topics: []`, GitHub Linguist language displays **`HTML`** (due to templates/CSS), no link to `akhileshp.com/projects/inkspace`. | Looks like a static HTML repo at a glance and lacks discoverable topics. | Set description, topics (`python`, `django`, `gemini-api`, `blog-platform`, `ckeditor`, `sqlite`), homepage/README link to `https://akhileshp.com/projects/inkspace`, and embed project screenshots in README. |
| **`Portfolio_old`** | Live on **`https://akhilesh-4753.github.io/Portfolio_old/`** (`HTTP 200`, uncapped duplicate `"Akhilesh \| Portfolio"`), currently pinned. | Competes with `https://akhileshp.com` for branded searches without canonical redirect. | Unpin immediately; archive repo or replace `Portfolio_old` page notice/canonical with link pointing to `https://akhileshp.com`. |
| **Daybook (React Native)** | **Not visible** among public GitHub repos (`public_repos` returned 29 repos, none named `Daybook`). | Recruiter clicking GitHub expects to see or learn status of flagship **Daybook** app. | Either publish Daybook repository cleanly (if open-source) or mention its active product status in profile README linking `https://akhileshp.com/projects/daybook`. |
| **Practice Clutter Repos** (`testGit`, `GitDemo`, `demo-github`, `LearnGit`, `thameem`) | Empty/minimal descriptions, cluttering public repo timeline. | Dilutes first impression for hiring managers scanning public repos. | Archive or make scratch Git-test repos **Private** (with your approval). |

---

## 2. Stage 7.4 – LinkedIn Authority Audit (`https://www.linkedin.com/in/akhilesh4753`)

*Visibility Check:* Web search grounding (`site:linkedin.com/in/akhilesh4753`) returned zero indexed profile snippets, indicating either LinkedIn's **"Edit public profile & URL"** visibility toggle is restricted from search engines or the profile needs updated activity/signals. Due to LinkedIn login restrictions, live internal fields cannot be scraped without user login.

### 2.1 Audit & Alignment Checklist (Consistent with `src/data/personal.js` & `experience.js`)

| LinkedIn Section | Recommended Alignment Strategy | Consistency Verification Against Portfolio |
|---|---|---|
| **Public Profile Settings** | Verify **Your profile's public visibility** is **ON** and Custom URL is confirmed as `linkedin.com/in/akhilesh4753`. | Matches `socialLinks.js`. |
| **Headline** | **`Full-Stack Developer \| React.js, Python Django & ASP.NET Core MVC \| ERP Systems & AI Integrations \| Ex-.NET Developer @ Ebsor Infosystem`** | Uses verified technologies & roles only. |
| **Contact Info & Custom Button** | Add **`https://akhileshp.com`** in **Website** (and LinkedIn **Featured Link / Custom Button** if enabled) + `https://github.com/Akhilesh-4753`. | Drives direct qualified recruiter clicks. |
| **About Section** | Narrate your genuine 4-stage progression cleanly: B.Com & Accounting (`myG India` / SAP B1 / GST) -> Frontend (`AllPro TechLabs`) -> Enterprise `.NET ERP` (`Ebsor Infosystem`: Code7 ERP, Kidonex) -> Python Django & Gemini/Groq AI (`BlackBox Learning Academy`: TaskFlow, INKSPACE) -> Ongoing POS architecture collaboration. End with direct link to `https://akhileshp.com`. | 100% aligned with `personalInfo.about.accordion`. |
| **Experience Entries** | Ensure dates & titles match portfolio: `BlackBox Learning Academy` (Genstack Internship, Sept 2026 – Nov 2026), `Ebsor Infosystem Pvt. Ltd.` (Dot Net Developer, Dec 2024 – Mar 2026), `AllPro TechLabs` (Web Development, UL CyberPark Calicut), `myG India Private Limited` (Accountant Executive, Jan 2023 – May 2024), `Branding Hut` (Freelance Collaboration / ApnaVilla). | Zero contradictions if recruiters cross-check portfolio vs LinkedIn. |
| **Featured Section** | Pin 4 links/cards: (1) Portfolio `https://akhileshp.com/`, (2) `https://akhileshp.com/projects/taskflow`, (3) `https://akhileshp.com/projects/daybook`, (4) `https://akhileshp.com/projects/code7-erp` + Resume PDF. | Creates immediate visual showcase above the fold. |
| **Skills** | Top skills: `React.js`, `Python`, `Django`, `ASP.NET Core`, `ASP.NET Core MVC`, `C#`, `JavaScript`, `PostgreSQL`, `REST APIs`, `SQL`, `Kendo UI`, `React Native`. | Matches `knowsAbout` in JSON-LD `Person` schema. |

### 2.2 Ready-to-Review LinkedIn Post Drafts (Do Not Publish Without Approval)

**Draft Idea 1 — From Accounting to Full-Stack Software Engineering:**
> "Why spending 16 months in financial accounting at myG India made me a much better ASP.NET Core & POS developer 👇  
> When designing business workflows or ERP screens (like Master/Transaction/Report modules or our ongoing 12-module POS collaboration), you quickly see that clean code alone isn't enough—tax rules, returns, ledger integrity, and stock adjustments must connect cleanly.  
> I documented our POS workflow and full-stack case studies on my portfolio: https://akhileshp.com/projects/pos-business-management"

**Draft Idea 2 — Building INKSPACE & TaskFlow with Django MVT + Gemini / Groq APIs:**
> "Over the past few months in the Genstack internship at BlackBox Learning Academy, I built two full-stack Django applications to master MVT architecture and practical AI API integration:  
> 1️⃣ **TaskFlow**: Django + Neon PostgreSQL + email reminders + Groq/Gemini AI roadmap generation -> https://akhileshp.com/projects/taskflow  
> 2️⃣ **INKSPACE**: Django + CKEditor + Google Gemini AI writing assistance -> https://akhileshp.com/projects/inkspace  
> Always open to feedback from fellow Python/Django and React developers in Kerala and beyond!"

**Draft Idea 3 — Technical SEO & Build-Time Prerendering in React 19 + Vite 8 (No Next.js Migration):**
> "You don't always need to migrate away from React + Vite for clean Technical SEO.  
> On my personal portfolio (https://akhileshp.com), I kept React 19 + Vite 8 + React Router 7 and added build-time prerendering with `renderToString` + `hydrateRoot`, dynamic XML sitemap generation, Schema.org JSON-LD (`Person`, `ProfilePage`, `SoftwareApplication`), genuine HTTP 404 handling on Vercel, and AVIF hero preloads."

---

## 3. Stage 7.5 – Developer Directories & Showcase Platforms (Verified URLs)

| Platform Name | Official Website | Exact Profile / Submission URL | Eligibility & Submission Requirements | Cost | Portfolio Link Allowed? | Known Link Attribute | Risk Assessment |
|---|---|---|---|---|---|---|---|
| **GitHub `developer-portfolios`** | `https://github.com/emmabostian/developer-portfolios` | `https://github.com/emmabostian/developer-portfolios` | Open-source PR to `README.md` in strict alphabetical order by first name; live non-error URL required (do not edit `feed.json`). | Free | Yes | `nofollow` (GitHub markdown) | Very Low (Official community repo) |
| **Peerlist** | `https://peerlist.io/` | `https://peerlist.io/` | Developers/designers/builders; free account, connect GitHub & custom portfolio URL. | Free | Yes | Unknown / typically `nofollow` | None |
| **Made with React.js** | `https://madewithreactjs.com/` | `https://madewithreactjs.com/submit` | Projects built with React; manual editorial review requiring title, description, screenshot, URL. | Free | Yes | Unknown (curated directory) | None |
| **Built with Django** | `https://builtwithdjango.com/` | `https://builtwithdjango.com/` ("Submit project" nav link) | Projects built using Django (`TaskFlow` or `INKSPACE`); submit live project URL + details. | Free (base) | Yes | Unknown | Low (Requires live working URL for review) |
| **daily.dev** | `https://daily.dev/` | `https://daily.dev/` | Developer signup; engage in squads/showcase threads & share technical blogs/portfolio. | Free | Yes (in profile & relevant threads) | Nofollow / UGC | None (Avoid spam self-promotion) |
| **Wellfound** | `https://wellfound.com/` | `https://wellfound.com/` | Job-seeking developers; profile includes GitHub, LinkedIn, and personal portfolio website. | Free | Yes | `nofollow` | None |
| **Product Hunt** | `https://www.producthunt.com/` | `https://www.producthunt.com/` | Maker launch of standalone interactive products (`Daybook` / `TaskFlow`) with screenshots & live try link. | Free | Yes | `nofollow` / UGC | Low (Only submit once public live demo is polished) |
| **Indie Hackers** | `https://www.indiehackers.com/` | `https://www.indiehackers.com/` | Indie software builders adding a Product page (`Daybook` or POS tool) and build logs. | Free | Yes | `nofollow` / UGC | None |
| **Google Dev Library** | `https://devlibrary.withgoogle.com/` | `https://devlibrary.withgoogle.com/` | Open-source projects/blogs using Google tech (Gemini API, e.g. `INKSPACE`); public repo + clean README + license; note community intake pauses intermittently. | Free | Yes | Editorial (`withgoogle.com`) | None |
| **Kerala Coders Cafe** | `https://keralacoderscafe.in/` | `https://keralacoderscafe.in/` | Kerala developer community open-source/product showcase platform. | Free | Yes | Unknown (community site) | None |

---

## 4. Stage 7.6 – Content-Based Link Building & Guest Article Opportunities

| Publication / Platform | Submission URL & Requirements | Suggested Article Topics (From Your Real Projects) | Target Audience | Relevant Portfolio Link | Link Attribute & Outreach |
|---|---|---|---|---|---|
| **DEV Community (`dev.to`)** | `https://dev.to/` — Free signup, instant Markdown publishing; supports `canonical_url` setting. | 1. *Understanding Django MVT Architecture Through TaskFlow & INKSPACE*<br>2. *React 19 + Vite 8 Prerendering Without Next.js* | Full-stack, Python, and React developers | Contextual links to `/projects/taskflow`, `/projects/inkspace`, `/` | UGC / profile (`nofollow`), strong referral clicks & social discovery. |
| **Hashnode** | `https://hashnode.com/` — Free developer blogging platform supporting custom blog & `canonical_url`. | 1. *Integrating Google Gemini & Groq APIs Safely in Portfolio & Django Apps*<br>2. *From Accountant to Full-Stack Engineer: Designing Accounting-Aligned POS Workflows* | Software engineers & technical recruiters | Contextual links to `/projects/pos-business-management` & `/` | Varies by setup; builds search presence & newsletter reach. |
| **C# Corner** | `https://www.c-sharpcorner.com/` — Free signup -> Profile Menu -> **Submit Article**; human editorial review. | *Structuring Master, Transaction & Report Modules in ASP.NET Core MVC with Kendo UI* | `.NET` / C# / enterprise ERP developers | Bio/reference link to `/projects/code7-erp` & `/projects/kidonex-feedback` | Editorial / community review; requires original clean C#/.NET explanation. |
| **HackerNoon** | `https://hackernoon.com/` (`app.hackernoon.com`) — Free for individual writers; editor review in 3–5 business days. | *How We Planned a 12-Module POS System Using Accounting Principles + .NET & React* or *Prerendering a React 19 Portfolio With Zero Hydration Mismatches* | Engineers, founders, tech leads | Author bio + contextual project case study citation | Editor-approved; strictly human-written original prose. |
| **freeCodeCamp News** | `https://www.freecodecamp.org/news/` — Read official Style Guide -> submit **Author Application Form**; strict human editorial review, zero AI-generated prose. | *Build a Full-Stack Django Task Management App with PostgreSQL and AI Roadmaps* | Learning & mid-level Python/Django developers | Author profile + reference to `https://akhileshp.com` | High-trust editorial review; rigorous accuracy required. |
| **TinkerHub / MalabarJS / FOSS United Community Blogs** | Regional Kerala developer communities (`tinkerhub.org`, `malabarjs.org`, `fossunited.org`) | Lightning talks / community recaps on React 19 performance, open-source tooling, or building real-world projects out of Malappuram. | Kerala engineers, hiring managers & tech leads | Speaker/author bio + project showcase link | Genuine local brand authority & networking. |

---

## 5. Stage 7.7 – Brand Mentions, Digital PR & Outreach Drafts

### Verified Non-Spammy Brand Visibility Channels in Kerala & India
1. **MalabarJS (`https://malabarjs.org/`) & Kerala Coders Cafe (`https://keralacoderscafe.in/`):** Participate in Kozhikode/Malabar meetups or submit independent tools (`TaskFlow` / `INKSPACE` / `akhileshp.com`) for regional developer highlights.
2. **FOSS United Kochi / Kozhikode Chapters (`https://fossunited.org/`) & GDG Calicut / Cochin:** Attend meetups or volunteer for a 10–15 minute lightning talk (*"Prerendering React + Vite for Technical SEO"* or *"Accounting-First Software Design"*).
3. **Ebsor Infosystem / Branding Hut / BlackBox Learning Academy:** Request genuine alumni/project testimonials or LinkedIn recommendations from real former teammates/mentors (never fabricated reviews!).

### Outreach Message Drafts (Strictly Requires Your Explicit Approval Before Sending)

**Draft 1 — Alumni / Colleague LinkedIn Recommendation Request:**
> "Hi [Name], I hope you're doing well! Since we worked together at [Ebsor Infosystem / Branding Hut / BlackBox], I'm updating my portfolio (https://akhileshp.com) and LinkedIn profile. If you have 2 minutes, I'd really appreciate a brief, honest LinkedIn recommendation reflecting our collaboration on [Code7 ERP / ApnaVilla / Genstack]. Happy to return the favor anytime!"

**Draft 2 — Regional Community Showcase / Lightning Talk Pitch (e.g., MalabarJS / KCC):**
> "Hi [Community Organizer], I'm Akhilesh P., a Full-Stack Developer based in Malappuram working across React.js, Python Django, and ASP.NET Core. I recently built and documented an open portfolio setup using React 19 + Vite 8 build-time prerendering and Gemini AI integration (https://akhileshp.com). Would your community be open to a short talk/showcase or featuring my project write-up? No pressure at all—happy to share code samples first!"

