<script>
  import { state } from '../state.js';


  export default{
    data(){
      return{
        state
      }
    },
    mounted() {
      state.GetContent('https://api.themoviedb.org/3/search/movie?api_key=41b23e11302057b0778ead19acd303ef&query=avatar&include_adult=false&language=it&page=1')
      console.log();
    }
  }
</script>

<template>
  {{ state.test }}

  
</template>

<style>

</style>
