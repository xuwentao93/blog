<template>
  <div>
    <carousel-content></carousel-content>
    <essay-list></essay-list>
  </div>
</template>

<script>
import carouselContent from "./childView/carousel"
import essayList from './childView/essay'

export default {
  components: {
    carouselContent,
    essayList
  }
}
</script>

<style scoped lang='scss'>
</style>