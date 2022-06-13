<template>
  <div>关于</div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.text);
  }
};
</script>

<style scoped></style>
