<template>
  <section id="experience" class="py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="section-header flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div class="section-label flex items-center space-x-2">
            <span>// CAREER & INDUSTRY EXPERIENCE</span>
          </div>
          <h2 class="section-title">
            Professional <span class="neon-amber-text">Experience</span>
          </h2>
        </div>

        <div class="status-badge text-slate-800 dark:text-slate-200 flex items-center space-x-2.5 shadow-sm">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse"></span>
          <span>Status: Software Engineer @ Whitespace</span>
        </div>
      </div>

      <div class="space-y-6">
        <div
          v-for="(job, idx) in experiences"
          :key="idx"
          :class="[
            job.isCurrent
              ? 'border-amber-500/60 bg-amber-500/5 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
              : 'border-slate-300 dark:border-slate-800 hover:border-amber-500/40',
            'cyber-terminal p-6 sm:p-8 rounded-2xl transition-all duration-300 space-y-4'
          ]"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <div>
              <div class="flex items-center space-x-3">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading">{{ job.role }}</h3>
                <span :class="job.isCurrent ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/50' : ''" class="cyber-badge text-[10px]">{{ job.company }}</span>
              </div>
              <p class="text-xs text-teal-600 light:text-teal-700 dark:text-teal-400 font-mono mt-1">{{ job.location }}</p>
            </div>

            <div :class="job.isCurrent ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/50 font-bold' : 'bg-slate-100 dark:bg-slate-900 text-amber-600 light:text-amber-800 dark:text-amber-400'" class="border border-slate-300 dark:border-slate-800 px-3 py-1 rounded-lg text-xs font-mono w-fit">
              {{ job.period }}
            </div>
          </div>

          <p class="body-text">
            {{ job.summary }}
          </p>

          <div v-if="job.bullets && job.bullets.length" class="space-y-2 pt-2">
            <div class="text-xs font-bold text-slate-600 dark:text-slate-400 font-mono uppercase tracking-wider">Key Engineering Impact & Deliverables:</div>
            <ul class="space-y-2 body-text">
              <li v-for="(bullet, bIdx) in job.bullets" :key="bIdx" class="flex items-start space-x-2">
                <span class="text-amber-500 light:text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">▸</span>
                <span><strong class="text-slate-900 dark:text-white">{{ bullet.title }}:</strong> {{ bullet.desc }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap gap-1.5">
            <span
              v-for="(tech, tIdx) in job.skills"
              :key="tIdx"
              class="tech-pill"
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
import { experiences } from '@/data/experiences'
</script>
