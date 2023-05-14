<template>
  <div id="main-home-block">
    <h3 class="code-font uk-heading-medium">My name is <span uk-scrollspy="cls:uk-animation-fade" id="name">Ronan
        Lewsley</span>.</h3>
    <h2 class="about-text code-font">{{ this.age }} Years old || Belfast, Northern Ireland || Full Stack Engineer</h2>
    <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-center" uk-grid>

      <div>
        <img class="uk-animation-slide-left" src="@/assets/AvatarMaker.svg" />
      </div>
      <div>
        <div>
          <AboutBlock></AboutBlock>
        </div>
        
      </div>

    </div>



    <h3 class="code-font" card>
      I'm passionate about leveraging tech to solve real world problems.
    </h3>
  </div>
</template>

<script>

import AboutBlock from "@/components/AboutBlock.vue";


export default {
  components: {AboutBlock},

  data() {
    return {

    }
  },
  computed: {
    age() {
      let currentDate = new Date();
      let birthDate = new Date("1999/01/14");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age
    }
  }
};
</script>

<style>


.code-font {
  font-family: "Space Mono", monospace;
  color: white;
}

#main-home-block {
  height: 90vh;
  color: white;
  padding-top: 15px;
}

#name {
  font-weight: 900;
  color: greenyellow;
}
</style>