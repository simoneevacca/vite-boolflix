// store.js
import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({


    contents: [],
    contentElementMovies: [],
    contentElementTv: [],


    GetContentMovies(url) {
        this.contentElementMovies = []
        this.contentElementTv = []


        axios.get(url)
            .then(response => {
                this.contents = response.data

                console.log(this.contents);
                this.contents.results.forEach(element => {
                    this.contentElementMovies.push(element)
                })
                console.log(this.contentElementMovies);
            })
    },

    GetContentTv(url) {
        axios.get(url)
            .then(response => {
                this.contents = response.data

                console.log(this.contents);
                this.contents.results.forEach(element => {
                    this.contentElementTv.push(element)
                })
                console.log(this.contentElementTv);
            })
    }
})