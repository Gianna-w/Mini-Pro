//引入接口地址
const apiUrl = require("../../utils/apiUrl.js") 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proList:[],
    page:1,
    pageSize:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
    const that = this;
    wx.showLoading({
      title: "加载中"
    })
    wx.request({
      url: apiUrl.productionsList,
      hearder: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data) {
          that.setData({
            proList: res.data
          })
          wx.hideLoading();
        }
      }
    }) 
  },
  //跳转详情页
  switchProlistDetail(e){
    const that = this;
    let index = parseInt(e.currentTarget.dataset.index);
    wx.navigateTo({
      url:'/pages/detail/index?id=' + that.data.proList[index].id
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
    //显示加载状态
    wx.showNavigationBarLoading();
    this.setData({
      page:1,
      noData:false
    })
    const that = this;
    wx.request({
      url: apiUrl.productionsList,
      success(res) {
        if (res.data) {
          that.setData({
            proList: res.data
          })
          //停止下拉加载状态
          wx.stopPullDownRefresh();
          wx.hideNavigationBarLoading();
        }
      }
    }) 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //停止下拉刷新
    wx.stopPullDownRefresh();
    wx.showNavigationBarLoading();
    const proList = this.data.proList;
    let page = this.data.page;
    this.setData({
      page:++page
    })

    const that = this;
    wx.request({
      url:apiUrl.productionsList + '/'+that.data.page + '/' +that.data.pageSize,
      success(res){
        if(res.data.length==0){
          that.setData({
            noData:true
          })
        }else{
          res.data.forEach(item => {
            proList.push(item);
          })
          that.setData({
            proList: proList
          })
        }
        wx.hideNavigationBarLoading();
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})