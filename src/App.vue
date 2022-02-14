<template>
<div>
  <Header />
  <Main />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

import axios from 'axios';

export default {
name: 'App',
data() {
  return {
    filmsFound: [],
    baseUri: 'https://api.themoviedb.org/3',
    apiKey: '0d07b420b3a9f7101c92e8e8e3e0ee15',
    endPoint: '/search/movie',
    language: 'it-IT',
    queryString: '',
  }
},
methods: {
  getFilms(){
    axios.get(`${this.baseUri}/search/movie?api_key=${this.apiKey}&language=it-IT&query=games`).then(res => {
      console.log(res.data.result);
    });
  },
},
components: {
  Header,
  Main
}
}
</script>

<style lang="scss">
</style>
