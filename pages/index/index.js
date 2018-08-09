//index.js
//获取应用实例
var utils = require("../../utils/util.js")

const app = getApp()

Page({
  data: {
    qitems: utils.getJsonData()
  },
  OnSelectItem: function (e) {
    // 跳转到结果页
    wx.navigateTo({
      url: '../cspage/cspage?title=' + e.currentTarget.dataset.title
    })
  }
})
