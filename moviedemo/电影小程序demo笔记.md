* 先设置一个tabBar

  ![image-20220423183315469](C:\Users\fangx\AppData\Roaming\Typora\typora-user-images\image-20220423183315469.png)

  app.json中：

  ```vue
  {
    "pages": [
      "pages/index/index",
      "pages/personal/personal"
    ],
    "tabBar": {
      "color": "#515151",
      "selectedColor": "#42bd56",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "pages/images/shouye.png",
          "selectedIconPath": "pages/images/shouye_selected.png"
        },
        {
          "pagePath": "pages/personal/personal",
          "text": "个人",
          "iconPath": "pages/images/wode.png",
          "selectedIconPath": "pages/images/wode_selected.png"
        }
      ]
    },
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "Weixin",
      "navigationBarTextStyle": "black"
    },
    "style": "v2",
    "sitemapLocation": "sitemap.json"
  }
  ```

  tabBar官方文档

  https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar

* 获取用户信息

  app.js中

  ```vue
  // app.js
  App({
    onLaunch() {
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
  
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
  
      // 获取用户信息
      wx.getSetting({
        success: (result) => {
          if (result.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用getUserInfo获取头像昵称，不会弹框
            wx.getUserInfo({
              success: (result) => {
                // 可以将result发送给后台解码出 unionId
                this.globalData.userInfo = result.userInfo
                // 由于getUserInfo是网络请求，可能会在Page.onLoad之后才返回
                // 所以此处加入callback以防止这种情况出现
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(result)
                }
              },
              fail: (res) => {},
              complete: (res) => {},
            })
          }
        },
        fail: (res) => {},
        complete: (res) => {},
      })
    },
    globalData: {
      userInfo: null
    }
  })
  ```

* 