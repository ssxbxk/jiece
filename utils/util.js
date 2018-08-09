const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getJsonData = () => {
  var tmlist = [{ "items": [{ "title": "1\u3001\u4f60\u89c9\u5f97\u4ec0\u4e48\u989c\u8272\u7684\u9e21\u5c3e\u9152\u662f\u6700\u6709\u9b45\u529b\u7684\uff1f", "select": [{ "title": "\u84dd\u8272", "go": "2" }, { "title": "\u9ed1\u8272", "go": "3" }, { "title": "\u7ea2\u8272", "go": "4" }] }, { "title": "2\u3001\u4f60\u548c\u4e00\u7fa4\u597d\u670b\u53cb\u6253\u7b97\u8fdb\u884c\u4e00\u6b21\u91ce\u708a\uff0c\u4f60\u4eec\u4f1a\u9009\u62e9\u4ec0\u4e48\u5730\u70b9\uff1f", "select": [{ "title": "\u6cb3\u8fb9", "go": "3" }, { "title": "\u6811\u6797\u91cc", "go": "5" }, { "title": "\u968f\u610f\u7684\u8349\u5730", "go": "4" }] }, { "title": "3\u3001\u5982\u679c\u8ba9\u4f60\u6295\u786c\u5e01\u51b3\u5b9a\u53bb\u4e0d\u53bb\u53c2\u52a0\u751f\u65e5\u805a\u4f1a\uff0c\u4f60\u4f1a\u5c06\u94b1\u5e01\u7684\u54ea\u4e00\u9762\u4ee3\u8868\u4e3a'\u53bb'\uff1f", "select": [{ "title": "\u82b1", "go": "5" }, { "title": "\u5b57", "go": "4" }, { "title": "\u4e0d\u4f1a\u8fd9\u6837\u53bb\u51b3\u5b9a\u4e8b\u60c5", "go": "6" }] }, { "title": "4\u3001\u670b\u53cb\u544a\u8bc9\u4f60\u4e00\u4e2a\u79d8\u5bc6\u5e76\u4e14\u8981\u6c42\u4f60\u4e0d\u8981\u544a\u8bc9\u522b\u4eba\uff0c\u4f60\u4f1a\u5077\u5077\u8ddf\u604b\u4eba\u8bf4\u5417\uff1f", "select": [{ "title": "\u4f1a", "go": "5" }, { "title": "\u4e0d\u4f1a", "go": "6" }, { "title": "\u8fd8\u597d", "go": "7" }] }, { "title": "5\u3001\u51fa\u53bb\u65c5\u6e38\u4f60\u6bd4\u8f83\u559c\u6b22\u62cd\u54ea\u79cd\u98ce\u683c\u7684\u7167\u7247\uff1f", "select": [{ "title": "\u53ea\u8981\u98ce\u666f\u4e0d\u8981\u4eba", "go": "8" }, { "title": "\u81ea\u5df1\u5728\u666f\u533a\u8ba9\u4eba\u4e3a\u81ea\u5df1\u62cd\u7167", "go": "7" }, { "title": "\u4e0d\u592a\u62cd\u7167", "go": "6" }] }, { "title": "6\u3001\u4f60\u548c\u670b\u53cb\u5230\u540c\u4e00\u5bb6\u516c\u53f8\u5e94\u8058\uff0c\u4f46\u5bf9\u65b9\u8bf4\u4f60\u4eec\u4e24\u4e2a\u53ea\u80fd\u5f55\u7528\u4e00\u4e2a\u4eba\uff0c\u4f60\u4f1a\u600e\u4e48\u505a\uff1a", "select": [{ "title": "\u8ba9\u670b\u53cb\u4e0a", "go": "8" }, { "title": "\u81ea\u5df1\u4e89\u53d6", "go": "9" }, { "title": "\u516c\u5e73\u7ade\u4e89", "go": "7" }] }, { "title": "7\u3001\u4f60\u4f1a\u56e0\u4e3a\u7b2c\u4e00\u5370\u8c61\u5dee\u800c\u4e0d\u518d\u548c\u67d0\u4e2a\u4eba\u89c1\u9762\u5417\uff1f", "select": [{ "title": "\u662f\u7684", "go": "9" }, { "title": "\u4e0d\u662f", "go": "8" }, { "title": "\u4e0d\u77e5\u9053", "go": "10" }] }, { "title": "8\u3001\u4f60\u5bf9\u7f8e\u98df\u603b\u662f\u6ca1\u6709\u62b5\u6297\u529b\u5417\uff1f", "select": [{ "title": "\u662f\u7684", "go": "10" }, { "title": "\u4e0d\u662f", "go": "9" }, { "title": "\u8fd8\u597d", "go": "11" }] }, { "title": "9\u3001\u4f60\u5bf9\u81ea\u5df1\u7684\u8bb0\u5fc6\u529b\u6709\u4fe1\u5fc3\u5417\uff1f", "select": [{ "title": "\u6709", "go": "10" }, { "title": "\u6ca1\u6709", "go": "12" }, { "title": "\u8fd8\u597d", "go": "11" }] }, { "title": "10\u3001\u4f60\u89c9\u5f97\u4fdd\u6301\u597d\u8eab\u6750\u7684\u91cd\u8981\u4e60\u60ef\u662f\uff1a", "select": [{ "title": "\u575a\u6301\u8fd0\u52a8", "go": "12" }, { "title": "\u5c11\u5403\u4e1c\u897f", "go": "11" }, { "title": "\u675c\u7edd\u5783\u573e\u98df\u54c1\u5c31\u597d", "go": "13" }] }, { "title": "11\u3001\u4f60\u89c9\u5f97\u81ea\u5df1\u7684\u7b2c\u516d\u611f\u51c6\u786e\u5417\uff1f", "select": [{ "title": "\u51c6\u786e", "go": "13" }, { "title": "\u4e0d\u51c6", "go": "12" }, { "title": "\u8fd8\u597d", "go": "14" }] }, { "title": "12\u3001\u4f60\u559c\u6b22\u9891\u7e41\u5730\u4e0a\u5fae\u535a\u66f4\u65b0\u81ea\u5df1\u7684\u5fc3\u60c5\u5417\uff1f", "select": [{ "title": "\u662f\u7684", "go": "14" }, { "title": "\u8fd8\u597d", "go": "13" }, { "title": "\u4e0d\u559c\u6b22", "go": "15" }] }, { "title": "13\u3001\u5f53\u604b\u4eba\u628a\u4f60\u544a\u8bc9TA\u7684\u9690\u79c1\uff0c\u544a\u8bc9\u4e86\u4ed6\u7684\u670b\u53cb\uff0c\u4f60\u4f1a\uff1a", "select": [{ "title": "\u5f88\u751f\u6c14", "go": "14" }, { "title": "\u548cTA\u8ba4\u771f\u8c08\u8c08", "go": "A" }, { "title": "\u5df2\u7ecf\u544a\u8bc9\u4e86\uff0c\u4e89\u5435\u65e0\u6d4e\u4e8e\u4e8b", "go": "15" }] }, { "title": "14\u3001\u4f60\u4e0e\u65e7\u65f6\u670b\u53cb\u8fd8\u6709\u4eb2\u5bc6\u7684\u8054\u7cfb\u5417\uff1f", "select": [{ "title": "\u6709", "go": "15" }, { "title": "\u6ca1\u6709", "go": "B" }, { "title": "\u8fd8\u597d", "go": "D" }] }, { "title": "15\u3001\u4f60\u538c\u6076\u4e00\u4e2a\u4eba\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u770b\u5bf9\u65b9\u5904\u5904\u4e0d\u987a\u773c\u5417\uff1f", "select": [{ "title": "\u662f\u7684", "go": "A" }, { "title": "\u4e0d\u662f", "go": "E" }, { "title": "\u4e0d\u77e5\u9053", "go": "C" }] }], "title": "\u6d4b\u4f60\u4ec0\u4e48\u65f6\u5019\u5bf9\u68a6\u60f3\u6b7b\u5fc3", "aws": [{ "idx": "A", "title": "\u4f60\u7684\u68a6\u60f3\u5373\u4fbf\u5e7b\u706d\u4e86\uff0c\u5b83\u4e5f\u80fd\u591f\u6b7b\u7070\u590d\u71c3\u3002", "desc": "\u4e8b\u5b9e\u4e0a\uff0c\u4f60\u5bf9\u68a6\u60f3\u5f88\u6267\u7740\u5f88\u575a\u5b9a\u3002\u5373\u4fbf\u662f\u67d0\u5929\uff0c\u4f60\u53e3\u53e3\u58f0\u58f0\u8bf4\u7740\u8981\u653e\u5f03\u4e00\u4e9b\u5ff5\u5934\uff0c\u8001\u8001\u5b9e\u5b9e\u5730\u5ea6\u8fc7\u81ea\u5df1\u7684\u4f59\u751f\uff0c\u4f60\u7684\u5185\u5fc3\u4e5f\u5014\u5f3a\u5730\u575a\u6301\u7740\u81ea\u5df1\u6700\u521d\u7684\u60f3\u6cd5\u3002\u5f53\u73b0\u5b9e\u4e0d\u5141\u8bb8\u4f60\u53bb\u5b9e\u73b0\u81ea\u5df1\u68a6\u60f3\u7684\u65f6\u5019\uff0c\u4f60\u4e5f\u4f1a\u5c06\u5b83\u4eec\u5148\u653e\u4e00\u653e\uff0c\u7b49\u5230\u5408\u9002\u7684\u673a\u4f1a\u4e00\u6765\uff0c\u4f60\u5c31\u53c8\u5f00\u59cb\u5bfb\u68a6\u4e86\u3002" }, { "idx": "B", "title": "\u4f60\u7684\u68a6\u60f3\u5feb\u8981\u6bc1\u706d\u4e86\u3002", "desc": "\u73b0\u5b9e\u751f\u6d3b\u7684\u6b8b\u9177\u8ba9\u4f60\u660e\u767d\u4e86\u4e00\u4e2a\u4eba\u8981\u5148\u6d3b\u4e0b\u53bb\u624d\u4f1a\u6709\u8c08\u8bba\u68a6\u60f3\u7684\u8d44\u683c\uff0c\u4f46\u4f3c\u4e4e\u6d3b\u4e0b\u53bb\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b\u3002\u9010\u6e10\u4f60\u65e9\u5c31\u4e0d\u5728\u4e4e\u81ea\u5df1\u7684\u68a6\u60f3\u662f\u4ec0\u4e48\u4e86\uff0c\u65e9\u5c31\u5fd8\u8bb0\u4e86\u81ea\u5df1\u7684\u6700\u521d\u613f\u671b\u3002\u6309\u7167\u4e16\u4fd7\u5706\u6ee1\u7684\u6807\u51c6\u53bb\u751f\u6d3b\u6ca1\u6709\u4ec0\u4e48\u4e0d\u597d\uff0c\u4eba\u4e0d\u505a\u68a6\uff0c\u4e5f\u5c31\u53d8\u5f97\u66f4\u52a0\u77e5\u8db3\u8d77\u6765\uff0c\u53ea\u8981\u61c2\u5f97\u77e5\u8db3\uff0c\u5185\u5fc3\u5c31\u4f1a\u6709\u6ee1\u8db3\u611f\u548c\u5e78\u798f\u611f\u3002" }, { "idx": "C", "title": "\u4f60\u7684\u68a6\u60f3\u4f1a\u5728\u5f53\u4f60\u906d\u5230\u7b2c\u4e00\u767e\u96f6\u4e00\u6b21\u6253\u51fb\u7684\u65f6\u5019\u6bc1\u706d\u3002", "desc": "\u6bcf\u4e00\u6b21\u4f60\u5bf9\u81ea\u5df1\u7684\u68a6\u60f3\u4fe1\u5fc3\u5341\u8db3\u7684\u65f6\u5019\uff0c\u4f60\u6bd4\u90fd\u4f1a\u9047\u5230\u4e00\u4e9b\u4eba\u5ff5\u9b54\u5492\u4e00\u822c\u5730\u544a\u8bc9\u4f60\uff1a\u201c\u522b\u518d\u505a\u68a6\u4e86\u3002\u201d\u8fd9\u4e9b\u8bdd\u6216\u591a\u6216\u5c11\u4f1a\u6253\u51fb\u4f60\u7684\u4fe1\u5fc3\u3002\u4e5f\u8bb8\u4e00\u5f00\u59cb\u4f60\u5bf9\u8fd9\u4e9b\u603b\u662f\u6ee1\u4e0d\u5728\u4e4e\uff0c\u4f60\u6839\u672c\u4e0d\u8ba1\u8f83\u522b\u4eba\u600e\u4e48\u770b\u5f85\u4f60\uff0c\u4f46\u4fe1\u5fc3\u4e5f\u662f\u6709\u989d\u5ea6\u7684\uff0c\u88ab\u8017\u635f\u592a\u591a\uff0c\u4e5f\u5c31\u4f1a\u5f7b\u5e95\u6d88\u5931\u3002" }, { "idx": "D", "title": "\u4f60\u7684\u68a6\u60f3\u5e7b\u706d\u5728\u4f60\u7ed3\u5a5a\u4e4b\u540e\u3002", "desc": "\u5355\u8eab\u8005\u4e00\u5207\u90fd\u53ea\u7528\u4e3a\u81ea\u5df1\u8003\u8651\uff0c\u800c\u6709\u4e86\u5bb6\u5ead\u7684\u7275\u7eca\uff0c\u4e5f\u5c31\u4e0d\u80fd\u591f\u4e5f\u4e0d\u4f1a\u53ea\u8003\u8651\u81ea\u5df1\u4e86\u3002\u4f60\u6709\u975e\u5e38\u5f3a\u70c8\u7684\u8d23\u4efb\u611f\uff0c\u4f60\u77e5\u9053\u81ea\u5df1\u4e0d\u80fd\u53ea\u60f3\u81ea\u5df1\u7684\u4e8b\u60c5\u800c\u4e0d\u987e\u5bb6\u4eba\u7684\u611f\u53d7\uff0c\u66f4\u591a\u65f6\u5019\u4f60\u60c5\u613f\u727a\u7272\u81ea\u5df1\u4e5f\u4e0d\u613f\u610f\u8ba9\u5bb6\u4eba\u4e3a\u4f60\u62c5\u5fc3\u3002\u5a5a\u540e\uff0c\u4f60\u5b81\u613f\u8003\u8651\u53bb\u54ea\u4e2a\u8d85\u5e02\u4e70\u83dc\u4f1a\u66f4\u52a0\u4fbf\u5b9c\uff0c\u4e5f\u4e0d\u4f1a\u8bdd\u65f6\u95f4\u53bb\u60f3\u81ea\u5df1\u66fe\u7ecf\u7684\u68a6\u60f3\u7a76\u7adf\u6709\u6ca1\u6709\u53ef\u80fd\u53bb\u5b9e\u73b0\u3002\u8fd9\u4e0d\u662f\u5815\u843d\uff0c\u8fd9\u662f\u5bf9\u5bb6\u4eba\u7684\u7231\u7684\u4f53\u73b0\u3002" }, { "idx": "E", "title": "\u4f60\u7684\u68a6\u60f3\u6c38\u8fdc\u4e0d\u4f1a\u5e7b\u706d\u3002", "desc": "\u4f60\u7684\u68a6\u60f3\u5df2\u7ecf\u690d\u6839\u5728\u4f60\u5fc3\u4e2d\uff0c\u4e0d\u7ba1\u4f60\u7ecf\u53d7\u591a\u5c11\u6298\u78e8\uff0c\u9047\u5230\u591a\u5c11\u56f0\u96be\uff0c\u4f60\u90fd\u4f1a\u575a\u6301\u81ea\u5df1\u7684\u68a6\u60f3\u3002\u4e5f\u8bb8\u4f60\u5e76\u4e0d\u4f1a\u523b\u610f\u5730\u7740\u624b\u53bb\u505a\u4ec0\u4e48\uff0c\u4f46\u4f60\u65e9\u5c31\u5bf9\u81ea\u5df1\u7684\u68a6\u60f3\u6709\u4e86\u8ba1\u5212\uff0c\u5f88\u591a\u4eba\u770b\u6765\u4f60\u90fd\u5e76\u6ca1\u6709\u811a\u8e0f\u5b9e\u5730\u5730\u884c\u52a8\u8d77\u6765\uff0c\u4f46\u4e8b\u5b9e\u5374\u662f\uff0c\u4f60\u628a\u4e00\u5207\u90fd\u5b89\u6392\u597d\u4e86\uff0c\u4f60\u53ea\u662f\u5728\u7b49\u4e00\u4e2a\u673a\u4f1a\u7f62\u4e86\u3002" }] }]
  return tmlist;
}

module.exports = {
  formatTime: formatTime,
  getJsonData: getJsonData
}
