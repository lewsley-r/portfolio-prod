<template>
  <section id="projects" class="py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="section-header flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div class="section-label flex items-center space-x-2">
            <span>// PORTFOLIO & REPOSITORIES</span>
          </div>
          <h2 class="section-title">
            Featured <span class="neon-amber-text">Projects</span>
          </h2>
        </div>

        <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            v-for="cat in allCategories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              selectedCategory === cat
                ? 'bg-amber-500/20 border-amber-500 text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.2)] font-bold'
                : 'bg-slate-100/80 dark:bg-slate-900/80 border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700',
              'px-3 py-1.5 rounded-lg border transition-all cursor-pointer'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="cyber-terminal rounded-xl overflow-hidden flex flex-col justify-between group hover:border-amber-500/60 transition-all duration-300"
        >
          <div class="relative h-48 overflow-hidden dark:bg-slate-950 light:bg-slate-100">
            <img
              :src="project.image"
              :alt="project.title"
              width="400"
              height="192"
              loading="lazy"
              @error="onImageError"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-transparent"></div>

            <div class="absolute top-3 right-3">
              <span class="cyber-badge text-[10px]">
                {{ project.category }}
              </span>
            </div>
          </div>

          <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-amber-400 transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-slate-600 dark:text-slate-400 text-xs font-mono leading-relaxed line-clamp-3">
                {{ project.description }}
              </p>

              <div v-if="project.highlights && project.highlights.length" class="space-y-1 pt-1">
                <div v-for="(hl, hIdx) in project.highlights" :key="hIdx" class="flex items-start space-x-1.5 text-[11px] text-slate-700 dark:text-slate-300 font-mono">
                  <span class="text-amber-400 light:text-amber-700 shrink-0">▸</span>
                  <span>{{ hl }}</span>
                </div>
              </div>
            </div>

            <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="(tech, tIdx) in project.stack"
                  :key="tIdx"
                  class="tech-pill"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex items-center justify-between pt-2 text-xs font-mono">
                <a
                  :href="project.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-amber-400 light:text-amber-700 hover:text-slate-100 light:hover:text-slate-900 dark:hover:text-white font-bold flex items-center space-x-1 transition-colors"
                >
                  <span>View Repository</span>
                  <span>↗</span>
                </a>

                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-teal-400 light:text-teal-700 hover:text-slate-100 light:hover:text-slate-900 dark:hover:text-white font-bold flex items-center space-x-1 transition-colors"
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
import { projects, allCategories } from '@/data/projects'

const selectedCategory = ref('All')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})

const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22192%22 viewBox=%220 0 400 192%22%3E%3Crect fill=%22%2312161f%22 width=%22400%22 height=%22192%22/%3E%3Ctext x=%22200%22 y=%22100%22 text-anchor=%22middle%22 fill=%22%23f59e0b%22 font-family=%22monospace%22 font-size=%2214%22%3EImage unavailable%3C/text%3E%3C/svg%3E'

function onImageError(e) {
  e.target.src = fallbackImage
}
</script>
