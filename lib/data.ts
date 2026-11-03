import {
  BookOpen,
  Braces,
  BrainCircuit,
  Cloud,
  CloudSun,
  Cpu,
  Database,
  Dumbbell,
  FlaskConical,
  Layers,
  ScanEye,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const PROFILE = {
  name: "Muhammad Yousuf Rehan",
  location: "Karachi, Pakistan",
  email: "yousufrehan.04@gmail.com",
  phone: "+92 331 2448318",
  phoneHref: "tel:+923312448318",
  linkedin: "https://www.linkedin.com/in/yousufza89",
  github: "https://github.com/Yousufza89",
  headline: "Software Engineer & Technical Generalist",
  subheadline: "Full-Stack Architecture, Applied AI & Automated Quality Assurance",
  // Put your PDF at /public/Muhammad-Yousuf-Rehan-Resume.pdf (or change this path).
  resume: "/Muhammad-Yousuf-Rehan-Resume.pdf",
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "repos", label: "Repositories" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  place?: string;
  bullets: string[];
  stack: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Junior Full Stack Developer",
    company: "Swenta Globals",
    type: "Full-time",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Developed features for Apricart OneFlowe, a multi-tenant, multi-branch inventory, order and budget platform, using Next.js (App Router), React, TypeScript, Node.js, PostgreSQL, Drizzle ORM and Supabase; designed schemas, migrations and role-specific dashboards (Tailwind CSS, shadcn/Radix UI, Recharts).",
      "Implemented a 4-tier RBAC model (Super Admin, Head Office, Branch Admin, Order Portal) and tenant isolation with PostgreSQL Row-Level Security through a custom withTenant wrapper that binds organization and branch context to queries.",
      "Built the order workflow with an approval-token (TID) mechanism that validates state transitions (for example PENDING to FULFILLED), and the “Smart Sync” analytics layer that aggregates fulfillments, rejections and refunds for multi-branch executive reporting.",
      "Integrated a Python/PyTorch restocking-prediction API with the Next.js backend to serve per-branch stock forecasts from time-series sales data.",
      "Tested access control (RBAC, RLS), order lifecycle edge cases, analytics accuracy and the Next.js–Python integration; automated bulk user generation and checking with Selenium; used Docker, Git/GitHub and Mermaid.js documentation.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Supabase", "PyTorch", "Selenium", "Docker"],
  },
  {
    role: "Junior Developer",
    company: "Basil Innovations Ltd.",
    type: "Part-time / Contract",
    period: "Jan 2023 – May 2024",
    place: "Remote, Karachi",
    bullets: [
      "Developed and optimized RESTful APIs in Python and Node.js for fintech-oriented internal products in production, improving response time, data validation and reliability.",
      "Designed relational MySQL schemas for data consistency and normalization; containerized services with Docker and maintained CI/CD pipelines.",
      "Tested APIs and backend workflows with Postman, catching edge cases and reducing runtime errors; used Git/GitHub branching and pull requests, and took part in sprint planning, code reviews and documentation.",
    ],
    stack: ["Python", "Node.js", "MySQL", "Docker", "CI/CD", "Postman"],
  },
];

export interface ProjectItem {
  title: string;
  kind: string;
  icon: LucideIcon;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
}

const gh = (name: string) => `https://github.com/Yousufza89/${name}`;

