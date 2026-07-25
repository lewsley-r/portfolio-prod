<template>
  <section id="projects" class="py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div class="flex items-center space-x-2 text-xs text-[#00ff66] font-mono mb-2">
            <span>// PORTFOLIO & REPOSITORIES</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span class="neon-green-text">Projects</span>
          </h2>
        </div>

        <!-- Category Filter Pills -->
        <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              selectedCategory === cat
                ? 'bg-[#00ff66]/20 border-[#00ff66] text-[#00ff66] shadow-[0_0_10px_rgba(0,255,102,0.2)] font-bold'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700',
              'px-3 py-1.5 rounded-lg border transition-all cursor-pointer'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="cyber-terminal rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#00ff66]/60 transition-all duration-300"
        >
          <!-- Card Image Header -->
          <div class="relative h-48 overflow-hidden bg-slate-950">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#070b09] via-transparent to-transparent"></div>
            
            <div class="absolute top-3 right-3">
              <span class="cyber-badge text-[10px]">
                {{ project.category }}
              </span>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-white font-heading group-hover:text-[#00ff66] transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-slate-400 text-xs font-mono leading-relaxed line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Highlights -->
              <div v-if="project.highlights && project.highlights.length" class="space-y-1 pt-1">
                <div v-for="(hl, hIdx) in project.highlights" :key="hIdx" class="flex items-start space-x-1.5 text-[11px] text-slate-300 font-mono">
                  <span class="text-[#00ff66] shrink-0">▸</span>
                  <span>{{ hl }}</span>
                </div>
              </div>
            </div>

            <div class="space-y-4 pt-4 border-t border-slate-800">
              <!-- Tech Stack Pills -->
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="(tech, tIdx) in project.stack"
                  :key="tIdx"
                  class="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Footer Links -->
              <div class="flex items-center justify-between pt-2 text-xs font-mono">
                <a
                  :href="project.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#00ff66] hover:text-white font-bold flex items-center space-x-1 transition-colors"
                >
                  <span>View Repository</span>
                  <span>↗</span>
                </a>

                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#00f0ff] hover:text-white font-bold flex items-center space-x-1 transition-colors"
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

const projectStore = useProjectStore()
const selectedCategory = ref('All')

const categories = computed(() => projectStore.allCategories)

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projectStore.projects
  return projectStore.projects.filter(p => p.category === selectedCategory.value)
})
</script>
