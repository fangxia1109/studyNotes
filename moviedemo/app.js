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
