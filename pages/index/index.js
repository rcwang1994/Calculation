//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // grids: [1, 2, 3, 4, 5, 6, 7, 8, 9, '删除', '0', '确定'],
    grids: [
      { id: 1, key: '1' },
      { id: 2, key: '2' },
      { id: 3, key: '3' },
      { id: 4, key: '4' },
      { id: 5, key: '5' },
      { id: 6, key: '6' },
      { id: 7, key: '7' },
      { id: 8, key: '8' },
      { id: 9, key: '9' },
      { id: 10, key: '删除' },
      { id: 0, key: '0' },
      { id: 11, key: '提交' },
    ],
    question: '49+13=',
    answer: 72,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  keyed: function(e) {
    // console.log('tap');
    // console.log(JSON.stringify(e));
    console.log(e.currentTarget.id);
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
