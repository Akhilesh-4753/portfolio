# Phase 7 – Backlink Audit & Competitor Research (`https://akhileshp.com`)

**Website:** `https://akhileshp.com`  
**GitHub:** `https://github.com/Akhilesh-4753`  
**LinkedIn:** `https://www.linkedin.com/in/akhilesh4753`  
**Audit Date:** 2026-11-12  
**Status:** Audit Complete — External Actions Pending User Approval  

---

## 1. Existing Backlink Profile Audit (Stage 7.1)

### 1.1 Data Sources Inspected & Database Limitations

| Source / Tool | Access Status | Scope & What Could / Could Not Be Checked |
|---|---|---|
| **Google Search Console → Links Report** | Not accessible from CLI/sandbox (private Google account) | Total external links, top linking sites, top linked pages, anchor text inside Google's index could not be retrieved automatically. |
| **Ahrefs / Semrush / Moz Paid Databases** | No API keys / authenticated accounts accessible | Referring Domain count, Domain Rating (DR), Domain Authority (DA), historical link velocity, and spam scores are **unavailable**. |
| **Public Web Search (`search_web` grounding)** | Accessible | Used to inspect live web index mentions of `"akhileshp.com"`, `"Akhilesh-4753"`, and `"akhilesh4753"`. |
| **GitHub Public REST API & Profile HTML** | Accessed (`HTTP 200`) | Audited `https://github.com/Akhilesh-4753`, 29 public repositories, pinned list, `homepage` URLs, `README.md` files, and `akhilesh-4753.github.io/Portfolio_old/`. |
| **LinkedIn Public Search Indexing** | Limited (`search_web`) | Unauthenticated requests to LinkedIn cannot bypass login walls; `site:linkedin.com/in/akhilesh4753` checked via search index. |

> **Important Limitation:** Absence of access to Google Search Console Links, Ahrefs, Semrush, or Moz **does not** mean `akhileshp.com` has zero external backlinks. Private referrals, recent recrawls, or unindexed community links will only be visible inside your private Search Console Links report. No Domain Authority (DA), Domain Rating (DR), or numeric backlink counts are invented below.

---

### 1.2 Verified Live Backlink & Brand-Mention Findings

| Finding / Asset Checked | Observed Live State | Link / Mention Impact on `https://akhileshp.com` | Verification Status |
|---|---|---|---|
| **Google Search Grounding (`"akhileshp.com"`)** | `akhileshp.com` appears in live search grounding for branded/developer queries highlighting React.js, ASP.NET Core MVC, ERP modules, and Ebsor Infosystem. | Website is discoverable by search systems; zero third-party referring editorial domains surfaced in the query sample. | **Verified** |
| **GitHub Profile (`https://github.com/Akhilesh-4753`)** | `blog` (website field) = **`""` (empty)**; `bio` = `null`; `location` = `null`; `name` = `"Akhilesh"`. | **Missing primary profile link** from GitHub to `https://akhileshp.com`. | **Verified via GitHub API (`HTTP 200`)** |
| **GitHub `Akhilesh-4753/portfolio` Repository** | `homepage` URL = **`https://portfolio-akhileshp.vercel.app`** (`HTTP 302` redirecting to Vercel SSO authentication!). `description` = `null`; `README.md` = stock `# React + Vite` boilerplate. | **Broken / stale homepage pointer:** points visitors and crawlers to a gated preview `.vercel.app` domain instead of canonical `https://akhileshp.com`. | **Verified (`HTTP 302` SSO & raw README)** |
| **GitHub `TaskFlow`, `INKSPACE`, & `Akhilesh-4753` READMEs** | Checked `README.md` in all 3 repositories (`7,489`, `10,591`, `2,722` chars): **`0` mentions or links to `akhileshp.com`**. | Missed referral traffic & canonical case-study cross-links between codebases and live project write-ups. | **Verified via raw README inspection** |
| **Legacy Mirror (`Portfolio_old`)** | Public repo pinned on GitHub with live page **`https://akhilesh-4753.github.io/Portfolio_old/`** (`HTTP 200`, `<title>Akhilesh \| Portfolio</title>`, `canonical: none`). | **Brand dilution / legacy duplicate risk:** an older portfolio site remains live, pinned, and uncrawl-consolidated (`no canonical` pointing to `akhileshp.com`). | **Verified (`HTTP 200`)** |
| **LinkedIn Profile (`linkedin.com/in/akhilesh4753`)** | Search for `site:linkedin.com/in/akhilesh4753` returned **no indexed LinkedIn URL** in search grounding (unlike unrelated handle occurrences). | Needs immediate check of LinkedIn **Public Profile & URL visibility** settings and confirmation that `https://akhileshp.com` is listed in Contact Info, Headline/About, and Featured. | **Verified search check (profile itself uninspected behind login)** |
| **Toxic / Spam Backlink Patterns** | No spam PBNs, link-farm footprints, or foreign anchor injections observed in search results; only self-hosted preview (`portfolio-akhileshp.vercel.app`, `Portfolio_old`) dilution observed. | Low toxic-spam risk; primary risk is **missing own-property authority signals and legacy domain split**. | **Observed (Partial — full link export pending GSC)** |

