<script>
import { state } from '../../state.js'
import LangFlag from 'vue-lang-code-flags';

export default {
    components: {
        LangFlag,
    },
    name: 'AppMain',
    data() {
        return {
            state,
            search: 'avatar',

        }
    },

    methods: {
        searchContent() {
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



    <div v-for="item in state.contentElement">
        <div class="card">
            <div>{{ item.title }}</div>
            <div>{{ item.original_title }}</div>
            <lang-flag :iso="item.original_language" />
            <div>{{ item.vote_average }}</div>
            

        </div>

    </div>



</template>


<style></style>
