<template>
  <div class="write" tabindex='0' ref='write' contenteditable='true' @input='write' spellcheck="false"></div>
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
    },
    pasteDefaultStyleCancle() { // 取消文本粘贴后出现默认样式, 这个代码是copy的, 还要学习下.
      const write = this.$refs.write
      write.addEventListener("paste", e => {
        e.stopPropagation()
        e.preventDefault()
        let text = '', event = (e.originalEvent || e)
        if (event.clipboardData && event.clipboardData.getData)
        text = event.clipboardData.getData('text/plain')
        else if (window.clipboardData && window.clipboardData.getData)
        text = window.clipboardData.getData('Text')
        if (document.queryCommandSupported('insertText'))
          document.execCommand('insertText', false, text)
         else document.execCommand('paste', false, text)
      });
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

  ::selection {
    background: rgb(213, 232, 252);
  }
</style>