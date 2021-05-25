import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// import VueTianditu from "../packages";
// Vue.use(VueTianditu, {
//   v: "4.0",
//   tk: "7f013d0186775b063d6a046977bbefc6",
//   plugins: ["CarTrack"]
// });

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
