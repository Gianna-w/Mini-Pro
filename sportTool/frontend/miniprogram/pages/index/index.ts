// index.ts
import {request} from "../../utils/request"
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    isNeedLogin:false,
    userInfo: {},
    stepInfoList:[]
  },
  onLoad() {},
  onShow() {
    const that=this
    wx.checkSession({
      success () {
        //session_key 未过期，并且在本生命周期一直有效
        that.setData({isNeedLogin:false})
        that.getWeRunInfo()
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        that.setData({isNeedLogin:true})
      }
    })
  },
  toLogin(){
    const that=this
    that.setData({isNeedLogin:false})
    wx.showLoading({title: '加载中'})
    wx.login({
      success: res => {
        request.get('/loginInfo',{code:res.code},(response)=>{
          that.setData({loginSucc:true})
          wx.setStorageSync('session_key', response.data.session_key)
          that.getWeRunInfo()
        })
      },
      fail:()=>{
        that.setData({isNeedLogin:true})
      }
    })
  },
  getUserInfo(e: any) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  getWeRunInfo() {
    const that = this
    wx.showLoading({title: '加载中'})
    that.setData({stepInfoList:[]})
    wx.getWeRunData({
      success:res=>{
        const {encryptedData,iv} = res
        const session_key = wx.getStorageSync('session_key')
        if(session_key){
          request.get('/weRunInfo',{encryptedData,iv,sessionKey:session_key},(response:any)=>{
            const stepInfoList = response.data.stepInfoList.map((item:{timestamp:number,step:number})=>{
              return {
                date:new Date(item.timestamp*1000).toLocaleDateString(),
                step:item.step
              }
            })
            that.setData({stepInfoList},()=>{
              wx.hideLoading()
            })
          })
        }else{
          that.toLogin()
        }
      }
    })
  }
})
