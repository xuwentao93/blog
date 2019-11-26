<template>
  <div class='essay-list-container'>
    <div class='essay-list' v-for='essay in essayList' :key='essay.url' 
    @click='redirect(essay.url)'>
      <span class='theme'>{{ essay.type }}</span>
      <div class='title'>{{ essay.title }}</div>
      <div class='clear-float'>
        <img src="../../assets/imgs/test.jpg" class='essay-img'>
        <p class='essay-text'>
          返回一个数字，其表示的是选区终点在 focusNode 中的位置偏移量。
如果 focusNode 是文字节点，那么选区末尾未被选中的第一个字，在该文字节点中是第几个字（从0开始计），就返回它。
如果 focusNode 是一个元素，那么返回的就是在选区末尾之后第一个节点之前的同级节点总数。
isCollapsed返回一个数字，其表示的是选区终点在 focusNode 中的位置偏移量。
如果 focusNode 是文字节点，那么选区末尾未被选中的第一个字，在该文字节点中是第几个字（从0开始计），就返回它。
如果 focusNode 是一个元素，那么返回的就是在选区末尾之后第一个节点之前的同级节点总数。
isCollapsed
        </p>
      </div>
      <div class='author-time'>
        <div class='user-info'>
          <i class="fa fa-user"></i>
          <span> {{ essay.username }}</span>
        </div>
        <div class='time-info'>
          <i class="fa fa-clock-o"></i>
          <span> {{ essay.time }}</span>
        </div>
      </div>
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
  },
  watch: {
    type() { // 修改类型的时候重新调用接口.
      this.read()
    }
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

.essay-list-container {
  width: 100%;
  min-width: 700px;
  // margin: 0 10%;
  padding-top: 25px;
  background: #f4f5f5;
}

.title {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB;
  &:hover {
    text-decoration: underline;
  }
}

.essay-list {
  width: 100%;
  height: 230px;
  padding: 18px 24px;
  // margin: 10px 0;
  border: 1px solid #eee;
  background: #fff;
  cursor: pointer;
  // border-radius: 3px;
  // box-shadow: 1px 1px 1px;
  &:hover {
    background: #fafafa;
  }
  .theme {
    color: #f06
  }
  .essay-img {
    float: left;
    display: block;
    width: 180px;
    height: 123px;
  }
  .essay-text {
    position: relative;
    left: 14px;
    width: calc(100% - 200px);
    height: 114px;
    overflow: hidden;
    text-overflow: ellipsis; // 溢出用省略号显示
    word-break: break-all;
    // white-space: nowrap; // 溢出不换行
    margin: 0;
  }
}

.author-time {
  float: right;
  font-size: 15px;
  color: #909090;
  .user-info,
  .time-info {
    display: inline-block;
    margin: 20px 20px 0 0;
  }
}
</style>