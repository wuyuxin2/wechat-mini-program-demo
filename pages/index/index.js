// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'wuyuxin2',
    isShow: true,
    userInfo: {}
  },
  handleClick(){
    // 点击跳转到指定页面
    wx.switchTab({
      url: '/pages/list/list',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getUserInfo();
  },
  getUserInfo(){
    var that = this;
    // 判断用户是否授权了
    wx.openSetting({
      success(data) {
        console.log( 'success:' + data);
        if (data.authSetting['scope.userInfo']) {
          // 用户已经授权
          that.setData({
            isShow: false
          })
        } else {
          // 没有授权
          that.setData({
            isShow: true
          })
        }
      }
    })

    // 获取用户登录的信息
    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        // 更新data中的userInfo
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail: () => {
        console.log('失败！！')
      }
    })
  },
  handleGetUserInfo(data){
    console.log("用户点击了"+data.toString());
    if(data.detail.rawData){
      this.getUserInfo();
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})