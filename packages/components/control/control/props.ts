import type { ExtractPropTypes, PropType } from 'vue'

export const controlNativeProps = {
  /** 控件的停靠位置 */
  position: { type: String as PropType<T.ControlPosition>, default: 'topright' },
}

export const controlExtraProps = {
  /** 设置控件停靠的偏移量 */
  offset: { type: Array as unknown as PropType<VT.Point> },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
}

export const controlNativeEvents = {}

export const controlExtraEvents = {
  init: (e: T.Control) => e instanceof T.Control,
}

export const controlProps = { ...controlNativeProps, ...controlExtraProps }
export const controlEmits = { ...controlNativeEvents, ...controlExtraEvents }
export type ControlProps = ExtractPropTypes<typeof controlProps>
export type ControlEmits = typeof controlEmits
