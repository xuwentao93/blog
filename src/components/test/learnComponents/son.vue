<template>
  <div class='son'>
    <div @click="sonMethod">{{sonToFather}}</div>
    <grandson v-bind='$attrs' v-on='$listeners'>123</grandson>
  </div>
</template>

<script>
import grandson from "./grandson";
export default {
  components: {
    grandson
  },
  props: {
    sonToFather: {
      type: String
    }
  },
  methods: {
    sonMethod() {
      console.log("this is sonMethod");
      this.$emit("sonFatherMethod");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>