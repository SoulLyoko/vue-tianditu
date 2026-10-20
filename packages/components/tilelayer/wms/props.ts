import type { ExtractPropTypes } from 'vue'

import { tilelayerNativeEvents } from '../tilelayer/props'

export const tilelayerWmsNativeProps = {
  /** 用","分隔的多个图层列表 */
  layers: { type: String, default: '' },
  /** 每个请求图层的用","分隔的描述样式 */
  styles: { type: String, default: '' },
  /** 输出图像的类型 */
  format: { type: String, default: 'image/jpeg' },
  /** 输出图像背景是否透明 */
  transparent: { type: Boolean, default: false },
  /** 请求服务的版本 */
  version: { type: String, default: '1.1.1' },
  /** 地图投影类型 */
  srs: { type: String, default: 'EPSG:900913' },
  /** 图层服务地址 */
  url: { type: String, default: '' },
}

export const tilelayerWmsExtraProps = {
  /** 设置图层的透明度（0.0-1.0） */
  opacity: { type: Number },
  /** 图层的显示顺序 */
  zIndex: { type: Number },
}

export const tilelayerWmsNativeEvents = { ...tilelayerNativeEvents }
export const tilelayerWmsExtraEvents = {
  init: (e: T.TileLayer.WMS) => e instanceof T.TileLayer.WMS,
}

export const tilelayerWmsProps = { ...tilelayerWmsNativeProps, ...tilelayerWmsExtraProps }
export const tilelayerWmsEmits = { ...tilelayerWmsNativeEvents, ...tilelayerWmsExtraEvents }
export type TilelayerWmsProps = ExtractPropTypes<typeof tilelayerWmsProps>
export type TilelayerWmsEmits = typeof tilelayerWmsEmits
