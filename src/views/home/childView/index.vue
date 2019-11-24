<template>
  <div class='home'>
    <carousel-content></carousel-content>
    <essay-list></essay-list>
  </div>
</template>

<script>
import carouselContent from './carousel'
import essayList from './essay'
export default {
  components: {
    carouselContent,
    essayList
  }
}
</script>

<style scoped lang='scss'>
.home {
  width: 880px;
  margin-right: 20px;
}
</style>