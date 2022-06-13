<template>
  <div>{{ msg2 }}</div>
</template>

<script>
export default {
  name: "HelloChild",
  inject: ["msg2"],
  data() {
    return {};
  },
  mounted() {
    this.$bus.$on("bus", i => {
      console.log(i);
    }); //孙子组件使用全局事件总线接收值
  }
};
</script>

<style scoped></style>
