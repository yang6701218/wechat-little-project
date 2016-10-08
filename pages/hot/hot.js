Page({
  data:{
    indicatorDots:true,
    durTime:500,
    pageActive:0,
    scrollViewHeight:400
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  scroll:function(event){
    console.log(event.detail);
  },
  swiperChange:function(event){
    this.pageActiveChange(event.detail.current);
  },
  swiperItem:function(event){
     this.pageActiveChange(event.target.dataset.index);
  },
  pageActiveChange:function(index){
     this.setData({
       pageActive:index
     })
  }
})