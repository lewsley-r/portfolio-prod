<template>
  <div id="main-home-block">
    <!-- <h3 id="name" class="code-font uk-heading-medium uk-animation-slide-left">My name is Ronan
        Lewsley.</h3> -->

    <div class="main-block uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-center" uk-grid>
      <div id="first-column">
        <img class="avatar uk-animation-slide-left uk-align-center" src="@/assets/AvatarMaker.svg" />
      </div>
      <div id="second-column">
          <AboutBlock></AboutBlock>
      </div>
    
    </div>
    <!-- <div id="next-page-box" class="uk-animation-slide-top">
      <a id="project-arrow"  uk-icon="icon: arrow-down; ratio: 2;"
      href="#project-main" uk-scroll>
      </a>

    </div> -->
 
  </div>
</template>

<script>

import AboutBlock from "@/components/AboutBlock.vue";


export default {
  components: { AboutBlock },

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

<style scoped>

/* .avatar{
  height: 10vh;
} */

.uk-first-column {
  height: 70%;
  margin-left: 50vh;
  width: fit-content;
}

.code-font {
  font-family: "Space Mono", monospace;
  color: white;
}

.main-block{
  max-height: 70%;
}

#second-column{
  height: 70%;
  width: fit-content;
}

#main-home-block {
  height: 80vh;
  color: white;
  padding-top: 20vh;
}

#name {
  font-weight: 900;
  color: lightgreen;
}

#next-page-box {
  margin-top: 20vh;
}
</style>