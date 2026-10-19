import type { ExtractPropTypes, PropType } from 'vue'

import { controlExtraProps } from '../control/props'

export const controlCopyrightNativeProps = {
  /** 控件的停靠位置 */
  position: { type: String as PropType<T.ControlPosition>, default: 'bottomleft' },
  id: { type: String },
  content: { type: String },
  bounds: { type: Array as unknown as PropType<VT.Bounds> },
}

export const controlCopyrightExtraProps = { ...controlExtraProps }
export const controlCopyrightNativeEvents = {}
export const controlCopyrightExtraEvents = {
  init: (e: T.Control.Copyright) => e instanceof T.Control.Copyright,
}

export const controlCopyrightProps = {
  ...controlCopyrightNativeProps,
  ...controlCopyrightExtraProps,
}
export const controlCopyrightEmits = {
  ...controlCopyrightNativeEvents,
  ...controlCopyrightExtraEvents,
}
export type ControlCopyrightProps = ExtractPropTypes<typeof controlCopyrightProps>
export type ControlCopyrightEmits = typeof controlCopyrightEmits
