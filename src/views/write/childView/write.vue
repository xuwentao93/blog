<template>
  <div class="write" tabindex='1' ref='write' contenteditable='true' @input='write' spellcheck="false"></div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      // msg: ''
    }
  },
  methods: {
    write() {
      const text = this.$refs.write.innerHTML
      this.$emit('changeMsg', text)
    }
  }
}
</script>

<style scoped lang='scss'>
  .write {
    padding: 30px;
    border-right: 1px solid #eee;
    line-height: 1.7em;
    vertical-align: top;
    font-size: 1.167em;
    font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
    background: #f8f9fa;
    outline: none;
    cursor: text;
  }
  ::selection {
    background: rgb(213, 232, 252)
  }
</style>