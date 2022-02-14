<template>
<main>
  <section>
    <input type="text" v-model="searchText">
    <button type="button" @click="getFilms">Search</button>
  </section>
  <div v-if='(filmsFound.length == 0)'>CERCA UN TITOLO PER MOSTRARE I FILM</div>
  <section id="film-results" v-else>
    <ul v-for="(film, id) in filmsFound" :key="id">
      <li><strong>Title:</strong> {{ film.title }}</li>
      <li><strong>Original Title:</strong> {{ film.original_title }}</li>
      <!-- <li><strong>Lingua:</strong> <img :src=></li> -->
      <li><strong>Voto:</strong> {{ film.vote_average }}</li>
    </ul>
  </section>
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
      axios.get(`${this.baseUri}${this.endPoint}?api_key=${this.apiKey}&language=${this.language}&query=${this.searchText}`).then(res => {
        console.log(res.data.results);
        this.filmsFound = res.data.results;
      });
    },
    getOriginalLanguage() {
      
    },
  },
};  
</script>

<style lang="scss">

</style>