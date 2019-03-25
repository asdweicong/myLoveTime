//test01.js

Page({
  data: {
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    count: 1
  },
  onLoad: function () {
    this.setData({
      
    })
  },
  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  }
})
