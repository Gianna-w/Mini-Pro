//引入接口地址
const apiUrl = require("../../utils/apiUrl.js") 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logos:[],
    pageRow:[],
    quicks:[],
    swipers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.showLoading({
      title:"加载中"
    })
    wx.request({
      url: apiUrl.homepage,
      hearder:{
        'content-type':'application/json'
      },
      success(res){
        if(res.data){
          that.setData({
            logos: res.data.logos,
            pageRow: res.data.pageRow,
            quicks: res.data.quicks,
            swipers: res.data.swipers
          })
          wx.hideLoading();
        }
      }
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