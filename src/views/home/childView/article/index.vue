<template>
  <div class='article'>
    <div class="change-type">
      <ul ckass='type-list'>
        <li v-for='type in typeList' :key='type' class='type' @click='changeType(type)'>{{ type }}</li>
      </ul>
    </div>
    <article-list :type='type'></article-list>
  </div>
</template>

<script>
import articleList from '@/components/wt-getArticleList'
export default {
  components: {
    articleList,
  },
  data() {
    return {
      typeList: ['all', 'learn', 'web', 'game', 'life'],
      type: 'all'
    }
  },
  methods: {
    changeType(type) {
      this.type = type
    }
  }
}
</script>

<style scoped lang='scss'>
.article {
  width: 100%;
}

.change-type {
  margin-top: 20px;
  background: #4a4a4a;
}

.type {
  display: inline-block;
  padding: 10px;
  width: 90px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #D56464;
  }
}
</style>