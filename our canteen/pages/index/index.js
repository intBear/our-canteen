//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: ['a52a365d44adee42e9c62932541d60c5.jpeg',
    '418dc074a7755ca32a24200a0620914d.jpg',
    '0cb4af33c575e49105fe9a6b8dc747de.jpeg'
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'今日菜单',
        url:'dishes'
      },
      {
        name:'排队人数',
        url:'take',
        isSplot:true
      },
      {
        name:'问题反馈',
        url:'submit'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
