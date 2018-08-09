// pages/csresult/csresult.js
var utils = require("../../utils/util.js")

Page({
  /**
   * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var title = options.t;
    var tmlist = utils.getJsonData();
    var cnt = tmlist.length;
    for (var i = 0; i < cnt; i++) {
      if (title == tmlist[i]["title"]) {
        var questionObj = tmlist[i];
        var awsCnt = questionObj.aws.length;
        for (var t = 0; t < awsCnt; t++){
          var awsObj = questionObj.aws[t];
          if (awsObj.idx == options.a){
            this.setData(awsObj);
            break;
          }
        }
        break;
      }
    }
  }
})