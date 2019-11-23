<template>
  <div class="main">
    <carousel-content></carousel-content>
    <decoration-home></decoration-home>
    <essay-list></essay-list>

  </div>
</template>

<script>
import carouselContent from "./childView/carousel"
import decorationHome from "./childView/decoration"
import essayList from './childView/essay'

export default {
  components: {
    carouselContent,
    decorationHome,
    essayList
  }
}
</script>

<style scoped lang='scss'>
</style>