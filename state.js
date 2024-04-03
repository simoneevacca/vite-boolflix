// store.js
import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    test: 'hello',

    content: [],

    GetContent(url) {

        axios.get(url)
            .then(response => {
                this.content = response.data
                console.log(response);
            })
    }
})