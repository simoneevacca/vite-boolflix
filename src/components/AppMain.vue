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
            search: '',
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
    <header>
        <div class="logo">BOOLFLIX</div>
        <div>
            <input type="text" v-model="search" @keyup.enter="searchContent">
            <button @click="searchContent"> cerca </button>
        </div>
    </header>

    <main>
        <!-- show movie -->
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in state.contentElementMovies">
                    <div class="card">
                        <div class="poster"><img :src="prefixImage + item.poster_path" alt="">
                            <div class="text">
                                <div><strong>Titolo: </strong>{{ item.title }}</div>
                                <div><strong>Titolo originale: </strong>{{ item.original_title }}</div>
                                <div v-if="true"><strong>Lingua: </strong><lang-flag :iso="item.original_language" />
                                </div>
                                <div v-else>{{ item.original_language }}</div>
                                <div class="voto">
                                    <strong>Voto: </strong>
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
                                <div v-if="true"><strong>Lingua: </strong><lang-flag :iso="item.original_language" />
                                </div>
                                <div v-else>{{ item.original_language }}</div>
                                <div class="voto">
                                    <strong>Voto: </strong>
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
        </div>
    </main>



</template>


<style>

header {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    & .logo {
        color: red;
        font-size: 3rem;
    }
}


main {
    
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
                    height: 510px;
                    margin: 50px 0px 0px;

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
                        padding: 1rem;

                        & div {
                            margin-bottom: 5px;
                        }

                        & .voto {
                            display: flex;

                            & .fa-star {
                                color: yellow;
                            }
                        }

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
