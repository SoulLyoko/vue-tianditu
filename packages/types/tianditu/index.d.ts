import './base.d'
import './event.d'
import './map.d'
import './control/index.d'
import './extra/index.d'
import './mousetool/index.d'
import './overlay/index.d'
import './service/index.d'
import './layer/index.d'

declare global {
  interface Window {
    T: typeof T
    TMAP_AUTHKEY: string
    TMAP_HYBRID_MAP: T.MapType
    TMAP_NORMAL_MAP: T.MapType
    TMAP_SATELLITE_MAP: T.MapType
    TMAP_TERRAIN_MAP: T.MapType
    TMAP_TERRAIN_HYBRID_MAP: T.MapType
    T_ANCHOR_BOTTOM_LEFT: 'bottomleft'
    T_ANCHOR_BOTTOM_RIGHT: 'bottomright'
    T_ANCHOR_TOP_LEFT: 'topleft'
    T_ANCHOR_TOP_RIGHT: 'topright'
  }
}
