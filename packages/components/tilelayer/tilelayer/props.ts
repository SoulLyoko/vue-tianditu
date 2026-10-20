import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

export const tilelayerNativeProps = {
  /** 此图层的最低缩放级别 */
  minZoom: { type: Number, default: 0 },
  /** 此图层的最高缩放级别 */
  maxZoom: { type: Number, default: 18 },
  /** 当没有瓦片时所显示的错误图片地址 */
  errorTileUrl: { type: String, default: '' },
  /** 设置图层的透明度（0.0-1.0） */
  opacity: { type: Number, default: 1 },
  /** 图层的显示顺序 */
  zIndex: { type: Number },
  /** 设置指定范围内显示瓦片 */
  bounds: { type: Array as PropType<VT.Bounds> },
  /** 图层服务地址 */
  url: { type: String, default: '' },
}

export const tilelayerExtraProps = {}

export const tilelayerNativeEvents: T.TileLayerEvents = {
  loading: noop,
  load: noop,
  tileloadstart: noop,
  tileload: noop,
  tileunload: noop,
  tileerror: noop,
}

export const tilelayerExtraEvents = {
  init: (e: T.TileLayer) => e instanceof T.TileLayer,
}

export const tilelayerProps = { ...tilelayerNativeProps, ...tilelayerExtraProps }
export const tilelayerEmits = { ...tilelayerNativeEvents, ...tilelayerExtraEvents }
export type TilelayerProps = ExtractPropTypes<typeof tilelayerProps>
export type TilelayerEmits = typeof tilelayerEmits
