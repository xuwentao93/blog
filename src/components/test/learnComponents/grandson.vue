<template>
  <div class="grandson" @click='grandsonMethod'>{{node}}</div>
</template>

<script>
export default {
    props: {
    grandsonToFather: {
      type: String
    }
  },
  methods:{
    grandsonMethod(){
      console.log('this is grandson methods')
      this.$emit('grandsonMethods')
    }
  },
  mounted(){
    console.log(this.$parent.$parent.fatherGrandson)
  },
  inject:['node']
  // computed:{
  //   node(){
  //     return this.$parent.$parent.fatherGrandson+'a'
  //   }
  // }
}
</script>

<style lang="scss" scoped>

</style>