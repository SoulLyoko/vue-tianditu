import type { ExtractPropTypes, PropType } from 'vue'

import { controlExtraProps } from '../control/props'

export const controlMapTypeNativeProps = {
  /** 控件的停靠位置 */
  position: { type: String as PropType<T.ControlPosition>, default: 'topright' },
  mapTypes: { type: Array as PropType<T.Control.MapTypes | VT.ControlMapTypeOptions['mapTypes']> },
}

export const controlMapTypeExtraProps = { ...controlExtraProps }
export const controlMapTypeNativeEvents = {}
export const controlMapTypeExtraEvents = {
  init: (e: T.Control.MapType) => e instanceof T.Control.MapType,
}

export const controlMapTypeProps = { ...controlMapTypeNativeProps, ...controlMapTypeExtraProps }
export const controlMapTypeEmits = { ...controlMapTypeNativeEvents, ...controlMapTypeExtraEvents }
export type ControlMapTypeProps = ExtractPropTypes<typeof controlMapTypeProps>
export type ControlMapTypeEmits = typeof controlMapTypeEmits
