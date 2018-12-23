/*onenet上分别有三条数据，一个touch触摸记录当前学生号数，另一个记录阿姨提醒学生取餐次数，第三个数据--
排队人数则为（学生号数-阿姨叫学生的次数）*/
Page({

  data: {
    post: [],
    now:[],
    que:[]
  },
  refresh: function () {
    var that = this;

    console.log('request start');
    wx.request({
      url: 'https://api.heclouds.com/devices/509111502/datapoints?datastream_id=num&limit=1',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'api-key': '6YZW6i6pTPuurKgThJ=gJGI6f48='
      },
      success: (res) => {

        console.log(res);

        var convert = [];
        var length = res.data.data.datastreams[0].datapoints.length;

        for (var i = 0; i < length; i++) {
          convert.push(res.data.data.datastreams[0].datapoints[i].value);
        };

        this.setData({
          post: convert

        });



      },
    });
    //三次数据请求
    wx.request({
      url: 'https://api.heclouds.com/devices/509111502/datapoints?datastream_id=NUM&limit=1',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'api-key': '6YZW6i6pTPuurKgThJ=gJGI6f48='
      },
      success: (res) => {

        console.log(res);

        var convert = [];
        var length = res.data.data.datastreams[0].datapoints.length;

        for (var i = 0; i < length; i++) {
          convert.push(res.data.data.datastreams[0].datapoints[i].value);
        };

        this.setData({
          now: convert

        });



      },
    });
    wx.request({
      url: 'https://api.heclouds.com/devices/509111502/datapoints?datastream_id=cha&limit=1',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'api-key': '6YZW6i6pTPuurKgThJ=gJGI6f48='
      },
      success: (res) => {

        console.log(res);

        var convert = [];
        var length = res.data.data.datastreams[0].datapoints.length;

        for (var i = 0; i < length; i++) {
          convert.push(res.data.data.datastreams[0].datapoints[i].value);
        };

        this.setData({
          que: convert

        });



      },
    });
  },
  //实现刷新功能
  onLoad: function (options) {
    setInterval(
      () => this.refresh(),
      1000
    )
    var that = this;
    console.log('request start');
    wx.request({
      url: 'https://api.heclouds.com/devices/509111502/datapoints?datastream_id=NUM&limit=1',
      url: 'https://api.heclouds.com/devices/509111502/datapoints?datastream_id=num&limit=1',
      url: 'https://api.heclouds.com/devices/509111502/datapoints?datastream_id=cha&limit=1',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'api-key': '6YZW6i6pTPuurKgThJ=gJGI6f48='
      },
      success: (res) => {

        console.log(res);

        var convert = [];
        var length = res.data.data.datastreams[0].datapoints.length;

        for (var i = 0; i < length; i++) {
          convert.push(res.data.data.datastreams[0].datapoints[i].value);
        };



        var Convert = [];
        var length = res.data.data.datastreams[0].datapoints.length;

        for (var i = 0; i < length; i++) {
          Convert.push(res.data.data.datastreams[0].datapoints[i].value);
        };

        this.setData({
          post: convert,
          now: Convert

        });


      },
    });
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
 
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

  },
})
