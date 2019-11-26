<template>
  <div class='essay'>
    <div class="change-type">
      <ul>
        <li v-for='type in typeList' :key='type' class='type' @click='changeType(type)'>{{ type }}</li>
      </ul>
    </div>
    <essay-list :type='type'></essay-list>
  </div>
</template>

<script>
import essayList from '@/components/wtGetEssayList'
export default {
  components: {
    essayList
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
.essay {
  width: 100%;
}
.type {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
</style>