<template>
  <header class="sticky top-0 z-50 bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Developer Brand Identifier -->
        <a href="#hero" class="flex items-center space-x-3 group">
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]"></div>
          <span class="font-bold text-sm text-white tracking-tight group-hover:text-emerald-400 transition-colors font-heading">
            Ronan Lewsley <span class="text-xs text-slate-500 font-mono font-normal">| Full Stack Engineer</span>
          </span>
        </a>

        <!-- Cyber Navigation Links -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-mono">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              activeSection === item.id 
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-sm' 
                : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/60',
              'px-3 py-1.5 rounded-xl border transition-all duration-200 flex items-center space-x-1'
            ]"
            @click="activeSection = item.id"
          >
            <span>{{ item.label }}</span>
          </a>
        </nav>

        <!-- Quick System Badge & GitHub link -->
        <div class="flex items-center space-x-3">
          <span class="cyber-badge font-mono text-[10px] hidden sm:inline-flex">
            Belfast, UK
          </span>

          <a
            href="https://github.com/lewsley-r"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all font-mono text-xs font-semibold flex items-center space-x-1.5 shadow-sm"
          >
            <span>GitHub</span>
            <span class="text-[10px] text-emerald-400">↗</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const activeSection = ref('hero')

const navItems = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech-stack', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
</script>
