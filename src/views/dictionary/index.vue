<template>
  <div class="dictionary">
    <el-button v-if='$store.state.user.user ==="piedaochuan"' type='primary' @click='write'>
      写日记
    </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    write() {
      this.$router.push('/write')
    }
  }
}
</script>

<style scoped>

</style>