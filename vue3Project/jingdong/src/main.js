import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import setaxios from './setaxios'
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.prototype.$api = axios
setaxios()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')