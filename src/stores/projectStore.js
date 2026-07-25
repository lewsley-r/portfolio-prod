import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([
    {
      id: 'uucb',
      title: 'Ulster Computing Blogs (UUCB)',
      category: 'Full Stack & AI',
      featured: true,
      description: 'Social blogging platform created as a final year dissertation project. Uses Natural Language Processing (NLP) to automatically tag posts by topic and sentiment analysis.',
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
      id: 'b2b-daas',
      title: 'B2B Open Source Adoption Tracker',
      category: 'Full Stack & Data',
      featured: true,
      description: 'Data-as-a-Service (DaaS) platform tracking B2B open source library adoption signals. Features an agentic n8n DAG pipeline, intent classifier, and Zuplo REST API gateway.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      repo: 'https://github.com/lewsley-r/b2b-daas-tracker/',
      demo: 'http://localhost:5173/',
      stack: ['Vue 3 / React', 'BigQuery', 'n8n DAG', 'OpenAI', 'Zuplo Gateway', 'PostgreSQL'],
      highlights: [
        'Daily automated BigQuery github commit package.json pulls',
        'GPT-4o-mini Intent Classifier dropping non-corporate repos',
        'Natural language Slack @LeadsBot integration for sales teams'
      ],
      commitStats: '142 commits • Active'
    },
    {
      id: 'microblogs',
      title: '682 MicroBlogs (Azure Cloud)',
      category: 'Cloud & DevOps',
      featured: true,
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
      featured: false,
      description: 'Fantasy football team optimizer SPA calculating player metric performance and value ratings using Python Flask algorithms and MongoDB storage.',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
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
      featured: true,
      description: 'Personal developer portfolio built with Vue 3, Vite, and Tailwind CSS featuring a sleek terminal design, CLI command interface, and pool score tracker.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
      repo: 'https://github.com/lewsley-r/rlewsley.is-a.dev',
      demo: 'https://rlewsley.is-a.dev',
      stack: ['Vue 3', 'Vite', 'Tailwind CSS', 'Pinia', 'Vue Router'],
      highlights: [
        'Interactive Terminal CLI command input ($ help, $ whoami, $ projects)',
        'Instant HMR & ultra-fast bundle compilation with Vite',
        'Interactive Pool score breakdown utility'
      ],
      commitStats: 'Active • v2.0'
    }
  ])

  const techCategories = ref([
    {
      name: 'Languages & Frameworks',
      skills: [
        { name: 'JavaScript (ES6+) / TypeScript', level: 95 },
        { name: 'Python (Flask, FastAPI)', level: 92 },
        { name: 'Vue.js / Vue 3 / Nuxt', level: 95 },
        { name: 'PHP / Laravel / Spryker', level: 90 },
        { name: 'Java / Scala / Ruby on Rails', level: 82 }
      ]
    },
    {
      name: 'DevOps & Cloud Orchestration',
      skills: [
        { name: 'Kubernetes & Helm', level: 92 },
        { name: 'Docker & Microservices', level: 95 },
        { name: 'AWS (Glue, EC2, IAM)', level: 90 },
        { name: 'Terraform & GCP / Azure', level: 85 },
        { name: 'GitHub Actions & Jenkins CI/CD', level: 92 }
      ]
    },
    {
      name: 'Data Engineering & Workflows',
      skills: [
        { name: 'Apache Airflow DAGs', level: 90 },
        { name: 'AWS Glue Jobs Orchestration', level: 88 },
        { name: 'Data Mesh Pipelines', level: 85 },
        { name: 'Maven Build Optimization (10x)', level: 90 }
      ]
    },
    {
      name: 'Databases & Observability',
      skills: [
        { name: 'PostgreSQL & PostGIS', level: 92 },
        { name: 'Prometheus, Grafana, Loki', level: 90 },
        { name: 'Elasticsearch & Redis', level: 88 },
        { name: 'MySQL & MongoDB', level: 85 }
      ]
    }
  ])

  const featuredProjects = computed(() => projects.value.filter(p => p.featured))
  const allCategories = computed(() => ['All', ...new Set(projects.value.map(p => p.category))])

  return {
    projects,
    techCategories,
    featuredProjects,
    allCategories
  }
})
