<template>
 <div
      id="about-card"
      class="
        uk-card
        uk-animation-slide-left
      "

    >   
    <div class="bubble left">
          <p>I'm currently employed as a Full Stack Developer at <a href="https://weareengineered.com/">Engineered.</a></p>
          <p>In my personal time I am honing my coding skills with CodeAcademy courses. </p>
          <p>My personal laptop currently runs on Ubuntu 22.04 LTS.</p>
          <p>Outside of coding, I love cooking, cars, motorbikes and dogs!</p>
      </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>

.bubble {
  --r: 25px;
  /* the radius */
  --t: 30px;
  /* the size of the tail */

  max-width: 300px;
  padding: calc(2*var(--r)/3);
  -webkit-mask:
    radial-gradient(var(--t) at var(--_d) 0, #0000 98%, #000 102%) var(--_d) 100%/calc(100% - var(--r)) var(--t) no-repeat,
    conic-gradient(at var(--r) var(--r), #000 75%, #0000 0) calc(var(--r)/-2) calc(var(--r)/-2) padding-box,
    radial-gradient(50% 50%, #000 98%, #0000 101%) 0 0/var(--r) var(--r) space padding-box;
  background: linear-gradient(135deg, #90ee90, #90ee90) border-box;
  color: black;
  /* text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000; */
    font-size: 20px;
}

.left {
  --_d: 0%;
  border-left: var(--t) solid #0000;
  margin-right: var(--t);
  place-self: start;
  margin-top: 15vh;
}

#about-card{
    color: white;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

}

#about-title{
    color: white;
    font-weight: 800;
}


#profile-photo{
    margin-top: 15vh;
    margin-left: 5vw;
}

</style>