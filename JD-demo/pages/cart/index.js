/**
 * 1、购物车拥有多个商品（数组）
 * 2、需要total属性（用户计算商品总个数
 * 3、判断购物车是否拥有此商品。如果有累加，否则，新加入
 */
// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartArray:[],
    totalMoney:'0.00',
    totalCount:0,
    selectAll:false,
    startX:0,
    startY:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onGetCount(e){
    const index = e.currentTarget.dataset.index;
    const cartArray = this.data.cartArray;
    cartArray[index].total = e.detail.val;
    this.setData({
      cartArray:cartArray
    })
  },
  switchGoodDetail(e){
    const index = e.currentTarget.dataset.index;
    const cartArray = this.data.cartArray;
    wx.navigateTo({
      url: '/pages/detail/index?id=' + cartArray[index].id,
    })
  },
  selectGood(e){
    const index = e.currentTarget.dataset.index;
    const cartArray = this.data.cartArray;
    cartArray[index].select = !cartArray[index].select;

    let totalMoney = Number(this.data.totalMoney);
    let totalCount = this.data.totalCount;
    let selectAll = this.data.selectAll;
    if(cartArray[index].select){
      totalMoney += Number(cartArray[index].price) * cartArray[index].total;
      totalCount++;
    }else{
      selectAll=false;
      totalMoney -= Number(cartArray[index].price) * cartArray[index].total;
      totalCount--;
    }
    this.setData({
      cartArray: cartArray,
      totalMoney: String(totalMoney.toFixed(2)),
      totalCount: totalCount,
      selectAll: selectAll
    })
  },
  addCount(e){
    const index = e.currentTarget.dataset.index;
    const cartArray = this.data.cartArray;
    let totalMoney = Number(this.data.totalMoney);
    //计算金额
    if (cartArray[index].select) {
      totalMoney += Number(cartArray[index].price);
    }
    this.setData({
      totalMoney: String(totalMoney.toFixed(2))
    })
  },
  subCount(e){
    const index = e.currentTarget.dataset.index;
    const cartArray = this.data.cartArray;
    let totalMoney = Number(this.data.totalMoney);
    //计算金额
    if (cartArray[index].select) {
      totalMoney -= Number(cartArray[index].price);
    }
    this.setData({
      totalMoney: String(totalMoney.toFixed(2))
    })
  },
  selectAll(){
    const cartArray = this.data.cartArray;
    let totalMoney = 0;
    let totalCount= 0;
    let selectAll = this.data.selectAll;
    //设置选中状态
    selectAll = !selectAll;
    cartArray.forEach(cart=>{
      cart.select = selectAll;

      //计算总金额商品个数
      if (selectAll){
        totalMoney += Number(cart.price) * cart.total;
        totalCount++;
      }else{
        totalMoney=0;
        totalCount=0;
      }
    })

    this.setData({
      cartArray:cartArray,
      totalMoney: String(totalMoney.toFixed(2)),
      totalCount: totalCount,
      selectAll: selectAll
    })
  },
  touchstart(e){
    //重置所有删除
    this.data.cartArray.forEach(cart=>{
      if(cart.isTouchMove){
        cart.isTouchMove = false;
      }
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      cartArray: this.data.cartArray
    })
  },
  del(e){
    var that =this;
    var index = e.currentTarget.dataset.index;
    wx.getStorage({
      key: 'cartInfo',
      success: function(res) {
        const partData = res.data;
        partData.forEach(cart=>{
          if(cart.title==that.data.cartArray[index].title){
            partData.splice(index,1);
          }
        })

        wx.setStorage({
          key: 'cartInfo',
          data: partData,
        })
        that.update(index)
      },
    })
  },
  update(index){
    const cartArray = this.data.cartArray;
    let totalMoney = Number(this.data.totalMoney);
    let totalCount = Number(this.data.totalCount);
    //如果选中，计算价格和数量，如果未选中，不用计算
    if(cartArray[index].select){
      totalMoney -= Number(cartArray[index].price) * cartArray[index].total;
      totalCount--;
    }

    //删除
    cartArray.splice(index,1);
    this.setData({
      cartArray:cartArray,
      totalMoney: String(totalMoney.toFixed(2)),
      totalCount: totalCount
    })

    if(cartArray.length>0){
      wx.setTabBarBadge({
        index: 2,
        text: String(cartArray.length),
      })
    }else{
      wx.removeTabBarBadge({
        index: 2,
      })
    }
  },
  touchmove(e){
    var index= e.currentTarget.dataset.index;
    //开始的X和Y坐标
    var startX = this.data.startX;
    var startY = this.data.startY;
    //移动的x和y坐标
    var touchMoveX = e.changedTouches[0].clientX;
    var touchMoveY = e.changedTouches[0].clientY;
    //调用计算角度方法
    var angel = this.angel(
      {X:startX,Y:startY},
      {X:touchMoveX,Y:touchMoveY}
    );

    this.data.cartArray.forEach((cart,i)=>{
      cart.isTouchMove = false;
      //滑动的角度大于30 return
      if(Math.abs(angel)>30){return}
      //匹配
      if(i==index){
        if(touchMoveX >startX){  //右滑
          cart.isTouchMove = false;
        }else{
          cart.isTouchMove = true;
        }
      }
    })
    this.setData({
      cartArray:this.data.cartArray
    })
  },
  angel(start,end){
    var _X = end.X-start.X;
    var _Y = end.Y - start.Y;
    //Math.atan()   返回数字的反正切函数
    return 360 * Math.atan(_Y/_X) / (2 * Math.PI);
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
    var that = this;
    wx.getStorage({
      key: 'cartInfo',
      success: function(res) {
        const cartArray = res.data;
        cartArray.forEach(cart=>{
          cart.select = false;
          cart.isTouchMove=false;
        })
        that.setData({
          cartArray: cartArray,
          selectAll:false,
          totalMoney:'0.00',
          totalCount:0
        })
        cartArray.length>1?
        wx.setTabBarBadge({
          index: 2,
            text: String(cartArray.length),
        })
        :wx.removeTabBarBadge({
          index: 2
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    const carArray = this.data.cartArray;
    wx.setStorage({
      key: 'cartInfo',
      data: carArray,
    })
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