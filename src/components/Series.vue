<template>
  <section id="serie-results" v-if="series.length">
    <h1>Series: </h1>
    <ul v-for="serie in series" :key="serie.id">
      <img :src="serie.poster_path ? `${images.imgUrl}w92${serie.poster_path}` : `${images.placeholder}`" alt="serie.name">
      <li><strong>Title:</strong> {{ serie.name }}</li>
      <li><strong>Original Title:</strong> {{ serie.original_name }}</li>
      <li><strong>Lingua:</strong> <img v-if="serie.original_language == 'en' || serie.original_language == 'it'" :src="require(`../assets/img/${serie.original_language}.png`)" /></li>
      <li><strong>Voto:</strong> <font-awesome-icon icon="fa-regular fa-star" /></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Series',
  props: ['series'],
  computed: {
    // getVote() {
    //   return this.serie.vote_average = Math.ceil(this.serie.vote_average / 2);
    // }
  },
  data(){
    return{
        images: {
          placeholder: 'https://www.altavod.com/assets/images/poster-placeholder.png',
          imgUrl: 'https://image.tmdb.org/t/p/',
      },
    }
  },
}
</script>

<style lang='scss' scoped >
  li img {
    width: 30px;
  }
</style>