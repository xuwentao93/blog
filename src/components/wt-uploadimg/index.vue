<template>
  <div class='upload-img' @click='handle'>
    <input type="file" ref='img' class='prove-img' @change='checkPhoto'>
    <slot></slot>
  </div>
</template>

<script>
import wtMsg from '@/components/wt-msg'
export default {
  data() {
    return {
      img: '',
      imgErr: ''
    }
  },
  methods: {
    checkPhoto() {
      //将图片嵌在页面中
      this.img = this.$refs.img.files[0]
      const typeStr = /^(image\/jpg|image\/png|image\/gif|image\/jpeg)$/
      if (typeStr.exec(this.img.type) == null) {
        this.imgErr = '请上传正确的图片格式！'
        this.img = ''
        return
      }
      this.imgErr = ''
      let reads = new FileReader()
      reads.onloadend = e => {
        this.imgsrc = e.target.result
      };
      reads.readAsDataURL(this.img)
    },
    handle() {
      this.$refs.img.click()
    } 
  }
}
</script>

<style scoped lang='scss'>
.upload-img {
  display: inline-block; // 防止引入后引起页面过多的布局排版.
}

.prove-img {
  display: none;
}
</style>