<template>
  <div>
    <nav class="uk-navbar-container uk-navbar-transparent uk-padding" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <a href="/"><img id="logo" src="@/assets/RL_LOGO_BLACK.png" /></a>
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
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-iconnav">
          <li>
            <a
              class="nav-icons"
              href="https://github.com/lewsley-r"
              uk-icon="icon: github"
            ></a>
          </li>
          <li>
            <a
              class="nav-icons"
              href="https://www.linkedin.com/in/ronan-lewsley-9b1bbb199/"
              uk-icon="icon: linkedin"
            ></a>
          </li>
        </ul>
      </div>
    </nav>
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
</style>