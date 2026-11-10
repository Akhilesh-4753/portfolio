// Professional experience timeline source of truth
export const experiences = [
  {
    id: "ebsor",
    company: "Ebsor Infosystem Pvt. Ltd.",
    role: "Dot Net Developer",
    period: "12/2024 – 03/2026",
    location: "Malappuram, Kerala, India",
    type: "Full-time",
    isCurrent: false, // Explicitly false: do NOT show Present
    responsibilities: [
      "Developed and maintained ERP web applications using ASP.NET Core MVC and .NET Core following MVC architecture.",
      "Developed Master, Transaction, and Report modules with responsive MVC views, forms, data binding, validations, CRUD operations, filtering, and dynamic UI interactions.",
      "Developed and managed ASP.NET Core MVC Controller.cs files to handle HTTP requests, business workflows, API calls, data processing, and communication between views and backend services.",
      "Integrated and managed REST APIs for communication between frontend MVC applications and backend services.",
      "Developed Kidonex Customer Feedback & Review and AI Credential Purchase modules.",
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
  company: "Branding Hut",
  title: "Freelance Collaboration — Branding Hut",
  location: "Govt. Cyberpark",
  period: "Freelance Collaboration",
  description:
    "Collaborated with Branding Hut for freelance creative work, creating professional posters and promotional designs based on project requirements.",
  highlights: [
    "Delivered professional digital posters and brand promotional assets",
    "Tailored design output to client branding and campaign specifications",
    "Collaboration with an agency located inside Govt. Cyberpark"
  ],
  skills: ["Creative Design", "Visual Communications", "Promotional Artwork", "Client Collaboration"]
};
