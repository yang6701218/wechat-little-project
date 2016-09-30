var commom = require('../common.js');
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
       this.setData({
          toastHidden:false,
          errorMsg:"手机格式错误"
       });
       return
    }
     wx.request({
         url:'http://10.7.186.101:8080/api/login',
         data:{phone:this.data.phone,pwd:this.data.pwd},
         complete:function(){
             console.log(11)
         },
         success:function(){
            wx.navigateTo({url:'/pages/index/index?id=11121'})
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