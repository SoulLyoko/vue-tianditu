import type { ExtractPropTypes, PropType } from 'vue'

import { controlExtraProps } from '../control/props'

export const controlScaleNativeProps = {
  /** 控件的停靠位置 */
  position: { type: String as PropType<T.ControlPosition>, default: 'bottomleft' },
}

export const controlScaleExtraProps = {
  ...controlExtraProps,
  color: { type: String },
}

export const controlScaleNativeEvents = {}

export const controlScaleExtraEvents = {
  init: (e: T.Control.Scale) => e instanceof T.Control.Scale,
}

export const controlScaleProps = { ...controlScaleNativeProps, ...controlScaleExtraProps }
export const controlScaleEmits = { ...controlScaleNativeEvents, ...controlScaleExtraEvents }
export type ControlScaleProps = ExtractPropTypes<typeof controlScaleProps>
export type ControlScaleEmits = typeof controlScaleEmits
