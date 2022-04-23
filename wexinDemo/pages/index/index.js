// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [1,2,3,4],
    imglist: [],
    score: 60,
    htmlSnip: '',
    toView: 1,
    navData: [
      {
        text: '导航一'
      },
      {
        text: '导航二'
      },
      {
        text: '导航三'
      },
      {
        text: '导航四'
      },{
        text: '导航五'
      }
    ],
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: #1AAD19;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you\'re gonna get.'
      }]
    }]
  },

  change() {
    let score = 90
    this.setData({
      score: score
    })
  },

  changeData: function() {
    this.setData({
      testStr: 'hello小程序'
    })
  },

  tmove: function() {
    console.log("touchend")
  },
  
  lpress: function() {
    console.log("longpress")
  },

  containerTap: function() {
    console.log('containerTap')
  },

  textTap: function() {
    console.log('textTap')
  },

  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },

  bindSwitchChange: function(e) {
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onLoad')
    let imglist = [{
        imageUrl: "https://file.xdclass.net/video/2022/banner/03.jpeg",
        url: "https://xdclass.net/#/memberV2",
      },
      {
        imageUrl: "https://file.xdclass.net/video/2022/banner/34.png",
        url: "https://detail.tmall.com/item.htm?id=659917587313&skuId=4753069368291",
      },
      {
        imageUrl: "https://file.xdclass.net/video/2022/banner/3.jpeg",
        url: "https://detail.tmall.com/item.htm?id=671977607036",
      },
    ]
    let htmlSnip = `
    <div class="div_class">
      <h1>Title</h1>
      <p class="p">
        Life is&nbsp;<i>like</i>&nbsp;a box of
        <b>&nbsp;chocolates</b>.
      </p>
    </div>
    `
    this.setData({
      imglist: imglist,
      htmlSnip: htmlSnip
    })
    console.log(this.data.imglist)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log(onHide)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onunload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})