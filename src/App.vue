<template>
<div>
  <Header />
  <Main />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
name: 'App',
data() {
  return {
    baseUri: 'https://api.themoviedb.org/3',
    apiKey: '0d07b420b3a9f7101c92e8e8e3e0ee15',
    endPoint: '/search/movie',
    language: 'it-IT',
    queryString: '',
  }
},
methods: {
  getFilms(){

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
