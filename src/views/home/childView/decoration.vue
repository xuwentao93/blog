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
  }
}
</script>

<style lang='scss'>
.decoration>div{
  padding: 10px;
  margin-bottom: 16px;
  background: #fff;
}
.dict-msg-title-only {
  grid-row: 1 / 3;
  grid-column: 2 / 3;
}
</style>