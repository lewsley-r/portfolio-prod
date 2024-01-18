<template>
  <div>

    <!-- <button class="uk-button uk-button-default uk-margin-small-right uk-float-left" uk-icon="icon: arrow-right"
      type="button" uk-toggle="target: #nav"><img id="nav-img" src="@/assets/RL_LOGO_BLACK.png" /></button>
    

    <div id="nav" uk-offcanvas>
      <div class="uk-offcanvas-bar">

        <div class="uk-width-1-2@s uk-width-2-5@mt">
          <ul class="uk-nav uk-nav-default">
            
          </ul>
        </div>

      </div> -->
    <!-- </div> -->

    <div class="uk-position-relative">
      <div class="uk-position-top">
          <nav class="uk-navbar-container uk-navbar-transparent">
              <div class="uk-container">
                  <div uk-navbar>
                      <div class="uk-navbar-left">
                        <a href="/"> 
                          <img id="nav-img" src="@/assets/new_logo.png" />
                        </a>
                      </div>
                      <div class="uk-navbar-center">
                          <ul class="uk-navbar-nav">
                            <li class="nav-titles">
                            </li>
                            <li class="nav-titles">
                              <a class="nav-titles" href="/cv.pdf">CV</a>
                            </li>
                            <li class="nav-titles">
                              <a class="nav-titles" href="/my_pub_key.pub">Public Key</a>
                            </li>
                            <li>
                              <a id="gh-logo" class="uk-float-right" href="https://github.com/lewsley-r" uk-icon="icon: github; ratio: 2;"></a>
                            </li>
                            <li>
                              <a id="linkd-logo" class="uk-float-right" href="https://www.linkedin.com/in/ronan-lewsley-9b1bbb199/" uk-icon="icon: linkedin; ratio: 2;"></a>
                            </li>
                          </ul>
                      </div>

                  </div>
              </div>
          </nav>
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

.uk-button {
  color: white;
  border: none;
}

.uk-container{
  width: 100vw;
  max-width: 100vw; 
  
}
.nav-titles {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  opacity: 100%;
  font-size: large;
  color: white;
}

.nav-icons {
  margin-top: -5vh;
}

.uk-icon-nav {
  margin-top: 2vh;
}

#nav-img {
  height: 5vh;
  margin: 2vh;
}

#logo {
  height: 25vh;
  margin-top: -8vh;
}

#nav {
  background-color: lightgreen;
}</style>