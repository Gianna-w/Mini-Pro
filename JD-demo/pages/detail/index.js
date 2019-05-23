//引入接口地址
const apiUrl = require("../../utils/apiUrl.js") 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    partData:{},
    baitiao:[],
    baitiaoSelectItem:{
      desc:"【白条支付】首单享立减优惠"
    },
    hideBaitiao:true,
    hideBuy:true,
    badgeCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    wx.showLoading({
      title: '加载中',
    })
    var that  = this;
    wx.request({
      url: apiUrl.productionDetail,
      success(res){
        res.data.forEach(item=>{
          if(item.partData.id==id){
            that.setData({
              partData:item.partData,
              baitiao:item.baitiao
            })
          }
        })
        wx.hideLoading();
      }
    })
  },
  popBaitiaoView(){
    this.setData({
      hideBaitiao:false
    })
  },
  selectItemFn(e){
    this.setData({
      baitiaoSelectItem:e.detail
    })
  },
  popBuyView(){
    this.setData({
      hideBuy:false
    })
  },
  updataCount(e){
    let partData = this.data.partData;
    partData.count = e.detail.val;
    this.setData({
      partData:partData
    })
  },
  addCart(){
    var that = this;
    wx.getStorage({
      key: 'cartInfo',
      success: function(res) {
        const cartArray = res.data;
        const partData = that.data.partData;
        let isExit = false;//判断是否存在该商品
        cartArray.forEach(cart=>{
          if(cart.id==partData.id){
            isExit = true;
            cart.total+=that.data.partData.count;
            wx.setStorage({
              key: 'cartInfo',
              data: cartArray,
            })
          }
        })
        console.log(cartArray)
        if(!isExit){ //不存在商品
          partData.total = that.data.partData.count;
          cartArray.push(partData);
          wx.setStorage({
            key: 'cartInfo',
            data: cartArray,
          })
        }
        that.setBadge(cartArray);
      },
      fail(){
        let partData=that.data.partData;
        partData.total = that.data.partData.count;
        let cartArray=[];
        cartArray.push(partData);
        wx.setStorage({
          key: 'cartInfo',
          data: cartArray,
        })
        that.setBadge(carArray);
      }
    })
    wx.showToast({
      title:'加入购物车成功',
      icon:'success',
      duration:3000
    })
  },
  setBadge(arr){
    this.setData({
      badgeCount:arr.length
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
    const that = this;
    wx.getStorage({
      key: 'cartInfo',
      success: function(res) {
        const carArray = res.data;
        that.setBadge(carArray);
      },
    })
  },
  showCartView(){
    wx.switchTab({
      url: '/pages/cart/index',
    })
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