/**
 * 经纬度数组转换为经纬度对象
 */
export const toLngLat = (lnglatArray: VT.LngLat) => {
  const [lng, lat] = lnglatArray
  return new T.LngLat(lng, lat)
}
/**
 * 经纬度对象转换为经纬度数组
 */
export const fromLngLat = (lnglatObject: T.LngLat) => {
  const { lng, lat } = lnglatObject
  return [lng, lat] as VT.LngLat
}

export function isLngLat(value: any): value is VT.LngLat {
  return Array.isArray(value) && value.length === 2 && value.every((e) => typeof e === 'number')
}

export function isLngLats(value: any): value is VT.LngLats {
  return Array.isArray(value) && value.every(isLngLat)
}

export function isLngLatsArray(value: any): value is VT.LngLatsArray {
  return Array.isArray(value) && value.every(isLngLats)
}

/**
 * 经纬度数组转换为经纬度对象数组
 */
export function toLngLats<T extends VT.LngLats | VT.LngLatsArray>(
  value: T,
): T extends VT.LngLatsArray ? T.LngLat[][] : T extends VT.LngLats ? T.LngLat[] : T {
  return value.map((lnglat) => {
    if (isLngLats(lnglat)) {
      return toLngLats(lnglat)
    } else if (isLngLat(lnglat)) {
      return toLngLat(lnglat)
    } else {
      return value
    }
  }) as any
}
/**
 * 经纬度对象数组转换为经纬度数组
 */
export function fromLngLats<T extends T.LngLat[] | T.LngLat[][]>(
  value: T,
): T extends T.LngLat[] ? VT.LngLats : VT.LngLats[] {
  return value.map((lnglat) => {
    if (Array.isArray(lnglat)) {
      return fromLngLats(lnglat)
    } else {
      return fromLngLat(lnglat)
    }
  }) as any
}

/**
 * 地理范围数组转换为地理范围对象
 */
export const toBounds = (boundsArray: VT.Bounds) => {
  const [[lng1, lat1], [lng2, lat2]] = boundsArray
  return new T.LngLatBounds(new T.LngLat(lng1, lat1), new T.LngLat(lng2, lat2))
}
/**
 * 地理范围对象转换为地理范围数组
 */
export const fromBounds = (boundsObject: T.LngLatBounds) => {
  const sw = boundsObject.getSouthWest()
  const ne = boundsObject.getNorthEast()
  return [fromLngLat(sw), fromLngLat(ne)] as VT.Bounds
}

/**
 * 像素坐标点数组转换为像素坐标点对象
 */
export const toPoint = (pointArray: VT.Point) => {
  const [x, y] = pointArray
  return new T.Point(x, y)
}
/**
 * 像素坐标点对象转换为像素坐标点数组
 */
export const fromPoint = (pointObject: Pick<T.Point, 'x' | 'y'>) => {
  const { x, y } = pointObject
  return [x, y] as VT.Point
}

/**
 * 过滤掉对象中undefined的属性
 * @param obj 对象
 */
export const objectFilter = (obj: Record<string, any>) => {
  const res: Record<string, any> = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      res[key] = obj[key]
    }
  })
  return res
}

/**
 * 转换为图标对象
 * @param icon 图标配置或者图片地址
 */
export const toIcon = (icon: VT.IconOptions | string) => {
  if (typeof icon === 'string') {
    return new T.Icon({ iconUrl: icon })
  } else {
    const { iconUrl, iconSize, iconAnchor } = icon
    const iconOption = {
      iconUrl,
      iconSize: iconSize && toPoint(iconSize),
      iconAnchor: iconAnchor && toPoint(iconAnchor),
    }
    return new T.Icon(objectFilter(iconOption))
  }
}

export interface ToMarkerOptions extends Omit<T.MarkerOptions, 'icon'> {
  position: VT.LngLat
  icon?: VT.IconOptions | string
  extData?: unknown
}

export const toMarker = (option: ToMarkerOptions) => {
  const { position, icon, extData, ...markerOptions } = option
  const marker = new T.Marker(toLngLat(position), markerOptions)
  if (icon) marker.setIcon(toIcon(icon))
  // Tianditu exposes extData as an open-ended instance property.
  ;(marker as T.Marker & { extData?: unknown }).extData = extData
  return marker
}
