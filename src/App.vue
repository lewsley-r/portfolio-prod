<template>
  <div class="min-h-screen bg-[#070b09] text-slate-100 font-mono flex flex-col justify-between selection:bg-[#00ff66] selection:text-slate-950 crt-scanlines">
    <!-- Terminal Header & Navigation -->
    <CyberHeader />

    <!-- Main View Content -->
    <main class="flex-1 space-y-12">
      <router-view />
    </main>

    <!-- Footer & Contact Section -->
    <CyberFooter />
  </div>
</template>

<script setup>
import CyberHeader from '@/components/CyberHeader.vue'
import CyberFooter from '@/components/CyberFooter.vue'
</script>
