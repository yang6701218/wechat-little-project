Page({
  data:{
    indicatorDots:true,
    durTime:500,
    pageActive:0,
    scrollViewHeight:400,
    liveList:[],
    womanList:[],
    liveList:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
      this.getList();
  },
  scroll:function(event){
    console.log(event.detail);
  },
  swiperChange:function(event){
    var current =  event.detail.current;
    this.pageActiveChange(event.detail.current);
  },
  swiperItem:function(event){
     this.pageActiveChange(event.target.dataset.index);
  },
  pageActiveChange:function(index){
     this.setData({
       pageActive:index
     })
  },
  getList:function(index){
     var index =  index | 0;
     wx.request({
         url:'http://10.7.186.101:8080/api/getList',
         data:{},
         complete:function(){
             
         },
         success:function(){
           
         }
     });
  }
})