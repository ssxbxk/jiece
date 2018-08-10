// pages/cspage/cspage.js
var utils = require("../../../utils/util.js")
var iCurrentIdx = 1
var arrTM = []
var questionObj = null
var title = ""

Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    title = options.title;
    var tmlist = utils.getJsonData();
    var cnt = tmlist.length;
    for (var i = 0; i < cnt; i++){
      if (title == tmlist[i]["title"])
      {
        questionObj = tmlist[i];
        this.LoadQuestionToMask();
        break;
      }
    } 
  },
  onPre:function(){
    if (arrTM.length > 0){
      iCurrentIdx = arrTM.pop();
      this.LoadQuestionToMask();
    }
  },
  onSelect:function(e){
    var nextq = e.currentTarget.dataset.nextq;
    // 显示下一题
    var tmpIdx = parseInt(nextq, 10);
    if (!isNaN(tmpIdx)){
      iCurrentIdx = tmpIdx;
      arrTM.push(iCurrentIdx);
      this.LoadQuestionToMask();
    }
    else{
      // 显示答案
      wx.redirectTo({
        url: '../csresult/csresult?a=' + nextq + '&t=' + title,
      })
    }
  },
  LoadQuestionToMask:function(){
    if (questionObj != null && questionObj.items.length >= iCurrentIdx){
      this.setData(questionObj.items[iCurrentIdx-1])
    }
  },
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  }
})