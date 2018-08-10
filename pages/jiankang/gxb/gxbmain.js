// pages/jiankang/gxb/gxbmain.js
var utils = require("../../../utils/util.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  }
})