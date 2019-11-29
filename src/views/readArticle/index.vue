<template>
  <div class='dict-container'>
    <div class='dict'>
      <div class="dict-msg-title-only">
        <span class='title'>{{ article.title }}</span>
        <span class='time'>{{ article.time }}</span>
      </div>
      <div v-html='article.text'></div>
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

<style scoped>
.dict-container {
  margin: 0 8%;
  padding: 20px;
}

.dict {
  position: relative;
  width: 700px;
  padding: 20px;
  line-height: 23px;
  font-size: 1.167em;
  font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
  background: #fff;
}
.test {
  display: none;
}
</style>

<style lang='scss'>
.dict-msg-title-only {
  display: block;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
  .title {
    font-size: 30px;
    font-weight: 700;
  }
  .time {
    position: relative;
    left: 20px;
  }
}
</style>