<template>
  <div class='dict-list-container'>
    <div class='dict-list' v-for='essay in essayList' :key='essay.url' 
    @click='redirect(essay.url)'>
      <p>
        <span class='type point'>类型</span>
        <span class='theme point'>{{ essay.type }}</span>
        <span class='username-time'>
        <span class='point'>{{ essay.username }}</span>
        <span>{{ essay.time }}</span>
        </span>
      </p>
      <div class='title'>{{ essay.title }}</div>
    </div>
  </div>
</template>

<script>
import { readEssay, readSave } from '@/api/file'
export default {
  props: {
    type: { // 决定是哪种类型, 如果是all, 就筛选全部数据.
      type: String,
      default: 'dictionray'
    },
    isSave: { // 储存方式是save还是提交, 默认从提交列表中读取数据.
      type: Boolean,
      default: false
    },
    isSelf: { // 是否筛选个人.
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      essayList: [],
      username: this.$store.state.user.user
    }
  },
  methods: { // 跳转到相应路由
    redirect(url) {
      // console.log(username)
      // console.log(type)
      // console.log(title)
      url = url.slice(3)
      this.$router.push(`${url}`)
    },
    read() { // 读取文章.
      let api = this.isSave ? readSave : readEssay
      api({
        username: this.username,
        type: this.type,
        isSelf: this.isSelf
      })
      .then(res => {
        this.essayList = res.data
          const filter = {
            learn: '学习',
            life: '生活',
            game: '游戏',
            web: '前端动态',
            dictionray: '日记'
          }
        this.essayList.forEach((item, index, array) => {
          Object.keys(filter).forEach(type => {
            if (item.type === type) array[index].type = filter[type]
          })
        })
        console.log(res.data)
      })
      .catch(err => console.log(`err comes from weGetEssayList, api is ${api}, err is ${err}`))
    },
    test() {
      console.log(this.essayList)
    }
  },
  created() {
  },
  mounted() {
    this.read()
  }
}
</script>

<style scoped lang='scss'>
.hidden {
  height: 0;
  visibility: hidden;
}

.point:after {
  content: "·";
  margin: 0 0.4em;
  color: rgb(178, 186, 194);
}

a:hover {
  text-decoration: underline
}

.dict-list-container {
  width: 700px;
  margin: 0 10%;
  padding-top: 25px;
  background: #f4f5f5;
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB
}

.dict-list {
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
  width: 100%;
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