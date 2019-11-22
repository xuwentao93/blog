<template>
  <div>
    <div class='dict-list' v-for='dict in urlList' :key='dict.url' @click='redirect(dict.url)'>
      {{dict.url}}
    </div>
    <el-button @click='readDict'>fdfd</el-button>
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
      })
    }
  },
  created () {
    this.readDict()
  }
}
</script>

<style scoped lang='scss'>
.dict-list {
  width: 80%;
  height: 60px;
  margin: 20px auto;
  border: 1px solid #eee;
  border-radius: 3px;
  // box-shadow: 1px 1px 1px;
}

</style>