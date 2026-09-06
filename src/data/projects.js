// Comprehensive project catalog and case studies source of truth
export const projects = [
  {
    id: "daybook",
    slug: "daybook",
    title: "Daybook",
    tagline: "Plan your day. Take action. Review your progress. Understand yourself. Improve tomorrow.",
    category: "Personal Productivity & Self-Reflection",
    badge: "Featured Product",
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
    id: "code7-erp",
    slug: "code7-erp",
    title: "Code7 ERP",
    tagline: "Enterprise Resource Planning with rich Kendo UI grid components and .NET backend services",
    category: "ERP / Business Software",
    badge: "Enterprise ERP",
    featured: true,
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
    id: "erp",
    slug: "erp",
    title: "Enterprise ERP Applications",
    tagline: "Master, Transaction, and Report modules engineered in ASP.NET Core MVC",
    category: "Enterprise Software",
    badge: "Full-Stack MVC",
    featured: true,
    shortDescription:
      "Business-focused ERP applications containing Master, Transaction, and Report modules with responsive MVC interfaces, validations, CRUD workflows, filtering, and API integration.",
    technologies: ["ASP.NET Core MVC", ".NET", "REST APIs", "SQL", "Entity Framework", "Visual Studio"],
    accentColor: "from-indigo-600 via-purple-600 to-pink-600",
    stats: [
      { label: "Architecture", value: "MVC Pattern" },
      { label: "Modules", value: "Master, Tx, Report" },
      { label: "Database", value: "SQL Relational" },
      { label: "Workflows", value: "Enterprise CRUD" }
    ],
    overview:
      "A core suite of enterprise applications architected to power operational backbones with dedicated Master data governance, transactional ledger entries, and analytical reports.",
    purpose:
      "Empower enterprise operations with reliable CRUD controls, strict data binding validations, and performant REST API backend communication.",
    myRole:
      "Engineered responsive MVC views, constructed Controller.cs files handling HTTP endpoints and business workflows, implemented form validations, and integrated REST APIs.",
    keyFeatures: [
      "Master Modules: Cataloging and maintenance of enterprise entities with strict schema rules",
      "Transaction Modules: Responsive forms, transactional data binding, and live calculations",
      "Report Modules: Querying, dynamic filtering, and structured operational reporting",
      "End-to-end REST API communication and database mapping"
    ],
    developmentApproach:
      "Built upon ASP.NET Core MVC with robust controller actions, strongly typed ViewModels, and transactional SQL data layers.",
    outcome:
      "Maintained and expanded mission-critical ERP solutions supporting complex daily business operations."
  },
  {
    id: "kidonex-feedback",
    slug: "kidonex-feedback",
    title: "Kidonex Customer Feedback & Review",
    tagline: "Customer feedback and review module with responsive MVC views and API handling",
    category: "Business Solutions",
    badge: "Customer CX",
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
    id: "ai-credential-purchase",
    slug: "ai-credential-purchase",
    title: "AI Credential Purchase Module",
    tagline: "Secure workflow for purchasing and allocating AI credentials within enterprise systems",
    category: "Enterprise Module",
    badge: "AI Commerce",
    featured: false,
    shortDescription:
      "AI Credential Purchase module involving MVC views, frontend workflows, validations, controller implementation, and REST API integration.",
    technologies: ["ASP.NET Core MVC", "REST APIs", "JSON Workflows", "Visual Studio", "SQL"],
    accentColor: "from-violet-600 via-purple-600 to-indigo-700",
    stats: [
      { label: "Module Type", value: "Credential Allocation" },
      { label: "Stack", value: "ASP.NET Core MVC" },
      { label: "Protocol", value: "REST APIs" },
      { label: "Security", value: "Strict Validation" }
    ],
    overview:
      "An enterprise purchasing workflow that allows business users to acquire, allocate, and manage AI model credentials and usage tiers.",
    purpose:
      "Enable seamless transaction workflows for automated AI service quotas within the larger ERP environment.",
    myRole:
      "Developed MVC views, user purchase workflows, dynamic form validation, Controller.cs endpoints, and backend API integration.",
    keyFeatures: [
      "Interactive tier selection and quota calculation views",
      "Rigorous front-end and server-side data validation",
      "Controller-level order and credential balance orchestration",
      "Direct REST API communication for quota provisioning"
    ],
    developmentApproach:
      "Engineered high-accuracy purchase workflows ensuring zero transaction discrepancies during credential allocation.",
    outcome:
      "Enabled business accounts to seamlessly purchase and provision AI capabilities with full auditability."
  },
  {
    id: "movie",
    slug: "movie",
    title: "Movie Web Application",
    tagline: "Responsive movie discovery experience built with React.js, Bootstrap & Material UI",
    category: "Entertainment Web Apps",
    badge: "React Showcase",
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
    badge: "React + APIs",
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
    badge: "Production Corporate",
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
  }
];
