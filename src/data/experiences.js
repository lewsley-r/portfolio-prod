export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Whitespace',
    location: 'Belfast, Northern Ireland',
    period: '2026 - Present',
    isCurrent: true,
    summary: 'Building full-stack systems on Collective, Whitespace\'s sovereign AI operating system — connecting knowledge, human-machine collaboration, and decision intelligence.',
    bullets: [],
    skills: ['Sovereign AI (Collective)', 'Full Stack Development', 'Decision Intelligence', 'Human-Machine Collaboration', 'Python', 'Vue.js / React', 'DevOps & Cloud']
  },
  {
    role: 'Software Engineer',
    company: 'Rapid7',
    location: 'Belfast, Northern Ireland',
    period: 'May 2024 - 2026',
    summary: 'Engineered high-throughput data orchestration systems, build optimization pipelines, and observability tracing tools across cloud data mesh infrastructure.',
    bullets: [
      { title: 'Glue-to-EMR Migration Architecture', desc: 'End-to-end design and architecture for migrating all Data Mesh ETL jobs from AWS Glue to AWS EMR on EKS. Phase 1 delivered first job migration, alerts and monitoring, full staging and production infra across all regions, and proof of 50–75% cost savings on Glue — estimated millions in annual savings. End-to-end design documented in research doc and fully ticketed in Jira.' },
      { title: 'Python Orchestration', desc: 'Led development of a job orchestration system for stakeholders to manage the deployment, configuration, and scheduling of AWS Glue Jobs.' },
      { title: 'DevOps Efficiency', desc: 'Engineered a Maven deployment pipeline that reduced build times by over 10x in many cases.' },
      { title: 'Workflow Automation', desc: 'Optimized Apache Airflow implementations, solving critical issues around concurrency and DAG stability.' },
      { title: 'Observability Tracing', desc: 'Developed and implemented "Heartbeat Tracer Solution" for end-to-end health and latency metrics across the entire pipeline.' },
      { title: 'Data Mesh Infrastructure', desc: 'Independently deployed end-to-end pipelines into the Data Mesh for multiple product teams.' },
      { title: 'Mentorship', desc: 'Acted as a mentor to junior team members, advising on technical approaches and healthy work practices.' }
    ],
    skills: ['Python', 'AWS Glue', 'EMR on EKS', 'Apache Airflow', 'Maven Pipeline', 'Data Mesh', 'Observability', 'Java', 'Docker', 'Kubernetes', 'Argo']
  },
  {
    role: 'Software Engineer',
    company: 'Veriteer',
    location: 'Belfast, Northern Ireland',
    period: 'May 2022 - Aug 2023',
    summary: 'Key engineer on enterprise proof-of-concept e-commerce platforms, Python data migrations, and AWS cloud operations.',
    bullets: [
      { title: 'Full Stack Engineering', desc: 'Contributed as a key engineer on a proof-of-concept e-commerce platform using Vue.js and PHP Spryker.' },
      { title: 'Python Data Engineering', desc: 'Executed various data shaping and scripting tasks using Python to facilitate data migration.' },
      { title: 'Cloud Operations & AWS', desc: 'Managed end-to-end deployment of Dev Environment utilizing Docker to host applications on AWS EC2.' },
      { title: 'CI/CD Pipelines', desc: 'Developed and maintained CI/CD pipelines using GitHub Actions for reliable code delivery.' },
      { title: 'Service Integration', desc: 'Configured and managed core services including Redis, Jenkins, and Elasticsearch.' }
    ],
    skills: ['Vue.js', 'PHP Spryker', 'Python', 'AWS EC2', 'Docker', 'GitHub Actions', 'Redis', 'Jenkins', 'Elasticsearch']
  },
  {
    role: 'Placement / Junior Software Engineer',
    company: 'Flax & Teal',
    location: 'Belfast, Northern Ireland',
    period: '2020 - March 2022',
    summary: 'Engineered open-source full-stack solutions, serverless Kubernetes analytics pipelines, and geospatial data platforms.',
    bullets: [
      { title: 'Full Stack JavaScript & PHP', desc: 'Led development of open-source projects using a PHP Laravel / Vue.js SPA stack.' },
      { title: 'Frontend Data Visualization', desc: 'Designed and developed a custom web analytics interface in Vue.js utilizing Thingsboard API, improving asset observability.' },
      { title: 'Python & Serverless K8s', desc: 'Implemented a serverless analytics pipeline on Kubernetes using OpenFaaS and Python.' },
      { title: 'Geospatial Modernization', desc: 'Integrated PostGIS for efficient spatial query handling within a legacy geo-spatial solution.' },
      { title: 'DevOps & Observability Stack', desc: 'Streamlined deployments using Helm and established a Grafana/Loki/Prometheus monitoring stack.' }
    ],
    skills: ['Vue.js SPA', 'PHP Laravel', 'Python', 'Kubernetes', 'OpenFaaS', 'Helm', 'Grafana/Loki/Prometheus', 'PostgreSQL', 'PostGIS', 'ThingsBoard']
  },
  {
    role: 'BSc (Hons) Computer Science',
    company: 'University of Ulster',
    location: 'Belfast, Northern Ireland',
    period: '2018 - 2022',
    summary: 'BSc (Hons) Computer Science degree in Cloud Technologies, Artificial Intelligence, and Full Stack Architecture.',
    bullets: [
      { title: 'Dissertation Project', desc: 'Ulster Computing Blogs (UUCB) — Full stack social blogging platform utilizing Natural Language Processing (NLP) to assign topics to posts.' }
    ],
    skills: ['Computer Science', 'NLP & AI', 'Cloud Architecture', 'Distributed Systems']
  }
]
