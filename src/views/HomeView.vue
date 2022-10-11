<template>
  <div>
    <h1 id="hello-world" class="code-font uk-heading-xlarge">Hello World.</h1>
    <h3 class="code-font uk-heading-medium">My name is Ronan Lewsley.</h3>
    <div
      id="about-card"
      class="
        uk-card
        uk-card-default
        uk-grid-collapse
        uk-child-width-1-2@s
        uk-margin
        uk-animation-slide-left
      "
      uk-grid
    >
      <div class="uk-card-media-left uk-cover-container">
        <img
          id="profile-photo"
          src="@/assets/profile-photo.jpeg"
          alt="ronan-lewsley-photo"
          href="#hello-world"
        />
        <canvas width="600" height="400"></canvas>
      </div>
      <div>
        <div id="about-body" class="uk-card-body">
          <h2 class="about-text code-font">Full Stack Engineer</h2>
          <h3 class="about-text code-font" card>
            <br />Passionate about solving real world problems with tech.
          </h3>
        </div>
      </div>
    </div>
    <h1 id="projects">Projects</h1>
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
            <ProjectBlock
              :image="project.image"
              :title="project.title"
              :description="project.description"
              :backend="project.backend"
              :frontend="project.frontend"
            ></ProjectBlock>
          </div>
        </li>
      </ul>

      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
      ></a>
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
      ></a>
    </div>
  </div>
</template>

<script>
import ProjectBlock from "../components/ProjectBlock.vue";
import { useProjectStore } from "@/stores/projectStore";

export default {
  components: { ProjectBlock },

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

.about-text {
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
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
}

#profile-photo {
  padding: 2vh;
  height: 50vh;
  border-radius: 50%;
}
</style>