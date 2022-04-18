<template>
  <div>
    <!-- 路由跳转过渡效果 -->
    <transition :name="transitionName">
      <router-view class="Router" />
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="batnav"
    >
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-right',
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
        },
        {
          label: "分类",
          icon: "cubeic-tag",
        },
        {
          label: "搜索",
          icon: "cubeic-search",
        },
        {
          label: "购物车",
          icon: "cubeic-mall",
        },
        {
          label: "我的",
          icon: "cubeic-person",
        },
      ],
    };
  },
  methods: {
    //点击自身
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    //点击不同的
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      console.log(label);
      switch (label) {
        case "首页":
          this.$router.push({ path: "/batnav/home" });
          break;
        case "分类":
          this.$router.push({ path: "/batnav/list" });
          break;
        case "搜索":
          this.$router.push({ path: "/batnav/search" });
          break;
        case "购物车":
          this.$router.push({ path: "/batnav/cart" });
          break;
        case "我的":
          this.$router.push({ path: "/batnav/mine" });
          break;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.cube-tab-bar.batnav
  position fixed
  bottom 0
  left 0
  z-index 1000
  width 100%
  background #fff
  .cube-tab div
    font-size 16px
    padding-top 3px
  i
    font-size 20px
.Router 
  position absolute
  width 100%
  transition all 0.8s ease
.slide-left-enter, .slide-right-leave-active
  opacity 0
  -webkit-transform translate(100% ,0)
  transform translate(100%, 0)
.slide-left-leave-active, .slide-right-enter 
  opacity 0
  -webkit-transform translate(-100% ,0)
  transform translate(-100%, 0)
</style>
