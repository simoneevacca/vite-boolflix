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

    <main>
        <!-- show movie -->
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in state.contentElementMovies">
                    <div class="card">
                        <div class="poster"><img :src="prefixImage + item.poster_path" alt="">
                            <div class="text">
                                <div>{{ item.title }}</div>
                                <div>{{ item.original_title }}</div>
                                <div v-if="true"><lang-flag :iso="item.original_language" /></div>
                                <div v-else>{{ item.original_language }}</div>
                                <div v-for="n in Math.round(item.vote_average / 2)"><i class="fa-solid fa-star"></i>
                                </div>
                                <div v-for="n in 5 - Math.round(item.vote_average / 2)"><i
                                        class="fa-regular fa-star"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- show tv series -->
        <div class="container">
            <div class="row">

                <div class="col" v-for="item in state.contentElementTv">
                    <div class="card">
                        <div class="poster"><img :src="prefixImage + item.poster_path" alt="">
                            <div class="text">
                                <div>{{ item.name }}</div>
                                <div>{{ item.original_name }}</div>
                                <div v-if="true"><lang-flag :iso="item.original_language" /></div>
                                <div v-else>{{ item.original_language }}</div>
                                <div v-for="n in Math.round(item.vote_average / 2)"><i class="fa-solid fa-star"></i>
                                </div>
                                <div v-for="n in 5 - Math.round(item.vote_average / 2)"><i
                                        class="fa-regular fa-star"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>



</template>


<style>
main {
    background-color: rgb(36, 36, 36);
    color: white;

    & .container {
        width: 90%;
        margin: auto;

        & .row {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            & .col {
                width: calc(100% / 3);

                & .card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    & .poster {
                        position: relative;
                    }
                    
                    & .text {
                        position: absolute;
                        top: 0;
                        background-color: black;
                        width: 100%;
                        height: 100%;
                        display: none;
                        
                    }
                    & .poster:hover {
                        .text {
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>
