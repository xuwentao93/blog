<template>
  <div @keydown.backspace='back'>
    <!-- 顶部标题栏 -->
    <div class='title'>
      <div class="upload">
        <el-button type='primary' @click='save'>保存</el-button>
        <el-button type='success' @click='handIn'>发布</el-button>
      </div>
      <input type="text" v-model='title' placeholder='请输入文章标题...'>
      <div class="tools">
        <i class="fa fa-bold"></i>
        <i class="fa fa-link"></i>
        <i class="fa fa-code"></i>
        <i class="fa fa-picture-o"></i>
      </div>
    </div>

    <div class='write-container'>
      <!-- 左部内容，编辑区 -->
      <div class="write" tabindex='1' @focus="write" ref='write' @blur='leaveWrite'>
        <textarea v-model='text' ref='text' @focus='focusText' @blur='leaveText'></textarea>
        <p class="msg" ref='msg'>{{msg}}</p>
        <div class="cursor" :class='{ borderHidden: border }'></div>
      </div>
      <!-- 右部内容，视图区 -->
      <div class="view">
        <div>{{msg}}</div>
        <p class='sdsdsd'>kkk   kkk</p>
        <div>123</div>
        <el-button @click='test' ref='test'>test button</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { save, handIn } from '@/api/file'
export default {
  data() {
    return {
      title: '',       // 文本的标题
      text: '',        // textarea 的文本内容.
      msg: 'dd',       // 可视的文本内容.
      border: true,    // 输入地方的光标显隐.
      toggle: null,    // 光标显隐定时器切换.
      focus: null      // 获取当前 focus 的 dom 节点.
    }
  },
  methods: {
    write() {
      this.$refs.text.focus()
       // 点击div就让文本聚焦.
    },
    focusText() {
      if(this.toggle === null) {
        this.border = false // 没有定时器才添加,并且一开始就显示光标.
        this.borderToggle()
      }
    },
    leaveText() {
      setTimeout(() => { // $nextTick 失效？未知原因。
        if (document.activeElement !== this.$refs.text) this.hiddenCursor()
      }, 0)
    },
    leaveWrite() {

    },
    back() {
      this.msg = this.msg.substring(this.msg.length - 1, 0)
    },
    test() {
      console.log(this.msg)
      console.log(window.getSelection().toString())
    },
    borderToggle() {
      this.toggle = setInterval(() => {
        this.border = !this.border
      }, 500)
    },
    hiddenCursor() { // 光标显示取消.
      clearInterval(this.toggle)
      this.setFocus()
      this.border = true
      this.toggle = null
    },
    setFocus() {
      this.$nextTick(() => this.focus = document.activeElement) // 修改focus, 必须用nextTick, 否则值为body.
    },
    save() {
      save({
        type: 'dictionary',
        username: this.$store.state.user.user,
        title: this.title,
        msg: this.msg
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => console.log('save error: ' + error))
    },
    handIn() {
      let ifHandIn = confirm('确认要提交吗')
      if(!ifHandIn) return
      handIn({
        type: 'dictionary',
        username: this.$store.state.user.user,
        title: this.titile,
        msg: this.msg
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => console.log('handIn error: ' + error))
    }
  },
  watch: {
    text() {
      this.msg = this.msg + this.text
      this.text = ''
    }
  },
  mounted() {
    console.log(this.$store.state.user.user)
    // this.borderToggle()
  }
}
</script>

<style scoped lang='scss'>
.fa {
  display: inline-block;
  margin:0 20px;
  cursor: pointer;
}
.title {
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  overflow: hidden; // 防止内部浮动元素引起的父元素高度坍塌.
  .upload {
    float: right;
    margin: 15px;
    ::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  input {
    display: inline-block;
    padding: 20px 0;
    width: 30%;
    margin-right: 10%;
    border-width: 0;
    font-size: 22px;
    font-weight: 700;
    outline: none;
  }
  .tools {
    display: inline-block;
  }
}
.write-container {
  display: flex;
  .write, .view {
    overflow: auto;
    width: 50%;
    min-height: calc(100vh - 142px);
    font-size: 1.167em;
    white-space: pre-wrap; // 让多余的空格不会消失。
  }

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
    textarea {
      width: 0;
      height: 0;
      border-width: 0;
      font-size: 1.167em;
      outline: none;
      opacity: 0;
    }
    .msg {
      display: inline-block;
    }
    .cursor {
      position: relative;
      top: 6px;
      height: 1.4em;
      display: inline-block;
      border: 1.3px solid #000;
    }
    .borderHidden {
      border-width: 0;
    }
  }

  .view {
    padding: 30px;
  }
}
</style>