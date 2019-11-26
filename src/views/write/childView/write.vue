<template>
  <div class="write" tabindex='0' ref='write' contenteditable='true' spellcheck="false" @input='write'
  @click='test'></div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    write() {
      const text = this.$refs.write.innerHTML
      this.$emit('changeMsg', text)
    },
    cancelDefaultStyle(event) {
      event.stopPropagation()
      event.preventDefault()
      let text = ''
      text = event.clipboardData ? event.clipboardData.getData('text/plain')
      : event.dataTransfer.getData('text/plain')
      document.execCommand('insertText', false, text)
    },
    pasteDefaultStyleCancle() { // 取消文本粘贴后出现默认样式, 这个代码是copy的, 还要学习下.
      const write = this.$refs.write
      write.addEventListener("paste", this.cancelDefaultStyle)
      // write.addEventListener('drop', this.cancelDefaultStyle)
    },
    test() {
      // const write = this.$refs.write
      const selection = window.getSelection()
      let range = selection.getRangeAt(0)
      console.log(selection)
      console.log(selection.toString())
      console.log(range)
      // console.log(this.msg[range.startOffset])
    }
  },
  mounted() {
    this.pasteDefaultStyleCancle()
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
    word-wrap: break-word; /* 遇到空格整个单词显示不完就自动换行到下一行 */
    word-break: break-all; /* 如果一行没有空格就到头截断单词换行 */
    background: #f8f9fa;
    outline: none;
    cursor: text;
    div {
      background: #f8f9fa;
    }
  }
  .write ::selection,
  ::selection {
    background: #d5d8fc
  }
</style>