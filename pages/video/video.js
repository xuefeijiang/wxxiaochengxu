// pages/video/video.js
import douban from '../../utils/douban.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
   banner:{
     key: 'coming_soon',
     title: '正在热映',
     content: [
       // {image:'',id:xx}
     ]
   },

    list: [
      { key: 'coming_soon', title: '即将上映' },
      { key: 'top250', title: 'Top250' },
      { key: 'in_theaters', title: '正在热映' },
      { key: 'new_movies', title: '电影新片榜' } 
      // { key: 'subject/26942674', title: '电影详情' }  
    ],
  
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    douban({
      url: '/movie/' + this.data.banner.key,
      data: { start: 0, count: 3 }
    }).then(
      res => {
        // console.log(res)
        if (!res.data.subjects) return;
        let result = [];
        res.data.subjects.map((item) => {
          result.push({
            image: item.images.large,
            id: item.id
          })
        });
        this.setData({
          'banner.content': result
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
     // "rating": {
        //   "max": 10,
        //   "average": 7.9,
        //   "details": {
        //     "1": 502.0,
        //     "3": 12243.0,
        //     "2": 1838.0,
        //     "5": 15412.0,
        //     "4": 22863.0
        //   },
        //   "stars": "40",
        //   "min": 0
        // },
        // "genres": [
        //   "动作",
        //   "犯罪",
        //   "惊悚"
        // ],
        // "title": "疾速备战",
        // "casts": [
        //   {
        //     "avatars": {
        //       "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58124.jpg",
        //       "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58124.jpg",
        //       "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58124.jpg"
        //     },
        //     "name_en": "Keanu Reeves",
        //     "name": "基努·里维斯",
        //     "alt": "https://movie.douban.com/celebrity/1008070/",
        //     "id": "1008070"
        //   },
        //   {
        //     "avatars": {
        //       "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51174.jpg",
        //       "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51174.jpg",
        //       "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51174.jpg"
        //     },
        //     "name_en": "Halle Berry",
        //     "name": "哈莉·贝瑞",
        //     "alt": "https://movie.douban.com/celebrity/1054415/",
        //     "id": "1054415"
        //   },
        //   {
        //     "avatars": {
        //       "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490098154.3.jpg",
        //       "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490098154.3.jpg",
        //       "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490098154.3.jpg"
        //     },
        //     "name_en": "Laurence Fishburne",
        //     "name": "劳伦斯·菲什伯恩",
        //     "alt": "https://movie.douban.com/celebrity/1022596/",
        //     "id": "1022596"
        //   }
        // ],
        // "durations": [
        //   "131分钟"
        // ],
        // "collect_count": 69453,
        // "mainland_pubdate": "",
        // "has_video": false,
        // "original_title": "John Wick: Chapter 3 - Parabellum",
        // "subtype": "movie",
        // "directors": [
        //   {
        //     "avatars": {
        //       "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1560219050.95.jpg",
        //       "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1560219050.95.jpg",
        //       "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1560219050.95.jpg"
        //     },
        //     "name_en": "Chad Stahelski",
        //     "name": "查德·斯塔赫斯基",
        //     "alt": "https://movie.douban.com/celebrity/1154486/",
        //     "id": "1154486"
        //   }
        // ],
        // "pubdates": [
        //   "2019-05-17(美国)"
        // ],
        // "year": "2019",
        // "images": {
        //   "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551393832.jpg",
        //   "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551393832.jpg",
        //   "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551393832.jpg"
        // },
        // "alt": "https://movie.douban.com/subject/26909790/",
        // "id": "26909790"

 //轮播图
    // imgUrls: [
    //   // 'http://img5.imgtn.bdimg.com/it/u=1176726472,3148946957&fm=26&gp=0.jpg',
    //   // 'http://img0.imgtn.bdimg.com/it/u=101190989,4066099453&fm=26&gp=0.jpg',
    //   // 'http://img0.imgtn.bdimg.com/it/u=1974636853,585963635&fm=26&gp=0.jpg'
    // ],
// movieList: [{
//   "rid": "1",
//   "photo": "http://img2.imgtn.bdimg.com/it/u=3049446532,729746740&fm=26&gp=0.jpg",
//   "name": "白发魔女传之明月天",
//   "actor": "黄晓明 / 范冰冰 / 赵文卓",
//   "wk": "(第31周) 07月28日-08月03日",
//   "wboxoffice": "￥ 22400",
//   "tboxoffice": "￥ 22400"
// },
 // {
    //   "rid": "2",
    //   "photo": "http://img0.imgtn.bdimg.com/it/u=1434629043,1994832267&fm=26&gp=0.jpg",
    //   "name": "后会无期",
    //   "actor": "陈柏霖 / 冯绍峰 / 陈乔恩",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 22060",
    //   "tboxoffice": "￥ 51560"
    // },
    // {
    //   "rid": "3",
    //   "photo": "http://img3.imgtn.bdimg.com/it/u=3165089092,2980680495&fm=26&gp=0.jpg",
    //   "name": "闺蜜",
    //   "actor": "陈意涵 / 薛凯琪 / 杨子姗",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 10650",
    //   "tboxoffice": "￥ 10650"
    // },
    // {
    //   "rid": "4",
    //   "photo": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2045136067,3066926246&fm=26&gp=0.jpg",
    //   "name": "京城81号",
    //   "actor": "吴镇宇 / 林心如 / 杨佑宁",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 6200",
    //   "tboxoffice": "￥ 39400"
    // },
    // {
    //   "rid": "5",
    //   "photo": "http://img1.imgtn.bdimg.com/it/u=2086142897,2562491562&fm=15&gp=0.jpg",
    //   "name": "暴力街区",
    //   "actor": "保罗·沃克",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 4800",
    //   "tboxoffice": "￥ 4800"
    // },
    // {
    //   "rid": "6",
    //   "photo": "http://img2.imgtn.bdimg.com/it/u=3702671893,3508628147&fm=26&gp=0.jpg",
    //   "name": "小时代3：刺金时代",
    //   "actor": "杨幂 / 郭采洁 / 郭碧婷",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 4200",
    //   "tboxoffice": "￥ 51550"
    // },
    // {
    //   "rid": "7",
    //   "photo": "http://img3.imgtn.bdimg.com/it/u=1545848982,1458543093&fm=26&gp=0.jpg",
    //   "name": "龙之谷：破晓奇兵",
    //   "actor": "景甜 / 胡歌 / 夏梓桐 / 徐娇",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 3500",
    //   "tboxoffice": "￥ 3500"
    // },
    // {
    //   "rid": "8",
    //   "photo": "http://img3.imgtn.bdimg.com/it/u=1750719850,1955969471&fm=26&gp=0.jpg",
    //   "name": "神笔马良",
    //   "actor": "孟祥龙 / 洪海天 / 吴文伦",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 2350",
    //   "tboxoffice": "￥ 5330"
    // },
    // {
    //   "rid": "9",
    //   "photo": "http://img5.imgtn.bdimg.com/it/u=2900088461,3793919488&fm=26&gp=0.jpg",
    //   "name": "幻影车神：魔盗激情",
    //   "actor": "阿米尔·汗",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 1010",
    //   "tboxoffice": "￥ 1860"
    // },
    // {
    //   "rid": "10",
    //   "photo": "http://img4.imgtn.bdimg.com/it/u=3771738319,3249601015&fm=26&gp=0.jpg",
    //   "name": "不再说分手",
    //   "actor": "郑伊健 / 王菀之 / 周秀娜",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 660",
    //   "tboxoffice": "￥ 660"
    // },
    // {
    //   "rid": "11",
    //   "photo": "http://img3.imgtn.bdimg.com/it/u=447127193,2972833084&fm=15&gp=0.jpg",
    //   "name": "老男孩猛龙过江",
    //   "actor": "王太利 / 肖央 / 屈菁菁",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 465",
    //   "tboxoffice": "￥ 21020"
    // },
    // {
    //   "rid": "12",
    //   "photo": "http://img1.imgtn.bdimg.com/it/u=2494211568,315555583&fm=26&gp=0.jpg",
    //   "name": "分手大师",
    //   "actor": "邓超 / 杨幂 / 孙俪 / 梁超",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 350",
    //   "tboxoffice": "￥ 66920"
    // },
    // {
    //   "rid": "13",
    //   "photo": "http://img1.imgtn.bdimg.com/it/u=126440459,3435185924&fm=26&gp=0.jpg",
    //   "name": "我想结婚的时候你在",
    //   "actor": "郭品超 / 周秀娜 / 瞿颖",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 250",
    //   "tboxoffice": "￥ 250"
    // },
    // {
    //   "rid": "14",
    //   "photo": "http://img5.imgtn.bdimg.com/it/u=3226489701,3936940446&fm=26&gp=0.jpg",
    //   "name": "开心超人2：启源星之",
    //   "actor": "刘红韵 / 祖晴 / 邓玉婷",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 160",
    //   "tboxoffice": "￥ 2790"
    // },
    // {
    //   "rid": "15",
    //   "photo": "http://img3.imgtn.bdimg.com/it/u=195921652,3228587393&fm=26&gp=0.jpg",
    //   "name": "我就是我",
    //   "actor": "华晨宇 / 欧豪 / 白举纲",
    //   "wk": "(第31周) 07月28日-08月03日",
    //   "wboxoffice": "￥ 155",
    //   "tboxoffice": "￥ 595"
   //}