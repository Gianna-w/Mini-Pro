const baseUrl = 'http://192.168.1.2:30001'
type RequestOption = (url:string,data:object,callback:(res:any)=>void)=>void
type Request = {
  get:RequestOption,
  post?:RequestOption
}
export const request:Request = {
  get:function(url:string,data:object,callback:(res:any)=>void):void {
    wx.request({
      url: `${baseUrl}${url}`, 
      data,
      success (response) {
        callback(response)
      },
      fail(err){
        callback(err)
      }
    })
  },
  post:function(url:string,data:object,callback:(res:any)=>void):void {
    wx.request({
      url: `${baseUrl}${url}`, 
      method:'POST',
      data,
      success (response) {
        callback(response)
      },
      fail(err){
        callback(err)
      }
    })
  }
}