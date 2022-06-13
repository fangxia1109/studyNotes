<template>
  <div @click="sonClick()">
    {{ msg1 }}{{ msg2 }}
    <hello-child></hello-child>
  </div>
</template>

<script>
import HelloChild from "./HelloChild.vue";
export default {
  name: "HelloClass",
  props: ["msg1", "handleClick"],
  inject: ["msg2"],
  components: {
    HelloChild
  },
  data() {
    return {
      sonData: "我是子组件",
      sonData1: "我是@子组件"
    };
  },
  methods: {
    sonClick() {
      // this.handleClick(this.sonData);
      this.$emit("handleClick1", this.sonData1);
    }
  }
};
</script>

<style scoped></style>
