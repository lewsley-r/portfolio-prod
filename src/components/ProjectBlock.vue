<template>
  <div id="project-main">
    <h1 class="cat-heads" id="projects">Projects</h1>
    <div id="slideshow-div" class="uk-align-center uk-position-relative uk-visible-toggle uk-light"
      uk-slideshow="animation: fade">
      <ul class="uk-slideshow-items uk-grid">
        <li id="project-card-item" v-for="project in this.projects" v-bind:key="project">
          <ProjectCard class="" :image="project.image" :title="project.title" :description="project.description"
            :backend="project.backend" :frontend="project.frontend"></ProjectCard>
        </li>
      </ul>
      <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
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
#slideshow-div {
  margin-left: 16vw;
}


#project-main {
  background-color: black;
  color: white;
  padding: 2vw;
  height: 100vh;
  margin-top: 5vh;
}

.uk-card-primary.uk-card-body .uk-slidenav,
.uk-card-primary> :not([class*="uk-card-media"]) .uk-slidenav,
.uk-card-secondary.uk-card-body .uk-slidenav,
.uk-card-secondary> :not([class*="uk-card-media"]) .uk-slidenav,
.uk-light .uk-slidenav,
.uk-offcanvas-bar .uk-slidenav,
.uk-overlay-primary .uk-slidenav,
.uk-section-primary:not(.uk-preserve-color) .uk-slidenav,
.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav,
.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav,
.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav {
  display: none;
}
</style>