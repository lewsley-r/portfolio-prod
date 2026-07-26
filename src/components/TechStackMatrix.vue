<template>
  <section id="tech-stack" class="py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="section-header flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div class="section-label flex items-center space-x-2">
            <span>// TECHNICAL PROFICIENCY</span>
          </div>
          <h2 class="section-title">
            Tech Stack <span class="neon-amber-text">Matrix</span>
          </h2>
        </div>
        <p class="text-slate-600 dark:text-slate-400 text-xs max-w-md font-mono">
          Experience with modern frontend frameworks, robust backend APIs, containerized cloud infrastructure, and database engines.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(category, idx) in techCategories"
          :key="idx"
          class="cyber-terminal p-6 rounded-xl space-y-4 flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-slate-300 dark:border-slate-800 pb-3">
              <h3 class="font-bold text-base text-slate-900 dark:text-white font-heading flex items-center space-x-2">
                <span class="text-amber-500 light:text-amber-700">#</span>
                <span>{{ category.name }}</span>
              </h3>
              <span class="cyber-badge text-[10px]">
                {{ category.skills.length }} Skills
              </span>
            </div>

            <div class="space-y-2">
              <div
                v-for="(skill, sIdx) in category.skills"
                :key="sIdx"
                class="flex items-center gap-2 text-xs font-mono px-2 py-1.5 rounded bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60"
              >
                <span :class="levelDot(skill.level)" class="w-1.5 h-1.5 rounded-full shrink-0"></span>
                <span class="text-slate-800 dark:text-slate-200">{{ skill.name }}</span>
                <span class="ml-auto text-[10px] uppercase tracking-wider" :class="levelLabel(skill.level).class">
                  {{ levelLabel(skill.level).text }}
                </span>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400 font-mono flex items-center justify-between">
            <span>Production-Proven Stack</span>
            <span class="text-teal-500 light:text-teal-700">✓</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { techCategories } from '@/data/skills'

function levelDot(level) {
  if (level >= 90) return 'bg-teal-400'
  if (level >= 80) return 'bg-amber-400'
  return 'bg-slate-400'
}

function levelLabel(level) {
  if (level >= 90) return { text: 'Expert', class: 'text-teal-400' }
  if (level >= 80) return { text: 'Proficient', class: 'text-amber-400' }
  return { text: 'Familiar', class: 'text-slate-400' }
}
</script>
