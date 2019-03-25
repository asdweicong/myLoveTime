Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;

}
const forOutTime = {
  calTimeStamp : function () {
    var accesstime = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
    accesstime = accesstime.replace(/-/g, '/');
    return accesstime;
  },

   setCountDown : function (start) {
    start = start.replace(/-/g, '/');
    var time_now_server = new Date(start);//开始的时间
    time_now_server = time_now_server.getTime();
     var accesstime = forOutTime.calTimeStamp();
    var times = '';
    accesstime = new Date(accesstime);//开始的时间
    accesstime = accesstime.getTime();
    console.log(accesstime, time_now_server);
    times = parseInt((accesstime - time_now_server)) / 1000;
    console.log(times);
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
      console.log(countTime);
      times++;
    }, 1000);

  },
}


module.exports = {
  forOutTime: forOutTime
}