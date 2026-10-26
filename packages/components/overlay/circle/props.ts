import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

import { polygonNativeProps } from '../polygon/props'

export const circleNativeProps = { ...polygonNativeProps }
export const circleExtraProps = {
  /** 启用/禁用编辑功能 */
  edit: { type: Boolean, default: false },
  /** 圆的中心点 */
  center: { type: Array as PropType<VT.LngLat>, default: () => [0, 0] },
  /** 圆的半径 */
  radius: { type: Number, default: 0 },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> },
}

export const circleNativeEvents: T.CircleEvents = {
  click: noop,
  dblclick: noop,
  mousedown: noop,
  mouseup: noop,
  mouseout: noop,
  mouseover: noop,
  remove: noop,
  edit: noop,
}
export const circleExtraEvents = {
  init: (e: T.Circle) => e instanceof T.Circle,
  'update:center': (e: VT.LngLat) => Array.isArray(e),
  'update:radius': (e: number) => typeof e === 'number',
}

export const circleProps = { ...circleNativeProps, ...circleExtraProps }
export const circleEmits = { ...circleNativeEvents, ...circleExtraEvents }
export type CircleProps = ExtractPropTypes<typeof circleProps>
export type CircleEmits = typeof circleEmits
