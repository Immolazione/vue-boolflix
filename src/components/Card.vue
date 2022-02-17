<template>
  <ul>
    <li><img id="card-bg" :src="getImage" :alt="item.title || item.name"></li>
    <li><strong>Title: </strong>{{item.title || item.name}}</li>
    <li><strong>Original Title: </strong>{{item.original_title || item.original_name}}</li>

    <li v-if="hasFlag"><strong>Language: </strong><img
        id="card-lang"
        :src="require(`../assets/img/${item.original_language}.png`)" 
        :alt="item.original_language" />
    </li>

    <li><strong>Voto: </strong><i
        v-for="n in 5"
        :key="n"
        class="far fa-star"
        :class="{'fas' :(n <= getVote)}">
    </i></li>

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
        hasFlag() {
            return (!(this.item.original_language == 'en' || this.item.original_language == 'it' )) ? false : true;
        }
        // hasFlag() { NON VA E NON SO PERCHè AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        //     return (this.languages.includes(this.item.original_language)) ? false : true;
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