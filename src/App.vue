<script>
  import { state } from '../state.js';
  import searchBar from './components/searchbar.vue'


  export default{
    
    components: {
      searchBar
    },
    data(){
      return{
        state,
        
      }
    },
    mounted() {
      state.GetContent('https://api.themoviedb.org/3/search/movie?api_key=41b23e11302057b0778ead19acd303ef&query=avatar&include_adult=false&language=it&page=1')
      
    }
  }
</script>

<template>
  
  <searchBar />
</template>

<style>

</style>
