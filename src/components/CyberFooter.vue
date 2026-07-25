<template>
  <footer id="contact" class="bg-[#090d16] border-t border-slate-800/80 py-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
      
      <!-- Contact Banner Container -->
      <div class="cyber-terminal p-8 rounded-2xl border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start space-x-2 text-xs text-emerald-400 font-mono">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
            Interested in collaborating or discussing engineering?
          </h3>
          <p class="text-slate-400 text-xs font-mono">
            Open to technical discussions, full-stack & cloud architecture projects, or networking.
          </p>
        </div>

        <!-- Action Link Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href="mailto:ronanlewsley99@gmail.com"
            class="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 font-mono flex items-center space-x-1.5"
          >
            <span>Send Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ronan-lewsley-9b1bbb199/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:text-white hover:border-cyan-500/50 font-bold text-xs transition-all font-mono flex items-center space-x-1.5 shadow-sm"
          >
            <span>LinkedIn</span>
            <span class="text-[10px]">↗</span>
          </a>
          <a
            href="https://github.com/lewsley-r"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 font-bold text-xs transition-all font-mono flex items-center space-x-1.5 shadow-sm"
          >
            <span>GitHub</span>
            <span class="text-[10px]">↗</span>
          </a>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4 border-t border-slate-900 pt-6">
        <div class="flex items-center space-x-2">
          <span class="text-emerald-400 font-semibold">ronanlewsley99@gmail.com</span>
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
