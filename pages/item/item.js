// pages/item/item.js
import douban from "../../utils/douban.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '加载中',
    detail: {},
    photos: []
  },

  clickImage() {
    console.log(this.data.photos);

    wx.previewImage({
      current: this.data.photos[0], // 当前显示图片的http链接
      urls: this.data.photos
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   douban({
       url:'/movie/subject/'+options.id
   }).then(
     res=>{
       console.log(res)
       if(res.data.msg){
         console.log('detail ID有误');
         return;
       }
       this.setData({
         detail:res.data,
         title:res.data.title
       });
       wx.setNavigationBarTitle({
         title: this.data.title+"    电影",
       })
     }
   )
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