# AKHILESH P — Premium React Developer Portfolio Master Prompt

## Personal Information

- **Name:** Akhilesh P
- **Professional Title:** Software Developer
- **Positioning:** Software Developer | React.js | ASP.NET Core | REST APIs
- **Email:** akhipn4753@gmail.com
- **Phone:** +91 9526008613
- **Location:** Kerala, India
- **LinkedIn:** https://www.linkedin.com/in/akhilesh4753
- **GitHub:** https://github.com/Akhilesh-4753
- **WhatsApp:** https://wa.me/+919526008613
- **Instagram:** https://www.instagram.com/_akhiles___h__

---

# 1. Main Objective

Build a premium, production-ready personal portfolio website using **React.js**.

The website must NOT look like a generic portfolio template.

It should feel like:

> **Premium Software Engineer Portfolio + Modern SaaS Product + Interactive Developer Workspace**

The portfolio should communicate:

- Professional
- Experienced
- Technical
- Creative
- Modern
- Reliable
- Detail-oriented
- Product-focused

The visitor should immediately understand:

**WHO I AM → WHAT I BUILD → WHAT TECHNOLOGIES I USE → WHERE I HAVE WORKED → WHAT I HAVE BUILT → WHAT I AM CURRENTLY WORKING ON → HOW TO CONTACT ME**

---

# 2. Technology Stack

Use:

- React.js
- Vite
- JavaScript
- Tailwind CSS OR a well-organized CSS architecture
- Framer Motion
- GSAP only where genuinely useful
- React Icons / Lucide React
- React Router

Use modern React practices.

Avoid unnecessary libraries.

The website must be production-ready.

---

# 3. React Project Architecture

Do NOT create a messy React project where everything is inside `App.jsx`.

Use a clean, scalable, easy-to-maintain architecture.

Content/data must be separated from UI components.

Recommended structure:

```text
src/
│
├── assets/
│   ├── images/
│   │   ├── profile/
│   │   │   └── akhilesh-profile.jpg
│   │   ├── projects/
│   │   │   ├── daybook/
│   │   │   ├── code7/
│   │   │   ├── erp/
│   │   │   ├── movie/
│   │   │   ├── ecommerce/
│   │   │   └── streamline/
│   │   └── icons/
│   │
│   └── fonts/
│
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Container.jsx
│   │   ├── Badge.jsx
│   │   ├── SocialLinks.jsx
│   │   └── LoadingScreen.jsx
│   │
│   ├── navigation/
│   │   ├── Navbar.jsx
│   │   ├── NavLinks.jsx
│   │   └── MobileMenu.jsx
│   │
│   ├── animations/
│   │   ├── FadeIn.jsx
│   │   ├── Reveal.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── Parallax.jsx
│   │   └── TiltCard.jsx
│   │
│   ├── background/
│   │   ├── CodeBackground.jsx
│   │   ├── GridBackground.jsx
│   │   ├── ParticleNetwork.jsx
│   │   └── MouseGlow.jsx
│   │
│   └── project/
│       ├── ProjectCard.jsx
│       ├── ProjectGrid.jsx
│       ├── ProjectHero.jsx
│       ├── ProjectTechStack.jsx
│       └── ProjectDetails.jsx
│
├── sections/
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Hero.jsx
│   │   └── TerminalCard.jsx
│   │
│   ├── About/
│   │   └── About.jsx
│   │
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   └── SkillCard.jsx
│   │
│   ├── Experience/
│   │   ├── Experience.jsx
│   │   └── ExperienceTimeline.jsx
│   │
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   └── ProjectCard.jsx
│   │
│   ├── Services/
│   │   └── Services.jsx
│   │
│   ├── CurrentWork/
│   │   └── CurrentWork.jsx
│   │
│   └── Contact/
│       └── Contact.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── ProjectDetailsPage.jsx
│   └── NotFound.jsx
│
├── data/
│   ├── personal.js
│   ├── skills.js
│   ├── experience.js
│   ├── projects.js
│   ├── services.js
│   └── socialLinks.js
│
├── hooks/
│   ├── useMouseParallax.js
│   ├── useScrollProgress.js
│   ├── useMediaQuery.js
│   └── useReducedMotion.js
│
├── layouts/
│   └── MainLayout.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── variables.css
│
├── App.jsx
└── main.jsx
```

### Maintenance Requirement

