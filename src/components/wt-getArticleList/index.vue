<template>
  <div class='article-list-container'>
    <div class='article-list' v-for='article in articleList' :key='article.url' 
    @click='redirect(article.url)'>
      <span class='theme'>{{ article.type }}</span>
      <div class='title'>{{ article.title }}</div>
      <div class='clear-float'>
        <img src="../../assets/imgs/test.jpg" class='article-img'>
        <p class='article-text' v-html='article.text'></p>
      </div>
      <div class='essay-info'>
        <i class="fa fa-user"></i>
        <span> {{ article.username }}</span>
        <i class="fa fa-clock-o"></i>
        <span> {{ article.time }}</span>
        <i class="fa fa-eye"></i>
        <span>{{ article.watch }}</span>
        <i class="fa fa-star"></i>
        <span>{{ article.follow }}</span>
        <i class="fa fa-thumbs-up"></i>
        <span>{{ article.thumbsup }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { readArticle, readSave, getArticleText } from '@/api/file'
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
      articleList: [],
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
      let api = this.isSave ? readSave : readArticle
      api({
        username: this.username,
        type: this.type,
        isSelf: this.isSelf
      })
      .then(res => {
        this.articleList = res.data
      })
      .catch(err => console.log(`err comes from weGetarticleList, api is ${api}, err is ${err}`))
    },
    test() {
      console.log(this.articleList)
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
  color: #b2bac2;
}

.article-list-container {
  width: 100%;
  min-width: 700px;
  margin-right: 20px;
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

.article-list {
  width: 100%;
  height: 230px;
  padding: 18px 24px;
  margin: 10px 0;
  border: 1px solid #eee;
  background: #fff;
  cursor: pointer;
  // border-radius: 3px;
  // box-shadow: 1px 1px 1px;
  &:hover {
    background: #fafafa;
  }
  .theme {
    display: inline-block;
    height: 25px;
    padding: 0 5px;
    margin-right: 10px;
    text-align: center;
    line-height: 25px;
    border: 1px solid #f55;
    color: #f55;
  }
  .article-img {
    float: left;
    display: block;
    width: 180px;
    height: 123px;
  }
  .article-text {
    position: relative;
    left: 14px;
    height: 78px;
    overflow: hidden;
    width: calc(100% - 200px);
    margin: 0;
    color: #99a;    
  }
}

.essay-info {
  float: right;
  margin-top: 15px;
  font-size: 15px;
  color: #909090;
  .fa {
    display: inline-block;
    margin: 0 2px 0 20px;
  }
}

.fa-clock-o {
  color: #49f;
}

.fa-star {
  color: #fc3;
}

.fa-thumbs-up {
  color: #e11;
}
</style>