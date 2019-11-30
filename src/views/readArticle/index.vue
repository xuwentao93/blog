<template>
  <div class='dict-container'>
    <div class="evaluate">
      <div class="icon-container">
        <i class="fa fa-thumbs-up"></i>
      </div>
      <div class="icon-container">
        <i class="fa fa-comment"></i>
      </div>
      <div class="icon-container">
        <i class="fa fa-star"></i>
      </div>
    </div>
    <div class='dict'>
      <div class="head-protrait"></div>
      <div class="username">{{ article.username }}</div>
      <div class="time">
        <span>{{ article.time }}</span>
        <span>watch</span>
        <span>{{ article.watch }}</span>
      </div>
      <h1 class="article-title">
        <span class='title'>{{ article.title }}</span>
      </h1>
      <div v-html='article.text' class='article-text'></div>
    </div>
  </div>
</template>

<script>
import { getArticleText } from '@/api/file'
export default {
  data() {
    return {
      article: {},
      username: this.$store.state.user.user
    }
  },
  methods: {
    getArticleText() {
      getArticleText({
        url: `..${this.$route.path}`
      })
      .then(res => {
        if (res.data === 404) {
          this.article = {
            title: '什么, 文章不见了?',
            text: '我们会尽快帮你找回文章哟!'
          }
        } else {
          this.article = res.data
          console.log(res.data)
        }
      })
      .catch(err => console.log(err))
    }
  },
  created() {
    this.getArticleText()
  }
}
</script>

<style scoped lang='scss'>
.dict-container {
  display: flex;
  margin-left: 14%;
  padding: 0 20px;
}

.evaluate {
  position: fixed;
  left: 16%;
  top: 240px;
  margin-right: 60px;
  color: #aaa;
  .icon-container {
    width: 36px;
    height: 36px;
    margin-bottom: 15px;
    border-radius: 18px;
    text-align: center;
    line-height: 36px;
    font-size: 17px;
    background: #fff;
    box-shadow: 1px 1px 9px #bbb;
    cursor: pointer;
    &:hover {
      color: #888;
    }
  }
}

.article-title {
  display: block;
  width: 100%;
  margin: 20px 0 40px;
  text-align: center;
  .title {
    font-size: 32px;
    font-weight: 1000;
  }
}

.dict {
  position: relative;
  width: 700px;
  padding: 20px;
  line-height: 23px;
  font-size: 1.167em;
  background: #fff;
  .head-protrait {
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #f00;
  }
  .username {
    overflow: hidden; // 形成BFC 避免于头像部分重叠.
    padding-left: 10px;
    font-size: 15px;
  }
  .time {
    overflow: hidden; // 形成BFC 避免于头像部分重叠.
    padding-left: 10px;
    font-size: 13px;
    color: #899;
    span {
      display: inline-block;
      margin: 0 5px;
    }
  }
}
.article-text {
    font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;

}
</style>