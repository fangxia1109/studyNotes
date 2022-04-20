<template>
  <div>
    <div class="cart" v-for="(item, index) in cartArray" :key="index">
      <div class="cart-left">{{ item.label }}</div>
      <div class="cart-right">
        <i class="cubeic-remove" @click="removeCart(item, index)"></i>
        {{ item.number }}
        <i class="cubeic-add" @click="addCart(item, index)"></i>
      </div>
    </div>
    <cube-button style="margin: 10px 0">下单</cube-button>
    <cube-button @click="clearCart()">清空购物车</cube-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "cart",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cartArray: state => state.cartArray
    })
  },
  methods: {
    //添加商品到购物车
    addCart(item, index) {
      this.$store.commit('addToCart', item)
    },
    // 删除购物车的商品
    removeCart(item, index) {
      this.$store.commit('removeToCart', {item: item, index: index})
    },
    // 清空购物车
    clearCart() {
      this.$store.commit('clearCart')
    }
  },
};
</script>

<style lang="stylus" scoped>
.cart 
  margin 10px 0 10px 0
  overflow hidden
  .cart-left
    float left
  .cart-right
    float right
</style>
