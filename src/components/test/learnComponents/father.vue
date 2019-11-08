<template>
  <div class="father" @click="testM">
    <!-- <div class="test1">this is father component</div>
    <div class="test2">this is a test context</div>
    <son
      :sonToFather="fatherSon"
      @sonFatherMethod="fatherToSon"
      @grandsonMethods="fatherToGrandson"
    ></son>
    <input type="text" :value="test" @input="test = $event.target.value" />
    <div>{{test}}</div>-->
    <div class="app">
      <div ref="msgDiv">{{msg}}</div>
      <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
      <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
      <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
      <button @click="changeMsg">Change the Message</button>
    </div>
  </div>
</template>

<script>
import son from "./son";
export default {
  data() {
    return {
      fatherAttr: "a father attr",
      fatherSon: "father with son",
      fatherGrandson: "father with grandson",
      test: "",
      msg: "Hello Vue.",
      msg1: "",
      msg2: "",
      msg3: ""
    };
  },
  components: {
    son
  },
  methods: {
    fatherToSon() {
      console.log("father To son methods");
    },
    fatherToGrandson() {
      console.log("father to grandson");
    },
    testM() {
      this.$nextTick()
        .then(() => console.log(1))
        .catch(() => console.log("err" + err));
    },
    changeMsg() {
      this.msg = "Hello world.";
      this.msg1 = this.$refs.msgDiv.innerHTML;
      setTimeout(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      }, 0);
      this.msg3 = this.$refs.msgDiv.innerHTML;
    }
  },
  provide: {
    node: "father node output"
  },
  mounted() {
    console.log(this.$event);
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";
@mixin color {
  color: #f00;
}
.test1 {
  @include color;
  @include bg;
  width: 200px;
  height: 200px;
}
.test2 {
  @include color;
}
</style>