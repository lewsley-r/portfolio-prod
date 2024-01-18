<template>
  <div id="">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {NavBar}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Source+Sans+Pro&family=Space+Grotesk:wght@700&family=Space+Mono&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Pathway+Extreme:wght@500&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #333333;
  overflow-x: hidden;
}

/* nav {
  padding: 10px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
