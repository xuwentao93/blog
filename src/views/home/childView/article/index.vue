<template>
  <div class='article'>
    <div class="change-type">
      <ul>
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
    articleList
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

<style scoped>
.article {
  width: 100%;
}
.type {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
</style>