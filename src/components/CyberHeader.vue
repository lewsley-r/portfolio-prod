<template>
  <header class="sticky top-0 z-50 bg-[var(--bg-dark)]/90 backdrop-blur-md border-b border-slate-800/80 light:border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#hero" class="flex items-center space-x-3 group">
          <div class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]"></div>
          <span class="font-bold text-sm text-slate-100 light:text-slate-900 tracking-tight group-hover:text-amber-400 transition-colors font-heading">
            rlewsley.is-a.dev <span class="text-xs text-slate-400 light:text-slate-600 font-mono font-normal">| Full Stack Engineer</span>
          </span>
        </a>

        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-mono">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="px-3 py-1.5 rounded-xl border border-transparent text-slate-400 light:text-slate-700 hover:text-slate-100 light:hover:text-slate-900 hover:bg-slate-800/40 light:hover:bg-slate-200/60 transition-all duration-200"
          >
            <span>{{ item.label }}</span>
          </a>
        </nav>

        <div class="flex items-center space-x-3">
          <button
            @click="toggleMode"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            class="p-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700 hover:text-amber-400 transition-all cursor-pointer"
          >
            <!-- Sun icon (shown in dark mode to switch to light) -->
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <!-- Moon icon (shown in light mode to switch to dark) -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <a
            href="https://github.com/lewsley-r"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3.5 py-1.5 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-800 hover:text-slate-100 light:hover:text-amber-600 hover:border-amber-500/50 transition-all font-mono text-xs font-semibold flex items-center space-x-1.5 shadow-sm"
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

const isDark = ref(true)

const navItems = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech-stack', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const THEME_COLORS = { dark: '#12161f', light: '#f8fafc' }

const toggleMode = () => {
  isDark.value = !isDark.value
  const mode = isDark.value ? 'dark' : 'light'
  document.documentElement.className = mode
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[mode])
  localStorage.setItem('theme-mode', mode)
}

onMounted(() => {
  const saved = localStorage.getItem('theme-mode') || 'dark'
  isDark.value = saved === 'dark'
  document.documentElement.className = saved
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[saved])
})
</script>
