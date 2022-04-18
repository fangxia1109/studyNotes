<template>
  <div id="home">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img class="bannerImg" :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滑块 -->
    <cube-slide ref="slide" :data="list" @change="changePage"  :auto-play="false">
      <cube-slide-item v-for="(item, index) in list" :key="index">   
        <ul class="listul">
          <li class="listli" v-for="(item1,index1) in item" :key="index1">
            <a :href="item1.url">
              <img :src="item1.image">
            </a>
            <p>{{item1.label}}</p>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data(){
    return {
      list: [],
      items:[]
    }
  },
  methods: {
    //获取轮播图
    async getbanner() {
      try {
        const result = await this.$api.get('/api/getBanner')
        this.items = result.list
        console.log(this.items)
      }catch(err) {
        console.log(err)
      }
    },
    //获取分类
    async getlist(){
      try{
        const result = await this.$api.get('/api/getList')
        this.list = result.list
      }catch(err) {
        console.log(err)
      }
    },
    clickHandler() {

    },
    changePage() {

    }
  },
  created() {
    this.getbanner()
    this.getlist()
  },
}
</script>

<style lang="stylus" scoped>

#home 
  div
    a
      .bannerImg 
        display block
        width 100%
        height 175px
    .listul
      display flex
      flex-wrap wrap
    .listli
      width: 20%
      justify-content center
      img
        width 35px
        height 35px
        border-radius: 50%
        padding: 5px 0
      p
        font-size: 14px
        padding-bottom: 10px
</style>
