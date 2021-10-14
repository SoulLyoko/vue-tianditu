module.exports = {
  base: "/vue-tianditu/v2",
  lang: "zh-CN",
  title: "VueTianditu",
  description: "Vue3 Components for TiandituApi",
  themeConfig: {
    repo: "SoulLyoko/vue-tianditu/tree/v2",
    nav: [
      {
        text: "v2.x",
        items: [{ text: "v1.x", link: "https://soullyoko.github.io/vue-tianditu/v1" }]
      }
    ],
    sidebar: {
      "/": [
        { text: "更新日志", link: "/CHANGELOG" },
        { text: "开始", link: "/" },
        {
          text: "地图",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            { text: "基础地图", link: "/map/map" },
            { text: "控件", link: "/map/control" }
          ]
        },
        {
          text: "图层",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            { text: "自定义图层", link: "/tilelayer/tilelayer" },
            { text: "天地图矢量图层", link: "/tilelayer/tilelayer-tdt" },
            { text: "WMS服务图层", link: "/tilelayer/tilelayer-wms" }
          ]
        },
        {
          text: "覆盖物",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            { text: "文本标注", link: "/overlay/label" },
            { text: "点标注", link: "/overlay/marker" },
            { text: "信息窗口", link: "/overlay/infowindow" },
            { text: "折线", link: "/overlay/polyline" },
            { text: "多边形", link: "/overlay/polygon" },
            { text: "矩形", link: "/overlay/rectangle" },
            { text: "圆形", link: "/overlay/circle" }
          ]
        }
      ]
    }
  }
};
