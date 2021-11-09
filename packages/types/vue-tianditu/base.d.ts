declare namespace VT {
  type LngLat = number[];

  type LngLats = number[][];

  type Bounds = number[][];

  type Point = number[];

  interface IconOptions {
    iconUrl: string;
    iconSize: number[];
    iconAnchor: number[];
  }

  interface MarkerOptions {
    icon?: IconOptions | string;
    draggable?: boolean;
    title?: string;
    zIndexOffset?: number;
    opacity?: number;
  }

  type ControlName = "Zoom" | "Scale" | "Copyright" | "OverviewMap" | "MapType";

  type ControlOptions = T.ControlZoomOptions &
    T.ControlScaleOptions &
    T.ControlCopyrightOptions &
    T.ControlOverviewMapOptions &
    ControlMapTypeOptions & {
      name: ControlName;
    };

  interface ControlMapTypeOptions {
    mapTypes?: {
      /** 地图控件上所要显示的图层名称 */
      title: string;
      /**  地图控件上所要显示的图层图标（默认图标大小80x80） */
      icon: string;
      /** 地图类型对象，即MapType */
      layer:
        | "TMAP_NORMAL_MAP"
        | "TMAP_SATELLITE_MAP"
        | "TMAP_HYBRID_MAP"
        | "TMAP_TERRAIN_MAP"
        | "TMAP_TERRAIN_HYBRID_MAP";
    }[];
  }
}
