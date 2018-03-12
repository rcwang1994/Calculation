//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
      { id: 10, key: '后退' },
      { id: 0, key: '0' },
      { id: 11, key: '提交' },
    ],
    question: '',
    result: '',
    answer: '',
  },
  onLoad: function () {
    this.ask();
  },
  ask: function () {
    var value = 0;
    var a = 1;
    var b = 1;
    var operation = Math.ceil(Math.random() * 4);
    switch (operation) {
      case 1:
        value = Math.ceil(20 + Math.random() * 90);
        a = Math.ceil(10+Math.random() * (value-20));
        b = value - a;
        this.setData({
          question: a + ' + ' + b + ' =',
          answer: ''
        });
        this.data.result = value;
        break;
      case 2:
        value = Math.round(10+Math.random() * 80);
        a = Math.ceil(10+Math.random() * (90 - value));
        b = a + value;
        this.setData({
          question: b + ' － ' + a + ' =',
          answer: ''
        });
        this.data.result = value;
        break;
      case 3:
        a = Math.ceil(1 + Math.random() * 32);
        b = Math.ceil(1+Math.random() * (Math.floor(100 / a)-1));
        value = a * b;
        this.setData({
          question: a + ' × ' + b + ' =',
          answer: ''
        });
        this.data.result = value;
        break;
      case 4:
        value = Math.ceil(1+Math.random() * 32);
        a = Math.ceil(1 + Math.random() * (Math.floor(100 / value)-1));
        b = a * value;
        this.setData({
          question: b + ' ÷ ' + a + ' =',
          answer: ''
        });
        this.data.result = value;
        break;
      default:
        value = Math.round(Math.random() * 100);
        a = Math.ceil(Math.random() * value);
        b = value - a;
        this.setData({
          question: a + ' + ' + b + ' =',
          answer: ''
        });
        this.data.result = value;
        break;
    }
  },
  keyed: function (e) {
    switch (e.currentTarget.id) {
      case '10':
        this.backspace();
        break;
      case '11':
        this.submit();
        break;
      default:
        this.add(e.currentTarget.id);
        break;
    }
  },
  add: function (num) {
    this.setData({
      answer: this.data.answer + num,
    })
  },
  backspace: function () {
    var str = this.data.answer.substring(0, this.data.answer.length - 1);
    this.setData({
      answer: str
    })
  },
  submit: function () {
    if(this.data.answer == '') {
      wx.showToast({
        title: '请输入答案',
        duration: 1000,
        image: '../../utils/et-warning.png'
      });
    } else if (this.data.result == this.data.answer) {
      wx.showToast({
        title: '正确',
        duration: 1000,
        image: '../../utils/et-counter.png'
      });
      setTimeout(() => {
        this.ask();
      }, 1000);
    } else {
      wx.showToast({
        title: '回答错误',
        duration: 1000,
        image: '../../utils/et-wrong.png'
      });
      setTimeout(() => {
        this.ask();
      }, 1000);
    }
  }
})