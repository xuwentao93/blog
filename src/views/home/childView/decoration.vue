<template>
  <div class='decoration'>
    <good-RFC></good-RFC>
    <good-essay></good-essay>
    <newest-dicionary></newest-dicionary>
  </div>
</template>

<script>
import { readDict } from '@/api/file'
import goodRFC from './childView/goodRFC'
import goodEssay from './childView/goodEssay'
import newestDicionary from './childView/newestDictionary'
export default {
  components: {
    newestDicionary,
    goodEssay,
    goodRFC,
  },
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
.decoration div{
  padding: 10px;
  margin-bottom: 16px;
  background: #fff;
}
.dict-msg-title-only {
  grid-row-start: 1;
  grid-row-end: 3;
}
</style>