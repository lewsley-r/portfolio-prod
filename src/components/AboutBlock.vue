<template>
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
      <div class="uk-card-media-left uk-cover-container" id="about-me">
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
          <h2 id="about-title"  class="code-font">About Me</h2>
          <p>I'm currently employed as a Full Stack Developer at <a href="https://weareengineered.com/">Engineered.</a> The team I reside in specialise in the Spryker E-commerce framework and how it can be integrated with other web services.</p>
          <p>In my personal time I am completing CodeAcademy courses around PHP, JS and TS. </p>
          <p>My personal laptop runs on Ubuntu 22.04 LTS (my favourite OS for software development).</p>
          <p>I also gain daily exposure to development in Mac OS on my work machine.</p>
          <p>Outside of coding, I love cooking, cars, motorbikes and dogs!</p>
          <!-- <p>My German Shepherd puppy attached below: </p>
          <img id="dog-pic" src="@/assets/freya.jpg" /> -->

        </div>
      </div>

</div>

</template>

<script>
export default {

}
</script>

<style scoped>
#about-card{
    height: 100vh;
    color: white;
}

#about-title{
    color: white;
    font-weight: 800;
}

#dog-pic{
    height: 30vh;
    border-radius: 1em;
}

#profile-photo{
    margin-top: 15vh;
    margin-left: 5vw;
}

</style>