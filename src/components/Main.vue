<template>
<main>
  <Movies />
  <Series />
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
};  
</script>

<style lang="scss">

</style>