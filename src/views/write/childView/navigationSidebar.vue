<template>
  <div class="title">
    <wt-carousel :theme='msgTheme' v-if="warning" @close='closeMsg'>
      <span>{{ errorMsg }}</span>
    </wt-carousel>
    <div class="upload">
      <el-button type="primary" @click='saveOrUpload("save")' :loading='saveLoading'>保存</el-button>
      <el-button type="success" @click='saveOrUpload("upload")' :loading="uploadLoading">发布</el-button>
    </div>
    <input class='title-input' v-model="title" placeholder="please input your article title..."
    spellcheck="false"/>
    <el-select v-model='type' placeholder="choose article type">
      <el-option v-for='type in articleType' :key='type.type' :value='type.type'></el-option>
    </el-select>
    <div class="tools">
      <i class="fa fa-bold"></i>
      <i class="fa fa-link"></i>
      <i class="fa fa-code"></i>
      <i class="fa fa-picture-o"></i>
      <wt-uploadimg>
        <el-button>上传图片</el-button>
      </wt-uploadimg>
    </div>
  </div>
</template>

<script>
import { save, upload } from '@/api/file'
import { articleType } from '@/config'
import wtMsg from '@/components/wt-msg'
import wtUploadimg from '@/components/wt-uploadimg'
export default {
  components: {
    wtMsg,
    wtUploadimg
  },
  props: {
    msg: String
  },
  data () {
    return {
      title: '',
      type: '',
      articleType,
      errorMsg: 'Please choose your type.',
      warning: false,
      msgTheme: 'Warning',
      saveLoading: false,
      uploadLoading: false
    }
  },
  methods: {
    saveOrUpload(api) {
      this.msgTheme = 'Warning'
      const titleExp = /^[\.0-9a-zA-z '"\u4e00-\u9fa5]{6,32}$/
      if (this.title === '') {
        this.errorMsg = 'Please input your title.'
        this.warning = true
        return
      }
      if (this.title.length < 6 && this.title.length > 32) {
        this.errorMsg = 'Title\'s length should between 6 and 32.'
        this.warning = true
        return
      }
      if (!titleExp.test(this.title)) {
        this.errorMsg = 'Title is unvalid.(required by number, letters, char \'"\"" and "."'
        this.warning = true
        return
      }
      if (this.type === '') {
        this.errorMsg = 'Please choose your type.'
        this.warning = true
        return
      }

      if (this.msg.length < 100) {
        this.errorMsg = 'Please type more than 100 words in your text.'
        this.warning = true
        return
      }
      let saveUpload = api === 'save' ? save : upload
      this[`${api}loading`] = true
      saveUpload({
        type: this.type,
        username: this.$store.state.user.user,
        title: this.title,
        msg: this.msg
      })
      .then(res => {
        this[`${api}loading`] = true
        if (res.data === 'success') {
          this.msgTheme = 'Success'
          this.errorMsg = api === 'save' ? 'save successfully.' : 'Uploaded successfully.'
          this.warning = true
        }
      })
      .catch(error => console.log('saveUpload error: ' + error))
    },
    closeMsg() {
      this.warning = false
    }
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
    width: 33%;
    border-width: 0;
    font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
    font-size: 22px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    outline: none;
    background: transparent;

  }
  .el-select {
    margin: 0 40px;
  }
  .tools {
    display: inline-block;
  }
}
</style>