If I want to update a project later, I should only need to edit:

```text
src/data/projects.js
```

Experience updates:

```text
src/data/experience.js
```

Skills:

```text
src/data/skills.js
```

Social links:

```text
src/data/socialLinks.js
```

Personal information:

```text
src/data/personal.js
```

The architecture must make future maintenance easy.

---

# 4. Routing

Use React Router.

Routes:

```text
/
/about
/experience
/projects
/projects/daybook
/projects/code7-erp
/projects/erp
/projects/movie
/projects/ecommerce
/projects/streamline
/contact
```

When a user clicks a project card:

**Navigate to a NEW PROJECT DETAIL PAGE.**

Do NOT use a popup/modal for the full project explanation.

---

# 5. Light and Dark Mode

Create an excellent **light mode and dark mode**.

Do not simply invert colors. Design both themes individually.

## Dark Mode

Use:

- Deep charcoal / near-black background
- Soft blue
- Electric violet
- Cyan accents
- Subtle gradients
- Glass surfaces
- Soft borders
- Developer-inspired glow

Primary gradient direction:

**Blue → Violet → Cyan**

Use gradients carefully.

Do not make everything glow.

## Light Mode

Use:

- White / off-white background
- Soft cool-gray surfaces
- Deep navy typography
- Blue/violet gradient accents
- Subtle shadows
- Clean glass cards

Light mode should feel:

**Clean + Premium + Modern + Professional**

Not like a plain white website.

## Theme Switch

Create an elegant animated theme switch.

When switching:

- Background transitions smoothly
- Text colors transition
- Cards transition
- Borders transition
- Gradient accents transition
- Background animation changes appropriately

Persist the selected theme using `localStorage`.

Respect system preference on first visit.

Do not flash the wrong theme during page loading.

---

# 6. Hero Section

The hero must create the strongest first impression.

Layout:

**LEFT:** Text/content

**RIGHT:** Profile image + interactive developer visual

## Hero Text

Small label:

> SOFTWARE DEVELOPER

Main heading:

> **Building scalable digital experiences with React & .NET**

Supporting text:

> I’m Akhilesh P, a Software Developer experienced in building responsive web applications, ERP systems, REST API integrations, and business-focused software solutions.

CTA buttons:

- View My Work
- Contact Me
- Download CV

## Profile Image

IMPORTANT:

Add a clearly defined profile image option.

Create:

```text
src/assets/images/profile/akhilesh-profile.jpg
```

Use this image in the Hero section.

Make the profile image visually premium:

- Rounded/circular portrait
- Gradient border
- Soft glow
- Floating glass frame
- Small developer status indicator
- Subtle mouse parallax

Do NOT distort the image.

Do NOT generate a fake person.

The image should come from the profile image I provide.

Make the profile image easy to replace later by changing one file.

## Hero Developer Terminal

Create a floating terminal card.

Example:

```text
> akhilesh@developer:~$ whoami

Akhilesh P

> role

Software Developer

> stack

React.js
ASP.NET Core
REST APIs
SQL

> status

● Building real-world software
```

Use subtle typing animation.

---

# 7. Programming-Based Background

The background animation must be related to programming/software development.

Avoid generic floating circles.

Use subtle:

- Code fragments
- `</>` symbols
- `{ }`
- React component syntax
- API routes
- Terminal commands
- Git commands
- Binary patterns
- Network connections
- Developer grid
- Data-flow particles
- Code lines
- API request paths

Example snippets:

```text
const developer = "Akhilesh";

npm run build

git commit -m "update"

git push origin main

GET /api/projects

POST /api/contact

200 OK

<ReactComponent />

async function build()

{ code }
```

The animation should be subtle.

The background should feel like:

> **Software is running behind the website.**

Do not overload the screen with code.

---

# 8. Mouse Movement Animations

Desktop mouse interactions:

1. Soft cursor spotlight
2. Cursor-following glow
3. Background reacts subtly to cursor position
4. Hero profile image has slight parallax
5. Terminal card has subtle movement
6. Project cards have subtle 3D tilt
7. Buttons have magnetic hover effects
8. Interactive elements respond smoothly

Use `requestAnimationFrame` where appropriate.

Do not cause performance problems.

On mobile:

- Disable heavy mouse interactions
- Do not simulate unnecessary cursor effects

---

# 9. Scroll Animations

Scrolling should feel premium.

