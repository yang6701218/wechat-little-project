Page({
  data:{
    // text:"这是一个页面"

          phone:'',
          pwd:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  goLogin:function(){
     wx.request({
         url:'http://192.168.1.107:8080/api/login',
         data:{phone:this.data.phone,pwd:this.data.pwd},
         complete:function(){
             console.log(11)
         },
         success:function(){
            console.log(22)
         }
     });
     //console.log(this.data.phone);
     //wx.navigateTo({url:'/pages/index/index?id=11121'})
  },
  //赋值电话
  bindPhone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  bindPwd:function(){
    this.setData({
      pwd:e.detail.value
    })
  }
})