// pages/mainpage/mainpage.js
var utils = require("../../utils/util.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    qitems: [
      { title: '测测健康', img: "../../images/jk.png", jumpto: "../jiankang/index/index" },
      { title: '测测娱乐', img: "../../images/yule.png", jumpto: "../yule/index/index" }
    ]
  },
  OnSelectItem: function (e) {
    // 跳转到结果页
    wx.navigateTo({
      url: e.currentTarget.dataset.jumpto
    })
  },
  onShareAppMessage:function(e){
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  }
})