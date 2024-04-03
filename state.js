// store.js
import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({


    contents: [],
    contentElement: [],


    GetContent(url) {
    this.contentElement = []

        axios.get(url)
            .then(response => {
                this.contents = response.data

                console.log(this.contents);
                this.contents.results.forEach(element => {
                    this.contentElement.push(element)
                })
                console.log(this.contentElement);

            })


    }
})