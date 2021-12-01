declare namespace VT {
  type LngLat = number[];

  type LngLats = number[][];

  type Bounds = number[][];

  type Point = number[];

  interface IconOptions extends T.IconOptions {
    iconSize?: Point;
    iconAnchor?: Point;
  }

  interface MarkerOptions extends T.MarkerOptions {
    icon?: IconOptions | string;
  }

  type ControlName = "Zoom" | "Scale" | "Copyright" | "OverviewMap" | "MapType";

  type ControlOptions = T.ControlZoomOptions &
    T.ControlScaleOptions &
    T.ControlCopyrightOptions &
    T.ControlOverviewMapOptions &
    ControlMapTypeOptions & {
      name: ControlName;
    };

  interface ControlMapTypeOptions extends T.ControlMapTypeOptions {
    mapTypes?: {
      title: string;
      icon: string;
      layer:
        | "TMAP_NORMAL_MAP"
        | "TMAP_SATELLITE_MAP"
        | "TMAP_HYBRID_MAP"
        | "TMAP_TERRAIN_MAP"
        | "TMAP_TERRAIN_HYBRID_MAP";
    }[];
  }

  interface MarkerClustererStyle extends T.MarkerClustererStyle {
    offset?: Point;
  }

  type PassOneNode = (lnglat: LngLat, index: number, length: number) => void;
}
