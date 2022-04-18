import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //定义了需要的属性，只有在这里定义的属性，在使用时才能获取得到
        token: ''
    },
    mutations: {
        // 主要是对后台传来的数据进行操作，把我们所需要的数据赋值给在state里面定义的属性
        settoken(state, token) {
            state.token = token
        }
    },
    actions: {
        //主要是与后台进行交互，并获取数据，然后传给mutations里面进行操作
    },
    getters: {
        // 将定义的属性进行输出
    }
})