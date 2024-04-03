<script>
import { state } from '../../state.js'


export default {
    name: 'AppMain',
    data() {
        return {
            search: 'avatar',
           
            
        }
    },

    methods: {
        searchContent(){
        state.GetContent(`https://api.themoviedb.org/3/search/movie?api_key=41b23e11302057b0778ead19acd303ef&query=${this.search}&include_adult=false&language=it&page=1`)
            
        }
    },

    mounted() {
       
    }

}

</script>

<template>
    <input type="text" v-model="search">
    <button @click="searchContent"> cerca </button>


        
        
    
    

</template>


<style></style>
