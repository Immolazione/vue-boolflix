<template>
<main>
  <div class="container">
    <Results :items="movies" title="Movies" class="mb-5" />
    <Results :items="series" title="Series" />
  </div>
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
main {
  background-color: #3B3B3B;
}

</style>