<template>
  <div id="project-main">
    <h1 class="cat-heads" id="projects">Projects</h1>
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="center: true"
    >
      <ul class="uk-slider-items uk-grid">
        <li
          class="uk-width-3-4"
          v-for="project in this.projects"
          v-bind:key="project"
        >
          <div class="uk-panel">
            <ProjectCard
              :image="project.image"
              :title="project.title"
              :description="project.description"
              :backend="project.backend"
              :frontend="project.frontend"
            ></ProjectCard>
          </div>
        </li>
      </ul>

      <a
        class="uk-position-center-left uk-position-small"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
      ></a>
      <a
        class="uk-position-center-right uk-position-small"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
      ></a>
    </div>
  </div>
</template>

<script>
import { useProjectStore } from "@/stores/projectStore";


import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: { ProjectCard },
  data() {
    return {
      projectStore: useProjectStore(),
    };
  },
  computed: {
    projects() {
      return this.projectStore.projects;
    },
  },
};
</script>

<style scoped>


#project-main{
    background-color: black;
    color: white;
    padding: 2vw;
    height: 100vh;
}
#projects{
    margin-bottom: 5vh;
}
</style>