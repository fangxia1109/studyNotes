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
        <li v-for="(item, index) in rightlist" :key="index">
          <img :src="item.img" alt="" />
          <p>
            {{ item.label }}
            <i @click="addCart(item, index, $event)" class="cubeic-add"></i>
          </p>
        </li>
      </ul>
    </cube-scroll>
    <!-- 添加到购物车的动画效果 -->
    <div class="ball-wrap">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ball: {
        show: false,
        el: ''
      },
      rightlist: [],
      leftlist: [],
      cartArray: [],
    };
  },
  methods: {
    // 获取左视图列表
    async getLeftList() {
      try {
        const result = await this.$api.get("/api/getLeftList");
        this.leftlist = result.list;
      } catch (err) {
        console.log(err);
      }
      this.leftClick(0);
    },
    // 点击左视图li
    leftClick(index) {
      this.leftlist.forEach((item, i) => {
        if (i === index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      this.getRightList(index);
    },
    //获取右视图列表
    async getRightList(index) {
      try {
        const result = await this.$api.get("/api/getRigthList", {
          params: { type: index },
        });
        this.rightlist = result.list;
      } catch (err) {
        console.log(err);
      }
    },
    // 添加购物车
    addCart(item, index, e) {
      this.$store.commit("addToCart", item);
      // 显示ball
      this.ball.show = true
      // 获取点击元素
      this.ball.el = e.target
    },
    //添加到购物车的动画效果
    beforeEnter(e) {
      // 让小球移动到点击的位置
      // 获取点击的位置
      let dom = this.ball.el
      let rect = dom.getBoundingClientRect() //获取点击dom的位置
      let x = rect.left - window.innerWidth*0.7
      let y = - (window.innerHeight - rect.top)
      e.style.display = 'block'
      e.style.transform = `translate3d(0, ${y}px, 0)`
      let inner = e.querySelector('.inner')
      inner.style.transform = `translate3d(${x}px, 0,  0)`
    },
    enter(e, done) {
      // 触发重绘
      document.body.offsetHeight
      //小球移动到圆点，就是购物车的位置
      e.style.transform = `translate3d(0, 0, 0)`
      let inner = e.querySelector('.inner')
      inner.style.transform = `translate3d(0, 0,  0)`
      // 过渡完成后的事件
      e.addEventListener('transitionend', done)
    },
    afterEnter(e) {
      // 结束后隐藏小球
      this.ball.show = false
      e.style.display = 'none'
    },
  },
  created() {
    this.getLeftList();
  },
  mounted() {
    const leftPanel = document.querySelector(".leftScroll");
    const rightPanel = document.querySelector(".rightScroll");
    const panelHeight = document.documentElement.clientHeight;
    leftPanel.style.height = panelHeight - 62 + "px";
    rightPanel.style.height = panelHeight - 62 + "px";
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
      margin 50px 0
      img
        width 60px
        height 60px
      p
        position relative
        i
          position absolute
          font-size 16px
          right 27px
  .ball-wrap
    .ball 
      position fixed 
      left 70%
      bottom 10px
      z-index 1003
      color red
      transition all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41) 
      .inner 
        width 16px
        height 16px
        transition all 1s linear

</style>
