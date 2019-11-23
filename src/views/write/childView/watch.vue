<template>
  <div class="view">
    <div v-html='msg'></div>
    <el-button @click='test' ref='test'>test button</el-button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      // msg: 'msg'
    }
  },
  methods: {
    test() {
      try {
        const a = 1
        a = 2
      } catch(e) {
        console.log(e)
      }
      console.log(this.$store.state.user.user === 'piedaochuan')
    },
    consoleRange() {
      const selection = window.getSelection()
      let range = selection.getRangeAt(0)
      console.log(range)
    }
  }
}
</script>

<style scoped>
  .view {
    padding: 30px;
    background: #fff;
  }
</style>