---

## 2. Competitor Backlink & Authority Research (Stage 7.2)

### 2.1 Regional & Stack-Matched Competitor Landscape (Verified Patterns)

Search research across Kerala (Malappuram, Calicut Cyberpark, Kochi Infopark, Trivandrum Technopark) and broader Indian Full-Stack (`React` / `Django` / `.NET` / `AI`) developer portfolios revealed clear patterns in how strong developer sites build authority and referral visibility:

| Portfolio / Ecosystem Pattern Observed | Observed Authority & Backlink Sources | Key Takeaway for `akhileshp.com` |
|---|---|---|
| **Malappuram / Kerala Full-Stack Freelance Portfolios** (e.g., `sinanmcmalappuram.in`, `getsayyan.com` observed in regional search results) | Positioning locally for Malappuram/Kozhikode SME & freelance web/SEO builds; cross-linking GitHub, LinkedIn, and local agency collaborations. | Highlighting local Malappuram / Kerala identity + Branding Hut collaboration alongside specialized `.NET ERP` + `Django + AI` sets Akhilesh apart from generic MERN freelancers. |
| **Indian AI & Full-Stack Showcase Portfolios** (e.g., `rudresh.in`, `amanjag.dev`, `sunithvs.com`, `.vercel.app` / `.github.io` developers) | Publishing live case-study breakdowns (`Vercel` demos + GitHub repos), technical blogs on **Dev.to** / **Hashnode** / **Medium**, and community profiles on **Peerlist**, **Daily.dev**, and curated **GitHub Awesome lists**. | Turning case studies (`TaskFlow`, `INKSPACE`, `Code7 ERP`, `Daybook`) into published tutorials and showcase profiles earns genuine referral traffic and editorial mentions. |
| **Open-Source React / Django Builders** | Submitting live React sites to **Made with React.js**, Django builds to **Built with Django**, and adding open-source portfolios to **`emmabostian/developer-portfolios`**. | Zero-cost, curated, stack-exact visibility directly aligned with recruiters and framework communities. |

---

### 2.2 Evaluated Competitor-Backed & Opportunity Sources

*(All URLs verified via web search. Where link attributes (`follow`/`nofollow`/`ugc`) cannot be programmatically verified without creating accounts or inspecting third-party outbound DOM per profile, `Unknown (Verify on live profile)` is explicitly stated.)*

