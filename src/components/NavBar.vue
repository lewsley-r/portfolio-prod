<template>
  <div>

    <button class="uk-button uk-button-default uk-margin-small-right uk-float-left" uk-icon="icon: menu" type="button" uk-toggle="target: #nav"></button>


    <div id="nav" uk-offcanvas>
      <div class="uk-offcanvas-bar">

        <div class="uk-width-1-2@s uk-width-2-5@mt">
          <ul class="uk-nav uk-nav-default">
            <li class="nav-titles">
              <a class="nav-titles" href="#about-me">Who Am I?</a>
            </li>
            <li class="nav-titles">
              <a class="nav-titles" href="#projects">Projects</a>
            </li>
            <li class="nav-titles">
              <a class="nav-titles" href="#tech-used">Tech Experience</a>
            </li>
            <li class="nav-titles">
              <a class="nav-titles" href="#contact">Contact Me</a>
            </li>
            <li>
              <a class="" href="https://github.com/lewsley-r" uk-icon="icon: github"></a>
            </li>
            <li>
              <a class="" href="https://www.linkedin.com/in/ronan-lewsley-9b1bbb199/"
                uk-icon="icon: linkedin"></a>
            </li>
          </ul>
        </div>

      </div>
    </div>






  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-titles {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  font-size: large;
}

.nav-icons {
  margin-top: -5vh;
}

.uk-icon-nav {
  margin-top: 2vh;
}

#logo {
  height: 25vh;
  margin-top: -8vh;
}

.uk-button{
  color: white;
  border: none;
}
</style>