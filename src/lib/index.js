import { initApiLoader } from "./utils/api-loader-instance";

import TdtMap from "./components/tdt-map.vue";
import TdtTilelayer from "./components/tdt-tilelayer.vue";
import TdtLabel from "./components/tdt-label.vue";
import TdtMarker from "./components/tdt-marker.vue";
import TdtInfowindow from "./components/tdt-infowindow.vue";
import TdtPolyline from "./components/tdt-polyline.vue";
import TdtPolygon from "./components/tdt-polygon.vue";
import TdtRectangle from "./components/tdt-rectangle.vue";
import TdtCircle from "./components/tdt-circle.vue";
import TdtMousetool from "./components/tdt-mousetool.vue";
import TdtSearch from "./components/tdt-search.vue";
import TdtCartrack from "./components/tdt-cartrack.vue";

const components = [
  TdtMap,
  TdtTilelayer,
  TdtLabel,
  TdtMarker,
  TdtInfowindow,
  TdtPolyline,
  TdtPolygon,
  TdtRectangle,
  TdtCircle,
  TdtMousetool,
  TdtSearch,
  TdtCartrack
];

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
