<template>
  <div class="min-h-screen flex flex-col justify-between">
    <CyberHeader />
    <main class="flex-1">
      <HomeView />
    </main>
    <CyberFooter />
  </div>
</template>

<script setup>
import CyberHeader from '@/components/CyberHeader.vue'
import CyberFooter from '@/components/CyberFooter.vue'
import HomeView from '@/views/HomeView.vue'
</script>
