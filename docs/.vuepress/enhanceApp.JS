/**
 * 扩展 VuePress 应用
 */
// import VueTianditu from "../../src/lib";
import VueTianditu from "vue-tianditu";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueTianditu, {
    v: "4.0",
    tk: "7f013d0186775b063d6a046977bbefc6"
  });
};
