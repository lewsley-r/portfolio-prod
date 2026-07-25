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

        <!-- Live Theme Palette Selector & GitHub link -->
        <div class="flex items-center space-x-2 sm:space-x-3">
          <!-- Theme Palette Selector -->
          <div class="flex items-center space-x-1 bg-slate-900/90 border border-slate-800 p-1 rounded-xl">
            <button
              v-for="t in themes"
              :key="t.id"
              @click="setTheme(t.id)"
              :title="`Theme: ${t.name}`"
              :class="[
                currentTheme === t.id ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100',
                'w-4 h-4 rounded-full transition-all cursor-pointer'
              ]"
              :style="{ backgroundColor: t.color }"
            ></button>
          </div>

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
import { ref, onMounted } from 'vue'

const activeSection = ref('hero')
const currentTheme = ref('emerald')

const navItems = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech-stack', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const themes = [
  { id: 'emerald', name: 'Enterprise Emerald', color: '#10b981' },
  { id: 'violet', name: 'Electric Violet', color: '#8b5cf6' },
  { id: 'amber', name: 'Warm Amber', color: '#f59e0b' },
  { id: 'mono', name: 'Stealth Carbon', color: '#e2e8f0' }
]

const setTheme = (themeId) => {
  currentTheme.value = themeId
  document.documentElement.setAttribute('data-theme', themeId)
  localStorage.setItem('user-theme', themeId)
}

onMounted(() => {
  const saved = localStorage.getItem('user-theme') || 'emerald'
  setTheme(saved)
})
</script>
