<template>
<main>
    <div>
    <input type="text" v-model="searchText">
    <button type="button" @click="getFilms">Search</button>
    </div>
</main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Main',
  data() {
    return {
      searchText: "",
      filmsFound: [],
      baseUri: 'https://api.themoviedb.org/3',
      apiKey: '0d07b420b3a9f7101c92e8e8e3e0ee15',
      endPoint: '/search/movie',
      language: 'it-IT',
      queryString: '',
    };
  },
  
  methods: {
    getFilms(){
      axios.get(`${this.baseUri}/search/movie?api_key=${this.apiKey}&language=it-IT&query=${this.searchText}`).then(res => {
        console.log(res.data.results);
        this.filmsFound = res.data.results;
      });
    },
  },
};  
</script>

<style lang="scss">

</style>