<template>
  <div class="title">
    <wt-carousel theme='Warning'>
      <span>{{ errorMsg }}</span>
    </wt-carousel>
    <div class="upload">
      <el-button type="primary" @click='save'>保存</el-button>
      <el-button type="success" @click="upload">发布</el-button>
    </div>
    <input class='title-input' v-model="title" placeholder="请输入文章标题..." spellcheck="false"/>
    <el-select v-model='type' placeholder="choose essay type">
      <el-option v-for='type in essayType' :key='type.type' :value='type.type'></el-option>
    </el-select>
    <div class="tools">
      <i class="fa fa-bold"></i>
      <i class="fa fa-link"></i>
      <i class="fa fa-code"></i>
      <i class="fa fa-picture-o"></i>
    </div>
  </div>
</template>

<script>
import { save, upload } from '@/api/file'
import { test } from '@/api/test'
import { essayType } from '@/config'
import wtCarousel from '@/components/wtAlert'
export default {
  components: {
    wtCarousel
  },
  props: {
    msg: String
  },
  data () {
    return {
      title: '',
      type: '',
      essayType,
      errorMsg: '请选择类型'
    }
  },
  methods: {
    save() {
      if (this.type === '') {
        alert('请选择类型!')
        return
      }
      save({
        type: this.type,
        username: this.$store.state.user.user,
        title: this.title,
        msg: this.msg
      })
      .then(res => {
        if (res.data === 'success') alert('保存成功!')
      })
      .catch(error => console.log('save error: ' + error))
    },
    upload() {
      if (this.type === '') {
        alert('请选择类型!')
        return
      }
      if (this.title === '') {
        alert('标题不能位空!')
        return
      }
      let ifHandIn = confirm('确认要上传吗')
      if (!ifHandIn) return
      upload({
        type: this.type,
        username: this.$store.state.user.user,
        title: this.title,
        msg: this.msg
      })
      .then(res => {
        if (res.data === 'success') alert('上传成功')
      })
      .catch(error => console.log('handIn error: ' + error))
    },
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
  width: 100%;
  height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  background: #fff;
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
  .title-input {
    display: inline-block;
    padding: 20px 0;
    width: 30%;
    border-width: 0;
    font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
    font-size: 22px;
    font-weight: 700;
    outline: none;
    background: transparent
  }
  .el-select {
    margin: 0 40px;
  }
  .tools {
    display: inline-block;
  }
}
</style>