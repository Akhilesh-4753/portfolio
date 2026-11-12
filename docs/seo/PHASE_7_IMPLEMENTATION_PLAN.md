# Phase 7 – Implementation Plan & Backlink Quality Framework

**Website:** `https://akhileshp.com`  
**Owner:** Akhilesh P. (Full-Stack Developer, Malappuram, Kerala, India)  
**Scope:** White-hat Off-Page Authority, Link Quality Standards, Prioritized Roadmap, Risk Mitigation & Measurement  

---

## 1. Stage 7.8 – Backlink Quality & Risk Evaluation Framework

### 1.1 Link Attribute Education (Why Nofollow / UGC Are Not Worthless)

| Link Attribute | HTML Example | What It Tells Search Engines | Practical Value for `https://akhileshp.com` |
|---|---|---|---|
| **Follow (Standard Editorial Link)** | `<a href="https://akhileshp.com">...</a>` | Standard endorsement passing PageRank equity cleanly when natural & editorially earned. | Highest organic SEO signal when earned from genuine tech publications, showcases, or open-source maintainers. |
| **`rel="nofollow"`** | `<a rel="nofollow" href="...">` | Hint asking crawlers not to pass direct ranking endorsement. | Still **highly valuable** when placed on GitHub, LinkedIn, Peerlist, DEV, or HackerNoon: brings real recruiter/client referral clicks, strengthens branded entity trust, and triggers secondary organic discovery! |
| **`rel="ugc"`** | `<a rel="ugc" href="...">` | Identifies user-generated content (community posts, comments, PR lists, forums). | Safe & natural across authentic community discussions (Indie Hackers, GitHub repos, Product Hunt). |
| **`rel="sponsored"`** | `<a rel="sponsored" href="...">` | Mandatory disclosure for paid sponsorships, ads, or compensated placements. | Not needed unless running paid promotions; avoids manual link-spam penalties if ever sponsored. |
| **Natural Editorial Mention** | Branded/contextual link inside an independent article or talk recap | Unprompted editorial citation written for human readers. | Gold-standard long-term authority signal; never forced or keyword-stuffed. |

### 1.2 Ten-Point Link Evaluation Scorecard

Before submitting a profile, guest pitch, or directory listing, verify every candidate against these 10 criteria (never rely on third-party Domain Authority / Domain Rating scores alone):

1. **Topical Relevance:** Does the site serve software developers, tech recruiters, React/Django/.NET engineers, or Kerala tech communities?
2. **Website Credibility:** Is it a known developer platform/community rather than an anonymous SEO "directory blast" clone?
3. **Editorial Quality:** Are articles/listings human-reviewed and readable without spun AI filler?
4. **Real Audience:** Do real engineers or hiring managers visit, comment, or hire through it?
5. **Referral Traffic Potential:** Would clicking the link realistically lead to a job interview, freelance lead, or technical collaboration?
6. **Link Placement:** Is the link prominently placed in a bio, showcase card, or relevant tutorial body—not buried in a spammy footer link list?
7. **Anchor Text Naturalness:** Uses natural brand/URL/title anchors (`Akhilesh P.`, `https://akhileshp.com`, `TaskFlow case study`)—never forced commercial anchors like `Best cheap React developer Malappuram`!
8. **Link Attribute Transparency:** Respects `rel="ugc"`/`rel="nofollow"` honestly where appropriate without demanding "dofollow swaps".
9. **Zero Spam Footprints:** Rejects any site offering *"100 DA90 backlinks for $10"*, automated submission scripts, PBNs, link exchanges ("link back to get approved"), or irrelevant general business directories.
10. **Disclosure Compliance:** Any paid/sponsored content (if ever done) strictly uses `rel="sponsored"`.

---

## 2. Stage 7.9 – Prioritized Off-Page Roadmap (Awaiting Approval)

*None of the tasks below have been executed externally yet. Each awaits your explicit approval.*

### Priority 1 – Immediate (High-Impact Owned Profiles & Cleanup)

