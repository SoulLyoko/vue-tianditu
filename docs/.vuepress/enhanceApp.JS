/**
 * 扩展 VuePress 应用
 */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueTianditu from "../../packages";
console.log("🚀 ~ file: enhanceApp.JS ~ line 7 ~ VueTianditu", VueTianditu);

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(ElementUI);
  // if (process.env.NODE_ENV === "development") {
  //   import("../../packages").then(VueTianditu => {
  //     console.log("🚀 ~ file: enhanceApp.JS ~ line 18 ~ import ~ VueTianditu", VueTianditu);
  //     Vue.use(VueTianditu.default, {
  //       v: "4.0",
  //       tk: "7f013d0186775b063d6a046977bbefc6",
  //       plugins: ["CarTrack"]
  //     });
  //   });
  // } else {
  //   import("../../packages").then(VueTianditu => {
  //     console.log("🚀 ~ file: enhanceApp.JS ~ line 27 ~ import ~ VueTianditu", VueTianditu);
  //     Vue.use(VueTianditu.default, {
  //       v: "4.0",
  //       tk: "7f013d0186775b063d6a046977bbefc6",
  //       plugins: ["CarTrack"]
  //     });
  //   });
  // }
  Vue.use(VueTianditu, {
    v: "4.0",
    tk: "7f013d0186775b063d6a046977bbefc6",
    plugins: ["CarTrack"]
  });
};
