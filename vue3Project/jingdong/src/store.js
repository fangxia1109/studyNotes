import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        //定义了需要的属性，只有在这里定义的属性，在使用时才能获取得到
        token: '',
        // 定义购物车商品的数据
        cartArray: JSON.parse(localStorage.getItem('cartArray')) || []
    },
    mutations: {
        // 主要是对后台传来的数据进行操作，把我们所需要的数据赋值给在state里面定义的属性
        settoken(state, token) {
            state.token = token
        },
        // 添加商品到购物车
        addToCart(state, item) {
            let goods = state.cartArray.find(i => i.label === item.label)
            if (goods) {
                goods.number++
            } else {
                state.cartArray.push({ label: item.label, number: 1 })
            }
        },
        // 删除购物车的商品
        removeToCart(state, obj) {
            let goods = state.cartArray.find(i => i.label === obj.item.label)
            if (goods.number > 1) {
                goods.number--
            } else {
                if (window.confirm(`你确定删除${obj.item.label}吗？`)) {
                    state.cartArray.splice(obj.index, 1)
                }
            }
        },
        // 清空购物车
        clearCart(state) {
            state.cartArray = []
        }
    },
    actions: {
        //主要是与后台进行交互，并获取数据，然后传给mutations里面进行操作
    },
    //相当于vue中的计算属性
    getters: {
        // 将定义的属性进行输出
        countSum: state => {
            let num = 0
            state.cartArray.forEach(item => {
                num += item.number
            })
            return num
        }
    }
})

// 监听每次调用mutation时都会进这个方法，然后我们可以做一些我们想做的处理
store.subscribe((mutation, state) => {
    console.log(mutation, state)
    localStorage.setItem('cartArray', JSON.stringify(state.cartArray))
})
export default store