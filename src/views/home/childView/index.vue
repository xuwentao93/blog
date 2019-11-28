<template>
  <div class='home'>
    <carousel-content></carousel-content>
    <article-list></article-list>
  </div>
</template>

<script>
import carouselContent from './carousel'
import articleList from './article'
export default {
  components: {
    carouselContent,
    articleList
  }
}
</script>

<style scoped lang='scss'>
.home {
  width: 880px;
  margin-right: 20px;
}
</style>