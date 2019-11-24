<template>
  <div class='decoration'>
    <good-RFC></good-RFC>
    <good-essay></good-essay>
    <newest-dicionary></newest-dicionary>
  </div>
</template>

<script>
import { readDict } from '@/api/file'
import goodRFC from '../goodRFC'
import goodEssay from '../goodEssay'
import newestDicionary from '../newestDictionary'
export default {
  components: {
    newestDicionary,
    goodEssay,
    goodRFC,
  }
}
</script>

<style lang='scss' scoped>
.decoration {
  max-width: 330px;
}
.decoration > div{
  padding: 10px;
  margin-bottom: 16px;
  background: #fff;
}
</style>