<template>
  <a :href="repo">
    <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-width-1-1@m" uk-animation-scale-up>
        <span class="uk-badge" v-for="item in stack" v-bind:key="item.id">{{item}}</span>
        <h3 class="uk-card-title">{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
  </a>
</template>

<script scoped>
import { useProjectStore } from '@/stores/projectStore';

export default {
  props: ["repo", "image", "title", "description", "stack"],
  data(){
    return{
      projectStore: useProjectStore()

    }
  },
  computed: {
   
  }
};

</script>

<style scoped>


  .uk-float-right {
    float: none;
  }

  .uk-card{
    height: 30vh;
    width: 30vw;
    border-radius: 5px;
    background-color: black;
    color: #00ff00;
  }

  .uk-card-title{
    color: #ffff33

  }

  #profile-photo{
    width: 50%;
    height: 80%;
  }

  #gh-logo{
    margin-left: auto;
    margin-right: auto;
  }
</style>