//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // grids: [1, 2, 3, 4, 5, 6, 7, 8, 9, '删除', '0', '确定'],
    grids: [
      { id: 1, key: '1' },
      { id: 2, key: '2' },
      { id: 3, key: '3' },
      { id: 4, key: '4' },
      { id: 5, key: '5' },
      { id: 6, key: '6' },
      { id: 7, key: '7' },
      { id: 8, key: '8' },
      { id: 9, key: '9' },
      { id: 10, key: '删除' },
      { id: 0, key: '0' },
      { id: 11, key: '提交' },
    ],
    question: '49+13=',
    answer: 72,
  },
  onLoad: function () {
  },
  keyed: function(e) {
    console.log(e.currentTarget.id);
  },
})
