<template>
<div>
  <header>
    <Search @search="searchItem" :placeholder="'Cerca un film...'" />
  </header>
  <Main :movies="movies" :series="series" :imgUrl="imgUrl" />
</div>
</template>

<script>
import Search from './components/Search.vue'
import Main from './components/Main.vue';
import axios from 'axios';



export default {
  name: 'App',

  components: {
    Search,
    Main
  },

  data() {
    return {
      movies: [],
      series: [],
      imgUrl: 'https://image.tmdb.org/t/p/',
      api: {
        baseUri: 'https://api.themoviedb.org/3',
        key: '0d07b420b3a9f7101c92e8e8e3e0ee15',
        language: 'it-IT',
      }
    };
  },

  methods: {
    searchItem(term){
      if(!term){
        this.movies = [];
        this.series = [];
        return;
      }

      const { key, baseUri, language } = this.api;

      const config = {
        params: {
          api_key: key,
          language,
          query: term,
        },
      };

      axios.get(`${baseUri}/search/movie`, config).then(res => {
        this.movies = res.data.results;
        console.log(this.movies)
      });

      axios.get(`${baseUri}/search/tv`, config).then(res => {
        this.series = res.data.results;
        console.log(this.series)
      });

    },
  },
}
</script>

<style lang="scss">
</style>
