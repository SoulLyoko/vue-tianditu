// const files = require.context("./components", true, /\.vue$/);
// const components = files.keys().map(key => files(key).default);
import { initApiLoader } from "./utils/api-loader-instance";
import { toLngLat, toBounds, toPoint, toIcon } from "./utils/converter";
import TdtCartrack from "./components/tdt-cartrack.vue";
import TdtCircle from "./components/tdt-circle.vue";
import TdtControl from "./components/tdt-control.vue";
import TdtInfowindow from "./components/tdt-infowindow.vue";
import TdtLabel from "./components/tdt-label.vue";
import TdtMap from "./components/tdt-map.vue";
import TdtMarkerCluster from "./components/tdt-marker-cluster.vue";
import TdtMarker from "./components/tdt-marker.vue";
import TdtMousetool from "./components/tdt-mousetool.vue";
import TdtPolyon from "./components/tdt-polygon.vue";
import TdtPolyline from "./components/tdt-polyline.vue";
import TdtRectangle from "./components/tdt-rectangle.vue";
import TdtSearch from "./components/tdt-search";
import TdtTilelayerTdt from "./components/tdt-tilelayer-tdt";
import TdtTilelayerWms from "./components/tdt-tilelayer-wms";
import TdtTilelayer from "./components/tdt-tilelayer";

const components = [
  TdtCartrack,
  TdtCircle,
  TdtControl,
  TdtInfowindow,
  TdtLabel,
  TdtMap,
  TdtMarkerCluster,
  TdtMarker,
  TdtMousetool,
  TdtPolyon,
  TdtPolyline,
  TdtRectangle,
  TdtSearch,
  TdtTilelayerTdt,
  TdtTilelayerWms,
  TdtTilelayer
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

export {
  initApiLoader,
  toLngLat,
  toBounds,
  toPoint,
  toIcon,
  TdtCartrack,
  TdtCircle,
  TdtControl,
  TdtInfowindow,
  TdtLabel,
  TdtMap,
  TdtMarkerCluster,
  TdtMarker,
  TdtMousetool,
  TdtPolyon,
  TdtPolyline,
  TdtRectangle,
  TdtSearch,
  TdtTilelayerTdt,
  TdtTilelayerWms,
  TdtTilelayer
};
