import type { ExtractPropTypes, PropType } from 'vue'

import { controlExtraProps } from '../control/props'

export const controlZoomNativeProps = {
  /** 控件的停靠位置 */
  position: { type: String as PropType<T.ControlPosition>, default: 'topright' },
  zoomInText: { type: String, default: '+' },
  zoomOutText: { type: String, default: '-' },
  zoomInTitle: { type: String, default: '放大' },
  zoomOutTitle: { type: String, default: '缩小' },
}

export const controlZoomExtraProps = { ...controlExtraProps }
export const controlZoomNativeEvents = {}
export const controlZoomExtraEvents = {
  init: (e: T.Control.Zoom) => e instanceof T.Control.Zoom,
}

export const controlZoomProps = { ...controlZoomNativeProps, ...controlZoomExtraProps }
export const controlZoomEmits = { ...controlZoomNativeEvents, ...controlZoomExtraEvents }
export type ControlZoomProps = ExtractPropTypes<typeof controlZoomProps>
export type ControlZoomEmits = typeof controlZoomEmits
