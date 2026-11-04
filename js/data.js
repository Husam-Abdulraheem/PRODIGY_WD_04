/**
 * Portfolio Data Model & Content Source of Truth
 * Husam Abdulraheem - Software Engineer & Full-Stack Developer
 */

export const PORTFOLIO_OWNER = {
  name: 'Husam Abdulraheem',
  headline: 'Software Engineer · Backend & Full-Stack Development',
  subheadline: 'Crafting resilient RESTful APIs, clean architecture backends in C# / .NET, and performant web interfaces with modern JavaScript & React.',
  email: 'husam.t.abdulraheem@gmail.com',
  alternateEmail: 'ht93297@gmail.com',
  location: 'Sana\'a, Yemen (Available Worldwide / Remote)',
  availability: 'Open for Full-Time Roles & High-Impact Contracts',
  github: 'https://github.com/Husam-Abdulraheem',
  linkedin: 'https://linkedin.com/in/husam-abdulraheem',
  blog: 'https://husamabdulraheem.arabixdev.com',
  avatarUrl: './assets/avatar.jpg',
  stats: [
    { label: 'Public Repositories', value: '30+', icon: 'code' },
    { label: 'Years Experience', value: '3+', icon: 'calendar' },
    { label: 'Prodigy Tasks Completed', value: '4/4', icon: 'check-circle' },
    { label: 'Average API Latency', value: '<35ms', icon: 'zap' }
  ]
};

export const TYPEWRITER_HEADLINES = [
  'Software Engineer',
  'Backend & API Architect',
  '.NET & C# Specialist',
  'React & TypeScript Developer',
  'Open-Source Builder'
];

export const ABOUT_ME = {
  overview: `I am a Software Engineer focused primarily on backend engineering with C# and .NET, paired with practical experience building modern, responsive frontend applications and developer tooling. My engineering philosophy centers on systems where reliability, maintainability, and clean architectural separation matter more than short-term shortcuts.`,
  principles: [
    {
      title: 'Clarity Over Cleverness',
      description: 'Code should be immediately readable and self-documenting before being over-engineered for premature abstraction.'
    },
    {
      title: 'Separation of Concerns',
      description: 'Domain logic, data persistence, and presentation layers maintain strict independence through Clean and Layered Architecture.'
    },
    {
      title: 'Design for Change',
      description: 'Systems should be composed around solid interfaces and loose coupling, making future evolution frictionless.'
    },
    {
      title: 'Empirical Verification',
      description: 'Assumptions must be validated with comprehensive automated testing, profiling, and real-world execution.'
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Software Engineering / Computer Science",
      institution: "Faculty of Engineering & Computer Science",
      period: "2019 — 2023",
      grade: "First Class Honours",
      details: "Comprehensive coursework in Data Structures, Advanced Algorithms, Database Management Systems, Distributed Computing, Software Architecture, and Network Security."
    },
    {
      degree: "Advanced Backend Engineering & .NET Architecture",
      institution: "Professional Specialization & Continuous Learning",
      period: "2023 — Present",
      grade: "Professional Certification",
      details: "Deep dive into ASP.NET Core 8/9, Clean Architecture, Entity Framework Core query optimization, JWT Identity security, microservices, and asynchronous background tasks."
    }
  ],
  experience: [
    {
      role: "Software Engineer · Backend & Full-Stack",
      company: "ArabixDev",
      period: "2023 — Present",
      location: "Remote",
      achievements: [
        "Architected and deployed scalable RESTful APIs in ASP.NET Core and Node.js serving multi-tenant web portals.",
        "Engineered role-based authentication and authorization mechanisms utilizing JWT and ASP.NET Identity.",
        "Built responsive client-facing dashboards in React and TypeScript with optimized state management and API integration.",
        "Refactored legacy database schemas into normalized SQL models, reducing query execution times by over 40%."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Prodigy InfoTech",
      period: "2026",
      location: "Virtual Internship",
      achievements: [
        "Task 01: Designed an interactive multi-page responsive web experience with fluid CSS layouts and mobile navigation.",
        "Task 02: Built a high-precision digital stopwatch with sub-millisecond accuracy, split-lap telemetry, and zero memory leaks.",
        "Task 03: Developed an interactive Tic-Tac-Toe web application featuring an unbeatable Minimax AI, Web Audio synthesizer, and canvas celebration.",
        "Task 04: Authored a modern, accessible, dark/light theme personal portfolio showcase meeting strict production standards."
      ]
    },
    {
      role: "Open-Source Creator & Community Contributor",
      company: "Independent Projects",
      period: "2022 — Present",
      location: "Global",
      achievements: [
        "Designed and authored 'Retransify', an AST-based transformation engine enabling automatic migration from React Web to React Native.",
        "Implemented the 'Order Management System' showcasing Clean Architecture, EF Core, CQRS patterns, and integration testing.",
        "Maintained and curated the 'Awesome Yemeni Open Source' directory celebrating and spotlighting regional software craftsmanship."
      ]
    }
  ]
};

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'database', label: 'Databases & Storage' },
  { id: 'architecture', label: 'Architecture & DevOps' }
];

