import type { ExtractPropTypes, PropType } from 'vue'

import { controlExtraProps } from '../control/props'

export const controlOverviewMapNativeProps = {
  /** 鹰眼控件的停靠位置 */
  anchor: { type: String as PropType<T.ControlPosition>, default: 'bottomright' },
  position: { type: String as PropType<T.ControlPosition> },
  size: { type: Array as PropType<VT.Point> },
  isOpen: { type: Boolean, default: false },
}

export const controlOverviewMapExtraProps = {
  ...controlExtraProps,
  imgOpen: { type: String },
  imgClose: { type: String },
  borderColor: { type: String },
  rectBorderColor: { type: String },
  rectBackColor: { type: String },
}
export const controlOverviewMapNativeEvents = {
  viewchange: (_e: T.Control.OverviewMapEvent) => true,
}
export const controlOverviewMapExtraEvents = {
  init: (e: T.Control.OverviewMap) => e instanceof T.Control.OverviewMap,
}

export const controlOverviewMapProps = {
  ...controlOverviewMapNativeProps,
  ...controlOverviewMapExtraProps,
}
export const controlOverviewMapEmits = {
  ...controlOverviewMapNativeEvents,
  ...controlOverviewMapExtraEvents,
}
export type ControlOverviewMapProps = ExtractPropTypes<typeof controlOverviewMapProps>
export type ControlOverviewMapEmits = typeof controlOverviewMapEmits
