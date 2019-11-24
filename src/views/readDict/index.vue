<template>
  <div class='dict-container'>
    <div class='dict'>
      <div class="dict-msg-title-only">{{ data.title }}</div>
      <div v-html='data.text'></div>
    </div>
    <decoration-read></decoration-read>
  </div>
</template>

<script>
import { readDict } from '@/api/file'
import decorationRead from '@/views/home/childView/decoration'
export default {
  components: {
    decorationRead
  },
  data() {
    return {
      data: '',
      username: this.$store.state.user.user
    }
  },
  methods: {
    readDict() {
      readDict()
      .then(res => {
        res.data.forEach((item, index) => {
          if (item.time === this.$route.params.id.slice(-10)) {
            this.data = res.data[index]
          }
        })
        console.log(res.data)
      })
    }
  },
  created() {
    this.readDict()
  }
}
</script>

<style scoped>
.dict-container {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  margin: 0 8%;
  padding: 20px;
}

.dict {
  position: relative;
  left: 150px;
  width: 700px;
  padding: 20px;
  line-height: 23px;
  font-size: 1.167em;
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
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}
</style>