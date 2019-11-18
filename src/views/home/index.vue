<template>
  <div class="main">
    <carousel-content></carousel-content>
    <today></today>
  </div>
</template>

<script>
import carouselContent from "./childView/carousel"
import today from "./childView/today"

export default {
  components: {
    carouselContent,
    today
  }
}
</script>

<style scoped lang='scss'>
.todayPage{
  height: 350px;
  background: #f66;
  border-radius: 3px;
}
</style>