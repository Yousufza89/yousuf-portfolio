export const GITHUB_USER = "Yousufza89";

export const CATEGORIES = [
  "Full-Stack",
  "AI & Machine Learning",
  "Testing & QA",
  "Systems & Compilers",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Repo {
  name: string;
  description: string;
  category: Category;
  language?: string;
  tags: string[];
  stars: number;
  forks: number;
  url: string;
  demo?: string;
}

const u = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

/**
 * Static snapshot of the public repositories. Star and fork counts are refreshed
 * from the GitHub API at request time (see lib/github.ts); everything else lives here.
 * To add a repo, append an entry and pick one of the four categories.
 */
export const repos: Repo[] = [
  {
    name: "Mosam_ai",
    description:
      "Self-learning weather prediction project built in Python notebooks, with a live deployment.",
    category: "AI & Machine Learning",
    language: "Jupyter Notebook",
    tags: ["Python", "Machine Learning", "Weather Forecasting"],
    stars: 0,
    forks: 0,
    url: u("Mosam_ai"),
    demo: "https://mosamai01.vercel.app",
  },
  {
    name: "GoodReads-RS",
    description:
      "AI-powered book recommendation system using the GoodReads dataset with collaborative filtering.",
    category: "AI & Machine Learning",
    tags: ["Python", "Collaborative Filtering", "Recommender Systems"],
    stars: 0,
    forks: 0,
    url: u("GoodReads-RS"),
  },
  {
    name: "apricart-one-flowe-system--010",
    description:
      "Apricart OneFlowe: the multi-tenant, multi-branch inventory, order and budget platform I worked on at Swenta Globals.",
    category: "Full-Stack",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Supabase"],
    stars: 0,
    forks: 0,
    url: u("apricart-one-flowe-system--010"),
  },
  {
    name: "Personalized-Study-Planner-Cloud",
    description:
      "A cloud-native web application built with Next.js and Microsoft Azure to help students organize academic schedules and resources.",
    category: "Full-Stack",
    language: "TypeScript",
    tags: ["Next.js", "Microsoft Azure", "TypeScript"],
    stars: 0,
    forks: 0,
    url: u("Personalized-Study-Planner-Cloud"),
  },
  {
    name: "ICC-WebApp",
    description: "A C# web application.",
    category: "Full-Stack",
    language: "C#",
    tags: ["C#", "Web App"],
    stars: 0,
    forks: 0,
    url: u("ICC-WebApp"),
  },
  {
    name: "yousuf-portfolio",
    description: "An earlier personal portfolio site built with TypeScript.",
    category: "Full-Stack",
    language: "TypeScript",
    tags: ["TypeScript", "Portfolio"],
    stars: 0,
    forks: 0,
    url: u("yousuf-portfolio"),
  },
  {
    name: "gym-management-webapp",
    description:
      "Full-stack gym management site with user registration, membership handling, an admin dashboard and workout plans.",
    category: "Full-Stack",
    language: "CSS",
    tags: ["React", "Node.js", "Express", "MySQL"],
    stars: 0,
    forks: 0,
    url: u("gym-management-webapp"),
  },
  {
    name: "StockSentiment-LSTM",
    description:
      "Predicts hourly stock prices by combining real-time Twitter and news sentiment with stacked LSTM and GRU models.",
    category: "AI & Machine Learning",
    language: "Jupyter Notebook",
    tags: ["LSTM", "GRU", "Sentiment Analysis", "Deep Learning"],
    stars: 0,
    forks: 0,
    url: u("StockSentiment-LSTM"),
  },
  {
    name: "hourly-stock-forecasting",
    description:
      "Hourly stock price prediction using sentiment from Twitter and news headlines with an LSTM network.",
    category: "AI & Machine Learning",
    language: "Python",
    tags: ["LSTM", "Sentiment Analysis", "Time Series"],
    stars: 1,
    forks: 0,
    url: u("hourly-stock-forecasting"),
  },
  {
    name: "sentiment-stock-prediction",
    description:
      "Hourly stock price prediction using sentiment from Twitter and news headlines with an LSTM network.",
    category: "AI & Machine Learning",
    tags: ["LSTM", "Sentiment Analysis", "Time Series"],
    stars: 0,
    forks: 0,
    url: u("sentiment-stock-prediction"),
  },
  {
    name: "ai-maze-solver",
    description:
      "Maze-solving AI using DFS, BFS and A* with real-time visualization in Python.",
    category: "AI & Machine Learning",
    language: "Python",
    tags: ["DFS", "BFS", "A*", "Visualization"],
    stars: 1,
    forks: 0,
    url: u("ai-maze-solver"),
  },
  {
    name: "parallel-linear-algebra-openmp",
    description:
      "Parallel Cramer’s Rule and matrix inversion with OpenMP, built to speed up large matrix computations.",
    category: "Systems & Compilers",
    language: "C++",
    tags: ["OpenMP", "Parallel Computing", "Linear Algebra"],
    stars: 0,
    forks: 0,
    url: u("parallel-linear-algebra-openmp"),
  },
  {
    name: "automata-grammar-checker",
    description:
      "A sentence parser that validates input against predefined grammar rules using Theory of Automata principles.",
    category: "Systems & Compilers",
    tags: ["Theory of Automata", "Parsing"],
    stars: 0,
    forks: 0,
    url: u("automata-grammar-checker"),
  },
  {
    name: "reader-writer-semaphore",
    description:
      "A system-level solution to the classic Reader-Writer problem, using custom system calls and semaphores.",
    category: "Systems & Compilers",
    language: "C++",
    tags: ["Semaphores", "System Calls", "Concurrency"],
    stars: 0,
    forks: 0,
    url: u("reader-writer-semaphore"),
  },
  {
    name: "banking-network-simulation",
    description:
      "Simulation of a bank’s branch network topology in Cisco Packet Tracer, with routing protocols, security configuration and connectivity testing.",
    category: "Systems & Compilers",
    tags: ["Cisco Packet Tracer", "Routing", "Network Security"],
    stars: 1,
    forks: 0,
    url: u("banking-network-simulation"),
  },
  {
    name: "ssembly-generic-sorting",
    description:
      "A sorting algorithm in x86 Assembly using the Irvine32 library, sorting an array in ascending order.",
    category: "Systems & Compilers",
    tags: ["x86 Assembly", "Irvine32", "Sorting"],
    stars: 0,
    forks: 0,
    url: u("ssembly-generic-sorting"),
  },
  {
    name: "car-rental-cpp",
    description:
      "A menu-driven C++ project for managing car rentals, bookings and payments.",
    category: "Systems & Compilers",
    language: "C++",
    tags: ["C++", "CLI"],
    stars: 0,
    forks: 0,
    url: u("car-rental-cpp"),
  },
  {
    name: "contact-book-c",
    description: "A command-line contact management system written in C.",
    category: "Systems & Compilers",
    tags: ["C", "CLI"],
    stars: 0,
    forks: 0,
    url: u("contact-book-c"),
  },
  {
    name: "Four-Way-Traffic-Signal-System",
    description:
      "A microcontroller-based simulation of a four-way traffic signal system on Arduino.",
    category: "Systems & Compilers",
    tags: ["Arduino", "Embedded"],
    stars: 0,
    forks: 0,
    url: u("Four-Way-Traffic-Signal-System"),
  },
  {
    name: "arduino-traffic-signal",
    description:
      "A microcontroller-based simulation of a four-way traffic signal system on Arduino.",
    category: "Systems & Compilers",
    tags: ["Arduino", "Embedded"],
    stars: 0,
    forks: 0,
    url: u("arduino-traffic-signal"),
  },
];
