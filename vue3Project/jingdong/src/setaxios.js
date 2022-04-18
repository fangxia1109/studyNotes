import axios from 'axios'
import store from './store'
import router from './router'

// 接口全局拦截
// token要放在我们请求的header上传给后端

export default function setAxios() {
    // 请求拦截
    axios.interceptors.request.use(
        config => {
            if (store.state.token) {
                config.headers.token = store.state.token
            }
            return config
        }
    )

    //每次请求有拦截的，都是先经过这个拦截器
    axios.interceptors.response.use(
        response => {
            if (response.status === 200) {
                const data = response.data
                if (data.code === -1) {
                    // 登录过期，需要清空vuex状态管理器里卖弄的token以及localStorage里面的token
                    store.commit('settoken', '')
                    localStorage.removeItem('token')
                        // 并且跳转到登陆页面
                    router.replace({ path: '/login' })
                }
                return data
            }
            return response
        }

    )
}