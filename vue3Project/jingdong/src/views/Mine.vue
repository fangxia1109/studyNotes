<template>
  <div>
    <img src="https://file.xdclass.net/video/2022/banner/03.jpeg" alt="" />
    <ul>
      <li v-for="(item, index) in datalist" :key="index" @click="itemClick($event, item, index)">
        {{ item.label }}
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
    <cube-button @click="exit()">退出</cube-button>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      datalist: [],
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    //获取列表数据
    async getDataList() {
      try {
        let result = await this.$api.get('/api/getMineList')
        console.log(result)
        this.datalist = result.list
      } catch (err) {
        console.log(err);
      }
    },
    // 点击列表
    itemClick(e, item, index) {
      console.log(e, item, index)
    },
    // 退出
    exit() {
      if(window.confirm('确定退出吗？')) {
        this.$store.commit('settoken', '')
        localStorage.removeItem('token')
        this.$router.push({path: '/login'})
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
div
    img
        width 100%
        height 200px
    ul
      li 
        display flex
        justify-content space-between
        padding 10px 4px
        border-bottom 1px solid #ebebeb
</style>
