module.exports = {
    configureWebpack: {
        devServer: {
            host: '127.0.0.1',
            port: 8080,
            open: true,

            //Mock接口编写的地方,每次更改之后都必须进行重启
            before(app) {
                // app.get('请求地址', (req, res) => {
                //     res.json({})
                // })

                // 用户信息池
                let userpoor = [
                    { username: 'fangxia', password: '123' },
                    { username: 'xiaodi', password: '2434' }
                ]

                // 注册接口
                app.get('/api/register', (req, res) => {
                    const { username, password } = req.query
                    const userlength = userpoor.filter(v => v.username === username).length
                    if (userlength > 0) {
                        res.json({
                            success: false,
                            message: '该用户已存在'
                        })
                    } else {
                        res.json({
                            success: true,
                            message: '注册成功'
                        })
                    }
                })

                //登录接口
                let tokenkey = 'fangxiajingdong'
                app.get('/api/login', (req, res) => {
                    const { username, password } = req.query
                    if (username === 'fangxia' && password === '123' || username === 'xiaodi' && password === '2434') {
                        res.json({
                            code: 0,
                            message: '登录成功',
                            token: tokenkey + '-' + username + (new Date().getTime() + 60 * 60 * 1000)
                        })
                    } else {
                        res.json({
                            code: 1,
                            message: '账号或密码错误'
                        })
                    }
                })

                //获取轮播图接口
                app.get('/api/getBanner', (req, res) => {
                    res.json({
                        list: [{
                                "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                "url": "https://xdclass.net/#/memberV2",
                            },
                            {
                                "image": "\nhttps://file.xdclass.net/video/2022/banner/34.png",
                                "url": "\nhttps://detail.tmall.com/item.htm?id=659917587313&skuId=4753069368291",
                            },
                            {
                                "image": "\nhttps://file.xdclass.net/video/2022/banner/3.jpeg",
                                "url": "\nhttps://detail.tmall.com/item.htm?id=671977607036",
                            },
                        ]
                    })
                })

                //获取分类接口
                app.get('/api/getList', (req, res) => {
                    res.json({
                        list: [
                            [{
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类一'
                                },
                            ],
                            [{
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                },
                                {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                }, {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                }, {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                }, {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                }, {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                }, {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                }, {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                }, {
                                    "image": "https://file.xdclass.net/video/2022/banner/03.jpeg",
                                    "url": "https://xdclass.net/#/memberV2",
                                    "label": '分类二'
                                },
                            ]

                        ]
                    })
                })

                //获取分类页面左视图列表
                app.get('/api/getLeftList', (req, res) => {
                    res.json({
                        list: [{
                                label: '11111111',
                                active: true
                            },
                            {
                                label: '22222222',
                                active: false
                            },
                            {
                                label: '33333333',
                                active: false
                            },
                            {
                                label: '44444444',
                                active: false
                            },
                            {
                                label: '55555555',
                                active: false
                            },
                            {
                                label: '66666666',
                                active: false
                            },
                            {
                                label: '77777777',
                                active: false
                            },
                            {
                                label: '88888888',
                                active: false
                            },
                            {
                                label: '99999999',
                                active: false
                            },
                            {
                                label: '99999999',
                                active: false
                            },
                            {
                                label: '99999999',
                                active: false
                            },
                            {
                                label: '99999999',
                                active: false
                            },
                            {
                                label: '99999999',
                                active: false
                            },
                        ]
                    })
                })

                //获取分类页面右视图列表
                app.get('/api/getRigthList', (req, res) => {
                    const { type } = req.query
                    switch (type) {
                        case '0':
                            res.json({
                                list: [{
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, {
                                    label: '11111111'
                                }, ]
                            });
                            break;
                        case '1':
                            res.json({
                                list: [{
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, {
                                    label: '22222222'
                                }, ]
                            });
                            break;
                        case '2':
                            res.json({
                                list: [{
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, {
                                    label: '33333333'
                                }, ]
                            });
                            break;
                        case '3':
                            res.json({
                                list: [{
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, {
                                    label: '44444444'
                                }, ]
                            });
                            break;
                        case '4':
                            res.json({
                                list: [{
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, {
                                    label: '55555555'
                                }, ]
                            });
                            break;
                        case '5':
                            res.json({
                                list: [{
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, {
                                    label: '66666666'
                                }, ]
                            });
                            break;
                        case '6':
                            res.json({
                                list: [{
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, {
                                    label: '77777777'
                                }, ]
                            });
                            break;
                        case '7':
                            res.json({
                                list: [{
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, {
                                    label: '88888888'
                                }, ]
                            });
                            break;
                    }
                })

            }
        }
    },
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
}