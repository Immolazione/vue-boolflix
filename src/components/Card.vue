<template>
  <ul>
      <li><img id="card-bg" :src="getImage" :alt="item.title || item.name"></li>
      <li><strong>Title: </strong>{{item.title || item.name}}</li>
      <li><strong>Original Title: </strong>{{item.original_title || item.original_name}}</li>
      <li><strong>Language: </strong><img
      id="card-lang"
      v-if="hasFlag"
      :src="require(`../assets/img/${item.original_language}.png`)" 
      :alt="item.original_language" />
      </li>
      <li><strong>Voto: </strong></li>
  </ul>
</template>

<script>
export default {
    name: 'Card',
    props: ['items', 'title', 'item'],
    languages: ['en', 'it'],
    data() {
        return{
            images: {
            placeholder: 'https://www.altavod.com/assets/images/poster-placeholder.png',
            imgUrl: 'https://image.tmdb.org/t/p/w92',
            }
        }
    },
    computed: {
        getImage(){
            if (!this.item.poster_path) return this.images.placeholder;
            return this.images.imgUrl + this.item.poster_path;
        },
        getVote(){
            return Math.ceil(this.item.vote_average / 2);
        },
        // hasFlag() {
        //     return (this.languages.includes(this.item.original_language)) ? true : false;
        // }
    },
}
</script>

<style lang="scss" scoped>
    ul{
        li{
            #card-bg {
                max-width: 92px;
            }
            #card-lang {
                height: 15px;
            }
        }
    }
</style>