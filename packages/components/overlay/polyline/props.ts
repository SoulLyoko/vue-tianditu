import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

export const polylineNativeProps = {
  /** 折线颜色 */
  color: { type: String, default: '#0000ff' },
  /** 折线的宽度，以像素为单位 */
  weight: { type: Number, default: 3 },
  /** 折线的透明度（范围0-1 之间） */
  opacity: { type: Number, default: 0.5 },
  /** 折线的样式（solid或dashed） */
  lineStyle: { type: String as PropType<'solid' | 'dashed'>, default: 'solid' },
}

export const polylineExtraProps = {
  /** 启用/禁用编辑功能 */
  edit: { type: Boolean, default: false },
  /** 坐标数组 */
  path: { type: Array as unknown as PropType<VT.LngLat[]>, default: () => [] },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> },
}

export const polylineNativeEvents: T.PolylineEvents = {
  click: noop,
  dblclick: noop,
  mousedown: noop,
  mouseup: noop,
  mouseout: noop,
  mouseover: noop,
  remove: noop,
  edit: noop,
}

export const polylineExtraEvents = {
  init: (e: T.Polyline) => e instanceof T.Polyline,
  'update:path': (e: VT.LngLat[]) => Array.isArray(e),
}

export const polylineProps = { ...polylineNativeProps, ...polylineExtraProps }
export const polylineEmits = { ...polylineNativeEvents, ...polylineExtraEvents }
export type PolylineProps = ExtractPropTypes<typeof polylineProps>
export type PolylineEmits = typeof polylineEmits
