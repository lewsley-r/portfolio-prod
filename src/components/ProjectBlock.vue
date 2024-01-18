<template>
  <div id="project-main">
    <div class="uk-grid-large uk-child-width-expand@s uk-text-center" uk-grid>
        <div id="project-grid"  v-for="project in this.projects" v-bind:key="project" >
            <ProjectCard class="" :image="project.image" :title="project.title" :description="project.description"
          :repo="project.repo" :stack="project.stack"></ProjectCard>
        </div>
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
  background-color: #333333;
  color: white;
  padding: 2vw;
  height: 100vh;
}


#project-grid{
  margin-top: 5vh;
}

#cat-heads{
  margin-top: 2vh;
}


</style>