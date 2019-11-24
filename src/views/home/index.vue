<template>
  <div class='container'>
    <router-view></router-view>
    <right-sidebar></right-sidebar>
  </div>
</template>

<script>
import rightSidebar from "./childView/rightSidebar"
export default {
  components: {
    rightSidebar
  }
}
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  padding-top: 30px;
  margin: 0 9%;
}
</style>