Implement:

- Fade-up reveals
- Slide-in
- Text reveals
- Staggered cards
- Parallax
- Scale transitions
- Timeline animation
- Progress line
- Project card reveals

Use Framer Motion primarily.

Use GSAP ScrollTrigger only where it provides meaningful value.

Do not animate every element aggressively.

---

# 10. Scroll Progress

Add a very thin scroll progress indicator at the top.

It should visually communicate how far the visitor has progressed through the portfolio.

---

# 11. About Section

Heading:

> **About Me**

Content:

> I’m a Software Developer focused on building practical, scalable, and responsive software applications.

> I have experience working across frontend and backend development, including React.js, ASP.NET Core MVC, REST API integration, ERP applications, responsive UI development, and business-oriented software.

> Throughout my experience, I have worked on real-world applications ranging from ERP systems and corporate websites to e-commerce applications, customer feedback systems, AI credential purchasing modules, and productivity software.

Add information cards:

- Frontend Development
- Backend Development
- REST API Integration
- ERP Applications
- Responsive UI
- Business Software

---

# 12. Tech Stack

Create categorized technology cards.

## Frontend

- HTML
- CSS
- JavaScript
- React.js
- jQuery
- Bootstrap

## Backend

- ASP.NET Core
- ASP.NET Core MVC
- REST APIs

## Database

- SQL
- Entity Framework

## Mobile

- React Native

## UI

- Kendo UI
- Material UI
- React Bootstrap
- React Icons

## Tools

- Git
- GitHub
- Visual Studio

Do NOT use fake skill percentage values such as:

```text
React 95%
.NET 90%
```

Instead use technology names and contextual descriptions.

---

# 13. Professional Experience

Create a premium vertical timeline.

## Ebsor Infosystem Pvt. Ltd.

**Dot Net Developer**

**12/2024 – 03/2026**

**Malappuram, Kerala, India**

IMPORTANT:

Do NOT show "Present".

I am no longer working at Ebsor Infosystem.

Responsibilities:

- Developed and maintained ERP web applications using ASP.NET Core MVC and .NET Core following MVC architecture.
- Developed Master, Transaction, and Report modules with responsive MVC views, forms, data binding, validations, CRUD operations, filtering, and dynamic UI interactions.
- Developed and managed ASP.NET Core MVC `Controller.cs` files to handle HTTP requests, business workflows, API calls, data processing, and communication between views and backend services.
- Integrated and managed REST APIs for communication between frontend MVC applications and backend services.
- Developed Kidonex Customer Feedback & Review and AI Credential Purchase modules.
- Worked on the **Code7 ERP project using Kendo UI**.
- Used Visual Studio for development, debugging, testing, and issue resolution.

Technology badges:

```text
ASP.NET Core
.NET
ASP.NET Core MVC
REST APIs
SQL
Kendo UI
Visual Studio
```

---

## AllPro TechLabs

**Web Developer**

**06/2023 – 12/2024**

**Calicut, Kerala, India**

Responsibilities:

- Developed responsive web applications using React.js with reusable components and REST API integration.
- Built Movie and E-commerce web applications using React.js, React Bootstrap, Material UI, and React Icons.
- Implemented state management and dynamic data rendering using React Hooks such as `useState` and `useEffect`.
- Developed responsive interfaces optimized for desktop, tablet, and mobile devices.

Technologies:

```text
React.js
JavaScript
REST APIs
Bootstrap
Material UI
React Icons
```

---

## Streamline Consortium

**Web Developer**

**Calicut, Kerala, India**

Responsibilities:

- Developed and maintained the official corporate website using React.js.
- Designed responsive and modern interfaces to showcase engineering consultancy services, projects, and company information.
- Built reusable React components for consistency, scalability, and maintainability.
- Optimized website performance and user experience across desktop, tablet, and mobile devices.

Technology:

```text
React.js
```

---

# 14. Freelance Experience

Create a separate section:

> **Freelance & Creative Work**

Company:

> **Branding Hut**

Description:

> Collaborated with Branding Hut for freelance creative work, creating professional posters and promotional designs based on project requirements.

Additional context:

> Branding Hut is a company located in Govt. Cyberpark.

Present this as:

> **Freelance Collaboration — Branding Hut**

Do not exaggerate the work.

---

# 15. Current Work

Create a section:

> **Currently Building**

Project:

