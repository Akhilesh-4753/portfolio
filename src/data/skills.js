// 6 Clean, balanced skill categories with exact technologies and additions
export const skillCategories = [
  {
    id: "frontend",
    category: "Frontend",
    title: "Frontend Development",
    icon: "Layout",
    description: "Component-driven architectures, reactive state workflows, and responsive web design.",
    skills: [
      { name: "React.js", level: "Primary", context: "Component architecture, hooks & SPA routing" },
      { name: "JavaScript", level: "Core", context: "Modern ES6+, DOM manipulation & async logic" },
      { name: "HTML", level: "Core", context: "Semantic HTML5, accessible & clean markup" },
      { name: "CSS", level: "Core", context: "Responsive layouts, Flexbox, Grid & styling" },
      { name: "Bootstrap", level: "Styling", context: "Responsive grids & standardized UI modules" },
      { name: "jQuery", level: "Library", context: "DOM traversal & legacy UI integrations" }
    ]
  },
  {
    id: "backend",
    category: "Backend",
    title: "Backend Development",
    icon: "Server",
    description: "Server-side controllers, API integration, and enterprise business workflows.",
    skills: [
      { name: "ASP.NET Core", level: "Primary", context: "MVC pattern, controllers, middleware & services" },
      { name: "ASP.NET Core MVC", level: "Primary", context: "Master, Transaction & Report modules" },
      { name: "REST APIs", level: "Core", context: "HTTP endpoints, payload handling & CRUD sync" }
    ]
  },
  {
    id: "database",
    category: "Database",
    title: "Database & Data Access",
    icon: "Database",
    description: "Relational data modeling, schema governance, queries, and ORM pipelines.",
    skills: [
      { name: "SQL", level: "Core", context: "Relational queries, schema design, filtering & data integrity" },
      { name: "Entity Framework", level: "ORM", context: "Data access layer, entity mappings & query pipelines" }
    ]
  },
  {
    id: "mobile",
    category: "Mobile",
    title: "Mobile Application Development",
    icon: "Smartphone",
    description: "Cross-platform mobile development with offline persistence and cloud integration.",
    skills: [
      { name: "React Native", level: "Primary", context: "Cross-platform mobile application development" },
      { name: "Firebase", level: "Cloud", context: "Authentication, cloud services, and application support" },
      { name: "SQLite", level: "Storage", context: "Local/offline data storage and persistence" }
    ]
  },
  {
    id: "ui-libraries",
    category: "UI Libraries",
    title: "UI Component Libraries",
    icon: "Layers",
    description: "Enterprise UI suites and accessible modern component ecosystems.",
    skills: [
      { name: "Kendo UI", level: "Enterprise UI", context: "Complex enterprise data grids & controls in Code7 ERP" },
      { name: "Material UI", level: "UI Suite", context: "Modern design components & theme controls" },
      { name: "React Bootstrap", level: "UI Library", context: "Responsive layout components & standardized UI structures" },
      { name: "React Icons", level: "Icons", context: "Vector icon integrations across web applications" }
    ]
  },
  {
    id: "tools",
    category: "Tools & Workflow",
    title: "Tools & Developer Workflow",
    icon: "Wrench",
    description: "Development environments, version control, and engineering collaboration.",
    skills: [
      { name: "Visual Studio", level: "IDE", context: "Enterprise .NET development, debugging & solution management" },
      { name: "Git", level: "Version Control", context: "Branch management, commit hygiene & code history" },
      { name: "GitHub", level: "Collaboration", context: "Code repository hosting, pull requests & workflows" }
    ]
  }
];
