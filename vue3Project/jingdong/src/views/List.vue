<template>
  <div class="listScroll">
    <!-- 左边滚动视图 -->
    <cube-scroll class="leftScroll">
      <ul>
        <li
          v-for="(item, index) in leftlist"
          :key="index"
          @click="leftClick(index)"
          :class="item.active ? 'active' : ''"
        >
          {{ item.label }}
        </li>
      </ul>
    </cube-scroll>
    <!-- 右边滚动视图 -->
    <cube-scroll class="rightScroll">
      <ul>
        <li
          v-for="(item, index) in rightlist"
          :key="index"
        >
          {{ item.label }}
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightlist: [],
      leftlist: []
    };
  },
  methods: {
    // 获取左视图列表
    async getLeftList() {
      try {
        const result = await this.$api.get('/api/getLeftList')
        this.leftlist = result.list
      } catch(err) {
        console.log(err)
      } 
      this.leftClick(0)
    },
    // 点击左视图li
    leftClick(index) {
      this.leftlist.forEach((item, i) => {
        if (i === index) {
          item.active = true
        } else {
          item.active = false
        }
      })
      this.getRightList(index)
    },
    //获取右视图列表
    async getRightList(index) {
      try {
        const result = await this.$api.get('/api/getRigthList', { params: {type: index} })
        this.rightlist = result.list
      } catch(err) {
        console.log(err)
      }
    }
  },
  created() {
    this.getLeftList()
  },
};
</script>

<style lang="stylus" scoped>
.listScroll 
  display flex
  width 100%
  .leftScroll
    width 30%
    li 
      height 50px
      line-height 50px
      border-bottom 1px solid #fff 
      color #333
      background #f8f8f8 
      font-size 14px
    .active 
      background #fff 
      color #e93b3d
  .rightScroll
    width 70%
    ul 
     display flex 
     flex-wrap wrap 
     li 
      width 50%
      justify-content center 
      align-content center 
      font-size 15px 
</style>
