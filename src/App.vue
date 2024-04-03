<script>
  import { state } from '../state.js'

  import AppMain from './components/AppMain.vue'


  export default{
    
    components: {
      
      AppMain
    },
    data(){
      return{
        state,
        
      }
    },
    
  }
</script>

<template>
  

  <AppMain />

</template>

<style>

</style>