> **POS Sales Software**

Description:

> Currently working with POS sales software, contributing to software used for point-of-sale and sales-related business operations.

Do not invent additional technologies or responsibilities.

Use a subtle:

```text
● ACTIVE PROJECT
```

indicator.

---

# 16. Projects Section

Create a premium project showcase.

Each project card should contain:

- Project image
- Project title
- Short description
- Technologies
- Category
- View Project button
- Animated arrow

Projects:

---

## Project 01 — Daybook

**Category:** Personal Productivity / Self-Reflection

**Description:**

> Daybook is a personal productivity and self-reflection application that brings daily planning, tasks, reminders, habits, notes, and journaling together in one place.

Make Daybook one of the most prominent projects.

---

## Project 02 — Code7 ERP

**Category:** ERP / Business Software

**Technology:**

- ASP.NET Core
- .NET
- Kendo UI
- REST APIs

**Description:**

> Code7 ERP is an ERP project worked on during my time at Ebsor Infosystem, involving business-oriented application development using Kendo UI and .NET technologies.

Do not invent features that were not provided.

---

## Project 03 — ERP Applications

**Category:** Enterprise Software

**Technology:**

- ASP.NET Core MVC
- .NET
- REST APIs
- SQL

**Description:**

> Business-focused ERP applications containing Master, Transaction, and Report modules with responsive MVC interfaces, validations, CRUD workflows, filtering, and API integration.

---

## Project 04 — Kidonex Customer Feedback & Review

**Technology:**

- ASP.NET Core MVC
- REST APIs

**Description:**

> Customer feedback and review functionality involving MVC views, frontend logic, validations, controller implementation, and REST API integration.

---

## Project 05 — AI Credential Purchase

**Technology:**

- ASP.NET Core MVC
- REST APIs

**Description:**

> AI Credential Purchase module involving MVC views, frontend workflows, validations, controller implementation, and REST API integration.

---

## Project 06 — Movie Web Application

**Technology:**

- React.js
- React Bootstrap
- Material UI
- React Icons

**Description:**

> Responsive movie-focused web application built using reusable React components and modern UI libraries.

---

## Project 07 — E-commerce Web Application

**Technology:**

- React.js
- React Bootstrap
- Material UI
- REST APIs

**Description:**

> Responsive e-commerce web application demonstrating reusable React components, dynamic rendering, API integration, and responsive UI development.

---

## Project 08 — Streamline Consortium Website

**Technology:**

- React.js

**Description:**

> Corporate website developed using React.js to showcase engineering consultancy services, projects, and company information.

---

# 17. Daybook — Dedicated Project Detail Page

When someone clicks the Daybook project card:

Navigate to:

```text
/projects/daybook
```

Do NOT show the full explanation in a modal.

Create a beautiful dedicated project detail page.

## Daybook Hero

Title:

> **Daybook**

Subtitle:

> **Plan your day. Take action. Review your progress. Understand yourself. Improve tomorrow.**

Category:

> Personal Productivity & Self-Reflection

---

## The Story Behind Daybook

Use this content:

> Every meaningful achievement begins with a plan. But a plan alone is not enough.

> Daybook was inspired by the experience of relying on handwritten notes, sticky notes, and scattered reminders to keep track of tasks, ideas, plans, and daily responsibilities.

> Those methods could help remember things, but they did not provide a clear picture of:
>
> - What was actually accomplished?
> - What was left unfinished?
> - Were the plans actually being followed?

> That realization became the inspiration behind Daybook.

> As a software developer, the goal was to create something more meaningful than a simple to-do list.

> Daybook was designed to help people:
>
> - Plan their days
> - Take action
> - Review their progress
> - Understand their patterns
> - Improve continuously

---

## What Is Daybook?

> Daybook is a personal productivity and self-reflection application that brings daily planning, tasks, reminders, habits, notes, and journaling together in one place.

---

## Core Idea

> Daybook does not stop at creating a plan.

> The real purpose begins with taking action.

The application helps users compare:

```text
PLANNED
   ↓
ACTUAL ACTION
```

Its Reports section provides a clear picture of progress by showing:

- Completed tasks
- Pending tasks
- Planning consistency
- Progress patterns
- Planning grade

---

## Planning Grade

Explain:

> The planning grade provides a simple way to understand how effectively a user is turning plans into actions.

Do not invent a mathematical formula unless one is later provided.

