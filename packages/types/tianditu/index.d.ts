import "./base.d";
import "./control/index.d";
import "./extra/index.d";
import "./map.d";
import "./mousetool/index.d";
import "./overlay/index.d";
import "./service/index.d";
import "./layer/index.d";

declare global {
  interface Window {
    T: typeof T;
    TMAP_NORMAL_MAP: T.MapType;
    TMAP_SATELLITE_MAP: T.MapType;
    TMAP_HYBRID_MAP: T.MapType;
    TMAP_TERRAIN_MAP: T.MapType;
    TMAP_TERRAIN_HYBRID_MAP: T.MapType;
  }
}
