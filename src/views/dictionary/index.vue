<template>
  <div class='dict-list-container'>
    <div class='dict-list' v-for='dict in urlList' :key='dict.url' @click='redirect(dict.url)'>
      <div>{{ dict.time }}</div>
      <div class='title'>{{ dict.title }}</div>
    </div>
    <el-button @click='test'>fdfd</el-button>
  </div>
</template>

<script>
import { readDict } from '@/api/file'
export default {
  data () {
    return {
      urlList: [],
      username: this.$store.state.user.user
    }
  },
  methods: {
    redirect(id) {
      this.$router.push(`/dictionary/${id}`)
    },
    readDict() {
      readDict({
        username: this.username
      })
      .then(res => {
        this.urlList = res.data
        console.log(this.urlList)
      })
    },
    test() {
      console.log(this.urlList)
    }
  },
  created() {
  },
  mounted() {
    this.readDict()
  }
}
</script>

<style scoped lang='scss'>
.hidden {
  height: 0;
  visibility: hidden;
}

.dict-list-container {
  padding-top: 25px;
  background: #f4f5f5;
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB
}

.dict-list {
  width: 700px;
  height: 112px;
  padding: 18px 24px;
  margin: 0 auto;
  border: 1px solid #eee;
  background: #fff;
  cursor: pointer;
  // border-radius: 3px;
  // box-shadow: 1px 1px 1px;
}
</style>