---

## Self Reflection

Include:

> Sometimes we don't need someone else to tell us what we are doing wrong. We simply need to see our own actions clearly.

> Daybook is designed to provide that clarity.

---

## Philosophy

Use:

> **Plan with intention.  
> Act with purpose.  
> Reflect honestly.  
> Improve tomorrow.**

Final statement:

> **Don't just make plans. Turn them into progress — one day at a time with Daybook.**

---

## Daybook Page Structure

```text
Hero
↓
The Story Behind Daybook
↓
What Is Daybook?
↓
Core Features
↓
Plan vs Action
↓
Reports & Progress
↓
Planning Grade
↓
Self Reflection
↓
Project Philosophy
↓
Technology
↓
Screenshots
↓
My Contribution
↓
Project Outcome / Current Status
↓
Back to Projects
```

Do not invent project features or technology.

If screenshots are provided later, display them in a premium gallery.

---

# 18. Other Project Detail Pages

Every project should have a dedicated page.

Examples:

```text
/projects/code7-erp
/projects/erp
/projects/movie
/projects/ecommerce
/projects/streamline
```

Each page can contain:

1. Project Hero
2. Overview
3. Project Purpose
4. My Role
5. Technologies
6. Key Features
7. Development Approach
8. Challenges
9. Screenshots
10. Outcome
11. Back to Projects

Only display information that is actually known.

If information is unavailable, do not invent it.

Use wording such as:

> Project details can be expanded with additional case-study information.

---

# 19. Project Detail Visual Design

Project detail pages should look like professional case studies.

Use:

- Large project title
- Gradient typography
- Project metadata
- Technology badges
- Animated screenshots
- Code-inspired decorations
- Scroll-based transitions
- Sticky project navigation
- Back-to-projects button

The page should feel like:

> **GitHub project documentation + premium SaaS case study**

---

# 20. What I Build / Services

Create:

> **What I Build**

Cards:

### 01 — Web Applications

Responsive and scalable web applications using React.js and modern frontend technologies.

### 02 — ERP Applications

Business-focused ERP applications using ASP.NET Core MVC and .NET.

### 03 — REST API Integration

Frontend/backend communication using REST APIs.

### 04 — Responsive Interfaces

Modern responsive interfaces for desktop, tablet, and mobile devices.

### 05 — Business Software

Practical software solutions for real-world business workflows, including POS and ERP applications.

### 06 — Creative Digital Work

Professional posters and promotional designs through freelance collaboration.

---

# 21. Social Media Links

Every social icon must actually work.

Use exactly:

### WhatsApp

```text
https://wa.me/+919526008613
```

### Instagram

```text
https://www.instagram.com/_akhiles___h__
```

### LinkedIn

```text
https://www.linkedin.com/in/akhilesh4753
```

### GitHub

```text
https://github.com/Akhilesh-4753
```

When clicked:

- WhatsApp → Open WhatsApp
- Instagram → Open Instagram profile
- LinkedIn → Open LinkedIn profile
- GitHub → Open GitHub profile

Use:

```html
target="_blank"
rel="noopener noreferrer"
```

Do not create fake social links.

Use correct icons.

Add social links in:

- Hero
- Contact
- Footer
- Navbar where appropriate

---

# 22. Contact Section

Heading:

> **Let's Build Something Useful**

Description:

> Have a project, opportunity, or idea? Let's connect and build something meaningful.

Show:

- Email
- Phone
- Location
- Social links

Contact form:

- Name
- Email
- Message

Add frontend validation.

Do not pretend that the form sends emails unless an actual backend/email service is configured.

---

# 23. Navigation

Create a sticky navbar.

Desktop navigation:

```text
Home
About
Experience
Skills
Projects
Contact
```

Also include:

- Theme toggle
- Social icons where appropriate

Navbar should:

- Become slightly blurred when scrolling
- Have active section indicator
- Smoothly scroll
- Work correctly on mobile

---

# 24. Mobile Responsiveness

The website MUST be fully responsive.

