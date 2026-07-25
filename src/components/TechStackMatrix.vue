<template>
  <section id="tech-stack" class="py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div class="flex items-center space-x-2 text-xs text-[#00ff66] font-mono mb-2">
            <span>// TECHNICAL PROFICIENCY</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack <span class="neon-green-text">Matrix</span>
          </h2>
        </div>
        <p class="text-slate-400 text-xs max-w-md font-mono">
          Engineered across modern frontend frameworks, robust backend APIs, containerized cloud infrastructure, and database engines.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(category, idx) in projectStore.techCategories" 
          :key="idx"
          class="cyber-terminal p-6 rounded-xl space-y-4 flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 class="font-bold text-base text-white font-heading flex items-center space-x-2">
                <span class="text-[#00ff66]">#</span>
                <span>{{ category.name }}</span>
              </h3>
              <span class="cyber-badge text-[10px]">
                {{ category.skills.length }} Skills
              </span>
            </div>

            <div class="space-y-3">
              <div 
                v-for="(skill, sIdx) in category.skills" 
                :key="sIdx"
                class="space-y-1"
              >
                <div class="flex items-center justify-between text-xs font-mono">
                  <span class="text-slate-200 font-medium">{{ skill.name }}</span>
                  <span class="text-[#00ff66] font-bold">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
                  <div 
                    class="bg-gradient-to-r from-emerald-500 to-[#00ff66] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#00ff66]"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono flex items-center justify-between">
            <span>Verified Production Stack</span>
            <span class="text-[#00ff66]">✓</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProjectStore } from '@/stores/projectStore'

const projectStore = useProjectStore()
</script>
