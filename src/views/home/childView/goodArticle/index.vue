<template>
  <div class='good-article'>
    <a href="https://es6.ruanyifeng.com/" target="_blank">
      <img :src='src' class='img'>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: require('@/assets/imgs/goodRFC/es6.jpg')
    }
  }
}
</script>

<style scoped lang='scss'>
// .good-article {

// }
.img {
  width: 100%;
  height: inherit;
}
</style>