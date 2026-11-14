// Professional experience timeline source of truth
export const experiences = [
  {
    id: "blackbox",
    company: "BlackBox Learning Academy",
    role: "Genstack Internship",
    period: "Sept 2026 – Nov 2026",
    location: "Thiruvananthapuram, Kerala, India",
    type: "Internship",
    isCurrent: false,
    projects: [
      {
        title: "Project 1: TaskFlow",
        overview:
          "TaskFlow is a Django-based task management application developed as a practical learning project to understand Django's MVT architecture and implement real-world web application functionalities. It combines task management, user authentication, productivity tracking, reporting, notifications, and AI-powered assistance in one platform.",
        points: [
          {
            label: "User Authentication",
            text: "Implemented user registration, login, logout, and protected access to application features."
          },
          {
            label: "Task Management (CRUD)",
            text: "Developed functionality to create, view, update, and delete tasks."
          },
          {
            label: "Task Prioritization",
            text: "Added priority levels and completed/pending task status management."
          },
          {
            label: "Dashboard & Reports",
            text: "Created a dashboard to display task statistics, productivity insights, and reports."
          },
          {
            label: "Notifications",
            text: "Implemented notifications to highlight pending tasks and important task updates."
          },
          {
            label: "Email Reminders",
            text: "Integrated email reminders for tasks that remain incomplete on their scheduled dates."
          },
          {
            label: "AI Task Suggestions",
            text: "Integrated AI to generate actionable task suggestions based on user input."
          },
          {
            label: "AI Productivity Assistant",
            text: "Developed an AI-powered assistant to support productivity and task planning."
          },
          {
            label: "Learning Roadmap Generation",
            text: "Added AI functionality to generate structured learning roadmaps for different technologies."
          },
          {
            label: "Database Integration",
            text: "Integrated Neon PostgreSQL for persistent application data storage."
          },
          {
            label: "Deployment",
            text: "Deployed the Django application using Render."
          }
        ]
      },
      {
        title: "Project 2: INKSPACE",
        overview:
          "INKSPACE is a Django-based blogging platform designed to provide users with a simple and interactive environment to create, publish, manage, and explore blog content. The project focuses on implementing Django MVT architecture, content management, authentication, and AI-powered writing assistance.",
        points: [
          {
            label: "Blog Creation & Publishing",
            text: "Developed functionality for users to write, create, and publish blog posts."
          },
          {
            label: "Blog Listing & Reading",
            text: "Created blog listing pages and individual blog detail views for reading published content."
          },
          {
            label: "Rich Text Editor",
            text: "Integrated a rich text editing experience for structured blog content creation."
          },
          {
            label: "User Authentication",
            text: "Implemented authentication to manage user access and blog ownership."
          },
          {
            label: "Blog Management",
            text: "Added update and delete functionality to allow users to manage their published content."
          },
          {
            label: "AI Writing Assistant",
            text: "Integrated Google's Gemini API to assist users with blog writing and content generation."
          },
          {
            label: "AI Content Generation",
            text: "Enabled AI-powered suggestions for blog content and writing ideas."
          },
          {
            label: "Responsive UI",
            text: "Developed responsive navigation, blog cards, and layouts for different screen sizes."
          },
          {
            label: "Database Integration",
            text: "Used SQLite for application data storage."
          }
        ]
      }
    ],
    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Render",
      "Gemini API",
      "Groq API",
      "Neon PostgreSQL",
      "SQLite",
      "Git",
      "GitHub"
    ]
  },
  {
    id: "ebsor",
    company: "Ebsor Infosystem Pvt. Ltd.",
    role: "Dot Net Developer",
    period: "Dec 2024 – Mar 2026",
    location: "Malappuram, Kerala, India",
    type: "Full-time",
    isCurrent: false, // Explicitly false: do NOT show Present
    responsibilities: [
      "Developed and maintained ERP web applications using ASP.NET Core MVC and .NET Core following MVC architecture.",
      "Developed Master, Transaction, and Report modules with responsive MVC views, forms, data binding, validations, CRUD operations, filtering, and dynamic UI interactions.",
      "Developed and managed ASP.NET Core MVC Controller.cs files to handle HTTP requests, business workflows, API calls, data processing, and communication between views and backend services.",
      "Integrated and managed REST APIs for communication between frontend MVC applications and backend services.",
      "Developed the Kidonex Customer Feedback & Review module.",
      "Worked on the Code7 ERP project using Kendo UI for advanced enterprise UI controls and data tables.",
      "Used Visual Studio for development, debugging, testing, and issue resolution."
    ],
    technologies: [
      "ASP.NET Core",
      ".NET",
      "ASP.NET Core MVC",
      "REST APIs",
      "SQL",
      "Kendo UI",
      "Visual Studio"
    ]
  },
  {
    id: "allpro",
    company: "AllPro TechLabs",
    role: "Web Development",
    period: null,
    venue: "UL CyberPark",
    location: "Calicut, Kerala, India",
    type: "Full-time",
    isCurrent: false,
    projects: [
      {
        title: "Project 1: Movie Web Application",
        points: [
          "Built a movie browsing application that fetches and displays real-time data from a third-party REST API.",
          "Created reusable components such as movie cards, navigation bar, and detail views to keep the code modular.",
          "Implemented search functionality so users can find movies by title.",
          "Displayed movie details including poster, rating, release date, genre, and overview.",
          "Managed loading states and API data with useState and useEffect.",
          "Used React Bootstrap’s grid system to keep the layout responsive across screen sizes.",
          "Added React Icons for ratings, search, and navigation to improve usability."
        ]
      },
      {
        title: "Project 2: E-commerce Web Application",
        points: [
          "Developed an e-commerce frontend with product listing, product detail, and shopping cart pages.",
          "Integrated REST APIs to fetch product data dynamically, including images, prices, and categories.",
          "Implemented add-to-cart, remove-from-cart, and quantity update features, with the total price calculated dynamically.",
          "Added category filtering and search so users can find products faster.",
          "Used Material UI components (cards, grids, buttons, dialogs) for a clean, consistent design.",
          "Used React Router for page navigation and useState/useEffect for state and data handling.",
          "Optimized the layout for mobile, tablet, and desktop to keep the shopping experience consistent."
        ]
      }
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "Bootstrap",
      "Material UI",
      "React Icons",
      "Axios",
      "React Bootstrap",
      "Git",
      "GitHub",
      "Postman",
      "Vercel"
    ]
  },
  {
    id: "myg",
    company: "myG India Private Limited",
    role: "Accountant Executive",
    period: "Jan 2023 – May 2024",
    location: "Calicut, Kerala, India",
    type: "Full-time",
    isCurrent: false,
    categories: [
      {
        title: "Core Accounting & Reporting",
        points: [
          "Finalized financial statements and balance sheets, and prepared monthly financial reports.",
          "Maintained the General Ledger (GL) and managed financial and accounting records.",
          "Performed ledger and bank reconciliations to ensure accuracy and resolve discrepancies.",
          "Prepared consolidation reports across entities or departments."
        ]
      },
      {
        title: "Payables, Receivables & Planning",
        points: [
          "Managed Accounts Payable (AP) and Accounts Receivable (AR) cycles.",
          "Planned payments and monitored cash flow to meet vendor and operational obligations."
        ]
      },
      {
        title: "Tax & Compliance",
        points: [
          "Handled GST filing, TDS deductions, and related tax compliance requirements."
        ]
      },
      {
        title: "Assets & Inventory",
        points: [
          "Tracked fixed assets and calculated depreciation.",
          "Maintained inventory and stock registers, and prepared Excel-based stock summaries and reports."
        ]
      },
      {
        title: "Analysis & Presentation",
        points: [
          "Analyzed cost variances and financial data to support management decisions.",
          "Prepared PowerPoint presentations summarizing monthly financial performance."
        ]
      }
    ],
    technologies: [
      "SAP B1",
      "Excel",
      "PowerPoint",
      "WordPress",
      "GST Portal",
      "E-WayBill System"
    ]
  }
];

