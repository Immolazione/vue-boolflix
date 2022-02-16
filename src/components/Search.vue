<template>
<section>
  <input type="text" v-model.trim="term" :placeholder="placeholder || 'Cerca...'" @keyup.enter="emitSearch">
  <button type="button" @click="emitSearch">Search</button>
</section>
</template>

<script>
export default {
    name: 'Search',
    props: ['placeholder'],
    data(){
        return {
            term: "",
        }
    },
    methods: {
        // EMIT PER PASSARE IL CONTENUTO INPUT
        emitSearch() {
            this.$emit('search', this.term);
        }
    }
}
</script>

<style>

</style>