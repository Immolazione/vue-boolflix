<template>
  <section id="movie-results" v-if="movies.length">
    <h1>Movies: </h1>
    <ul v-for="movie in movies" :key="movie.id">
      <img :src="`${imgUrl}w92${movie.poster_path}`" alt="movie.title">
      <li><strong>Title:</strong> {{ movie.title }}</li>
      <li><strong>Original Title:</strong> {{ movie.original_title }}</li>
      <li><strong>Lingua:</strong> <img v-if="movie.original_language == 'en' || movie.original_language == 'it'" :src="require(`../assets/img/${movie.original_language}.png`)" /></li>
      <li><strong>Voto:</strong> {{ movie.vote_average }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Movies',
  props: ['movies', 'imgUrl']
}
</script>

<style lang='scss' scoped >
  li img {
    width: 30px;
  }
</style>