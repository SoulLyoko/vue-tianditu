module.exports = {
  base: "/vue-tianditu/v2",
  lang: "zh-CN",
  title: "VueTianditu",
  description: "Vue3 Components for TiandituApi",
  themeConfig: {
    repo: "SoulLyoko/vue-tianditu",
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
          children: [{ text: "基础地图", link: "/map/map" }]
        },
        { text: "控件", link: "/control/control" }
      ]
    }
  }
};
