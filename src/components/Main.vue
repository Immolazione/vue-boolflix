<template>
<main>
  <Movies :movies="movies" :imgUrl="imgUrl" />
  <Series :series="series" :imgUrl="imgUrl" />
</main>
</template>

<script>
import Movies from './Movies.vue';
import Series from './Series.vue';

export default {
  name: 'Main',
  components: {
    Movies,
    Series,
  },
  props: ['movies', 'series', 'imgUrl']
};  
</script>

<style lang="scss">

</style>