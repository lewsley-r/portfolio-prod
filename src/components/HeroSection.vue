<template>
  <section id="hero" class="py-12 lg:py-16 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center text-center space-y-6">
        <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
          <div class="relative shrink-0 group">
            <div class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-teal-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full dark:bg-slate-950 light:bg-slate-100 border-2 border-amber-500/80 p-1.5 overflow-hidden flex items-center justify-center shadow-xl">
              <img
                src="/avatar.svg"
                alt="Ronan Lewsley Avatar"
                class="w-full h-full object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div class="space-y-1">
            <div class="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 light:bg-amber-500/20 border border-amber-500/30 text-amber-600 light:text-amber-800 dark:text-amber-400 text-[11px] font-mono font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-ping"></span>
              <span>Software Engineer @ Whitespace</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none font-heading">
              Ronan <span class="neon-amber-text">Lewsley</span>
            </h1>
            <p class="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 font-heading">
              Full Stack & DevOps Engineer • Belfast, UK
            </p>
          </div>
        </div>

        <p class="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
          Software Engineer with <span class="text-highlight-amber">5+ years</span> building end-to-end applications, cloud orchestration systems, and automated data pipelines. Currently at <span class="text-highlight-amber">Whitespace</span> engineering on Collective, a sovereign AI operating system.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#experience"
            class="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center space-x-2"
          >
            <span>View Experience</span>
            <span>↓</span>
          </a>
          <a
            href="#contact"
            class="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-amber-500/50 font-bold text-xs transition-all light:bg-white light:border-slate-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
