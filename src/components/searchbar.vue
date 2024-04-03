<script>
    export default {
        name: 'searchBar',
        data(){
            return {
            search: ''
            }
        }
    }
</script>

<template>

    <input type="text" v-model="search">
</template>


<style>

</style>
