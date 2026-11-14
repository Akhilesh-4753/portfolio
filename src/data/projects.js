// Comprehensive project catalog and case studies source of truth
export const projects = [
  {
    id: "taskflow",
    slug: "taskflow",
    title: "TaskFlow",
    tagline: "Full-stack Django task management & AI-assisted productivity platform",
    category: "Full-Stack Web & AI Productivity",
    filterCategories: ["Full-Stack Development", "AI & Automation"],
    badge: "Independent Project",
    status: "Deployed on Render",
    liveUrl: "https://taskflow.akhileshp.com/",
    ownership: "Independent Learning Project",
    role: "Full-Stack Developer",
    ctaLabel: "TaskFlow Case Study",
    relatedSlugs: ["inkspace", "daybook", "code7-erp"],
    previewType: "taskflow",
    image: "/images/projects/taskflow/taskflow-dashboard.webp",
    imageFit: "cover",
    imageAlt: "TaskFlow Django productivity dashboard showing task metrics, overview widgets, and navigation",
    featured: true,
    shortDescription:
      "Django-based task management application combining user authentication, CRUD workflows, task prioritization, productivity reports, email reminders, and AI-powered task planning.",
    technologies: [
      "Python",
      "Django",
      "Neon PostgreSQL",
      "Gemini API",
      "Groq API",
      "HTML",
      "CSS",
      "JavaScript",
      "Render"
    ],
    stats: [
      { label: "Architecture", value: "Django MVT" },
      { label: "Database", value: "Neon PostgreSQL" },
      { label: "AI Features", value: "Task & Roadmap AI" },
      { label: "Deployment", value: "Render" }
    ],
    overview:
      "TaskFlow is a full-stack Python Django task management application developed during the Genstack Internship at BlackBox Learning Academy. Built to apply Django's Model-View-Template (MVT) architecture in a real product workflow, it brings together authenticated task management, visual progress reporting, deadline email reminders, and generative AI productivity tools.",
    purpose:
      "Address fragmented daily task tracking by uniting priority-based CRUD task management, automated reminders for overdue schedules, visual completion reports, and AI-assisted planning and learning roadmap generation in one platform.",
    myRole:
      "Architected and built the complete Django MVT application, including user registration and session protection, PostgreSQL models via Neon, dashboard reporting views, scheduled-date email reminder workflows, and REST integrations with Google Gemini and Groq APIs.",
    keyFeatures: [
      "User authentication with registration, login, logout, and protected workspace views",
      "Complete task CRUD workflows with priority levels and pending/completed status tracking",
      "Analytics dashboard visualizing completion rates and productivity trends with donut, bar, and trend charts",
      "In-app pending task notifications paired with scheduled-date email reminders for incomplete tasks",
      "AI task suggestions, AI productivity assistant, and structured technology learning roadmap generator powered by Gemini and Groq APIs",
      "Persistent relational storage in Neon PostgreSQL and production deployment on Render"
    ],
    developmentApproach:
      "Structured cleanly around Django's Model-View-Template pattern, separating relational data modeling in Neon PostgreSQL from template views and external Gemini/Groq API integrations.",
    outcome:
      "Delivered and deployed a production full-stack Django web application on Render that integrates practical task management workflows with AI-assisted planning.",
    gallery: [
      {
        src: "/images/projects/taskflow/taskflow-dashboard.webp",
        title: "Productivity Dashboard",
        caption: "Main workspace dashboard summarizing task status, priorities, and productivity metrics.",
        alt: "TaskFlow productivity dashboard displaying task overview cards and workspace navigation",
        orientation: "landscape"
      },
      {
        src: "/images/projects/taskflow/taskflow-tasks.webp",
        title: "Task Management Workspace",
        caption: "Structured task list supporting full CRUD workflows, status tracking, and quick filtering.",
        alt: "TaskFlow All Tasks management interface showing task rows, statuses, and action controls",
        orientation: "landscape"
      },
      {
        src: "/images/projects/taskflow/taskflow-reports.webp",
        title: "Analytics & Progress Reports",
        caption: "Visual productivity breakdown using interactive donut, bar, and trend charts.",
        alt: "TaskFlow reports view featuring donut, bar, and trend charts for task completion analytics",
        orientation: "landscape"
      },
      {
        src: "/images/projects/taskflow/taskflow-profile.webp",
        title: "Account & Profile Settings",
        caption: "User account management screen for profile details and password updates.",
        alt: "TaskFlow profile settings page with account details and password update form",
        orientation: "landscape"
      },
      {
        src: "/images/projects/taskflow/taskflow.webp",
        title: "Platform Overview Showcase",
        caption: "Project showcase highlighting TaskFlow's full-stack architecture and tech stack.",
        alt: "TaskFlow overview showcase poster featuring a laptop preview and technology stack summary",
        orientation: "portrait",
        layout: "overview"
      }
    ]
  },
  {
    id: "inkspace",
    slug: "inkspace",
    title: "INKSPACE",
    tagline: "Interactive Django blogging platform with rich text editing and Gemini AI writing assistance",
    category: "Blogging Platform & AI Writing",
    filterCategories: ["Full-Stack Development", "AI & Automation"],
    badge: "Independent Project",
    status: null,
    ownership: "Independent Learning Project",
    role: "Full-Stack Developer",
    ctaLabel: "INKSPACE Case Study",
    relatedSlugs: ["taskflow", "apnavilla", "daybook"],
    previewType: "inkspace",
    image: "/images/projects/inkspace/blog-home-page.webp",
    imageFit: "cover",
    imageAlt: "INKSPACE blogging platform home page featuring hero banner and featured article preview",
    featured: true,
    shortDescription:
      "Django-based blogging platform enabling users to write, publish, and manage blog posts with rich text editing, ownership authentication, and Google Gemini API writing assistance.",
    technologies: [
      "Python",
      "Django",
      "SQLite",
      "Gemini API",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    stats: [
      { label: "Architecture", value: "Django MVT" },
      { label: "AI Integration", value: "Google Gemini API" },
      { label: "Database", value: "SQLite" },
      { label: "Scope", value: "Full-Stack Web App" }
    ],
    overview:
      "INKSPACE is a full-stack Python Django blogging platform designed to give writers and readers an interactive environment to draft, publish, browse, and manage long-form blog content. Combining structured Django MVT publishing workflows with rich text editing and Google Gemini API assistance, it streamlines both content creation and editorial discovery.",
    purpose:
      "Provide an end-to-end editorial publishing platform where authors retain clear ownership controls over drafts and published posts while accessing integrated AI writing support during article creation.",
    myRole:
      "Developed the Django MVT models, authentication and author-scoped permissions, rich text editor workflow, searchable article feed, responsive HTML/CSS/JavaScript templates, SQLite persistence, and Google Gemini API writing assistant.",
    keyFeatures: [
      "Blog creation, publishing, editing, and deletion gated by authenticated author ownership",
      "Featured homepage showcase, searchable Explore Stories feed, and dedicated article reading pages",
      "Rich text editing workspace paired with a Gemini AI Assist panel for drafting and ideation",
      "Author management dashboard listing personal posts with quick update and publish controls",
      "Responsive navigation and blog card layouts backed by SQLite storage"
    ],
    developmentApproach:
      "Built on clean Django MVT separation with author-level access checks, responsive frontend templates, CKEditor-style formatted authoring, and direct Gemini API content generation prompts.",
    outcome:
      "Delivered a complete multi-user blogging platform unifying editorial publishing, content discovery, and practical Gemini AI writing assistance.",
    gallery: [
      {
        src: "/images/projects/inkspace/blog-home-page.webp",
        title: "Platform Home & Hero",
        caption: "Editorial home view highlighting featured stories and platform entry actions.",
        alt: "INKSPACE home page with hero heading 'Every Story Deserves a Place.' and featured blog post",
        orientation: "landscape"
      },
      {
        src: "/images/projects/inkspace/blog-hero-page.webp",
        title: "Latest Stories Showcase",
        caption: "Clean editorial grid presenting recently published articles and category highlights.",
        alt: "INKSPACE Latest Stories showcase section displaying a responsive grid of published articles",
        orientation: "landscape"
      },
      {
        src: "/images/projects/inkspace/blog-posts.webp",
        title: "Explore Stories & Search Feed",
        caption: "Searchable article directory enabling readers to filter and browse published posts.",
        alt: "INKSPACE Explore Stories and Ideas page showing searchable blog post cards",
        orientation: "landscape"
      },
      {
        src: "/images/projects/inkspace/create-blog.webp",
        title: "Rich Text Editor & Gemini AI Assist",
        caption: "Article authoring studio integrating CKEditor formatting with Gemini-powered writing assistance.",
        alt: "INKSPACE Write a New Blog screen featuring a rich text editor and Gemini AI Assist panel",
        orientation: "landscape"
      },
      {
        src: "/images/projects/inkspace/my-blog-list.webp",
        title: "Author Management Dashboard",
        caption: "Author-scoped workspace to review, edit, publish, or remove personal blog posts.",
        alt: "INKSPACE My Blogs author dashboard listing user-created articles with management controls",
        orientation: "landscape"
      }
    ]
  },
  {
    id: "daybook",
    slug: "daybook",
    title: "Daybook",
    tagline: "Plan your day. Take action. Review your progress. Understand yourself. Improve tomorrow.",
    category: "Personal Productivity & Self-Reflection",
    filterCategories: ["Mobile Applications"],
    badge: "Featured Product",
    status: "Active Product Project",
    ownership: "Independent Product",
    role: "Creator & React Native Developer",
    ctaLabel: "Daybook Case Study",
    relatedSlugs: ["taskflow", "inkspace", "pos-business-management"],
    previewType: "daybook",
    image: "/images/projects/daybook/dashboard.webp",
    imageFit: "contain",
    imageAlt: "Daybook React Native mobile app overview displaying core daily planning, reflection, and habit screens",
    featured: true,
    shortDescription:
      "A personal productivity and self-reflection application that brings daily planning, tasks, reminders, habits, notes, and journaling together in one place.",
    technologies: ["React Native", "JavaScript", "Mobile State Management", "Component Architecture", "Offline Data Patterns"],
    accentColor: "from-cyan-500 via-blue-500 to-indigo-600",
    stats: [
      { label: "Focus", value: "Plan vs Action" },
      { label: "Core Feature", value: "Planning Grade" },
      { label: "Architecture", value: "Modular React Native" },
      { label: "Status", value: "Active Product Project" }
    ],
    story: {
      intro:
        "Every meaningful achievement begins with a plan. But a plan alone is not enough.",
      paragraphs: [
        "Daybook was inspired by the experience of relying on handwritten notes, sticky notes, and scattered reminders to keep track of tasks, ideas, plans, and daily responsibilities.",
        "Those methods could help remember things, but they did not provide a clear picture of: What was actually accomplished? What was left unfinished? Were the plans actually being followed?",
        "That realization became the inspiration behind Daybook. As a software developer, the goal was to create something more meaningful than a simple to-do list."
      ],
      objectives: [
        "Plan daily routines with clarity and intent",
        "Take concrete, trackable action on priorities",
        "Review daily and weekly progress objectively",
        "Understand personal productivity and procrastination patterns",
        "Improve continuously day after day"
      ]
    },
    coreIdea: {
      summary:
        "Daybook does not stop at creating a plan. The real purpose begins with taking action.",
      comparison: {
        from: "PLANNED",
        to: "ACTUAL ACTION",
        detail:
          "Traditional apps record tasks you hope to do. Daybook analyzes how your intentions translate into execution, giving you unfiltered feedback."
      }
    },
    features: [
      {
        title: "Daily Unified Planning",
        desc: "Consolidates tasks, reminders, daily routines, habits, and quick notes into one coherent interface."
      },
      {
        title: "Plan vs. Action Tracking",
        desc: "Visualizes the divergence between planned hours/tasks and actual time spent, promoting accountability."
      },
      {
        title: "Reports & Analytics",
        desc: "Provides clear reports on completed tasks, pending tasks, planning consistency, and productivity patterns."
      },
      {
        title: "The Planning Grade",
        desc: "A clean scoring metric showing how effectively you turned plans into actions without cumbersome math."
      },
      {
        title: "Self-Reflection Journal",
        desc: "Honest daily notes to review feelings, blockers, and wins alongside hard task metrics."
      },
      {
        title: "Habit Reinforcement",
        desc: "Daily habit tracking tied directly into your morning and evening planning cycles."
      }
    ],
    planningGrade:
      "The planning grade provides a simple way to understand how effectively a user is turning plans into actions. Rather than guessing whether a day was successful, the grade gives an immediate, honest read on execution fidelity.",
    selfReflection:
      "Sometimes we don't need someone else to tell us what we are doing wrong. We simply need to see our own actions clearly. Daybook is designed to provide that clarity.",
    philosophy: {
      motto: "Plan with intention. Act with purpose. Reflect honestly. Improve tomorrow.",
      finalStatement: "Don't just make plans. Turn them into progress — one day at a time with Daybook."
    },
    myContribution:
      "Conceived, architected, and built the mobile application using React Native. Implemented the task scheduling views, state workflows, progress report logic, and interactive reflection modules.",
    outcome:
      "Created a distinct productivity system that bridges the gap between passive task listing and active self-improvement.",
    gallery: [
      {
        src: "/images/projects/daybook/dashboard.webp",
        title: "Product Overview Collage",
        caption: "High-level visual showcase spanning Daybook's daily planning, tracking, and reflection suite.",
        alt: "Daybook React Native showcase collage presenting five core mobile application screens",
        orientation: "portrait",
        layout: "overview"
      },
      {
        src: "/images/projects/daybook/tasks.webp",
        title: "Daily Task Execution",
        caption: "Focused daily task view structured around planned priorities and completion actions.",
        alt: "Daybook mobile Tasks screen displaying scheduled daily items and completion toggles",
        orientation: "portrait"
      },
      {
        src: "/images/projects/daybook/reminder.webp",
        title: "Smart Reminders",
        caption: "Scheduled alerts and time-sensitive reminders to keep daily intentions on track.",
        alt: "Daybook mobile Reminder screen showing scheduled notification cards and time controls",
        orientation: "portrait"
      },
      {
        src: "/images/projects/daybook/habit-tracker.webp",
        title: "Habit Tracker",
        caption: "Daily consistency tracker helping reinforce recurring positive routines.",
        alt: "Daybook mobile Habit Tracker screen displaying habit streaks and daily check-ins",
        orientation: "portrait"
      },
      {
        src: "/images/projects/daybook/diary.webp",
        title: "Personal Diary & Reflection",
        caption: "Structured journaling space for end-of-day thoughts and personal reflection.",
        alt: "Daybook mobile Diary screen designed for daily reflections and written notes",
        orientation: "portrait"
      },
      {
        src: "/images/projects/daybook/reports.webp",
        title: "Weekly & Daily Progress Reports",
        caption: "Behavioral insights and completion summaries highlighting daily productivity patterns.",
        alt: "Daybook mobile Reports screen visualizing completion metrics and progress trends",
        orientation: "portrait"
      },
      {
        src: "/images/projects/daybook/user-profile.webp",
        title: "User Profile & App Preferences",
        caption: "Personal account overview and customization preferences within the React Native app.",
        alt: "Daybook mobile User Profile screen with account information and settings options",
        orientation: "portrait"
      }
    ]
  },
  {
    id: "pos-business-management",
    slug: "pos-business-management",
    title: "POS Business Management Software",
    tagline: "Independent team collaboration for retail point-of-sale and business operations",
    category: "POS & Business Operations",
    filterCategories: ["Full-Stack Development", "Backend & ERP"],
    badge: "Team Collaboration",
    status: "Currently in Development",
    ownership: "Independent Team Collaboration",
    role: "Functional Planning & Business Analysis",
    ctaLabel: "POS Architecture Study",
    relatedSlugs: ["code7-erp", "kidonex-feedback", "ecommerce"],
    previewType: "pos",
    featured: true,
    shortDescription:
      "Independent collaborative Point of Sale and business management software started with former colleagues and fellow developers; contributing functional planning, module relationships, and accounting-aligned workflows.",
    technologies: [
      "ASP.NET Core",
      ".NET",
      "React.js",
      "Business Workflows",
      "Module Architecture"
    ],
    stats: [
      { label: "Project Type", value: "Independent Collaboration" },
      { label: "My Role", value: "Functional & Business Analysis" },
      { label: "Team Stack", value: ".NET + React.js" },
      { label: "Status", value: "Currently in Development" }
    ],
    overview:
      "An independent Point of Sale (POS) and business management software suite started collaboratively with former colleagues and fellow developers. Combining practical financial accounting experience with modern ASP.NET Core / .NET and React.js engineering, the project models retail billing, inventory movement, supplier procurement, tax records, and operational analytics.",
    purpose:
      "Prevent disconnected retail and accounting spreadsheets by planning a unified POS architecture where every sales invoice, customer payment, return, and stock adjustment flows cleanly into financial and management reports.",
    myRole:
      "Leading functional planning and business analysis—defining the 12 planned POS modules, structured input field mapping, cross-module data relationships, GST/tax and billing validation rules, and reporting structures—while collaborating closely with the team developing ASP.NET Core / .NET APIs and React.js frontend views.",
    keyFeatures: [
      "12 planned functional modules across Core POS (Dashboard, Sales & Billing, Returns & Refunds, Customer Management), Procurement & Stock (Products & Categories, Inventory & Stock, Purchases & Suppliers), and Finance & Governance (Payments & Expenses, Tax & Transactions, Reports & Analytics, User & Role Management, System Settings)",
      "4-stage transaction pipeline linking Sales & Billing -> Payments & Expenses -> Inventory & Stock -> Reports & Analytics",
      "Structured form input mapping, reorder threshold checks, and accounting-aligned business validation rules",
      "Clear collaborative split between domain specification, ASP.NET Core / .NET backend APIs, and React.js UI components"
    ],
    developmentApproach:
      "Domain-first functional specification rooted in accounting principles, iteratively translated into REST-ready backend contracts (.NET) and componentized frontend screens (React.js) with the collaborative development team.",
    outcome:
      "Ongoing collaborative product development moving the 12-module retail and business operations blueprint steadily through implementation."
  },
  {
    id: "apnavilla",
    slug: "apnavilla",
    title: "ApnaVilla",
    tagline: "Real estate web application built with Next.js frontend and Laravel backend",
    category: "Real Estate Web Application",
    filterCategories: ["Full-Stack Development", "Frontend Development"],
    badge: "Team Collaboration",
    status: null,
    ownership: "Branding Hut Team Collaboration",
    role: "Frontend Developer",
    ctaLabel: "ApnaVilla Case Study",
    relatedSlugs: ["streamline", "ecommerce", "aishka"],
    previewType: "apnavilla",
    featured: true,
    shortDescription:
      "Real estate web application developed with the Branding Hut team, contributing responsive frontend interfaces using Next.js in collaboration with a Laravel backend team.",
    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Laravel",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    stats: [
      { label: "Project Type", value: "Team Collaboration" },
      { label: "My Role", value: "Frontend Developer" },
      { label: "Frontend", value: "Next.js / React" },
      { label: "Backend Team", value: "Laravel" }
    ],
    overview:
      "ApnaVilla is a real estate web application built collaboratively with the Branding Hut team (Govt. Cyberpark, Kozhikode) to deliver property discovery and real estate digital services. Pairing a Next.js and React.js frontend with Laravel and PostgreSQL backend services, the project focused on responsive cross-device property browsing.",
    purpose:
      "Enable property seekers to browse real estate listings and service pages smoothly across mobile and desktop viewports while maintaining clean decoupling from the team's Laravel backend.",
    myRole:
      "Served as Frontend Developer building responsive user interfaces with Next.js, React.js, JavaScript, HTML, CSS, and Bootstrap, integrating client views with the Branding Hut Laravel backend team and participating in project planning discussions.",
    keyFeatures: [
      "Responsive property and real estate UI views built with Next.js and React.js components",
      "Mobile-friendly layouts crafted using HTML, CSS, JavaScript, and Bootstrap",
      "API coordination between client-side React views and Laravel / PostgreSQL backend services",
      "Agile team collaboration with Branding Hut developers and designers on feature requirements"
    ],
    developmentApproach:
      "Modular React and Next.js frontend engineering synchronized closely with Branding Hut's Laravel API contracts to keep data rendering clean and responsive.",
    outcome:
      "Delivered collaborative, responsive real estate frontend interfaces integrated cleanly with the team's Laravel backend workflows."
  },
  {
    id: "code7-erp",
    slug: "code7-erp",
    title: "Code7 ERP",
    tagline: "Enterprise Resource Planning with rich Kendo UI grid components and .NET backend services",
    category: "ERP / Business Software",
    filterCategories: ["Full-Stack Development", "Backend & ERP"],
    badge: "Enterprise ERP",
    status: null,
    ownership: "Ebsor Infosystem",
    role: "Dot Net Developer",
    ctaLabel: "Code7 ERP Case Study",
    relatedSlugs: ["kidonex-feedback", "pos-business-management", "taskflow"],
    previewType: "code7",
    featured: false,
    shortDescription:
      "Code7 ERP is an enterprise ERP project developed during my time at Ebsor Infosystem, involving business-oriented application development using Kendo UI and .NET technologies.",
    technologies: ["ASP.NET Core", ".NET", "Kendo UI", "REST APIs", "SQL", "Visual Studio"],
    accentColor: "from-blue-600 via-indigo-600 to-violet-600",
    stats: [
      { label: "Client Layer", value: "Kendo UI Suite" },
      { label: "Backend", value: "ASP.NET Core" },
      { label: "Domain", value: "Enterprise Operations" },
      { label: "Organization", value: "Ebsor Infosystem" }
    ],
    overview:
      "Code7 ERP is an enterprise resource planning web application developed at Ebsor Infosystem Pvt. Ltd. (Malappuram, Kerala) using ASP.NET Core MVC, .NET, SQL, REST APIs, and Kendo UI. It supports structured Master, Transaction, and Report modules across data-heavy enterprise workflows.",
    purpose:
      "Streamline multi-department enterprise operations by standardizing Master records, validated transactional forms, and filterable Kendo UI reporting grids in a unified business system.",
    myRole:
      "Developed and maintained business ERP modules as a .NET Developer—building Master, Transaction, and Report views with Kendo UI controls, writing ASP.NET Core MVC Controller.cs handlers for business workflows and API communication, and debugging releases in Visual Studio.",
    keyFeatures: [
      "Enterprise Kendo UI data grids with multi-column sorting, grouping, filtering, and CRUD binding",
      "Master, Transaction, and Report MVC modules with responsive views and form validation",
      "ASP.NET Core MVC Controller.cs pipelines handling HTTP requests, business workflows, and REST APIs",
      "SQL-backed enterprise operations tested and debugged iteratively in Visual Studio"
    ],
    developmentApproach:
      "Strict ASP.NET Core MVC separation between Controller request orchestration, REST service communication, SQL persistence, and Kendo UI tabular interfaces.",
    outcome:
      "Delivered reliable, responsive business ERP modules capable of supporting extensive operational workflows."
  },
  {
    id: "kidonex-feedback",
    slug: "kidonex-feedback",
    title: "Kidonex Customer Feedback & Review",
    tagline: "Customer feedback and review module with responsive MVC views and API handling",
    category: "Business Solutions",
    filterCategories: ["Backend & ERP"],
    badge: "Customer CX",
    status: null,
    ownership: "Ebsor Infosystem",
    role: "Dot Net Developer",
    ctaLabel: "Kidonex Case Study",
    relatedSlugs: ["code7-erp", "pos-business-management", "taskflow"],
    previewType: "kidonex",
    featured: false,
    shortDescription:
      "Customer feedback and review functionality involving MVC views, frontend logic, validations, controller implementation, and REST API integration.",
    technologies: ["ASP.NET Core MVC", "REST APIs", "JavaScript", "HTML/CSS", "Visual Studio"],
    accentColor: "from-emerald-500 via-teal-600 to-cyan-600",
    stats: [
      { label: "Framework", value: "ASP.NET Core MVC" },
      { label: "Domain", value: "Customer Insights" },
      { label: "Integration", value: "REST API Services" },
      { label: "UI Layer", value: "Responsive Views" }
    ],
    overview:
      "The Kidonex Customer Feedback & Review module is a customer-experience application built during my .NET Developer tenure at Ebsor Infosystem. Using ASP.NET Core MVC, JavaScript, and REST APIs, it captures, validates, and routes structured customer satisfaction reviews.",
    purpose:
      "Provide an accessible, validated digital feedback workflow so businesses can collect structured customer ratings and feed insights reliably into operational records.",
    myRole:
      "Built responsive ASP.NET Core MVC views, implemented JavaScript input validations, developed Controller.cs submission handlers, and connected backend REST API services in Visual Studio.",
    keyFeatures: [
      "Intuitive review and rating submission forms with real-time client-side field validation",
      "ASP.NET Core MVC Controller.cs endpoints managing submission pipelines and verification",
      "REST API integration for feedback persistence and structured review handling",
      "Responsive HTML/CSS layout supporting seamless desktop and mobile submissions"
    ],
    developmentApproach:
      "Combined smooth customer-facing form usability with reliable ASP.NET Core MVC controller validation and structured REST API payloads.",
    outcome:
      "Successfully delivered a production module enabling structured customer feedback capture and review insights."
  },
  {
    id: "movie",
    slug: "movie",
    title: "Movie Web Application",
    tagline: "Responsive movie discovery experience built with React.js, Bootstrap & Material UI",
    category: "Entertainment Web Apps",
    filterCategories: ["Frontend Development"],
    badge: "React Showcase",
    status: null,
    ownership: "AllPro TechLabs",
    role: "Frontend Developer",
    ctaLabel: "Movie App Case Study",
    relatedSlugs: ["ecommerce", "apnavilla", "streamline"],
    previewType: "movie",
    featured: false,
    shortDescription:
      "Responsive movie-focused web application built using reusable React components and modern UI libraries.",
    technologies: ["React.js", "JavaScript", "React Bootstrap", "Material UI", "React Icons", "REST APIs"],
    accentColor: "from-rose-500 via-pink-600 to-purple-600",
    stats: [
      { label: "Frontend", value: "React.js" },
      { label: "UI Suite", value: "Material UI & Bootstrap" },
      { label: "State", value: "React Hooks" },
      { label: "Layout", value: "Multi-device Responsive" }
    ],
    overview:
      "A responsive movie browsing web application built at AllPro TechLabs (UL CyberPark, Calicut) using React.js, React Bootstrap, Material UI, and third-party REST APIs. Users can search films by title and view real-time ratings, release dates, genres, posters, and overviews.",
    purpose:
      "Deliver a responsive entertainment catalog demonstrating reusable React component design, asynchronous REST API data fetching, and React hook state management.",
    myRole:
      "Developed modular React components (movie cards, navigation bar, and detail views), handled loading states and third-party API calls with useState and useEffect, and structured responsive grids via React Bootstrap and React Icons.",
    keyFeatures: [
      "Real-time movie catalog fetched from a third-party REST API with loading state management",
      "Title search and detail pages presenting poster, rating, release date, genre, and overview",
      "Modular React components separating cards, navigation bars, and detail views",
      "Responsive React Bootstrap grid paired with Material UI elements and React Icons"
    ],
    developmentApproach:
      "Component-driven React development using useState and useEffect lifecycle hooks alongside React Bootstrap breakpoints for consistent rendering.",
    outcome:
      "Created an engaging, responsive movie discovery web application highlighting reusable React and API integration skills."
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-commerce Web Application",
    tagline: "Modern shopping platform with dynamic product catalog, cart workflows & REST APIs",
    category: "E-Commerce / Retail",
    filterCategories: ["Frontend Development"],
    badge: "React + APIs",
    status: null,
    ownership: "AllPro TechLabs",
    role: "Frontend Developer",
    ctaLabel: "E-commerce Case Study",
    relatedSlugs: ["aishka", "movie", "pos-business-management"],
    previewType: "ecommerce",
    featured: false,
    shortDescription:
      "Responsive e-commerce web application demonstrating reusable React components, dynamic rendering, API integration, and responsive UI development.",
    technologies: ["React.js", "JavaScript", "REST APIs", "React Bootstrap", "Material UI", "React Icons"],
    accentColor: "from-amber-500 via-orange-600 to-red-600",
    stats: [
      { label: "Frontend", value: "React.js" },
      { label: "Data Layer", value: "REST API Sync" },
      { label: "Architecture", value: "Reusable Components" },
      { label: "Experience", value: "Cart & Checkout UI" }
    ],
    overview:
      "A responsive React e-commerce frontend developed at AllPro TechLabs featuring product listing, product detail, and shopping cart views integrated with live REST APIs. Shoppers can filter categories, search items, adjust cart quantities, and view dynamic order totals.",
    purpose:
      "Deliver an intuitive online retail interface uniting multi-page React Router navigation, dynamic REST catalog loading, and real-time shopping cart state updates.",
    myRole:
      "Implemented reusable React components and Material UI controls (cards, grids, buttons, dialogs), wired REST API product fetching with useState and useEffect, configured React Router routes, and built dynamic cart and filtering logic.",
    keyFeatures: [
      "Product listing, product detail, and shopping cart views navigated via React Router",
      "Add-to-cart, remove-from-cart, and quantity update controls with dynamic total calculation",
      "Category filtering and search powered by live REST API product catalog data",
      "Material UI and React Bootstrap layout tuned for mobile, tablet, and desktop shopping"
    ],
    developmentApproach:
      "Built modular React components powered by Hooks (useState, useEffect) and Material UI primitives for snappy cart and catalog updates.",
    outcome:
      "Delivered a dependable, responsive React e-commerce storefront frontend showcasing dynamic state management and API synchronization."
  },
  {
    id: "streamline",
    slug: "streamline",
    title: "Streamline Consortium Website",
    tagline: "Official corporate website showcasing engineering consultancy services and projects",
    category: "Corporate Web",
    filterCategories: ["Frontend Development"],
    badge: "Production Corporate",
    status: null,
    liveUrl: "https://streamline-consortium.vercel.app/",
    ownership: "Streamline Consortium",
    role: "Web Developer",
    ctaLabel: "Streamline Case Study",
    relatedSlugs: ["apnavilla", "urban-escape", "aishka"],
    previewType: "streamline",
    featured: false,
    shortDescription:
      "Corporate website developed using React.js to showcase engineering consultancy services, projects, and company information.",
    technologies: ["React.js", "JavaScript", "Responsive Web Design", "Component Architecture"],
    accentColor: "from-sky-500 via-blue-600 to-indigo-700",
    stats: [
      { label: "Client", value: "Streamline Consortium" },
      { label: "Domain", value: "Engineering Consultancy" },
      { label: "Framework", value: "React.js" },
      { label: "Target", value: "Corporate Presence" }
    ],
    overview:
      "The official digital corporate website for Streamline Consortium, an engineering consultancy firm, built with React.js to present services, project credentials, and company background clearly.",
    purpose:
      "Establish a structured corporate web presence where prospective engineering clients can evaluate services, inspect completed project credentials, and locate contact channels.",
    myRole:
      "Developed and maintained the corporate website using React.js and JavaScript, organizing reusable UI components and optimizing layouts for cross-device readability.",
    keyFeatures: [
      "Clear corporate information architecture showcasing engineering consultancy capabilities",
      "Dedicated project portfolio and service showcase sections",
      "Modular React.js component structure simplifying future content updates",
      "Responsive cross-device presentation across mobile, tablet, and desktop screens"
    ],
    developmentApproach:
      "Constructed a clean, maintainable React codebase structured around reusable section components and responsive layout rules.",
    outcome:
      "Delivered a reliable corporate digital presence presenting Streamline Consortium's consultancy services cleanly with modern React performance."
  },
  {
    id: "aishka",
    slug: "aishka",
    title: "Aishka – Clothing Website",
    tagline: "Modern clothing showcase web application built with React.js",
    category: "E-commerce / Fashion",
    filterCategories: ["Frontend Development"],
    badge: "React Showcase",
    status: null,
    liveUrl: "https://www.aishka.in/",
    ownership: "Frontend Web Project",
    role: "Frontend Developer",
    ctaLabel: "Aishka Case Study",
    relatedSlugs: ["ecommerce", "urban-escape", "movie"],
    previewType: "aishka",
    featured: false,
    shortDescription:
      "Developed a modern clothing showcase website using React.js, presenting fashion products through a clean, responsive, and user-friendly interface.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    stats: [
      { label: "Category", value: "E-commerce / Fashion" },
      { label: "Framework", value: "React.js" },
      { label: "Core Stack", value: "JS, HTML, CSS" },
      { label: "Focus", value: "Responsive UI" }
    ],
    overview:
      "Aishka is a modern clothing showcase web application engineered with React.js to present fashion collections and apparel items in a clean, accessible storefront layout.",
    purpose:
      "Provide fashion shoppers with a visually balanced digital catalog featuring intuitive collection browsing and smooth navigation across desktop and mobile devices.",
    myRole:
      "Built the frontend interface in React.js using JavaScript, HTML, and CSS, structuring reusable product showcase cards and responsive collection grids.",
    keyFeatures: [
      "Modern clothing and fashion collection showcase cards and sections",
      "Clean, user-friendly navigation across featured apparel items",
      "Reusable React.js frontend UI components with semantic HTML",
      "Responsive CSS styling calibrated for mobile, tablet, and desktop viewports"
    ],
    developmentApproach:
      "Structured modular React components paired with clean semantic HTML and custom CSS responsive rules for intuitive apparel browsing.",
    outcome:
      "Created a refined fashion showcase web application delivering crisp product presentation and smooth cross-device usability."
  },
  {
    id: "urban-escape",
    slug: "urban-escape",
    title: "Urban Escape – Travel Website",
    tagline: "Responsive travel & destination showcase built with HTML5, CSS3, JavaScript & Bootstrap",
    category: "Travel & Tourism",
    filterCategories: ["Frontend Development"],
    badge: "Frontend Web",
    status: null,
    liveUrl: "https://urban-escape-lemon.vercel.app/",
    ownership: "Frontend Web Project",
    role: "Frontend Developer",
    ctaLabel: "Urban Escape Study",
    relatedSlugs: ["aishka", "streamline", "apnavilla"],
    previewType: "urban-escape",
    featured: false,
    shortDescription:
      "Developed a responsive travel website showcasing travel destinations and tourism-related information with an engaging layout and user-friendly navigation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    stats: [
      { label: "Category", value: "Travel & Tourism" },
      { label: "Markup & Style", value: "HTML5 & CSS3" },
      { label: "Layout", value: "Bootstrap" },
      { label: "Interactivity", value: "JavaScript" }
    ],
    overview:
      "Urban Escape is a responsive travel website designed to present travel destinations and tourism guides through an engaging editorial layout and straightforward navigation.",
    purpose:
      "Help travelers explore featured destinations and tourism details effortlessly without layout clutter on smartphones, tablets, or desktops.",
    myRole:
      "Designed and developed the frontend pages using HTML5, CSS3, JavaScript, and Bootstrap, focusing on clear destination hierarchy and intuitive navigation.",
    keyFeatures: [
      "Engaging destination showcase sections tailored for travel and tourism discovery",
      "Clear, user-friendly navigation across featured destinations and information blocks",
      "Responsive Bootstrap grid adapting smoothly across device breakpoints",
      "Semantic HTML5 markup combined with custom CSS3 styling and JavaScript interactivity"
    ],
    developmentApproach:
      "Paired Bootstrap's responsive grid system with custom CSS3 presentation and lightweight JavaScript interactions for consistent multi-device display.",
    outcome:
      "Delivered a responsive travel showcase website highlighting destinations cleanly across all screen sizes."
  }
];
