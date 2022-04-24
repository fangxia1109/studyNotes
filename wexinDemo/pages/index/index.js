Page({
  data: {
    latitude:23.10229,
    longitude:113.3245211,
    //显示的单车
    markers:[],
    // markers: [{
    //   iconPath: '/image/location.png',
    //   id: 0,
    //   latitude: this.lat,
    //   longitude: this.log,
    //   // longitude: 113.3245211,
    //   // latitude: 23.10229,
    //   width: 20,
    //   height: 30
    // }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }]
  },
  onLoad() {
    var that = this;

    //创建一个map上下文，如果想要调用地图相关的方法
    that.mapCtx = wx.createMapContext('map');

    //获取当前的位置信息
    wx.getLocation({
      //如果获取成功，会调用success
      success: function (res) {
       // console.log(res.latitude+"  "+res.longitude)
       var log=res.longitude;
       var lat=res.latitude;
        // console.log("纬度" + that.lat + "经度" + that.log)

        // //查找附近的单车
        // wx.request({
        //   url: "http://localhost:8888/bikes",
        //   method: 'GET',
        //   success: function (res) {
        //     const bikes = res.data.map((item) => {
        //       return {
        //         id: item.id,
        //         iconPath: "/image/bike.png",
        //         width: 30,
        //         height: 35,
        //         latitude: item.latitude,
        //         longitude: item.longitude
        //       };
        //     });
        //     // 修改data里面的markers
        //     that.setData({
        //       // iconPath: "/image/bike.png",
        //       // width: 5,
        //       // height: 8,
        //       latitude: lat,
        //       longitude: log,
        //       markers: bikes
        //     });
        //   }
        // })

      }
    });
  },

  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  location(){
    console.log('location')
  },
  back() {
    this.mapCtx.moveToLocation();
    //console.log('back')
  },
  qrcode(){
    var that = this;
    //console.log('qrcode')
    //点击扫描按钮
    wx.scanCode({
      success: function (r) {
        //扫描成功获取二维码的信息
        var code = r.result;
        //console.log(r);
        //向后台发送请求
        // wx.request({
        //   //method: 'POST',
        //   url: 'http://localhost:8888/bike', //仅为示例，并非真实的接口地址
        //   data: {
        //     qrCode: code,
        //     status:0,
        //     latitude: that.data.latitude,
        //     longitude: that.data.longitude
        //   },
        //   header: {
        //     'content-type': 'application/json' // 默认值
        //   },
        //   success: function (res) {
        //     console.log(res.data)
        //   }
        // })
      }
    })
  },
  pay(){
    console.log('pay')
  },

  bike(){
    var that = this;
    //console.log('bike')
    //添加车辆的按钮
    that.mapCtx.getCenterLocation({
      success: function (res) {
        var lat = res.latitude;
        var log = res.longitude;
        // wx.request({
        //   url: "http://localhost:8888/bike",
        //   method: 'POST',
        //   data: {
        //     latitude: lat,
        //     longitude: log
        //   },
        //   success: function () {
        //     console.log("成功!!!")
        //     //向后台发送请求，将单车查找出来
        //     wx.request({
        //       url: "http://localhost:8888/bikes",
        //       method: 'GET',
        //       success: function (res) {
        //         const bikes = res.data.map((item) => {
        //           return {
        //             id: item.id,
        //             iconPath:"../image/bike.png",
        //             width:30,
        //             height: 35,
        //             latitude: item.latitude,
        //             longitude: item.longitude
        //           };
        //         });
        //         // 修改data里面的markers
        //         that.setData({
        //           // iconPath: "/image/bike.png",
        //           // width: "50rpx",
        //           // height: "65rpx",
        //           markers: bikes
        //         });
        //       }
        //     })

        //   }
        // })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this
    //在这个事件中，记录用户的行为，然后发送到后台服务器
    //获取当前位置
    wx.getLocation({
      success: function (res) {
        //纬度
        var lat = res.latitude;
        //经度
        var log = res.longitude;
        // //从本地存储中取出唯一身份标识
        // var openid = wx.getStorageSync('openid')
        // //发送request向mongo中添加数据（添加一条文档（json））
        // wx.request({
        //   //用POST方式请求es可以只指定index和type，不用指定id
        //   url: "http://localhost:8888/log/ready",
        //   data: {
        //     time: new Date(),
        //     openid: openid,
        //     lat: lat,
        //     log: log
        //   },
        //   method: "POST"
        // })
      },
    })
  }
})
