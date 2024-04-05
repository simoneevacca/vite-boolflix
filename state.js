// store.js
import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({


    contents: [],
    contentElementMovies: [],
    contentElementTv: [],
    cast: [],
    castNameMovie: [],
    


    GetContentMovies(url) {
        this.contentElementMovies = []
        axios.get(url)
            .then(response => {
                this.contents = response.data
                this.contents.results.forEach(element => {
                    this.contentElementMovies.push(element)
                })
            })
    },


    GetContentTv(url) {
        this.contentElementTv = []
        axios.get(url)
            .then(response => {
                this.contents = response.data
                this.contents.results.forEach(element => {
                    this.contentElementTv.push(element)
                })
            })
    },

    getCast(url) {
        this.castNameMovie = []
        axios.get(url)
            .then(response => {
                this.cast = response.data.cast
                for (let i = 0; i < 5; i++) {    
                    this.castNameMovie.push(this.cast[i].name)     
                }
                console.log(this.castNameMovie);          
                
            })
    }
})