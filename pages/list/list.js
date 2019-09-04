// pages/list/list.js
let datas = require('../../datas/list_data.js');
console.log(datas, typeof datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
    })
  },

  // 点击跳转到detail详情页
  toDetail(event){
    console.log(event);
    // 获取点击跳转对应的下标
    let index = event.currentTarget.dataset.index;

    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  },

  /* 
    - target指的是触发事件的元素
    - currentTarget指向的是捕获事件的元素
   */

  // 点击轮播图跳转到对应页面
  carouselToDetail(event){
    console.log(event.target);
    let index = event.target.dataset.index;
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})