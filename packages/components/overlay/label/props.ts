import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

export const labelNativeProps = {
  /** 文本标注的内容 */
  text: { type: String, default: '' },
  /** 文本标注的位置偏移值 */
  offset: { type: Array as unknown as PropType<VT.Point>, default: () => [0, 0] },
  /** 文本标注的地理位置 */
  position: { type: Array as unknown as PropType<VT.LngLat>, default: () => [0, 0] },
}

export const labelExtraProps = {
  /** 设置文本的提示内容 */
  title: { type: String },
  /** 设置z-index */
  zIndex: { type: Number },
  /** 设置文本的字体大小 */
  fontSize: { type: Number },
  /** 设置文本的字体颜色 */
  fontColor: { type: String },
  /** 设置文本的背景色 */
  backgroundColor: { type: String },
  /** 设置文本的边框线宽 */
  borderLine: { type: Number },
  /** 设置文本的边框颜色 */
  borderColor: { type: String },
  /** 设置文本的透明度 */
  opacity: { type: Number },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> },
}

export const labelNativeEvents: T.LabelEvents = {
  click: noop,
  dblclick: noop,
  mousedown: noop,
  mouseup: noop,
  mouseout: noop,
  mouseover: noop,
  remove: noop,
}

export const labelExtraEvents = {
  init: (e: T.Label) => e instanceof T.Label,
}

export const labelProps = { ...labelNativeProps, ...labelExtraProps }
export const labelEmits = { ...labelNativeEvents, ...labelExtraEvents }
export type LabelProps = ExtractPropTypes<typeof labelProps>
export type LabelEmits = typeof labelEmits
