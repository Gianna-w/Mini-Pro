//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo:false,
    canIUse:wx.canIUse("button.open-type.getUserInfo")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
    }else if(this.data.canIuse){
      //由于getUserInfo是网络请求可能会有延迟，可能在onload之后才返回
      //为了防止这种情况，此处应该加上callback
      app.userInfoReadyCallback = res=>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
      }
    }
  },
  //获取用户信息
  getUserInfo:function(e){
    console.log(e)
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
    })
  }
})