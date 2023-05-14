<template>
  <div id="main-home-block">
    <h3 class="code-font uk-heading-medium">My name is <span uk-scrollspy="cls:uk-animation-fade" id="name">Ronan Lewsley</span>.</h3>
    <h2 class="about-text code-font">I'm {{ this.age }} Years old, from Belfast, Northern Ireland and i'm a Full Stack Engineer.</h2>
    <span uk-icon="icon: code; ratio: 20"></span>
    <h3 class="code-font" card>
      I'm passionate about leveraging tech to solve real world problems.
    </h3>
  </div>
</template>

<script>
export default {

  data() {
    return{
      
    }
  },
  computed: {
    age() {
      let currentDate = new Date();
      let birthDate = new Date("1999/01/14");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference/31557600000);
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

#main-home-block{
    height: 90vh;
    color: white;
}

#name{
  font-weight: 900;
  color: greenyellow;
}

</style>