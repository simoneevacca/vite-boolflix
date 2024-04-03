// store.js
import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
   

    contents: [],

    GetContent(url) {

        axios.get(url)
            .then(response => {
                this.contents = response.data
                // console.log(response.data);
            })
    }
})