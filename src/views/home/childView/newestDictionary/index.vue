<template>
  <div class='newest-dict'>
    <h1>最新日记</h1>
    <p>
      <span class='type point'>类型</span>
      <span class='theme point'>日记</span>
      <span class='username-time'>
        <span class='point'>徐文韬</span>
        <span>{{ data.time }}</span>
      </span>
    </p>
    <a class='title' href='#' @click='redirect'>{{ data.title }}</a>
    <div v-html='data.text' class='hidden'></div>
  </div>
</template>

<script>
import { readNewest } from '@/api/file'
export default {
  data () {
    return {
      data: {},
      username: this.$store.state.user.user
    }
  },
  methods: {
    readNewest() {
      readNewest({
        type: 'dictionary',
        username: 'piedaochuan'
      })
      .then(res => {
        this.data = res.data
      })
    },
    redirect(e) {
      this.$router.push(`/dictionary/${this.data.time}`)
    }
  },
  created () {
    this.readNewest()
  }
}
</script>

<style scoped lang='scss'>
.point:after {
  content: "·";
  margin: 0 0.4em;
  color: rgb(178, 186, 194);
}

.hidden {
  height: 0;
  visibility: hidden;
}

.newest-dict {
  .type {
    color: #b71ed7
  }
  .theme {
    color: #f06
  }
  .username-time {
    font-size: 13px;
    color: #909090;
  }
}
.title {
  display: inline-block;
  line-height: 23px;
  font-size: 1.167em;
  font-weight: 700;
  color: #000;

}
a:hover {
  text-decoration: underline
}
</style>