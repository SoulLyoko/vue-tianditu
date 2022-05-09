module.exports = {
  base: "/vue-tianditu/",
  lang: "zh-CN",
  title: "VueTianditu",
  description: "Vue Components for TiandituApi",
  vite: {
    define: {
      HTMLElement: "Object"
    }
  },
  themeConfig: {
    repo: "SoulLyoko/vue-tianditu/",
    nav: [
      {
        text: "v2.x",
        items: [{ text: "v1.x", link: "https://soullyoko.github.io/vue-tianditu-legacy/" }]
      },
      { text: "天地图官网", link: "https://www.tianditu.gov.cn/" }
    ],
    sidebar: {
      "/": [
        { text: "更新日志", link: "/CHANGELOG" },
        { text: "开始", link: "/" },
        {
          text: "地图",
          children: [
            { text: "基础地图", link: "/map/map" },
            { text: "控件", link: "/map/control" },
            { text: "地图工具", link: "/mousetool/mousetool" }
          ]
        },
        {
          text: "图层",
          children: [
            { text: "自定义图层", link: "/tilelayer/tilelayer" },
            { text: "天地图矢量图层", link: "/tilelayer/tilelayer-tdt" },
            { text: "WMS服务图层", link: "/tilelayer/tilelayer-wms" },
            { text: "网格图层", link: "/tilelayer/gridline-layer" }
          ]
        },
        {
          text: "覆盖物",
          children: [
            { text: "文本标注", link: "/overlay/label" },
            { text: "点标注", link: "/overlay/marker" },
            { text: "信息窗口", link: "/overlay/infowindow" },
            { text: "折线", link: "/overlay/polyline" },
            { text: "多边形", link: "/overlay/polygon" },
            { text: "矩形", link: "/overlay/rectangle" },
            { text: "圆形", link: "/overlay/circle" },
            { text: "点聚合", link: "/overlay/marker-clusterer" },
            { text: "海量密集点", link: "/overlay/cloud-marker-collection" }
          ]
        },
        {
          text: "服务",
          children: [
            { text: "搜索", link: "/service/search" },
            { text: "导航", link: "/service/route" }
          ]
        },
        {
          text: "扩展",
          children: [{ text: "车辆轨迹", link: "/extra/car-track" }]
        }
      ]
    }
  }
};
