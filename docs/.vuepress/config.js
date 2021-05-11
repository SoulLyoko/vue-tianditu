module.exports = {
  base: "/vue-tianditu/",
  title: "vue-tianditu文档",
  description: "vue-tianditu文档",
  themeConfig: {
    repo: "SoulLyoko/vue-tianditu",
    displayAllHeaders: true,
    nav: [{ text: "天地图官网", link: "https://www.tianditu.gov.cn/" }],
    sidebar: [
      {
        title: "更新日志",
        path: "/log/log"
      },
      {
        title: "开始",
        path: "/"
      },
      {
        title: "地图",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/map/map"]
      },
      {
        title: "图层",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/tilelayer/tilelayer", "/tilelayer/tilelayer-tdt", "/tilelayer/tilelayer-wms"]
      },
      {
        title: "控件",
        path: "/control/control"
      },
      {
        title: "覆盖物",
        collapsable: false,
        sidebarDepth: 0,
        children: [
          "/overlay/label",
          "/overlay/marker",
          "/overlay/infowindow",
          "/overlay/polyline",
          "/overlay/polygon",
          "/overlay/rectangle",
          "/overlay/circle"
        ]
      },
      {
        title: "地图工具",
        path: "/mousetool/mousetool"
      },
      {
        title: "组件",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/component/search", "/component/cartrack", "component/marker-cluster"]
      }
    ]
  }
};
