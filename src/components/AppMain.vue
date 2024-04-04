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
            prefixImage: 'https://image.tmdb.org/t/p/w342'

        }
    },

    methods: {
        searchContent() {
            state.GetContentMovies(`https://api.themoviedb.org/3/search/movie?api_key=41b23e11302057b0778ead19acd303ef&query=${this.search}&include_adult=false&language=it&page=1`)
            state.GetContentTv(`https://api.themoviedb.org/3/search/tv?api_key=41b23e11302057b0778ead19acd303ef&query=${this.search}&include_adult=false&language=it&page=1`)

        }
    },

    mounted() {
    }
}

</script>

<template>
    <input type="text" v-model="search" @keyup.enter="searchContent">
    <button @click="searchContent"> cerca </button>


    <!-- show movie -->
    <div v-for="item in state.contentElementMovies">
        <div class="card">
            <div><img :src="prefixImage + item.poster_path" alt=""></div>
            <div>{{ item.title }}</div>
            <div>{{ item.original_title }}</div>
            <div v-if="true"><lang-flag :iso="item.original_language" /></div>
            <div v-else>{{ item.original_language }}</div>
            <div>{{ Math.round(item.vote_average/2) }}</div>
            <div v-for="n in Math.round(item.vote_average/2)">{{ n }}</div>

        </div>
    </div>

    <!-- show tv series -->
    <div v-for="item in state.contentElementTv">
        <div class="card">
            <div><img :src="prefixImage + item.poster_path" alt=""></div>
            <div>{{ item.name }}</div>
            <div>{{ item.original_name }}</div>
            <div v-if="true"><lang-flag :iso="item.original_language" /></div>
            <div v-else>{{ item.original_language }}</div>
            <div>{{ Math.round(item.vote_average/2) }}</div>
            <div v-for="n in Math.round(item.vote_average/2)">{{ n }}</div>
        </div>
    </div>



</template>


<style></style>
