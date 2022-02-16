<template>
<main>
  <Results :items="movies" title="Movies" />
  <Results :items="series" title="Series" />
</main>
</template>

<script>
import Results from './Results.vue';

export default {
  name: 'Main',
  components: {
    Results
  },
  props: ['movies', 'series']
};  
</script>

<style lang="scss">

</style>