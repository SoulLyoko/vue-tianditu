import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

import { polylineNativeProps, polylineExtraProps } from '../polyline/props'

export const polygonNativeProps = {
  ...polylineNativeProps,
  /** 多边形填充颜色 */
  fillColor: { type: String, default: '#0000ff' },
  /** 多边形填充的透明度（范围0-1 之间） */
  fillOpacity: { type: Number, default: 0.2 },
}

export const polygonExtraProps = {
  ...polylineExtraProps,
  /** 坐标数组，支持带孔多边形 */
  path: { type: Array as unknown as PropType<VT.LngLats | VT.LngLatsArray>, default: () => [] },
}
export const polygonNativeEvents: T.PolygonEvents = {
  click: noop,
  dblclick: noop,
  mousedown: noop,
  mouseup: noop,
  mouseout: noop,
  mouseover: noop,
  remove: noop,
  edit: noop,
}
export const polygonExtraEvents = {
  init: (e: T.Polygon) => e instanceof T.Polygon,
  'update:path': (e: VT.LngLats | VT.LngLatsArray) => Array.isArray(e),
}

export const polygonProps = { ...polygonNativeProps, ...polygonExtraProps }
export const polygonEmits = { ...polygonNativeEvents, ...polygonExtraEvents }
export type PolygonProps = ExtractPropTypes<typeof polygonProps>
export type PolygonEmits = typeof polygonEmits
