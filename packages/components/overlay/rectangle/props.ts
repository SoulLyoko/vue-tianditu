import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

import { polygonNativeProps } from '../polygon/props'

export const rectangleNativeProps = { ...polygonNativeProps }
export const rectangleExtraProps = {
  /** 启用/禁用编辑功能 */
  edit: { type: Boolean, default: false },
  /** 矩形地理范围 */
  bounds: { type: Array as unknown as PropType<VT.Bounds>, default: () => [] },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> },
}

export const rectangleNativeEvents: T.RectangleEvents = {
  click: noop,
  dblclick: noop,
  mousedown: noop,
  mouseup: noop,
  mouseout: noop,
  mouseover: noop,
  remove: noop,
  edit: noop,
}
export const rectangleExtraEvents = {
  init: (e: T.Rectangle) => e instanceof T.Rectangle,
  'update:bounds': (e: VT.Bounds) => Array.isArray(e),
}

export const rectangleProps = { ...rectangleNativeProps, ...rectangleExtraProps }
export const rectangleEmits = { ...rectangleNativeEvents, ...rectangleExtraEvents }
export type RectangleProps = ExtractPropTypes<typeof rectangleProps>
export type RectangleEmits = typeof rectangleEmits
