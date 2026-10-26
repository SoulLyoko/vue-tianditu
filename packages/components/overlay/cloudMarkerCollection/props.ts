import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

export const cloudMarkerCollectionNativeProps = {
  /** 海量点的预设形状 */
  ShapeType: {
    type: String as PropType<T.CloudMarkerCollectionOptions['ShapeType']>,
    default: 'CIRCLE',
  },
  /** 海量点的预设尺寸 */
  SizeType: {
    type: String as PropType<T.CloudMarkerCollectionOptions['SizeType']>,
    default: 'NORMAL',
  },
  /** 海量点的颜色 */
  color: { type: String, default: '#fa937e' },
}

export const cloudMarkerCollectionExtraProps = {
  /** 在地图上展示的点坐标集合 */
  lnglats: { type: Array as PropType<VT.LngLats>, default: () => [] },
}

export const cloudMarkerCollectionNativeEvents: T.CloudMarkerCollectionEvents = {
  click: noop,
  mouseover: noop,
  mouseout: noop,
}

export const cloudMarkerCollectionExtraEvents = {
  init: (e: T.CloudMarkerCollection) => e instanceof T.CloudMarkerCollection,
}

export const cloudMarkerCollectionProps = {
  ...cloudMarkerCollectionNativeProps,
  ...cloudMarkerCollectionExtraProps,
}
export const cloudMarkerCollectionEmits = {
  ...cloudMarkerCollectionNativeEvents,
  ...cloudMarkerCollectionExtraEvents,
}
export type CloudMarkerCollectionProps = ExtractPropTypes<typeof cloudMarkerCollectionProps>
export type CloudMarkerCollectionEmits = typeof cloudMarkerCollectionEmits
