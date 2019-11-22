<template>
  <div>
    <div v-html='data' class='dict'></div>
  </div>
</template>

<script>
import { readDict } from '@/api/file'
export default {
  data () {
    return {
      data: '',
      username: this.$store.state.user.user,
    }
  },
  methods: {
    readDict() {
      readDict({
        username: this.username
      })
      .then(res => {
        res.data.forEach((item, index) => {
          if (item.url === this.$route.params.id) {
            this.data = res.data[index].text
          }
        })
        console.log(res.data)
      })
    }
  },
  created () {
    this.readDict()
  }
}
</script>

<style scoped>
.dict {
  width: 50%;
  margin: 20px 0 0 25%;
  line-height: 23px;
  font-size: 1.167em;
  font-family: Monaco, Menlo, Ubuntu Mono, Consolas, source-code-pro, monospace;
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
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}
</style>