export const PROJECTS: ProjectItem[] = [
  {
    title: "Self-Learning Weather Prediction Agent",
    kind: "Final year project: reinforcement learning, forecasting",
    icon: CloudSun,
    description:
      "My final year project: a self-learning weather prediction system. I designed the preprocessing pipelines for real-world data and compared Random Forest and LightGBM models, alongside a reinforcement-learning approach.",
    stack: ["Python", "Reinforcement Learning", "Random Forest", "LightGBM"],
    repo: gh("Mosam_ai"),
    demo: "https://mosamai01.vercel.app",
    featured: true,
  },
  {
    title: "AI-Powered Book Recommendation System",
    kind: "Recommender systems",
    icon: BookOpen,
    description:
      "A personalized recommendation engine built on the GoodReads dataset, using collaborative filtering to suggest books from reader behaviour.",
    stack: ["Python", "Collaborative Filtering", "GoodReads dataset"],
    repo: gh("GoodReads-RS"),
  },
  {
    title: "SmoothGrad: CNN Interpretability",
    kind: "Computer vision",
    icon: ScanEye,
    description:
      "An implementation of SmoothGrad that reduces noise in convolutional neural network saliency maps by adding noise to the input and averaging the resulting maps.",
    stack: ["Python", "CNNs", "Computer Vision", "Saliency Maps"],
  },
  {
    title: "Student Learning & Course Scheduling Platform",
    kind: "Cloud, full-stack",
    icon: Cloud,
    description:
      "A full-stack platform with authentication, course enrollment and scheduling logic, with backend services and databases deployed on Microsoft Azure.",
    stack: ["Next.js", "TypeScript", "Microsoft Azure"],
    repo: gh("Personalized-Study-Planner-Cloud"),
  },
  {
    title: "SY Fitness Club: Gym Management System",
    kind: "Full-stack, software engineering",
    icon: Dumbbell,
    description:
      "A gym management platform with role-based access, real-time registration and package management. The project includes a full SRS plus ERD, use case, class and sequence diagrams.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    repo: gh("gym-management-webapp"),
  },
  {
    title: "Custom C-Like Compiler",
    kind: "Compiler construction",
    icon: Cpu,
    description:
      "A compiler front end for a C-like language covering lexical, syntax and semantic analysis, with custom data types and validation rules.",
    stack: ["Lexical Analysis", "Parsing", "Semantic Analysis"],
  },
  {
    title: "Software Testing Course Project",
    kind: "Quality assurance",
    icon: FlaskConical,
    description:
      "An automated and manual testing suite that validates application behaviour and edge cases, with the automated layer written in Playwright.",
    stack: ["Playwright", "Manual Testing", "Edge-Case Analysis"],
  },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
  wide?: boolean;
}

export const SKILLS: SkillGroup[] = [
  { title: "Languages", icon: Braces, items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "SQL"] },
  {
    title: "Web & Backend",
    icon: Layers,
    items: ["React", "Next.js (App Router)", "Node.js", "Express.js", "RESTful APIs", "Tailwind CSS", "shadcn/ui", "Recharts", "HTML5", "CSS3"],
  },
  {
    title: "Databases & ORM",
    icon: Database,
    items: ["PostgreSQL (Row-Level Security)", "MySQL", "MongoDB", "Supabase", "Drizzle ORM"],
  },
  {
    title: "Testing & QA",
    icon: ShieldCheck,
    items: ["Playwright", "Selenium", "Postman", "Manual & Automated Testing", "Test Case Design", "Edge-Case Analysis"],
  },
  {
    title: "Machine Learning & AI",
    icon: BrainCircuit,
    items: ["PyTorch", "Random Forest", "LightGBM", "Supervised & Unsupervised Learning", "Reinforcement Learning (Q-Learning)", "Neural Networks", "CNNs", "Computer Vision", "Recommender Systems", "Time-Series Forecasting", "Model Interpretability", "Agentic AI"],
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: Cloud,
    items: ["Microsoft Azure", "Docker", "CI/CD", "Git", "GitHub", "Mermaid.js", "VS Code"],
  },
  {
    title: "Concepts & Practices",
    icon: Workflow,
    wide: true,
    items: ["RBAC", "Multi-Tenant Design", "Authentication", "Information Security", "Data Structures and Algorithms", "OOP", "Operating Systems", "DBMS", "Parallel Programming (OpenMP)", "Agile / Sprint Planning"],
  },
];

export const COURSEWORK = [
  "Software Testing",
  "Cloud Computing (Azure)",
  "Computer Vision",
  "Recommender Systems",
  "Database Management Systems",
  "Information Security",
  "Operating Systems",
  "Parallel Programming (OpenMP)",
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Theory of Automata",
];

export const ACTIVITIES =
  "Participated in university coding competitions, coder cups and hackathons (certificates of participation and achievement), and keep upskilling through online courses and hands-on projects.";
