<template>
  <div>
    <MainHomeBlock></MainHomeBlock>
    <ProjectBlock></ProjectBlock>
    <!-- <LogoBlock></LogoBlock>
    <ContactForm></ContactForm> -->
  </div>
</template>

<script>

import { useProjectStore } from "@/stores/projectStore";

import MainHomeBlock from "@/components/MainHomeBlock.vue";
import ProjectBlock from "@/components/ProjectBlock.vue";

export default {
  components: {  MainHomeBlock, ProjectBlock },

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

<style>
.code-font {
  font-family: 'Pathway Extreme', sans-serif; }

.cat-heads {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  color: white;
}


#about-card {
  margin-top: 1vh;
  /* height: 50vh; */
  font-family: 'Pathway Extreme', sans-serif;  text-align: center;
  margin-bottom: 5vh;
}

#projects {
  color: white;
}

#profile-photo {
  padding: 2vh;
  height: 50vh;
  border-radius: 50%;
}

</style>