//app.js
App({
  //app启动调用的钩子函数，不要在onLaunch的时候调用getCurrentPage()，此时page还没有生成。
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  //当页面要加载出来的钩子函数 ，可以在这里使用 getCurrentPage 哦！
  onShow:function(){
    console.log("页面要显示啦")
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  //全局的自定义配置数据，在其他地方可以使用app.js的实例获取
  globalData:{
    userInfo:null
  }
})
