import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

export const markerNativeProps = {
  /** 图标类用来表达注记 */
  icon: { type: [String, Object] as PropType<VT.IconOptions | string> },
  /** 决定注记是否可被鼠标或触摸拖动 */
  draggable: { type: Boolean, default: false },
  /** 标注的提示文本 */
  title: { type: String, default: '' },
  /** 设置z-index */
  zIndexOffset: { type: Number, default: 0 },
  /** 设置标注透明度 */
  opacity: { type: Number, default: 1 },
}

export const markerExtraProps = {
  /** 经纬度 */
  position: { type: Array as unknown as PropType<VT.LngLat>, default: () => [0, 0] },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> },
}

export const markerNativeEvents: T.MakerEvents = {
  click: noop,
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

export const markerExtraEvents = {
  init: (e: T.Marker) => e instanceof T.Marker,
  'update:position': (e: VT.LngLat) => Array.isArray(e),
}

export const markerProps = { ...markerNativeProps, ...markerExtraProps }
export const markerEmits = { ...markerNativeEvents, ...markerExtraEvents }
export type MarkerProps = ExtractPropTypes<typeof markerProps>
export type MarkerEmits = typeof markerEmits
