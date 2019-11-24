<template>
  <div class='essay-list'>
    <essay-list type='all'></essay-list>
  </div>
</template>

<script>
import essayList from '@/components/wtGetEssayList'
export default {
  components: {
    essayList
  }
}
</script>

<style scoped>
.essay-list {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
</style>