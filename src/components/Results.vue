<template>
  <section v-if="items.length" class="row g-0 d-flex justify-content-center">
    <h1 class="text-white">{{ title }}: </h1>
    <Card :item="item" v-for="item in items" :key="item.id" class="col-3" />
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