Test:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px+
```

Mobile must be intentionally designed.

Do not simply shrink desktop.

Mobile requirements:

- Hamburger navigation
- Proper spacing
- Readable typography
- Responsive project cards
- Responsive profile image
- Responsive terminal
- No horizontal overflow
- Touch-friendly buttons
- Proper image scaling
- Reduced background animation
- Disable heavy cursor effects
- Smooth scrolling

---

# 25. Performance

Performance is critical.

Avoid:

- Excessive particles
- Huge DOM trees
- Expensive continuous animations
- Unnecessary re-renders
- Huge images
- Heavy blur everywhere

Use:

- `transform`
- `opacity`
- IntersectionObserver
- requestAnimationFrame
- Lazy loading
- Optimized images
- Memoization where appropriate

Animations should remain smooth.

---

# 26. Accessibility

Implement:

- Semantic HTML
- Proper heading hierarchy
- Alt text
- Keyboard navigation
- Focus states
- Accessible buttons
- Accessible navigation
- Good contrast
- Reduced-motion support

Respect:

```text
prefers-reduced-motion
```

When enabled:

- Disable heavy parallax
- Reduce animations
- Remove excessive cursor effects
- Keep all content accessible

---

# 27. SEO

Page title:

> **Akhilesh P | Software Developer**

Meta description:

> Portfolio of Akhilesh P, a Software Developer experienced in React.js, ASP.NET Core, REST APIs, ERP applications, responsive web development, and business software solutions.

Add:

- Open Graph metadata
- Proper page titles
- Semantic headings
- SEO-friendly project pages

---

# 28. Loading Screen

Create a short developer-themed loading animation.

Example:

```text
Initializing Akhilesh.dev...

> Loading React components...
> Loading API modules...
> Loading experience...
> Loading projects...
> System ready.
```

Then smoothly transition to the hero.

Do not make users wait unnecessarily.

---

# 29. Footer

Show:

**Akhilesh P**

**Software Developer**

> Building digital experiences with code.

Social icons:

- WhatsApp
- Instagram
- LinkedIn
- GitHub
- Email

Copyright:

> © 2026 Akhilesh P. All rights reserved.

---

# 30. Content Accuracy Rules

Use my CV as the primary source of truth.

Do NOT invent:

- Companies
- Job titles
- Technologies
- Years of experience
- Client names
- Project statistics
- Revenue
- Number of users
- Performance percentages
- Fake testimonials
- Fake certifications
- Fake awards
- Fake project URLs

The following additional information is explicitly provided and should be included:

- Freelance collaboration with Branding Hut
- Created posters/promotional creatives for Branding Hut
- Branding Hut is located in Govt. Cyberpark
- Worked on Code7 ERP using Kendo UI at Ebsor Infosystem
- Created Daybook application
- Currently working with POS sales software
- Ebsor Infosystem employment ended in 03/2026

Improve wording professionally, but preserve the actual meaning.

---

# 31. Final Quality Checklist

Before completing the project, verify:

- [ ] No fake information
- [ ] No fake project URLs
- [ ] No fake statistics
- [ ] No fake testimonials
- [ ] No fake certifications
- [ ] No broken social links
- [ ] No broken routes
- [ ] No horizontal scrolling
- [ ] Mobile responsive
- [ ] Tablet responsive
- [ ] Desktop responsive
- [ ] Dark mode works
- [ ] Light mode works
- [ ] Theme persists
- [ ] Animations are smooth
- [ ] Reduced-motion works
- [ ] Project pages work
- [ ] Profile image can easily be replaced
- [ ] CV download works when CV file is provided
- [ ] All navigation links work
- [ ] All external social links work
- [ ] No console errors
- [ ] No unnecessary React re-renders
- [ ] Data is separated from components
- [ ] Project updates can be made from `src/data/projects.js`
- [ ] Experience updates can be made from `src/data/experience.js`

---

# 32. Final Design Direction

Do not make this portfolio look like a collection of animated components.

The animations should tell a story.

The visitor should feel like they are moving through a developer's digital workspace.

Use this visual concept:

```text
CODE
  ↓
SYSTEM
  ↓
EXPERIENCE
  ↓
PROJECTS
  ↓
PRODUCTS
  ↓
CONTACT
```

The background represents code/data flowing.

The timeline represents development experience.

The projects represent things built.

The Daybook project represents personal product thinking.

The POS work represents current professional development.

The final result should communicate:

> **Akhilesh is a Software Developer who builds practical, real-world software using React, .NET, APIs, ERP systems, and modern web technologies.**

Make it:

**Premium.  
Memorable.  
Fast.  
Maintainable.  
Responsive.  
Accessible.  
Professional.**

Every interaction should feel intentional.
