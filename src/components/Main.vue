<template>
<main>
    <div>
    <input type="text" v-model="searchText">
    <button type="button">Search</button>
    </div>
</main>
</template>

<script>
export default {
    name: 'Main',
    data(){
        return {
            searchText: "",
        }
    }
}
</script>

<style lang="scss">

</style>