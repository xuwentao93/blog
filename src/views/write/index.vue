<template>
  <div>
    <navigation-sidebar :msg='msg'></navigation-sidebar>
    <div class='write-container'>
      <write-container :msg='msg' @changeMsg='changeMsg'></write-container>
      <watch-container :msg='msg'></watch-container>
    </div>
  </div>
</template>

<script>
import navigationSidebar from './childView/navigationSidebar' // 导航栏
import writeContainer from './childView/write' // 编辑框
import watchContainer from './childView/watch' // 可视区域.
export default {
  components: {
    navigationSidebar,
    writeContainer,
    watchContainer
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    changeMsg(text) {
      this.msg = text
    } 
  }
} 
</script>

<style scoped lang='scss'>
.write-container {
  display: flex;
}
</style>

<style lang="scss">
.write,
.view {
  overflow: auto;
  width: 50%;
  min-height: calc(100vh - 142px);
  font-size: 1.167em;
  white-space: pre-wrap; // 让多余的空格不会消失。
}
</style>