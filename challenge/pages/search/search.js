// pages/search/search.js

import searchNotes from '../../utils/vague.js'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    location: '南昌',
    search: {
    content:'',
  },
    job: ["web前端开发工程师", "web前端", "web开发工程师", "web工程师",
      "web前端工程师", "前端开发工程师", "前端工程师", "开发工程师",
      "web开发", "前端开发", "web前端开发", "web前端工程师"
      , "web", "web前端", "web前端开发工程师"],
  list: [],
  history: [],
  guess:["数据挖掘","高级测试工程师","产品运营","web前端","市场","汽车","Java","助理"]
  },
  choosecity(e) {
    wx.navigateTo({
      url:'../cities/cities',
      success:() => {
      },
      fail: () => {       
      }
    })
  },
  searchinto(e) {
    // console.log(e)
    let value = this.data.search.content;
    let history = this.data.history;
    history.push(value);
    wx.navigateTo({
      url:`../related/related?value=${value}`
    })
  
    this.setData({
      history
    })
  },
  searchdelete(e) {
    this.setData({
      ['search.content']: ''
    })
  },
  deleteall(e) {
    const history = this.data.history;
    wx.showModal({
      title: '提示',
      content: '确定删除全部历史搜索',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            history: []
          })
        } else if (res.cancel) {

        }
      }

    })
    
  },
  onInput(e) {
    let value = e.detail.value;
    console.log(value);
    const job = this.data.job;
    var list = [];
    for(var i = 0; i < job.length; i++){
      if(job[i].indexOf(value)>-1){
        list.push(job[i]);
      }
    }
    this.setData({
      list: list,
      ['search.content']: value
    });
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})