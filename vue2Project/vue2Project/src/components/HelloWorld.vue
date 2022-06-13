<template>
  <div>
    <!-- <hello-class
      :msg1="msg1"
      :handleClick="handleClick"
      @handleClick1="handleClick"
    ></hello-class> -->
    <div v-for="(item, index) in arr" :key="index">
      {{ item.name }} - {{ item.age }}
    </div>
    <button @click="add">add</button>
  </div>
</template>

<script>
// import HelloClass from "./HelloClass.vue";
export default {
  name: "HelloWorld",
  // provide: {
  //   msg2: "父组件"
  // },
  // components: {
  //   HelloClass
  // },
  data() {
    return {
      // msg: "Welcome to Your Vue.js App",
      // msg1: "hello class",
      // msg3: "全局事件总线执行"
      arr: [
        {
          name: "小滴",
          age: 19
        },
        { name: "课堂", age: 20 }
      ],
      arr1: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    // handleClickob(e) {
    //   console.log(e);
    //   this.$bus.$emit("bus", this.msg3); //父组件使用全局事件总线传值
    //   this.$bus.$off(); // 全局事件总线解绑
    // }
    add() {
      // this.obj.age = 19;
      // vue封装的数组的方法：push() pop() shift() unshift() splice() sort() reverse()
      // this.arr.splice(0, 1, { name: "课堂", age: 20 });
      // this.arr.pop();尾部删除
      // this.arr.shift();头部删除
      // this.arr.unshift({ name: "课堂", age: 21 });头部添加
      // this.arr.push({name: "课堂1", age: 22});尾部添加
      console.log(this.arr);
      this.arr1.sort((a, b) => b - a);
      console.log(this.arr1);
    }
  },
  mounted() {
    // console.log(this.$route.query.text, "query传参");
  }
};
</script>

<style scoped></style>
