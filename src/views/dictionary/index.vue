<template>
  <dict-list type='dictionary'></dict-list>
</template>

<script>
import { readDict } from '@/api/file'
import dictList from '@/components/wtGetEssayList'
export default {
  components: {
    dictList
  }
}
</script>
