Page({
  data:{
    indicatorDots:true,
    durTime:500,
    pageActive:0,
    scrollViewHeight:400,
    mr:'marginLeft0',
    liveList:[],
    womanList:[],
    leftList:[]
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
  getList:function(index,list){
     var index =  index | 0;
     var that = this;
     wx.request({
         url:'http://10.7.156.200:8080/api/listLive',
         data:{index:index},
         complete:function(res){
           
         },
         success:function(res){
             that.setData({
                 liveList:res.data
             });
         }
     });
  }
})