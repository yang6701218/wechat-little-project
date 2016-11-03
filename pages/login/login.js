var commom = require('../common.js');
var app = getApp()
Page({
  data:{
    // text:"这是一个页面"

          phone:'18508336634',
          pwd:'111',
          toastHidden:true,
          errorMsg:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  toastChange:function(){
    console.log("我要消失啦");
    this.setData({
        toastHidden:true,
        errorMsg:""
    })
  },
  goLogin:function(){
    if(!commom.phone(this.data.phone)){
       wx.showToast({
         title:'你的号码对么？',
         icon:'loading',
         duration:1500
       });
       return
    }
     wx.request({ //发请求
         url : app.globalData.url+'/api/login',
         data:{phone:this.data.phone,pwd:this.data.pwd},
         complete:function(){
             console.log(11)
         },
         success:function(){
            wx.redirectTo({url:'/pages/index/index?id=11121'})
         }
     });
     //console.log(this.data.phone);
     
  },
  //赋值电话
  bindPhone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  bindPwd:function(e){
    this.setData({
      pwd:e.detail.value
    })
  }
})