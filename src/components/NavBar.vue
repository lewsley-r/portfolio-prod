<template>
  <div>

    <button class="uk-button uk-button-default uk-margin-small-right uk-float-left" uk-icon="icon: arrow-right"
      type="button" uk-toggle="target: #nav"><img id="nav-img" src="@/assets/RL_LOGO_BLACK.png" /></button>
    <a id="gh-logo" class="uk-float-right" href="https://github.com/lewsley-r" uk-icon="icon: github; ratio: 2;"></a>

    <a id="linkd-logo" class="uk-float-right" href="https://www.linkedin.com/in/ronan-lewsley-9b1bbb199/" uk-icon="icon: linkedin; ratio: 2;"></a>


    <div id="nav" uk-offcanvas>
      <div class="uk-offcanvas-bar">

        <div class="uk-width-1-2@s uk-width-2-5@mt">
          <ul class="uk-nav uk-nav-default">
            <li class="nav-titles">
              <a class="nav-titles" href="#projects">Projects</a>
            </li>
            <li class="nav-titles">
              <a class="nav-titles" href="#tech-used">Tech Experience</a>
            </li>
            <li class="nav-titles">
              <a class="nav-titles" href="#contact">Contact Me</a>
            </li>
            <li class="nav-titles">
              <a class="nav-titles" href="/cv.pdf">CV</a>
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
.uk-card-primary.uk-card-body .uk-nav-default>li>a,
.uk-card-primary>:not([class*=uk-card-media]) .uk-nav-default>li>a,
.uk-card-secondary.uk-card-body .uk-nav-default>li>a,
.uk-card-secondary>:not([class*=uk-card-media]) .uk-nav-default>li>a,
.uk-light .uk-nav-default>li>a,
.uk-offcanvas-bar .uk-nav-default>li>a,
.uk-overlay-primary .uk-nav-default>li>a,
.uk-section-primary:not(.uk-preserve-color) .uk-nav-default>li>a,
.uk-section-secondary:not(.uk-preserve-color) .uk-nav-default>li>a,
.uk-tile-primary:not(.uk-preserve-color) .uk-nav-default>li>a,
.uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default>li>a {
  color: black;
}

.uk-offcanvas-bar {
  background-color: lightgreen;
  /* opacity: 70%; */
  color: black;
}

.uk-button {
  color: white;
  border: none;
}

.nav-titles {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  opacity: 100%;
  font-size: large;
  color: black;
}

.nav-icons {
  margin-top: -5vh;
}

.uk-icon-nav {
  margin-top: 2vh;
}

#nav-img {
  height: 20vh;
}

#logo {
  height: 25vh;
  margin-top: -8vh;
}

#gh-logo{
  /* padding: 1vw; */
  padding-right: 2vw;
  padding-top: 7vh
}

#linkd-logo{
  /* padding: 1vw; */
  padding-right: 0.5vw;
  padding-top: 7vh
}


#nav {
  background-color: lightgreen;
}</style>