| Website | Exact Verified URL | Opportunity Type | Relevance to Akhilesh P. | Link Type | Difficulty | Cost | Risk | Recommendation |
|---|---|---|---|---|---|---|---|---|
| **GitHub (`Akhilesh-4753`)** | `https://github.com/Akhilesh-4753` | Owned Developer Profile | Essential proof-of-work hub for recruiters checking React/Django/.NET code | Usually `nofollow` (UGC/profile) | Low | Free | None | **Immediate:** Set website field to `https://akhileshp.com`, fix `portfolio` homepage URL, update pinned repos & READMEs. |
| **LinkedIn (`akhilesh4753`)** | `https://www.linkedin.com/in/akhilesh4753` | Owned Professional Network | Highest direct recruiter & freelance client discovery source | `nofollow` | Low | Free | None | **Immediate:** Verify Public Profile visibility is ON; feature `https://akhileshp.com` & case studies. |
| **GitHub `developer-portfolios`** | `https://github.com/emmabostian/developer-portfolios` | Developer Portfolio Directory (Open Source PR) | Curated list of developer portfolios used widely by engineers & hiring managers | `nofollow` (GitHub markdown links) | Low | Free | Very Low | **Immediate:** Open clean PR adding `Akhilesh P.` in alphabetical order after approval. |
| **Peerlist** | `https://peerlist.io/` | Verified Builder Profile & Network | Integrates GitHub, side projects, resume, and portfolio URL cleanly | Profile-dependent (Verify after signup) | Low | Free | None | **Short Term:** Create verified builder profile linking `https://akhileshp.com` + key projects. |
| **daily.dev** | `https://daily.dev/` | Developer Community Network | Hosts developer showcase discussions & portfolio/blog sharing | Nofollow / UGC (likely; unverified) | Low | Free | None | **Short Term:** Build profile and share engineering write-ups rather than bare link drops. |
| **Made with React.js** | `https://madewithreactjs.com/submit` | React Project Showcase | Matches React 19 + Vite 8 portfolio & React storefront apps (`Ecommerce` / `Aishka`) | Unknown (Editor-reviewed showcase) | Low–Medium | Free | None | **Short Term:** Submit `https://akhileshp.com` as a React 19 + Vite 8 prerendered portfolio showcase. |
| **Built with Django** | `https://builtwithdjango.com/` | Django App Directory | Direct stack fit for `TaskFlow` and `INKSPACE` | Unknown (Curated directory) | Medium (Requires live demo URL or open-source clarity) | Free | None | **Short Term:** Prepare submission for `TaskFlow` (deployed on Render) once live demo URL & README are polished. |
| **DEV Community (`dev.to`)** | `https://dev.to/` | Technical Blogging & Cross-Posting | High-authority developer publication; supports `canonical_url` attribution | Nofollow / UGC (profile/article links) | Low–Medium | Free | None (Avoid spam cross-posts) | **Short Term:** Publish original tutorials (Django MVT + Gemini API, React 19 prerendering) linking case studies. |
| **Hashnode** | `https://hashnode.com/` | Technical Blogging Platform | Strong developer readership for deep architectural walkthroughs | Unknown / Profile & post dependent | Low–Medium | Free | None | **Short Term:** Publish/syndicate deep dives on ASP.NET Core ERP workflows and Django AI apps. |
| **C# Corner** | `https://www.c-sharpcorner.com/` | .NET & Microsoft Community Publication | Strong match for `Code7 ERP` & `Kidonex` ASP.NET Core MVC experience | Editorial/UGC (varies) | Medium (Editorial review) | Free | Low | **Long Term:** Submit technical article on ASP.NET Core MVC Master/Transaction/Report ERP patterns. |
| **HackerNoon** | `https://hackernoon.com/` | Independent Tech Publication | Reaches startup founders, CTOs, and AI/full-stack engineers | Editorial (often `nofollow` or standard editorial; verify rules) | Medium–High (3–5 day human review) | Free (for individual writers) | Low | **Long Term:** Pitch original React 19 prerendering or AI-chatbot reliability architecture story. |
| **freeCodeCamp News** | `https://www.freecodecamp.org/news/` | Editorial Programming Publication | High global credibility & organic reach for tutorials | Editorial | High (Author application + strict no-AI human editing) | Free | None | **Long Term:** Apply as an author and pitch a reproducible Python Django + Gemini AI guide. |
| **Product Hunt** | `https://www.producthunt.com/` | Product Launch Showcase | Good fit for launching standalone products like **Daybook** or **TaskFlow** | `nofollow` / UGC | Medium | Free | Low (Needs polished demo/assets) | **Long Term:** Launch only when public live demo/app store/APK download is polished. |
| **Kerala Developer Communities** (`MalabarJS`, `Kerala Coders Cafe`, `TinkerHub`, `FOSS United`, `µLearn`) | `https://malabarjs.org/`, `https://keralacoderscafe.in/`, `https://tinkerhub.org/`, `https://fossunited.org/`, `https://mulearn.org/` | Regional Communities & Meetups | Direct local Kerala/Malabar peer network, talks, and project showcases | Varies (mostly referral / community recognition) | Low–Medium | Free | None | **Short/Long Term:** Engage authentically via lightning talks, KCC project showcases, and community blogs. |