| Task | Objective | Required Action | Est. Effort | Cost | Expected Benefit | Dependencies | Verification Method |
|---|---|---|---|---|---|---|---|
| **P1.1: GitHub Profile & Link Fix** | Eliminate empty URL & broken Vercel SSO link on owned GitHub profile. | Set Display Name `Akhilesh P.`, Bio, Location (`Malappuram, Kerala, India`), Website `https://akhileshp.com`, LinkedIn social link; update `portfolio` repo homepage URL from `portfolio-akhileshp.vercel.app` to `https://akhileshp.com`. | 15 mins | Free | Immediate clean branded entity connection & eliminates broken Vercel SSO click-throughs. | User GitHub login approval | Inspect `api.github.com/users/Akhilesh-4753` & click links logged out. |
| **P1.2: GitHub Profile README & Pins** | Replace placeholder `👩‍💻`/`Puzzle` bio & outdated pinned clones. | Update `Akhilesh-4753/README.md` with accurate React/Django/.NET bio + clickable links; pin `portfolio`, `TaskFlow`, `INKSPACE`; unpin `Portfolio_old`, `FOODIE`, `Restaurant-clone`. | 30 mins | Free | Higher recruiter conversion & direct project traffic to `/projects/*`. | Approved `README.md` draft | View `github.com/Akhilesh-4753` in incognito browser. |
| **P1.3: Clean `portfolio`, `TaskFlow`, `INKSPACE` Repos** | Replace default Vite README & populate missing GitHub descriptions/topics. | Add concise repo descriptions, relevant GitHub `topics`, link case studies in `TaskFlow`/`INKSPACE` READMEs, archive/private trivial `testGit` scratch repos, and add canonical notice / archive `Portfolio_old`. | 45 mins | Free | Stops `Portfolio_old` competition & makes flagship Django/React codebases searchable on GitHub. | User approval | Inspect repos & confirm `Portfolio_old` unpinned. |
| **P1.4: LinkedIn Profile Audit & Public Visibility Check** | Restore public search visibility & align LinkedIn with portfolio. | Verify **"Your profile's public visibility"** is ON; update Headline, About, Experience dates, Skills, and pin 4 Featured links (`https://akhileshp.com` + top case studies). | 30 mins | Free | Captures recruiter searches & guarantees zero timeline discrepancy vs `akhileshp.com`. | User LinkedIn access | Open `linkedin.com/in/akhilesh4753` in private/logged-out tab. |
| **P1.5: Check Google Search Console Links Report** | Establish exact baseline of links already discovered by Google. | Open verified GSC Property -> **Links** -> check **Top linked pages**, **Top linking sites**, and **Top linking text**. | 10 mins | Free | Replaces missing database estimates with verified Google data. | Completed Phase 5 GSC verification | Export / record baseline link report in `PHASE_7_IMPLEMENTATION_REPORT.md`. |

### Priority 2 – Short Term (Reputable Profiles, Directories & Communities)

| Task | Objective | Required Action | Est. Effort | Cost | Expected Benefit | Dependencies | Verification Method |
|---|---|---|---|---|---|---|---|
| **P2.1: PR to `emmabostian/developer-portfolios`** | List `https://akhileshp.com` in the industry-standard GitHub portfolio index. | Fork `emmabostian/developer-portfolios`, add `Akhilesh P.` alphabetically in `README.md` per `CONTRIBUTING.md`, open clean PR (do not touch `feed.json`). | 20 mins | Free | Peer credibility & continuous referral traffic from developer/recruiter readers. | Phase 6 deployed live cleanly | Confirm PR merged on GitHub. |
| **P2.2: Peerlist & Wellfound Profiles** | Build proof-of-work builder & hiring profiles. | Complete profiles on `peerlist.io` and `wellfound.com` syncing GitHub + `https://akhileshp.com` + top projects (`TaskFlow`, `Code7 ERP`, `Daybook`). | 45 mins | Free | Direct visibility with startup recruiters & indie builders. | Updated GitHub profile (P1.1–P1.3) | Visit public Peerlist/Wellfound URLs logged out. |
| **P2.3: Framework Showcases (`Made with React.js` & `Built with Django`)** | Earn stack-specific curated listings. | Submit `https://akhileshp.com` to `madewithreactjs.com/submit`; check live Render URL of `TaskFlow` & submit `TaskFlow` to `builtwithdjango.com`. | 45 mins | Free | Niche framework referral traffic & curated showcase credibility. | Working live `TaskFlow` Render URL + screenshots | Check published listing URL after editorial approval. |
| **P2.4: First 2 Technical Posts (`DEV.to` & `Hashnode`) + LinkedIn Posts** | Build content-driven discovery without spam. | Publish 1 tutorial on React 19 + Vite prerendering & 1 on Django MVT + Gemini/Groq (`TaskFlow`/`INKSPACE`) on `dev.to` / `hashnode.com` referencing case studies cleanly; share concise breakdown post on LinkedIn. | 3–5 hrs | Free | Targeted organic & community readership + natural contextual links. | User article approval | Check live post URLs + GA4 referral traffic (`Acquisition -> Traffic acquisition`). |

### Priority 3 – Long Term (Editorial Publications, Digital PR & Open Source)

