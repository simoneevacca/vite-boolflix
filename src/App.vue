<script>
  import { state } from '../state.js'
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'


  export default{
    
    components: {
      AppHeader,
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
  
  <AppHeader />
  <AppMain />

</template>

<style>

</style>
