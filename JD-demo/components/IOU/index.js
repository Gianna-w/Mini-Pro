// components/IOU/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hideBaitiao:{
      type:Boolean,
      value:true
    },
    baitiao:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectItem(e){
      let index = e.currentTarget.dataset.index;
      let baitiao = this.data.baitiao;
      baitiao.forEach(item=>{
        item.select=false;
      })
      baitiao[index].select=true;
      this.setData({
        baitiao:baitiao,
        curIndex:index
      })
    },
    hideBaitiaoView(e){
      if(e.target.dataset.target=='self'){
        this.setData({
          hideBaitiao: true
        })
      }
    },
    makeBaitiao(){
      let selectItem = this.data.baitiao[this.data.curIndex];
      this.triggerEvent('selectItem', selectItem);
      this.setData({
        hideBaitiao: true
      })
    }
  }
})
