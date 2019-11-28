<template>
  <div class='decoration'>
    <good-RFC></good-RFC>
    <good-article></good-article>
    <newest-dicionary></newest-dicionary>
  </div>
</template>

<script>
import goodRFC from '../goodRFC'
import goodArticle from '../goodArticle'
import newestDicionary from '../newestDictionary'
export default {
  components: {
    newestDicionary,
    goodArticle,
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