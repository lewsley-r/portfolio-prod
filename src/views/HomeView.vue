<template>
  <div class="space-y-12">
    <!-- Hero & Bio Section -->
    <HeroSection />

    <!-- Professional Experience Timeline -->
    <ExperienceTimeline />

    <!-- Technical Skills Matrix -->
    <TechStackMatrix />

    <!-- Featured Projects Grid -->
    <ProjectGrid />

    <!-- Pool Match Scoreboard Utility -->
    <PoolTrackerView />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import TechStackMatrix from '@/components/TechStackMatrix.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import PoolTrackerView from '@/components/PoolTrackerView.vue'
</script>