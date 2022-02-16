<template>
  <section v-if="items.length">
    <h1>{{ title }}: </h1>
    <Card :item="item" v-for="item in items" :key="item.id" />
  </section>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Results',
  components: {
    Card,
  },
  props: ['items', 'title'],
}
</script>

<style lang='scss' scoped >
  li img {
    width: 30px;
  }
</style>