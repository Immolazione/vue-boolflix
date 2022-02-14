<template>
<main>
    <div>
    <input type="text" v-model="searchText">
    <button type="button" @click="getMovie">Search</button>
    </div>
</main>
</template>

<script>
export default {
    name: 'Main.vue',
    searchText: "",
}
</script>

<style lang="scss">

</style>