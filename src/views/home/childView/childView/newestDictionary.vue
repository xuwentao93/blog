<template>
  <div class='newest-dict'>
    <h1>最新日记</h1>
    <p>
      <span class='theme point'>日记</span>
      <span class='username-time'>
        <span class='point'>徐文韬</span>
        <span>{{ data.time }}</span>
      </span>
    </p>
    <a class='title' href='#' @click='redirect'>{{ data.title }}</a>
  </div>
</template>

<script>
import { readNewDict } from '@/api/file'
export default {
  data () {
    return {
      data: {
        time: '2019.12.21',
        title: '今天哈哈哈哈嘿嘿嘿'
      },
      username: this.$store.state.user.user
    }
  },
  methods: {
    readNewDict() {
      readNewDict()
      .then(res => {
        this.data = res.data
      })
    },
    redirect(e) {
      this.$router.push(`/dictionary/${this.data.time}`)
      console.log(e)
    }
  },
  created () {
    // this.readDict()
  }
}
</script>

<style scoped lang='scss'>
.point:after {
  content: "·";
  margin: 0 0.4em;
  color: rgb(178, 186, 194);
}

.newest-dict {
  .theme {
    color: #f06
  }
  .username-time {
    font-size: 13px;
    color: #909090;
  }
}
.title {
  display: block;
  line-height: 23px;
  font-size: 1.167em;
  font-weight: 700;
  color: #000;

}
a:hover {
  text-decoration: underline
}
</style>