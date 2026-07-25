<template>
  <header class="sticky top-0 z-50 bg-[#12161f]/90 dark:bg-[#12161f]/90 light:bg-[#faf8f5]/90 backdrop-blur-md border-b border-slate-800/80 light:border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Developer Brand Identifier -->
        <a href="#hero" class="flex items-center space-x-3 group">
          <div class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]"></div>
          <span class="font-bold text-sm text-white light:text-stone-900 tracking-tight group-hover:text-amber-400 transition-colors font-heading">
            Ronan Lewsley <span class="text-xs text-slate-400 font-mono font-normal">| Full Stack Engineer</span>
          </span>
        </a>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-mono">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              activeSection === item.id 
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold shadow-sm' 
                : 'text-slate-400 hover:text-white light:hover:text-stone-900 border-transparent hover:bg-slate-800/40',
              'px-3 py-1.5 rounded-xl border transition-all duration-200 flex items-center space-x-1'
            ]"
            @click="activeSection = item.id"
          >
            <span>{{ item.label }}</span>
          </a>
        </nav>

        <!-- Dark / Light Mode Toggle & GitHub Button -->
        <div class="flex items-center space-x-3">
          <!-- Dark / Light Mode Toggle Button -->
          <button
            @click="toggleMode"
            title="Toggle Light/Dark Mode"
            class="p-2 rounded-xl bg-slate-900 light:bg-stone-100 border border-slate-800 light:border-stone-200 text-slate-300 light:text-stone-700 hover:text-amber-400 transition-all cursor-pointer text-xs flex items-center justify-center"
          >
            <span v-if="isDark">☀️</span>
            <span v-else>🌙</span>
          </button>

          <a
            href="https://github.com/lewsley-r"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3.5 py-1.5 rounded-xl bg-slate-900 light:bg-stone-100 border border-slate-800 light:border-stone-200 text-slate-300 light:text-stone-800 hover:text-white light:hover:text-amber-600 hover:border-amber-500/50 transition-all font-mono text-xs font-semibold flex items-center space-x-1.5 shadow-sm"
          >
            <span>GitHub</span>
            <span class="text-[10px] text-amber-400">↗</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeSection = ref('hero')
const isDark = ref(true)

const navItems = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech-stack', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const toggleMode = () => {
  isDark.value = !isDark.value
  const mode = isDark.value ? 'dark' : 'light'
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(mode)
  localStorage.setItem('theme-mode', mode)
}

onMounted(() => {
  const saved = localStorage.getItem('theme-mode') || 'dark'
  isDark.value = saved === 'dark'
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(saved)
})
</script>
