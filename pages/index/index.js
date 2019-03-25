//index.js
//获取应用实例
const app = getApp()
// const forOutTime = require('/time.js')
// console.log('forOutTime',forOutTime)
Page({
  data: {
    You: '小小燕',
    Me: '小小聪',
    timeToNow:'0天0小时0分0秒',
    timeToNowYear: '0年0月0日',
    userInfo: {},
    beginToUnderstand:'2012-09-20',
    hasUserInfo: false,
    canIUse: ('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
      // url: '../test01/test01'
    // })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '小小燕',
      path: '/page/user?id=123'
    }
  },
  onLoad: function (query) {
    app.startPullDownRefresh = res =>{
    }
    wx.startPullDownRefresh(function(e){
      console.log(e)
    })
    console.log('app()',this) 
    console.log('query',query)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo, 
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          console.log(res.userInfo)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.setCountDown(this.data.beginToUnderstand);
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  setCountDown: function (start) {
    var that = this;
    start = start.replace(/-/g, '/');
    var time_now_server = new Date(start);//开始的时间
    var time_now_server_time = time_now_server.getTime();
    var times = '';
    var time_now_server_year = time_now_server.getFullYear();
    var time_now_server_month = time_now_server.getMonth();
    var time_now_server_day = time_now_server.getDay();

    var accesstime = new Date();//开始的时间
    var accesstime_year = accesstime.getFullYear();
    var accesstime_month = accesstime.getMonth();
    var accesstime_day = accesstime.getDay();

    var accesstime_time = accesstime.getTime();
    times = parseInt((accesstime_time - time_now_server_time)) / 1000;
    console.log(time_now_server_time, accesstime_time);
    setInterval(function () {
      var day = 0,
        hour = 0,
        minute = 0,
        second = 0;//时间默认值
      if (times > 0) {
        day = Math.floor(times / (60 * 60 * 24));
        hour = Math.floor(times / (60 * 60)) - (day * 24);
        minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
      }
      if (day <= 9) day = '0' + day;
      if (hour <= 9) hour = '0' + hour;
      if (minute <= 9) minute = '0' + minute;
      if (second <= 9) second = '0' + second;
      var countTime = day + "天" + hour + "小时" + minute + "分钟" + second + "秒";

      var _year = accesstime_year - time_now_server_year
      var _month = accesstime_month - time_now_server_month
      var _day = accesstime_day - time_now_server_day
      if (accesstime_month < time_now_server_month){
        _month = time_now_server_month - accesstime_month
      }
      if (accesstime_day < time_now_server_day) {
        _day = time_now_server_day - accesstime_day
      }
      
      var ToNowYear = _year+"年"+_month +"月"+_day +"天"
      // console.log(countTime,ToNowYear);
      that.setData({
        timeToNow: countTime,
        timeToNowYear: ToNowYear,
      })
      times++;
    }, 1000);

  },
  onReady: function () {
    console.log(2)
    // Do something when page ready.
  },
  onShow: function () {
    console.log(1)
    // Do something when page show.
  },
  onHide: function () {
    console.log(3)
    // Do something when page hide.
  },
  onUnload: function () {
    console.log(4)
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    console.log("onReachBottom()")
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    console.log("onShareAppMessage()点击转发")
    // return custom share data when user share.
  },
  onPageScroll: function (scrollTop) {
    console.log('onPageScroll()页面滑动（滚动）',scrollTop)
    // Do something when page scroll
  },
  onResize: function () {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})
