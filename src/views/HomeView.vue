<template>
  <div>
    <MainHomeBlock></MainHomeBlock>
    <ProjectBlock></ProjectBlock>
    <LogoBlock></LogoBlock>
    <ContactForm></ContactForm>
  </div>
</template>

<script>

import { useProjectStore } from "@/stores/projectStore";

import LogoBlock from "../components/LogoBlock.vue";
import ProjectBlock from "../components/ProjectBlock.vue";
import MainHomeBlock from "@/components/MainHomeBlock.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: { ProjectBlock, LogoBlock, MainHomeBlock, ContactForm },

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
  font-family: "Space Mono", monospace;
}

.cat-heads {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  color: white;
}

#about-body {
  padding: 15vh 0 0 1vw;
  font-family: "Space Mono", monospace;
}

#about-card {
  margin-top: 1vh;
  height: 50vh;
  font-family: "Space Mono", monospace;
  text-align: center;
  margin-bottom: 5vh;
  background: black;
}

#projects {
  color: white;
}

#profile-photo {
  padding: 2vh;
  height: 50vh;
  border-radius: 50%;
}
/* 
.uk-card-primary.uk-card-body .uk-slidenav:hover,
.uk-card-primary > :not([class*="uk-card-media"]) .uk-slidenav:hover,
.uk-card-secondary.uk-card-body .uk-slidenav:hover,
.uk-card-secondary > :not([class*="uk-card-media"]) .uk-slidenav:hover,
.uk-light .uk-slidenav:hover,
.uk-offcanvas-bar .uk-slidenav:hover,
.uk-overlay-primary .uk-slidenav:hover,
.uk-section-primary:not(.uk-preserve-color) .uk-slidenav:hover,
.uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:hover,
.uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:hover,
.uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:hover {
  color: black;
} */
</style>