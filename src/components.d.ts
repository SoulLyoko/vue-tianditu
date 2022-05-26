declare module "vue" {
  export interface GlobalComponents {
    TdtCarTrack: typeof import("vue-tianditu")["TdtCarTrack"];
    TdtCircle: typeof import("vue-tianditu")["TdtCircle"];
    TdtCloudMarkerCollection: typeof import("vue-tianditu")["TdtCloudMarkerCollection"];
    TdtControl: typeof import("vue-tianditu")["TdtControl"];
    TdtGridlineLayer: typeof import("vue-tianditu")["TdtGridlineLayer"];
    TdtInfowindow: typeof import("vue-tianditu")["TdtInfowindow"];
    TdtLabel: typeof import("vue-tianditu")["TdtLabel"];
    TdtMap: typeof import("vue-tianditu")["TdtMap"];
    TdtMarker: typeof import("vue-tianditu")["TdtMarker"];
    TdtMarkerClusterer: typeof import("vue-tianditu")["TdtMarkerClusterer"];
    TdtMousetool: typeof import("vue-tianditu")["TdtMousetool"];
    TdtPolygon: typeof import("vue-tianditu")["TdtPolygon"];
    TdtPolyline: typeof import("vue-tianditu")["TdtPolyline"];
    TdtRectangle: typeof import("vue-tianditu")["TdtRectangle"];
    TdtRoute: typeof import("vue-tianditu")["TdtRoute"];
    TdtSearch: typeof import("vue-tianditu")["TdtSearch"];
    TdtTilelayer: typeof import("vue-tianditu")["TdtTilelayer"];
    TdtTilelayerTdt: typeof import("vue-tianditu")["TdtTilelayerTdt"];
    TdtTilelayerWms: typeof import("vue-tianditu")["TdtTilelayerWms"];
  }
}

export {};