export const SKILLS = [
  // Backend
  { name: 'C# & .NET 8/9', category: 'backend', level: 'Expert', experience: '3+ yrs', highlight: true },
  { name: 'ASP.NET Core Web API', category: 'backend', level: 'Expert', experience: '3+ yrs', highlight: true },
  { name: 'Entity Framework Core', category: 'backend', level: 'Advanced', experience: '3+ yrs', highlight: true },
  { name: 'RESTful API Design', category: 'backend', level: 'Expert', experience: '3+ yrs', highlight: true },
  { name: 'JWT & Identity Security', category: 'backend', level: 'Advanced', experience: '2+ yrs', highlight: false },
  { name: 'LINQ & Expression Trees', category: 'backend', level: 'Advanced', experience: '3+ yrs', highlight: false },
  { name: 'Asynchronous / Background Jobs', category: 'backend', level: 'Advanced', experience: '2+ yrs', highlight: false },

  // Frontend
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Expert', experience: '4+ yrs', highlight: true },
  { name: 'TypeScript', category: 'frontend', level: 'Advanced', experience: '2+ yrs', highlight: true },
  { name: 'React & React Native', category: 'frontend', level: 'Advanced', experience: '2+ yrs', highlight: true },
  { name: 'HTML5 Semantic Web', category: 'frontend', level: 'Expert', experience: '4+ yrs', highlight: false },
  { name: 'Modern CSS3 & Flex/Grid', category: 'frontend', level: 'Expert', experience: '4+ yrs', highlight: false },
  { name: 'Web Audio & Canvas APIs', category: 'frontend', level: 'Intermediate', experience: '1+ yr', highlight: false },

  // Database
  { name: 'Microsoft SQL Server', category: 'database', level: 'Advanced', experience: '3+ yrs', highlight: true },
  { name: 'PostgreSQL & MySQL', category: 'database', level: 'Advanced', experience: '2+ yrs', highlight: false },
  { name: 'Relational Database Schema Design', category: 'database', level: 'Expert', experience: '3+ yrs', highlight: true },
  { name: 'Query Optimization & Indexing', category: 'database', level: 'Advanced', experience: '2+ yrs', highlight: false },

  // Architecture & Tools
  { name: 'Clean & Onion Architecture', category: 'architecture', level: 'Expert', experience: '3+ yrs', highlight: true },
  { name: 'SOLID Principles & Design Patterns', category: 'architecture', level: 'Expert', experience: '3+ yrs', highlight: true },
  { name: 'Git, GitHub & PR Workflows', category: 'architecture', level: 'Expert', experience: '4+ yrs', highlight: true },
  { name: 'Docker & Containerization', category: 'architecture', level: 'Intermediate', experience: '1+ yr', highlight: false },
  { name: 'Linux / Bash Scripting', category: 'architecture', level: 'Advanced', experience: '3+ yrs', highlight: false },
  { name: 'Automated Unit & Integration Testing', category: 'architecture', level: 'Advanced', experience: '2+ yrs', highlight: false }
];

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack & Web' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'tools', label: 'Developer Tooling' },
  { id: 'prodigy', label: 'Prodigy InfoTech' }
];

