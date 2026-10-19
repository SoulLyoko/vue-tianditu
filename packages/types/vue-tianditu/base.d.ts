declare namespace VT {
  type LngLat = number[]

  type LngLats = number[][]

  type LngLatsArray = number[][][]

  type Bounds = number[][]

  type Point = number[]

  interface IconOptions extends Omit<T.IconOptions, 'iconSize' | 'iconAnchor'> {
    iconSize?: Point
    iconAnchor?: Point
  }

  interface MarkerOptions extends Omit<T.MarkerOptions, 'icon'> {
    icon?: IconOptions | string
  }

  type ControlName = 'Zoom' | 'Scale' | 'Copyright' | 'OverviewMap' | 'MapType'

  type ControlOptions = T.Control.ZoomOptions &
    T.Control.ScaleOptions &
    ControlCopyrightOptions &
    T.Control.OverviewMapOptions &
    ControlMapTypeOptions & {
      name: ControlName
    }

  interface ControlMapTypeOptions {
    mapTypes?: {
      title: string
      icon: string
      layer:
        | 'TMAP_NORMAL_MAP'
        | 'TMAP_SATELLITE_MAP'
        | 'TMAP_HYBRID_MAP'
        | 'TMAP_TERRAIN_MAP'
        | 'TMAP_TERRAIN_HYBRID_MAP'
    }[]
  }

  interface ControlCopyrightOptions extends Omit<T.Control.CopyrightOptions, 'bounds'> {
    bounds?: Bounds
  }

  interface MarkerClustererStyle extends Omit<T.MarkerClustererStyle, 'offset'> {
    offset?: Point
  }

  type PassOneNode = (lnglat: LngLat, index: number, length: number) => void
}