| Task | Objective | Required Action | Est. Effort | Cost | Expected Benefit | Dependencies | Verification Method |
|---|---|---|---|---|---|---|---|
| **P3.1: Pitch Editorial Publications (`C# Corner`, `HackerNoon`, `freeCodeCamp`)** | Earn high-trust human-edited technical citations. | Pitch an ASP.NET Core MVC ERP workflow guide to `c-sharpcorner.com` and apply as an author on `freecodecamp.org/news/` or `hackernoon.com` with original reproducible code. | 6–10 hrs per guide | Free | Authoritative developer credential + potential high-trust editorial references. | Published DEV/Hashnode writing samples | Track editor acceptance & live publication URLs. |
| **P3.2: Google Dev Library (`INKSPACE` / Gemini API)** | Submit open-source Gemini project if cohort intake is open. | Polish `INKSPACE` open-source README, add permissive open-source `LICENSE`, check `devlibrary.withgoogle.com` submission window. | 2 hrs | Free | Association with official Google developer showcase ecosystem. | Polished open-source `INKSPACE` repo + active intake | Confirm listing on Dev Library if accepted. |
| **P3.3: Kerala Tech Community Talks & Colleague Endorsements** | Strengthen authentic local & professional brand trust. | Connect with `MalabarJS`, `FOSS United Kerala`, or `Kerala Coders Cafe` for a lightning talk or project highlight; politely ask former Ebsor/Branding Hut/BlackBox teammates for honest LinkedIn recommendations. | Ongoing | Free | Real regional reputation, referrals, and organic brand searches (`"Akhilesh P"`). | User approval on outreach messages | Track event/community pages, LinkedIn recs, & GSC branded impressions. |
| **P3.4: Flagship Open-Source Utility or Starter Contribution** | Earn organic natural backlinks from code users. | Consider extracting a genuinely useful open-source tool (e.g., Vite React prerender + SEO helper or Django-Gemini starter template) OR make thoughtful PR fixes to real React/Django repos. | Ongoing | Free | Most durable long-term source of natural editorial links & GitHub stars. | Completed portfolio priorities | Monitor GitHub stars, forks, and GSC `Links` report quarterly. |

---

## 3. Off-Page Risk Assessment & Anti-Spam Guardrails

| Risk Category | Why It Threatens `akhileshp.com` | Prevention Rule |
|---|---|---|
| **Domain Fragmentation (`Portfolio_old` / `.vercel.app`)** | Older `akhilesh-4753.github.io/Portfolio_old/` (`200 OK`) and `portfolio-akhileshp.vercel.app` split recruiter attention and branded relevance. | Replace `.vercel.app` homepage in GitHub repo immediately; unpin and archive `Portfolio_old`. |
| **Mass Directory Blast / Paid Backlinks** | Buying packages or auto-submitting to hundreds of low-quality directories creates toxic link footprints and wastes effort without helping rankings. | Strictly cap submissions to curated, human-reviewed developer platforms listed in `PHASE_7_OPPORTUNITY_RESEARCH.md`. |
| **Duplicate Content Cross-Posting** | Re-posting identical text across DEV, Hashnode, and HackerNoon without `canonical_url` splits search attribution. | Set `canonical_url` properly when syndicating, OR write distinct angle/tutorial variations tailored to each platform rather than duplicating your portfolio case study word-for-word. |
| **Broken External Submission Links** | Submitting a paused/sleeping Render app (`TaskFlow`) or gated preview link gets curated directory submissions rejected. | Test every live URL (`HTTP 200`, responsive UI) right before submitting to Built with Django or Product Hunt. |

---

## 4. Honest Measurement Framework

Track authority growth responsibly without obsessing over synthetic third-party DR/DA scores:
1. **Google Search Console (`Links` Report):** Quarterly check of verified referring domains, linked pages (`/` vs `/projects/*`), and natural anchor diversity.
2. **Google Search Console (`Performance` Report):** Track growth in **Branded Queries** (`akhilesh p`, `akhilesh developer`) alongside non-branded impressions (`full stack developer malappuram`, `django task management`, `code7 erp`).
3. **Google Analytics 4 (`Reports → Acquisition → Traffic acquisition`):** Measure **actual Referral sessions** arriving from `github.com`, `linkedin.com`, `peerlist.io`, `dev.to`, `madewithreactjs.com`, and engagement duration on landing pages.
4. **Conversion Proxy Events:** Monitor portfolio Resume downloads, GitHub/LinkedIn click-outs, contact inquiries, and recruiter outreach volume referencing specific case studies.

