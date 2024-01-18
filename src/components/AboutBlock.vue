<template>
 <div
      id="about-card"
      class="
        uk-card
        uk-animation-slide-left
      "

    >   

    <div class="bubble left">
      <VueWriter :array="lines" :eraseSpeed="25" :typeSpeed="40" :iterations="1" />
    </div>

</div>

</template>

<script>
export default {
  data(){
    return{
      lines: ["Hi, i'm Ronan Lewsley. I'm a Full Stack Developer based in Belfast, Northern Ireland. Scroll down to view some of my projects!"]
    }
  }

}
</script>

<style scoped>

.bubble {
  font-family: "Space Mono", monospace;
  font-weight: 600;
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
  /* background: linear-gradient(135deg, #90ee90, #90ee90) border-box; */
  color:  	#00ff00;
  /* text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000; */
    font-size: 20px;
    background-color: black;
}

.left {
  --_d: 0%;
  border-left: var(--t) solid #0000;
  margin-right: var(--t);
  place-self: start;
  margin-top: 20vh;
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


</style>