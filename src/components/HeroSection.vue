<template>
  <section id="hero" class="py-12 lg:py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Column: Cartoon Avatar & Bio -->
        <div class="lg:col-span-7 space-y-6">
          <div class="flex items-center space-x-5">
            <!-- Cartoon Avatar with Sleek Glowing Frame -->
            <div class="relative shrink-0 group">
              <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-950 border-2 border-emerald-500/80 p-1.5 overflow-hidden flex items-center justify-center shadow-xl">
                <img
                  src="../assets/AvatarMaker.svg"
                  alt="Ronan Lewsley Avatar"
                  class="w-full h-full object-contain filter drop-shadow-md transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div class="space-y-1">
              <div class="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Software Engineer @ Whitespace</span>
              </div>
              <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none font-heading">
                Ronan <span class="neon-green-text">Lewsley</span>
              </h1>
              <p class="text-sm sm:text-base font-bold text-slate-300 font-heading">
                Full Stack & DevOps Engineer • Belfast, UK
              </p>
            </div>
          </div>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Experienced Software Engineer with over <span class="text-emerald-400 font-bold">5+ years</span> of hands-on experience building end-to-end applications, cloud orchestration systems, and automated data pipelines. Software Engineer at <span class="text-emerald-400 font-bold">Whitespace</span> building AI-first platforms! Skilled across <span class="text-emerald-400 font-semibold">Python</span>, <span class="text-cyan-400 font-semibold">JavaScript / TypeScript</span>, <span class="text-purple-400 font-semibold">Vue.js / React</span>, <span class="text-emerald-300 font-semibold">AI Platforms & Cloud Workflows</span>, and <span class="text-cyan-300 font-semibold">Kubernetes & DevOps</span>.
          </p>

          <!-- Quick Metrics Bar -->
          <div class="grid grid-cols-3 gap-4 max-w-lg">
            <div class="cyber-terminal p-4 text-center">
              <div class="text-2xl font-extrabold text-emerald-400 font-heading">5+</div>
              <div class="text-xs text-slate-400 font-mono">Years Exp</div>
            </div>
            <div class="cyber-terminal p-4 text-center">
              <div class="text-2xl font-extrabold text-cyan-400 font-heading">AI-First</div>
              <div class="text-xs text-slate-400 font-mono">Focus Stack</div>
            </div>
            <div class="cyber-terminal p-4 text-center">
              <div class="text-2xl font-extrabold text-purple-400 font-heading">100%</div>
              <div class="text-xs text-slate-400 font-mono">Open Source</div>
            </div>
          </div>

          <!-- Action CTA Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#experience"
              class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>View Experience</span>
              <span>↓</span>
            </a>
            <a
              href="#contact"
              class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 font-bold text-xs transition-all cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Terminal CLI -->
        <div class="lg:col-span-5">
          <div class="cyber-terminal rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <!-- Terminal Window Header -->
            <div class="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span class="text-xs text-slate-400 font-mono ml-2">bash — ronan@belfast-dev</span>
              </div>
              <span class="text-[10px] text-emerald-400 font-mono">v3.3.0</span>
            </div>

            <!-- Terminal Body Log Stream -->
            <div class="p-4 bg-slate-950/90 font-mono text-xs text-slate-300 space-y-3 min-h-[290px] max-h-[350px] overflow-y-auto">
              <div>
                <span class="text-emerald-400">ronan@belfast-dev:~$</span> <span class="text-white">whoami</span>
                <div class="text-cyan-400 mt-1">
                  Ronan Lewsley — Software Engineer @ Whitespace.
                </div>
              </div>

              <div>
                <span class="text-emerald-400">ronan@belfast-dev:~$</span> <span class="text-white">cat status.json</span>
                <pre class="text-slate-400 mt-1 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 font-mono text-[11px]">{
  "role": "Software Engineer @ Whitespace",
  "focus": ["Sovereign AI", "Full Stack Dev", "Cloud Architecture"],
  "period": "2026 - Present",
  "location": "Belfast, Northern Ireland"
}</pre>
              </div>

              <!-- Dynamic Command History Output -->
              <div v-for="(cmd, idx) in history" :key="idx" class="space-y-1">
                <div>
                  <span class="text-emerald-400">ronan@belfast-dev:~$</span> <span class="text-white">{{ cmd.input }}</span>
                </div>
                <div v-if="cmd.output" class="text-slate-300 whitespace-pre-wrap bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-[11px]">
                  {{ cmd.output }}
                </div>
              </div>

              <!-- Active Prompt Input -->
              <form @submit.prevent="executeCommand" class="flex items-center space-x-2 pt-1">
                <span class="text-emerald-400">ronan@belfast-dev:~$</span>
                <input
                  v-model="currentInput"
                  type="text"
                  placeholder="type 'help', 'projects', 'stack'..."
                  class="flex-1 bg-transparent border-none outline-none text-emerald-400 placeholder-slate-600 text-xs font-mono"
                />
                <span class="w-2 h-4 bg-emerald-400 animate-cursor"></span>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const currentInput = ref('')
const history = ref([])

const executeCommand = () => {
  const input = currentInput.value.trim().toLowerCase()
  if (!input) return

  let output = ''

  if (input === 'help') {
    output = `Available CLI Commands:
  • whoami    - Display developer profile & current role
  • experience- Show career history (Whitespace, Rapid7, Veriteer, Flax & Teal)
  • projects  - List featured software projects
  • stack     - Show core technical skills
  • contact   - Display contact details
  • clear     - Clear terminal screen`
  } else if (input === 'whoami') {
    output = 'Ronan Lewsley — Software Engineer @ Whitespace! 5+ years experience in Full Stack, AI Systems, DevOps, & Cloud Architecture.'
  } else if (input === 'experience') {
    output = `Career History:
  • Whitespace - Software Engineer (2026 - Present)
  1. Rapid7 - Software Engineer (2024 May - 2026)
  2. Veriteer - Software Engineer (2022 May - 2023 Aug)
  3. Flax & Teal - Junior Software Engineer (2020 - 2022)`
  } else if (input === 'projects') {
    output = `Featured Projects:
  1. Ulster Computing Blogs (UUCB) - VueJS, Laravel, NLP, Docker, K8s, GCP
  2. B2B Open Source Adoption Tracker - BigQuery, n8n DAG, Zuplo REST API
  3. 682 MicroBlogs - Azure Functions, Vue.js, CI/CD Actions
  4. Premier League Fantasy Team Builder - Angular, Python Flask, MongoDB`
  } else if (input === 'stack') {
    output = `Core Tech Stack:
  • AI & Full Stack: Full Stack Dev, Sovereign AI Platforms, Vue 3, React, Python
  • Languages: Python, JavaScript, TypeScript, PHP, Java, Scala, SQL, Ruby
  • Cloud & DevOps: Kubernetes, Docker, Helm, AWS, GCP, Azure, Terraform, GitHub Actions`
  } else if (input === 'contact') {
    output = `Contact Info:
  • Email: ronanlewsley99@gmail.com
  • LinkedIn: https://www.linkedin.com/in/ronan-lewsley-9b1bbb199/
  • GitHub: https://github.com/lewsley-r
  • Website: https://rlewsley.is-a.dev`
  } else if (input === 'clear') {
    history.value = []
    currentInput.value = ''
    return
  } else {
    output = `Command not recognized: '${input}'. Type 'help' for available commands.`
  }

  history.value.push({ input: currentInput.value, output })
  currentInput.value = ''
}
</script>
