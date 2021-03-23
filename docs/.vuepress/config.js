module.exports = {
  base: "/",
  title: "vue-tianditu文档",
  description: "vue-tianditu文档",
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "开始",
        path: "/",
        collapsable: false
      },
      {
        title: "地图",
        sidebarDepth: 0,
        collapsable: false,
        children: ["/map/map"]
      },
      {
        title: "图层",
        sidebarDepth: 0,
        collapsable: false,
        children: ["/tilelayer/tilelayer"]
      },
      {
        title: "控件",
        path: "/control/control",
        collapsable: false
      },
      {
        title: "覆盖物",
        sidebarDepth: 0,
        collapsable: false,
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
        title: "工具",
        path: "/mousetool/mousetool",
        collapsable: false
      },
      {
        title: "组件",
        sidebarDepth: 0,
        collapsable: false,
        children: ["/component/search", "/component/cartrack"]
      }
    ]
  }
};
