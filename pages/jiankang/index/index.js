// pages/jiankang/index/index.js
var utils = require("../../../utils/util.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    qitems: [
      { title: '高血压', img: "../../../images/gxy.png", jumpto: "../gxy/gxymain" },
      { title: '冠心病', img: "../../../images/gxb.png", jumpto: "../gxb/gxbmain" },
      { title: '糖尿病', img: "../../../images/tnb.png", jumpto: "../tnb/tnbmain" }
    ]
  },
  OnSelectItem: function (e) {
    // 跳转到结果页
    wx.navigateTo({
      url: e.currentTarget.dataset.jumpto
    })
  },
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  }
})