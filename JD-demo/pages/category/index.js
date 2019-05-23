//引入接口地址
const apiUrl = require("../../utils/apiUrl.js") 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems:[],
    navRightItems:[],
    curIndex:0,
    scrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.showLoading({
      title: "加载中"
    })
    wx.request({
      url: apiUrl.productions,
      hearder: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data) {
          that.setData({
            navLeftItems: res.data.navLeftItems,
            navRightItems: res.data.navRightItems,
          })
          wx.hideLoading();
        }
      }
    })
  },
  switchRightTab(e){
    let index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex:index,
      scrollTop:0
    })
  },
  showListView(e){
    let title = e.currentTarget.dataset.txt;
    //导航跳转
    wx.navigateTo({
      url:'/pages/list/index?title=' + title
    })
  },
})