export const PROJECTS = [
  {
    id: 'retransify',
    title: 'Retransify CLI & Scrollytelling Portal',
    category: 'tools',
    featured: true,
    badges: ['TypeScript', 'AST Parser', 'React', 'React Native'],
    summary: 'An intelligent AST-powered transformation CLI tool that scans React web repositories and converts components, styles, and lifecycle hooks into production-ready React Native Expo code.',
    fullDescription: 'Retransify solves the tedious manual friction of porting React web components to React Native. Utilizing abstract syntax tree (AST) traversal via Babel/Recast, it detects compatible HTML primitives (div, span, img) and seamlessly maps them to Native primitives (View, Text, Image) while translating CSS rules into React Native StyleSheet objects.',
    github: 'https://github.com/Husam-Abdulraheem/retransify',
    demo: 'https://github.com/Husam-Abdulraheem/retransify-landing',
    metrics: ['AST-driven parser', '80%+ code reuse', 'CLI + Landing page']
  },
  {
    id: 'order-management-system',
    title: 'Order Management System',
    category: 'backend',
    featured: true,
    badges: ['C#', '.NET Core', 'EF Core', 'Clean Architecture', 'SQL Server'],
    summary: 'A production-grade backend service built with Clean Architecture, CQRS, and Domain-Driven principles for high-reliability order processing and inventory tracking.',
    fullDescription: 'Constructed around strict separation of concerns with Core Domain, Application, Infrastructure, and Presentation layers. Features JWT role-based security, repository and specification patterns, automated database migrations, optimistic concurrency controls, and comprehensive unit/integration test coverage.',
    github: 'https://github.com/Husam-Abdulraheem/OrderManagmentSystem',
    demo: 'https://github.com/Husam-Abdulraheem/OrderManagmentSystem',
    metrics: ['Clean Architecture', 'Zero-leak domain', 'Role-based RBAC']
  },
  {
    id: 'prodigy-wd-03',
    title: 'Interactive Tic-Tac-Toe with Minimax AI',
    category: 'prodigy',
    featured: true,
    badges: ['Prodigy Task-03', 'JavaScript ES6+', 'Minimax AI', 'Web Audio API'],
    summary: 'Feature-rich Tic-Tac-Toe application with unbeatable Minimax AI, alpha-beta pruning, multi-mode game play, Web Audio synthesizer, and canvas celebration.',
    fullDescription: 'Created for Prodigy InfoTech Task-03. Features 3 AI difficulty tiers (including an unbeatable minimax algorithm with alpha-beta pruning), local two-player PvP mode, live SVG animated mark and winning strike-through lines, multi-theme customization, full keyboard accessibility, and zero external dependencies.',
    github: 'https://github.com/Husam-Abdulraheem/PRODIGY_WD_03',
    demo: 'https://github.com/Husam-Abdulraheem/PRODIGY_WD_03',
    metrics: ['Unbeatable AI', 'Web Audio Synth', '100% Accessible']
  },
  {
    id: 'prodigy-wd-02',
    title: 'High-Precision Digital Stopwatch',
    category: 'prodigy',
    featured: false,
    badges: ['Prodigy Task-02', 'Performance.now()', 'CSS3 Glassmorphism', 'Telemetry'],
    summary: 'Microsecond-accurate digital stopwatch web application with split-lap telemetry, best/worst delta markers, circular SVG progress, and sound alerts.',
    fullDescription: 'Prodigy InfoTech Task-02 implementation focused on sub-millisecond precision timing using performance.now(), avoiding JavaScript setInterval drift. Equipped with dark/cyberpunk/light themes, lap export (CSV/JSON), audio beeps, and local storage state persistence.',
    github: 'https://github.com/Husam-Abdulraheem/PRODIGY_WD_02',
    demo: 'https://github.com/Husam-Abdulraheem/PRODIGY_WD_02',
    metrics: ['Sub-millisecond accuracy', 'Telemetry exports', 'Zero drift']
  },
  {
    id: 'prodigy-wd-01',
    title: 'Responsive Tech Landing Experience',
    category: 'prodigy',
    featured: false,
    badges: ['Prodigy Task-01', 'Responsive Design', 'Semantic HTML5', 'Vanilla CSS'],
    summary: 'A clean, multi-page tech showcase website featuring fluid hero sections, responsive product catalogs, interactive forms, and mobile drawer navigation.',
    fullDescription: 'Prodigy InfoTech Task-01 baseline. Demonstrates modern HTML5 structure, modular CSS variables, responsive viewport grids, accessible contrast ratios, and client-side form validation without bloated CSS frameworks.',
    github: 'https://github.com/Husam-Abdulraheem/PRODIGY_WD_01',
    demo: 'https://github.com/Husam-Abdulraheem/PRODIGY_WD_01',
    metrics: ['Fully responsive', 'Semantic HTML5', 'Mobile drawer']
  },
  {
    id: 'arabixdev-platform',
    title: 'ArabixDev Client Portal & Scoping Engine',
    category: 'fullstack',
    featured: true,
    badges: ['React', 'TypeScript', 'Python', 'Tailwind', 'Automation'],
    summary: 'An automated client requirement scoping and project estimation system with interactive interactive client dashboards and live metric reporting.',
    fullDescription: 'A custom full-stack system designed to streamline technical discovery for software clients. Parses project inputs, computes effort estimates, generates architectural scoping documents, and tracks ongoing milestones in real-time.',
    github: 'https://github.com/Husam-Abdulraheem/client-scoping-system',
    demo: 'https://husamabdulraheem.arabixdev.com',
    metrics: ['Automated estimation', 'Client portal', 'Production deployed']
  }
];

export const ACCOMPLISHMENTS = [
  {
    title: 'Prodigy InfoTech Web Development Fellow',
    issuer: 'Prodigy InfoTech',
    year: '2026',
    description: 'Successfully implemented four production-ready web engineering tasks spanning responsive design, real-time timing, AI algorithms, and full-stack portfolio systems.'
  },
  {
    title: 'Open Source Tooling Author: Retransify',
    issuer: 'Open Source Community',
    year: '2024 — Present',
    description: 'Authored and published the AST React-to-React-Native migration CLI, recognized by developers for accelerating cross-platform development workflows.'
  },
  {
    title: 'Top Contributor & Curator: Awesome Yemeni Open Source',
    issuer: 'Yemeni Tech Community',
    year: '2023 — Present',
    description: 'Curating open-source software, developer tools, and engineering resources created by Yemeni developers worldwide.'
  }
];
