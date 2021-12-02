import "./base";
import "./control";
import "./extra";
import "./map";
import "./mousetool";
import "./overlay";
import "./service";
import "./layer";

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
