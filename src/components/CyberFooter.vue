<template>
  <footer id="contact" class="bg-[#050806] border-t border-[#00ff66]/30 py-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
      
      <!-- Contact Banner Container -->
      <div class="cyber-terminal p-8 rounded-2xl border-[#00ff66]/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start space-x-2 text-xs text-[#00ff66] font-mono">
            <span class="w-2 h-2 rounded-full bg-[#00ff66] animate-ping"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Interested in building something together?
          </h3>
          <p class="text-slate-400 text-xs font-mono">
            Open to engineering collaborations, technical consulting, or software projects.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4 shrink-0">
          <a
            href="mailto:lewsley-r@ulster.ac.uk"
            class="px-6 py-3 rounded-xl bg-[#00ff66] text-slate-950 font-bold text-xs hover:bg-[#00ff66]/90 shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all font-mono"
          >
            Send Email
          </a>
          <a
            href="https://github.com/lewsley-r"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:border-[#00ff66] font-bold text-xs transition-all font-mono"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4 border-t border-slate-900 pt-6">
        <div class="flex items-center space-x-2">
          <span class="text-[#00ff66]">ronan@rlewsley.is-a.dev</span>
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
