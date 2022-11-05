<template>
  <div id="main-home-block">
    <h3 class="code-font uk-heading-medium">My name is <span uk-scrollspy="cls:uk-animation-fade" id="name">Ronan Lewsley</span>.</h3>
    <h2 class="about-text code-font">I'm 23 Years old, from Ireland and i'm a Full Stack Engineer.</h2>
    <span uk-icon="icon: code; ratio: 20"></span>
    <h3 class="code-font" card>
      I'm passionate about leveraging tech to solve real world problems.
    </h3>
  </div>
</template>

<script>
export default {};
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