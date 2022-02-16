<template>
<div>
  <header>
    <Search @search="searchItem" :placeholder="'Cerca un film...'" />
  </header>
  <Main />
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
      api: {
        baseUri: 'https://api.themoviedb.org/3',
        key: '0d07b420b3a9f7101c92e8e8e3e0ee15',
        language: 'it-IT',
      }
    };
  },

  methods: {
    searchItem(term){
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
    },
  },
}
</script>

<style lang="scss">
</style>
