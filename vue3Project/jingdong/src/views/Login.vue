<template>
    <div>
        <img src="https://file.xdclass.net/video/2022/banner/03.jpeg" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"
        ></cube-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model: {
                username: '',
                password: ''
            },
            schema: {
                fields: [
                    {
                        type: 'input',
                        modelKey: 'username',
                        label: '用户名',
                        props: {
                            placeholder: '请输入用户名'
                        },
                        rules: {
                            required: true,
                            type: 'string',
                            min: 3,
                            max: 10,
                        },
                        trigger: 'blur',
                        message: {
                            required: '用户名不能为空',
                            min: '用户名最少输入3个字符',
                            max: '用户名最多输入10个字符'
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'password',
                        label: '密码',
                        props: {
                            placeholder: '请输入密码',
                            type:'password',
                            eye: {
                                open: false,
                            }
                        },
                        rules: {
                            required: true,    
                        },
                        trigger: 'blur',
                        message: {}
                    },
                    {
                        type: 'submit',
                        label: '登录'
                    }
                ]
            }
        }
    },
    methods:{
        async submitHandler(e) {
            e.preventDefault();
            try {
                const result = await this.$api.get('/api/login', { params: this.model})
                if (result.code === 0) {
                    this.$store.commit('settoken', result.token)
                    window.localStorage.setItem('token', result.token)
                    // 如果路由不带参数，则会跳转到首页，如果带参数，则会重定向到参数地址
                    if (this.$route.query.redirect) {
                        this.$router.replace({path: this.$route.query.redirect})
                    } else {
                        this.$router.replace({path: '/batnav/home'})
                    }
                } else if (result.code === 1) {
                    alert(result.message)
                }
            } catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
div
    img 
        width 100%
        height 200px
</style>


