// components/amount/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    subtract(e){
      let count = this.data.count;
      count>1?count--:1;
      this.setData({
        count:count
      })
      var myEventDetail = {
        val: count
      }
      this.triggerEvent('myevent', myEventDetail)
      this.triggerEvent('subevent');
    },
    add(e){
      let count = this.data.count;
      var myEventDetail = {
        val: ++count
      }
      this.setData({
        count: count
      })
      this.triggerEvent('myevent', myEventDetail);
      this.triggerEvent('addevent');
    },
    inputChangeHandle(e){
      let value = e.detail.value;
      var myEventDetail={
        val:value
      }

      //数据改变时，向父组件传递新数据
      this.triggerEvent('myevent', myEventDetail)
    }
  }
})
