<template>
  <section id="experience" class="py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div class="flex items-center space-x-2 text-xs text-amber-400 font-mono mb-2">
            <span>// CAREER & INDUSTRY EXPERIENCE</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Professional <span class="neon-green-text">Experience</span>
          </h2>
        </div>

        <div class="bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-200 flex items-center space-x-2.5 shadow-sm">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Status: Software Engineer @ Whitespace</span>
        </div>
      </div>

      <!-- Experience Timeline Cards -->
      <div class="space-y-6">
        <div 
          v-for="(job, idx) in experiences" 
          :key="idx"
          :class="[
            job.isCurrent ? 'border-amber-500/60 bg-amber-500/5 shadow-[0_0_20px_rgba(245,158,11,0.1)]' : 'border-slate-800 hover:border-amber-500/40',
            'cyber-terminal p-6 sm:p-8 rounded-2xl transition-all duration-300 space-y-4'
          ]"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
            <div>
              <div class="flex items-center space-x-3">
                <h3 class="text-xl font-bold text-white font-heading">{{ job.role }}</h3>
                <span :class="job.isCurrent ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' : ''" class="cyber-badge text-[10px]">{{ job.company }}</span>
              </div>
              <p class="text-xs text-teal-400 font-mono mt-1">{{ job.location }}</p>
            </div>

            <div :class="job.isCurrent ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold' : 'bg-slate-900 text-amber-400'" class="border border-slate-800 px-3 py-1 rounded-lg text-xs font-mono w-fit">
              {{ job.period }}
            </div>
          </div>

          <p class="text-slate-300 text-xs sm:text-sm font-mono leading-relaxed">
            {{ job.summary }}
          </p>

          <!-- Key Responsibilities / Technical Highlights -->
          <div v-if="job.bullets && job.bullets.length" class="space-y-2 pt-2">
            <div class="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Key Engineering Impact & Deliverables:</div>
            <ul class="space-y-2 text-xs text-slate-300 font-mono">
              <li v-for="(bullet, bIdx) in job.bullets" :key="bIdx" class="flex items-start space-x-2">
                <span class="text-amber-400 shrink-0 mt-0.5">▸</span>
                <span><strong class="text-white">{{ bullet.title }}:</strong> {{ bullet.desc }}</span>
              </li>
            </ul>
          </div>

          <!-- Technologies Stack Pills -->
          <div class="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
            <span 
              v-for="(tech, tIdx) in job.skills" 
              :key="tIdx"
              class="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono px-2.5 py-0.5 rounded-md"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    role: 'Software Engineer',
    company: 'Whitespace',
    location: 'Belfast, Northern Ireland',
    period: '2026 - Present',
    isCurrent: true,
    summary: 'Building full-stack application systems and solutions engineering on Collective, Whitespace\'s Sovereign AI operating system — enabling connected knowledge, human-machine collaboration, and decision-intelligence capabilities.',
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
      { title: 'Python Orchestration', desc: 'Led development of a job orchestration system for stakeholders to manage the deployment, configuration, and scheduling of AWS Glue Jobs.' },
      { title: 'DevOps Efficiency', desc: 'Engineered a Maven deployment pipeline that reduced build times by over 10x in many cases.' },
      { title: 'Workflow Automation', desc: 'Optimized Apache Airflow implementations, solving critical issues around concurrency and DAG stability.' },
      { title: 'Observability Tracing', desc: 'Developed and implemented "Heartbeat Tracer Solution" for end-to-end health and latency metrics across the entire pipeline.' },
      { title: 'Data Mesh Infrastructure', desc: 'Independently deployed end-to-end pipelines into the Data Mesh for multiple product teams.' },
      { title: 'Mentorship', desc: 'Acted as a mentor to junior team members, advising on technical approaches and healthy work practices.' }
    ],
    skills: ['Python', 'AWS Glue', 'Apache Airflow', 'Maven Pipeline', 'Data Mesh', 'Observability', 'Java', 'Docker', 'Kubernetes']
  },
  {
    role: 'Software Engineer',
    company: 'Veriteer',
    location: 'Belfast, Northern Ireland',
    period: 'May 2022 - Aug 2023',
    summary: 'Contributed as a key engineer on enterprise proof-of-concept e-commerce platforms, Python data migrations, and AWS cloud operations.',
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
    summary: 'First-Class Honours degree focusing on Cloud Technologies, Artificial Intelligence, and Full Stack Architecture.',
    bullets: [
      { title: 'Dissertation Project', desc: 'Ulster Computing Blogs (UUCB) — Full stack social blogging platform utilizing Natural Language Processing (NLP) to assign topics to posts.' }
    ],
    skills: ['Computer Science', 'NLP & AI', 'Cloud Architecture', 'Distributed Systems']
  }
])
</script>
