export const projects = [
  {
    id: 'uucb',
    title: 'Ulster Computing Blogs (UUCB)',
    category: 'Full Stack & AI',
    description: 'Social blogging platform created as a final year dissertation project. Uses Natural Language Processing to automatically tag posts by topic and sentiment.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    repo: 'https://github.com/lewsley-r/UUCB/',
    demo: null,
    stack: ['Vue.js', 'PHP Laravel', 'Docker', 'Kubernetes', 'GCP', 'Nginx', 'Python NLP', 'PostgreSQL'],
    highlights: [
      'Automatic NLP-driven topic classification pipeline',
      'Kubernetes cluster orchestration on Google Cloud Platform',
      'Containerized microservices via Docker & Nginx reverse proxy'
    ],
    commitStats: '482 commits • 12 releases'
  },
  {
    id: 'microblogs',
    title: '682 MicroBlogs (Azure Cloud)',
    category: 'Cloud & DevOps',
    description: 'Cloud-native micro-blogging platform engineered for high availability. Built with automated GitHub Actions CI/CD pipelines and serverless Azure Functions.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    repo: 'https://github.com/lewsley-r/682-microblogs',
    demo: null,
    stack: ['Azure Functions', 'Vue.js', 'GitHub Actions', 'Azure Cosmos DB', 'REST API'],
    highlights: [
      'Automated CI/CD pipeline deployment via GitHub Actions',
      'Serverless event-driven architecture using Azure Functions',
      'Scalable document database indexing on Cosmos DB'
    ],
    commitStats: '86 commits • Complete'
  },
  {
    id: 'fantasy-builder',
    title: 'Premier League Fantasy Team Builder',
    category: 'Full Stack & Sports Analytics',
    description: 'Fantasy football team optimizer SPA calculating player metric performance and value ratings using Python Flask algorithms and MongoDB storage.',
    image: '/fantasy_builder.jpg',
    repo: 'https://github.com/lewsley-r/fantasy_team_builder/',
    demo: null,
    stack: ['Angular', 'Python Flask', 'MongoDB', 'REST API'],
    highlights: [
      'Single Page Application (SPA) frontend with Angular',
      'Python analytics algorithm for squad budget optimization',
      'NoSQL document schema for dynamic player stats'
    ],
    commitStats: '64 commits • Complete'
  },
  {
    id: 'portfolio-site',
    title: 'rlewsley.is-a.dev (Developer Portfolio)',
    category: 'Frontend & UI',
    description: 'Personal developer portfolio built with Vue 3, Vite, and Tailwind CSS featuring a Dark/Light mode.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    repo: 'https://github.com/lewsley-r/rlewsley.is-a.dev',
    demo: 'https://rlewsley.is-a.dev',
    stack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Dark/Light mode with warm carbon & amber gold theme',
      'Instant HMR & ultra-fast bundle compilation with Vite',
      'Sleek Warm Carbon & Amber Gold design'
    ],
    commitStats: 'Active • v3.0'
  },
  {
    id: 'pagegrade',
    title: 'PageGrade — SEO Audit Extension',
    category: 'Chrome Extension & SEO',
    description: 'One-click technical SEO audit Chrome extension. Runs 25 checks across 11 weighted categories on any page, scores 0-100. Free tier shows top 5 issues; Pro unlocks full reports. Monetized via Lemon Squeezy with no backend dependency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    repo: 'https://github.com/lewsley-r/pagegrade',
    demo: null,
    stack: ['Manifest V3', 'Vanilla JS', 'Lemon Squeezy', 'HTML/CSS'],
    highlights: [
      '25-point audit engine across 11 weighted SEO categories',
      'Free tier (top 5 issues) + Pro via LS license key activation',
      'Self-contained — no backend, LS API called from the client'
    ],
    commitStats: 'Active • v1.0'
  }
]

export const allCategories = ['All', ...new Set(projects.map(p => p.category))]
