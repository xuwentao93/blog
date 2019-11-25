<template>
  <div class='dict-container'>
    <div class='dict'>
      <div class="dict-msg-title-only">
        <span class='title'>{{ essay.title }}</span>
        <span class='time'>{{ essay.time }}</span>
      </div>
      <div v-html='essay.text'></div>
    </div>
  </div>
</template>

<script>
import { getEssayText } from '@/api/file'
export default {
  data() {
    return {
      essay: '',
      username: this.$store.state.user.user
    }
  },
  methods: {
    getEssayText() {
      getEssayText({
        url: `..${this.$route.path}`
      })
      .then(res => {
        console.log(res.data)
        this.essay = res.data
      })
    }
  },
  created() {
    console.log(this.$route.path)
    this.getEssayText()
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