import { defineConfig } from "vitepress";
import { mdDemoTransform } from "./plugins/md-demo-transform";
import pkg from "../../package.json";
import { alias } from "../../vite.config";

const Guide = [
  {
    text: "开始",
    items: [
      { text: "快速开始", link: "/guide/start" },
      { text: "更新日志", link: "/guide/changelog" }
    ]
  }
];

const Components = [
  {
    text: "地图",
    items: [
      { text: "基础地图", link: "/components/map/index" },
      { text: "地图控件", link: "/components/control/index" },
      { text: "鼠标工具", link: "/components/mousetool/index" }
    ]
  },
  {
    text: "图层",
    items: [
      { text: "自定义图层", link: "/components/tilelayer/index" },
      { text: "天地图矢量图层", link: "/components/tilelayer-tdt/index" }
    ]
  }
];

export default defineConfig({
  base: `/${pkg.name}/`,
  title: pkg.upperName,
  description: pkg.description,
  lang: "zh-CN",
  themeConfig: {
    socialLinks: [{ icon: "github", link: pkg.homepage }],
    nav: [
      { text: "开始", link: Guide[0].items[0].link },
      { text: "组件", link: Components[0].items[0].link }
    ],
    sidebar: {
      "/guide": Guide,
      "/components": Components
    }
  },
  vite: {
    plugins: [mdDemoTransform()],
    resolve: {
      alias
    }
  }
});