export const freelanceExperience = {
  heading: {
    badge: "FREELANCE & COLLABORATION",
    title: "Beyond",
    highlight: "Development",
    subtitle: "Creative work, web development, SEO, and real-world team collaboration."
  },
  mainCollaboration: {
    organization: "Branding Hut",
    location: "Govt. Cyberpark, Kozhikode, Kerala, India",
    description:
      "Collaborated with Branding Hut on freelance projects involving website development, creative design, technical SEO, and digital business activities. Worked alongside the team to deliver client-focused digital solutions while gaining exposure to real-world project workflows, client requirements, and business discussions."
  },
  contributions: [
    {
      title: "Website Development",
      icon: "MonitorSmartphone",
      description:
        "Collaborated on client-focused web development tasks, translating project requirements into responsive digital experiences."
    },
    {
      title: "Creative & Poster Design",
      icon: "PenTool",
      description:
        "Created professional posters and visual promotional assets aligned with brand specifications and design goals."
    },
    {
      title: "SEO & Organic Growth",
      icon: "TrendingUp",
      description:
        "Implemented comprehensive on-page, technical, and off-page SEO optimizations to strengthen website structure and drive sustainable organic traffic."
    },
    {
      title: "Business Meetings & Team Collaboration",
      icon: "Handshake",
      description:
        "Participated in client discussions, business activities, and collaborative team workflows across real-world projects."
    }
  ],
  featuredProject: {
    badge: "FEATURED TEAM PROJECT",
    name: "ApnaVilla",
    category: "Real Estate Web Application",
    organization: "Branding Hut Team",
    myRole: "Frontend Developer",
    description:
      "Collaborated with the Branding Hut team to develop ApnaVilla, a real estate web application designed to support property-related digital services.",
    myContributions: [
      "Developed frontend interfaces using React.js.",
      "Implemented responsive and user-friendly UI components.",
      "Worked with the Laravel backend development team.",
      "Collaborated with team members on frontend and backend integration.",
      "Participated in team discussions and project development activities."
    ],
    teamCollaborationContext: {
      frontendScope: "React.js UI components, responsive layouts, and client-side application views",
      backendScope: "Managed by the Branding Hut Laravel backend development team",
      integrationNote:
        "Coordinated closely across team members to integrate React.js frontend interfaces with Laravel backend services."
    },
    technologies: [
      "React.js",
      "JavaScript",
      "Laravel",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Bootstrap"
    ]
  }
};
