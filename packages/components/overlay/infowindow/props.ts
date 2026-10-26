import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

export const infowindowNativeProps = {
  /** 弹出框的最小宽度 */
  minWidth: { type: Number, default: 50 },
  /** 弹出框的最大宽度 */
  maxWidth: { type: Number, default: 300 },
  /** 内容超过该高度时可滚动 */
  maxHeight: { type: Number, default: null },
  /** 打开时是否自动移动地图 */
  autoPan: { type: Boolean, default: false },
  /** 是否显示关闭按钮 */
  closeButton: { type: Boolean, default: true },
  /** 信息窗位置偏移量 */
  offset: { type: Array as unknown as PropType<VT.Point>, default: () => [0, 7] },
  /** 自动平移后的边距 */
  autoPanPadding: { type: Array as unknown as PropType<VT.Point>, default: () => [5, 5] },
  /** 点击地图是否关闭信息窗 */
  closeOnClick: { type: Boolean, default: false },
}

export const infowindowExtraProps = {
  /** 信息浮窗的显示 HTML 内容 */
  content: { type: [String, Object] as PropType<string | HTMLElement>, default: '' },
  /** 打开信息浮窗的覆盖物或坐标 */
  target: {
    type: [Object, Array] as PropType<T.OverlayBase<any> | VT.LngLat | null>,
    default: null,
  },
}

export const infowindowNativeEvents: T.InfoWindowEvents = {
  close: noop,
  open: noop,
  clickclose: noop,
}

export const infowindowExtraEvents = {
  init: (e: T.InfoWindow) => e instanceof T.InfoWindow,
  'update:target': (_target: unknown) => true,
}

export const infowindowProps = { ...infowindowNativeProps, ...infowindowExtraProps }
export const infowindowEmits = { ...infowindowNativeEvents, ...infowindowExtraEvents }
export type InfowindowProps = ExtractPropTypes<typeof infowindowProps>
export type InfowindowEmits = typeof infowindowEmits
