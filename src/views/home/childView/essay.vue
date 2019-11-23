<template>
  <div class='essay-list'>
    <div v-html='data' class='dict'></div>
    <div style='width: 300px;height: 500px;'>123</div>
  </div>
</template>

<script>
import { readDict } from '@/api/file'
export default {
  data () {
    return {
      data: '',
      username: this.$store.state.user.user
    }
  },
  methods: {
    readDict() {
      readDict({
        username: this.username
      })
      .then(res => {
        res.data.forEach((item, index) => {
          // if (item.url === this.$route.params.id) {
            this.data = res.data[index].text
          // }
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

<style lang='scss'>
.essay-list {
  padding: 10px;
  background: #fff;
}
.dict-msg-title-only {
  grid-row-start: 1;
  grid-row-end: 3;
}
</style>