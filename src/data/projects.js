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
    ownership: "Independent Learning Project",
    role: "Full-Stack Developer",
    previewType: "taskflow",
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
      "TaskFlow is a Django-based task management application developed during the Genstack Internship at BlackBox Learning Academy to implement Django's MVT architecture alongside real-world authentication, notifications, reporting, and AI-powered productivity workflows.",
    purpose:
      "Combine structured daily task tracking, automated email reminders, productivity analytics, and AI-assisted planning within one cohesive web application.",
    myRole:
      "Designed and implemented the full-stack Django MVT application, user authentication flows, PostgreSQL persistence, reminder logic, dashboard statistics, and AI API integrations.",
    keyFeatures: [
      "User authentication with registration, login, logout, and protected routes",
      "Full task CRUD management with priority levels and completed/pending status tracking",
      "Dashboard displaying task statistics, productivity insights, and reports",
      "Pending task notifications and scheduled email reminders for incomplete tasks",
      "AI task suggestions, AI productivity assistant, and learning roadmap generation",
      "Persistent data storage with Neon PostgreSQL and deployment on Render"
    ],
    developmentApproach:
      "Structured around Django's Model-View-Template pattern with relational database persistence in Neon PostgreSQL and REST-based AI API integration.",
    outcome:
      "Delivered a deployed full-stack Django web application integrating practical CRUD workflows with AI-assisted productivity features."
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
    previewType: "inkspace",
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
      "INKSPACE is a Django-based blogging platform created to provide a clean, interactive environment for writing, publishing, managing, and reading structured blog articles.",
    purpose:
      "Implement end-to-end content management, user ownership controls, responsive reading views, and AI-assisted content ideation using Google's Gemini API.",
    myRole:
      "Built the Django MVT backend models, views, authentication and post ownership logic, rich text editing experience, responsive templates, and Gemini API writing assistant integration.",
    keyFeatures: [
      "Blog creation, publishing, editing, and deletion restricted to authenticated authors",
      "Structured blog listing pages and individual article reading detail views",
      "Integrated rich text editor for formatted content authoring",
      "Google Gemini API integration for AI writing assistance and content ideas",
      "Responsive navigation, blog cards, and SQLite persistence across viewports"
    ],
    developmentApproach:
      "Focused on clean Django MVT separation, author-scoped permissions, responsive UI layouts, and seamless Gemini API prompt workflows.",
    outcome:
      "Built a complete publishing platform combining standard content workflows with practical AI writing support."
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
    previewType: "daybook",
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
      "Created a distinct productivity system that bridges the gap between passive task listing and active self-improvement."
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
      "An independent Point of Sale (POS) and business management software project started collaboratively with former colleagues and fellow developers, combining accounting domain insight with modern web architecture.",
    purpose:
      "Plan a structured retail and business management platform connecting billing, payments, stock control, supplier purchases, tax records, and operational reporting.",
    myRole:
      "Contributing functional planning, POS module identification, input field mapping, module relationships, accounting-aligned workflows, and reporting structure while the development team implements backend ASP.NET Core / .NET APIs and React.js frontend views.",
    keyFeatures: [
      "12 planned functional modules spanning Sales & Billing, Inventory, Purchases, Payments, Tax, and Reporting",
      "Structured input field mapping and validation rules across operational forms",
      "Connected transaction flow linking Sales -> Payments -> Inventory -> Reports",
      "Clear separation of functional planning from collaborative .NET and React.js implementation"
    ],
    developmentApproach:
      "Domain-first functional specification driven by accounting principles, translated iteratively with the collaborative backend and frontend engineering team.",
    outcome:
      "Ongoing collaborative development advancing planned business modules from functional blueprints into active implementation."
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
      "ApnaVilla is a real estate web application built collaboratively by the Branding Hut team to support property-related digital services.",
    purpose:
      "Provide property browsing and real estate service interfaces powered by clean frontend architecture integrated with backend Laravel endpoints.",
    myRole:
      "Worked as Frontend Developer building responsive user interfaces using Next.js and React components, collaborating directly with the Laravel backend development team on frontend-backend integration and team project discussions.",
    keyFeatures: [
      "Responsive property and real estate UI interfaces developed with Next.js and React components",
      "User-friendly layouts built using HTML, CSS, JavaScript, and Bootstrap",
      "Cross-team frontend integration with Laravel backend services",
      "Collaborative sprint discussions and requirement alignment with the Branding Hut team"
    ],
    developmentApproach:
      "Modular frontend development coordinated with the backend Laravel developers to ensure clean data integration and responsive cross-device behavior.",
    outcome:
      "Delivered collaborative frontend interfaces integrated seamlessly with the team's Laravel backend workflows."
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
      "Code7 ERP is a comprehensive business software suite created to manage enterprise operations with high data density, real-time validations, and reliable transactional integrity.",
    purpose:
      "Built to streamline multi-department business processes through robust data grids, Master records, and standardized transaction processing.",
    myRole:
      "Developed business-oriented UI modules utilizing Kendo UI controls, integrated REST API endpoints, handled server communication, and participated in MVC controller logic and debugging.",
    keyFeatures: [
      "Rich Kendo UI data grids with multi-column sorting, grouping, and server-side filtering",
      "Master and transaction views with comprehensive client and server data validation",
      "Optimized API calls for high-frequency enterprise data operations",
      "Visual Studio workflow for testing, debugging, and iterative release cycles"
    ],
    developmentApproach:
      "Strict separation of concerns following ASP.NET Core MVC architectural guidelines, leveraging Kendo UI components for heavy tabular data.",
    outcome:
      "Delivered stable, responsive business modules capable of handling extensive operational workflows reliably."
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
      "A dedicated customer engagement module enabling clients to capture, review, and analyze authentic customer feedback and satisfaction ratings.",
    purpose:
      "Provide a clean, user-friendly review workflow that feeds structured customer sentiment directly into business operational records.",
    myRole:
      "Implemented responsive MVC views, client-side input validations, controller request pipelines, and REST API communications.",
    keyFeatures: [
      "Intuitive review and rating submission forms with real-time field validation",
      "Controller endpoints managing submission pipelines and verification",
      "REST API integration for feedback storage and review moderation",
      "Responsive layout for mobile and desktop feedback submission"
    ],
    developmentApproach:
      "Ensured smooth user experience for customers providing reviews while maintaining secure, structured payload handling on the server.",
    outcome:
      "Successfully deployed module enabling structured feedback gathering and customer rating insights."
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
      "A rich media exploration web application featuring dynamic catalog browsing, search filters, and rich movie details.",
    purpose:
      "Demonstrate component reusability, asynchronous API data fetching, and responsive entertainment UI engineering.",
    myRole:
      "Built the responsive React component architecture, integrated movie data APIs, implemented search/filter states using useState and useEffect.",
    keyFeatures: [
      "Dynamic movie catalog grid with responsive posters and metadata",
      "Reusable modal and card components with clean transitions",
      "Search, genre filtering, and real-time query rendering",
      "Mobile-first responsive design across phones, tablets, and desktops"
    ],
    developmentApproach:
      "Component-driven React development combining Material UI controls with React Bootstrap layouts for fast rendering.",
    outcome:
      "Created an engaging, responsive media web app demonstrating strong frontend skills."
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
      "A full-featured e-commerce platform prototype showcasing seamless browsing, category navigation, product filters, and cart calculations.",
    purpose:
      "Provide a fluid consumer shopping experience with instantaneous state updates and reliable API payload binding.",
    myRole:
      "Developed reusable React components, managed client cart states, implemented responsive layouts, and integrated REST APIs.",
    keyFeatures: [
      "Dynamic product grid with instant category filtering and price sorting",
      "Cart state management with real-time quantity adjustments and subtotal tallying",
      "Responsive layout optimized across mobile viewports and large desktop displays",
      "REST API communication for product catalogs and inventory status"
    ],
    developmentApproach:
      "Leveraged modern React Hooks (useState, useEffect, useMemo) for responsive interactions without UI latency.",
    outcome:
      "Delivered a dependable, highly responsive online shopping interface."
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
    ownership: "Streamline Consortium",
    role: "Web Developer",
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
      "The official digital web presence for Streamline Consortium, an engineering consultancy firm.",
    purpose:
      "Present company credentials, past engineering project portfolios, specialized service offerings, and communication channels.",
    myRole:
      "Developed and maintained the official corporate website using React.js, structuring reusable components and optimizing mobile responsiveness.",
    keyFeatures: [
      "Modern corporate showcase with clear information architecture",
      "Service and project portfolio grids highlighting engineering credentials",
      "Performance-optimized static and dynamic assets",
      "Flawless display across mobile, tablet, and executive desktop viewports"
    ],
    developmentApproach:
      "Constructed a clean, maintainable React codebase allowing company personnel to easily update project showcases.",
    outcome:
      "Elevated the corporate digital brand identity for the consultancy with modern React performance."
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
    ownership: "Frontend Web Project",
    role: "Frontend Developer",
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
      "Aishka is a modern clothing showcase website engineered with React.js to present fashion collections and apparel items in a clean, accessible interface.",
    purpose:
      "Deliver an inviting digital storefront experience with clear fashion product presentation and smooth navigation across desktop and mobile devices.",
    myRole:
      "Built the frontend user interface in React.js using JavaScript, HTML, and CSS, structuring reusable product showcase views and responsive layouts.",
    keyFeatures: [
      "Modern clothing and fashion product showcase layout",
      "Clean, user-friendly navigation across collections",
      "Reusable React.js frontend UI components",
      "Responsive styling optimized for mobile, tablet, and desktop screens"
    ],
    developmentApproach:
      "Structured modular React components paired with clean semantic HTML and responsive CSS styling for intuitive apparel browsing.",
    outcome:
      "Created a refined fashion showcase web application delivering clean product presentation and responsive usability."
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
    ownership: "Frontend Web Project",
    role: "Frontend Developer",
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
      "Urban Escape is a responsive travel website designed to present travel destinations and tourism details through an engaging layout and intuitive site navigation.",
    purpose:
      "Make exploring travel destinations and tourism information effortless across desktop, tablet, and mobile viewports.",
    myRole:
      "Designed and developed the frontend pages using HTML5, CSS3, JavaScript, and Bootstrap, focusing on layout hierarchy and accessible navigation.",
    keyFeatures: [
      "Engaging destination showcase sections for travel & tourism content",
      "User-friendly navigation tailored for exploring travel information",
      "Responsive Bootstrap grid adapting smoothly across device breakpoints",
      "Clean semantic HTML5 structure combined with custom CSS3 styling and JavaScript"
    ],
    developmentApproach:
      "Paired Bootstrap's responsive grid system with custom CSS3 presentation and JavaScript interactions for cross-device consistency.",
    outcome:
      "Delivered a responsive travel showcase website highlighting destinations cleanly across all screen sizes."
  }
];
