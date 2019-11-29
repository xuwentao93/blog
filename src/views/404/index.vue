<template>
  <div class='not-find'>
    <el-button type='primary' @click='returnHome'>返回首页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    returnHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang='scss'>
.not-find {
  width: 100%;
  height: 100vh;
  background: url(../../assets/imgs/404/404.jpg) no-repeat;
  background-size:80% 80%;
}

.el-button {
  position: relative;
  top: 60vh;
  left: 20%;
}
</style>