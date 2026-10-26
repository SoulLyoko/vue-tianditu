import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

import type { MarkerProps } from '../marker/props'

export const markerClustererNativeProps = {
  /** 要聚合的标注点数组 */
  markers: { type: Array as PropType<MarkerProps[]> },
  /** 聚合计算时网格的像素大小，默认60 */
  girdSize: { type: Number },
  /** 最大的聚合级别 */
  maxZoom: { type: Number },
  /** 自定义聚合后的图标风格 */
  styles: { type: Array as PropType<VT.MarkerClustererStyle[]> },
}

export const markerClustererExtraProps = {}
export const markerClustererNativeEvents: T.MarkerClustererEvents = {
  click: noop,
  clusterclick: noop,
  dblclick: noop,
  mousedown: noop,
  mouseup: noop,
  mouseout: noop,
  mouseover: noop,
  dragstart: noop,
  drag: noop,
  dragend: noop,
  remove: noop,
}

export const markerClustererExtraEvents = {
  init: (e: T.MarkerClusterer) => e instanceof T.MarkerClusterer,
}

export const markerClustererProps = {
  ...markerClustererNativeProps,
  ...markerClustererExtraProps,
}
export const markerClustererEmits = {
  ...markerClustererNativeEvents,
  ...markerClustererExtraEvents,
}
export type MarkerClustererProps = ExtractPropTypes<typeof markerClustererProps>
export type MarkerClustererEmits = typeof markerClustererEmits
