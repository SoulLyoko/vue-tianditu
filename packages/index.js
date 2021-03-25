import { initApiLoader } from "./utils/api-loader-instance";

const files = require.context("./components", true, /\.vue$/);
const components = files.keys().map(key => files(key).default);

const install = function(Vue, options = {}, isWindow = false) {
  if (install.installed) return;
  if (!isWindow) initApiLoader(options);
  components.forEach(_component => {
    Vue.component(_component.name, _component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  window.VueTianditu = { initApiLoader };
  install(window.Vue, {}, true);
}

export default { install };
