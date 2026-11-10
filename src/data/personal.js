// Personal information source of truth
export const personalInfo = {
  name: "Akhilesh P",
  title: "Software Developer",
  positioning: "Software Developer | React.js | ASP.NET Core | REST APIs",
  heroLabel: "SOFTWARE DEVELOPER",
  heroHeadline: "Web Developer in Kozhikode, Kerala",
  heroBio:
    "Hi, I'm Akhilesh P. With a strong commerce foundation and hands-on experience across enterprise .NET ERP systems and full-stack Python Django web applications, I build performant digital products enhanced with practical AI API integrations.",
  about: {
    badge: "ABOUT ME",
    title: "More Than Code.",
    highlight: "Built on Business Thinking.",
    intro:
      "From understanding business operations to engineering software solutions, my journey combines analytical thinking, technology, and a passion for building meaningful products.",
    careerJourney: {
      heading: "My Career",
      highlight: "Journey",
      stages: [
        {
          step: "01",
          role: "Accountant Executive",
          company: "myG India Private Limited",
          description:
            "Built a strong foundation in financial accounting, reporting, GST compliance, and business operations.",
          skills: ["SAP B1", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "GST Compliance", "Excel", "Reporting"],
          icon: "briefcase"
        },
        {
          step: "02",
          role: "Web Developer",
          company: "AllPro TechLabs",
          description:
            "Transitioned into frontend engineering, building responsive movie and e-commerce web apps with React.",
          skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "React Bootstrap", "React Icons", "REST APIs", "Material UI"],
          icon: "globe"
        },
        {
          step: "03",
          role: ".NET Developer",
          company: "Ebsor Infosystem Pvt. Ltd.",
          description:
            "Developed enterprise ERP modules and REST API integrations using ASP.NET Core MVC and Kendo UI.",
          skills: ["ASP.NET Core", "C#", "MVC", "jQuery", "Bootstrap", "Entity Framework", "SQL", "HTML", "CSS", "JavaScript", "Kendo UI", "SQL", "REST APIs"],
          icon: "server"
        },
        {
          step: "04",
          role: "Python Django Developer",
          company: "BlackBox Learning Academy",
          description:
            "Strengthened full-stack backend skills by building TaskFlow and INKSPACE with AI API integrations.",
          skills: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript", "Gemini API", "Groq API", "PostgreSQL"],
          icon: "code"
        },
        {
          step: "05",
          role: "Software Engineer",
          company: "Continuing Career Goal",
          description:
            "Combining business insights, full-stack engineering, and Generative AI to build intelligent, scalable software products.",
          skills: [
            "Full-Stack Development",
            "Generative AI",
            "AI Chatbots & Agents",
            "ERP & Web",
            "Product Engineering"
          ],
          icon: "sparkles",
          isGoal: true
        }
      ]
    },
    accordion: [
      {
        number: "01",
        title: "My Foundation",
        subtitle: "Commerce background & financial operations",
        description:
          "I started my professional journey with a Bachelor of Commerce from Calicut University. My experience in accounting at myG India Private Limited helped me understand financial operations, business processes, reporting, and the importance of accuracy. This background shaped my analytical thinking and ability to understand real business problems."
      },
      {
        number: "02",
        title: "My Transition",
        subtitle: "Moving from accounting into software development",
        description:
          "My curiosity about technology inspired me to move from accounting into software development. Working with .NET, ASP.NET Core MVC, and enterprise ERP applications allowed me to transform business workflows into practical software solutions."
      },
      {
        number: "03",
        title: "What I Build",
        subtitle: "Full-stack web apps, REST APIs & Generative AI",
        description:
          "I work across frontend and backend development using React.js, Python, Django, C#, and ASP.NET Core. Through projects like TaskFlow and INKSPACE, I've explored application architecture, database integration, authentication, REST APIs, and Generative AI integrations using Google Gemini and Groq."
      },
      {
        number: "04",
        title: "Beyond Development",
        subtitle: "Continuous learning & future product vision",
        description:
          "I'm passionate about continuous learning, exploring Generative AI, building intelligent chatbots, and developing solutions that simplify business operations. My long-term ambition is to become a well-rounded Software Engineer and eventually build technology products that create meaningful value for businesses."
      }
    ]
  },
  email: "akhipn4753@gmail.com",
  phone: "+91 9526008613",
  location: "Kerala, India",
  profileImage: "/Akhilesh/hero_image.png",
  resumeUrl: "/Akhilesh_P_Resume.pdf",
  status: "Building real-world software",
  activeWork: {
    badge: "FEATURED ONGOING PROJECT",
    title: "POS Sales Software",
    organization: "Ebsor Infosystem",
    status: "Currently in Development",
    role: "Product Planning, Functional Analysis & Business Logic",
    description:
      "Collaborating with the Ebsor Infosystem team to plan and develop a Point of Sale (POS) software solution. Leveraging my previous accounting experience and understanding of business operations, I contribute to the functional planning and system design of the application.",
    responsibilities: [
      "POS module identification and planning.",
      "Input field and form structure definition.",
      "Module relationships and data flow planning.",
      "Sales and billing workflow planning.",
      "Inventory and stock management planning.",
      "Purchase and supplier management planning.",
      "Customer and payment workflow planning.",
      "Reports and analytics structure planning.",
      "Business logic and validation requirements.",
      "Team collaboration and requirement discussions."
    ],
    moduleTiers: [
      {
        tierLabel: "Core POS & Customer Operations",
        modules: [
          { name: "Dashboard", icon: "LayoutDashboard" },
          { name: "Sales & Billing", icon: "Receipt" },
          { name: "Returns & Refunds", icon: "RotateCcw" },
          { name: "Customer Management", icon: "Users" }
        ]
      },
      {
        tierLabel: "Catalog, Stock & Procurement",
        modules: [
          { name: "Products & Categories", icon: "Package" },
          { name: "Inventory & Stock", icon: "Boxes" },
          { name: "Purchases & Suppliers", icon: "Truck" }
        ]
      },
      {
        tierLabel: "Finance, Analytics & Governance",
        modules: [
          { name: "Payments & Expenses", icon: "Wallet" },
          { name: "Tax & Transactions", icon: "FileSpreadsheet" },
          { name: "Reports & Analytics", icon: "BarChart3" },
          { name: "User & Role Management", icon: "ShieldCheck" },
          { name: "System Settings", icon: "Settings" }
        ]
      }
    ],
    transactionWorkflow: [
      {
        step: "01",
        title: "Sales & Billing",
        detail: "Line items captured, discounts & tax logic validated, invoice generated",
        icon: "Receipt"
      },
      {
        step: "02",
        title: "Payments & Expenses",
        detail: "Payment mode recorded, settlement logged, customer balance updated",
        icon: "Wallet"
      },
      {
        step: "03",
        title: "Inventory & Stock",
        detail: "Item stock quantities adjusted and reorder thresholds evaluated",
        icon: "Boxes"
      },
      {
        step: "04",
        title: "Reports & Analytics",
        detail: "Sales registers, tax summaries, and dashboard KPIs updated",
        icon: "BarChart3"
      }
    ],
    technicalCollaboration: {
      myContribution:
        "Functional planning, module architecture, input field mapping, business workflows, and accounting domain expertise.",
      backend: {
        stack: "ASP.NET Core / .NET",
        scope: "Backend APIs, database operations, and server-side implementation handled by the Ebsor Infosystem engineering team."
      },
      frontend: {
        stack: "React.js",
        scope: "Client-side UI interfaces and component rendering implemented by the Ebsor Infosystem engineering team."
      }
    }
  },
  freelanceWork: {
    title: "Freelance Collaboration — Branding Hut",
    company: "Branding Hut",
    location: "Govt. Cyberpark",
    description:
      "Collaborated with Branding Hut for freelance creative work, creating professional posters and promotional designs based on project requirements."
  }
};
