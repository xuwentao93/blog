<template>
  <div class="title">
    <div class="upload">
      <el-button type="primary" @click="save">保存</el-button>
      <el-button type="success" @click="handIn">发布</el-button>
    </div>
    <input type="text" v-model="title" placeholder="请输入文章标题..." spellcheck="false"/>
    <div class="tools">
      <i class="fa fa-bold"></i>
      <i class="fa fa-link"></i>
      <i class="fa fa-code"></i>
      <i class="fa fa-picture-o"></i>
    </div>
  </div>
</template>

<script>
import { save, handIn } from '@/api/file'
export default {
  props: {
    msg: String
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
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
      if (!ifHandIn) return
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
    },
  }
};
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
    font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
    font-size: 22px;
    font-weight: 700;
    outline: none;
  }
  .tools {
    display: inline-block;
  }
}
</style>