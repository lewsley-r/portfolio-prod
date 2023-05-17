<template>
  <div id="project-main">
    <h1 class="cat-heads" id="projects">Projects</h1>
    <div uk-slider>
        <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
            <li v-for="project in this.projects" v-bind:key="project" >
              <ProjectCard class="" :image="project.image" :title="project.title" :description="project.description"
            :repo="project.repo"></ProjectCard>
            </li>
        </ul>
    </div>
    <div id="" class="uk-animation-slide-top">
      <a id="project-arrow"  uk-icon="icon: arrow-down; ratio: 2;"
      href="#tech-used" uk-scroll>
      </a>
      <h5>Review some of my tech experience</h5>
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

#cat-heads{
  margin-top: 2vh;
}


</style>