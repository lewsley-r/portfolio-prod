<template>
  <footer id="contact" class="bg-[var(--bg-dark)] border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 py-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
      <div class="cyber-terminal p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start space-x-2 text-xs text-amber-600 dark:text-amber-400 font-mono">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Interested in collaborating on engineering work?
          </h3>
          <p class="text-slate-600 dark:text-slate-400 text-xs font-mono">
            Open to technical discussions, full-stack & cloud architecture projects, or networking.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href="mailto:ronanlewsley99@gmail.com"
            class="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 font-mono flex items-center space-x-1.5"
          >
            <span>Email Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ronan-lewsley-9b1bbb199/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-teal-600 light:text-teal-700 dark:text-teal-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/50 font-bold text-xs transition-all font-mono flex items-center space-x-1.5 shadow-sm"
          >
            <span>LinkedIn</span>
            <span class="text-[10px]">↗</span>
          </a>
          <a
            href="https://github.com/lewsley-r"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/50 font-bold text-xs transition-all font-mono flex items-center space-x-1.5 shadow-sm"
          >
            <span>GitHub</span>
            <span class="text-[10px]">↗</span>
          </a>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
        <div class="flex items-center space-x-2">
          <span class="text-amber-600 dark:text-amber-400 font-semibold">ronanlewsley99@gmail.com</span>
          <span>•</span>
          <span>Belfast, UK</span>
        </div>

        <div>
          <span>© {{ new Date().getFullYear() }} Ronan Lewsley. Built with Vue 3, Vite & Tailwind CSS.</span>
        </div>
      </div>
    </div>
  </footer>
</template>
