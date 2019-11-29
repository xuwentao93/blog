<template>
  <div class='newest-dict'>
    <h1>newest dict</h1>
    <p>
      <span class='type point'>type</span>
      <span class='theme point'>dictionary</span>
      <span class='username-time'>
        <span class='point'>piedaochuan</span>
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
    redirect() {
      this.$router.push(`/article/piedaochuan/dictionary/${this.data.title}${this.data.time}`)
    }
  },
  created() {
    this.readNewest()
  }
}
</script>

<style scoped lang='scss'>
.point:after {
  content: "·";
  margin: 0 0.4em;
  color:  #b2bac2;
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