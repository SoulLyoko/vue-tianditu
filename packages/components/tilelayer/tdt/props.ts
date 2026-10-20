import type { ExtractPropTypes } from 'vue'

import { tilelayerNativeEvents, tilelayerNativeProps } from '../tilelayer/props'

export const tilelayerTdtNativeProps = {
  ...tilelayerNativeProps,
  /** 用来描述图层信息 */
  attribution: { type: String, default: '' },
}

export const tilelayerTdtExtraProps = {}

export const tilelayerTdtNativeEvents = { ...tilelayerNativeEvents }

export const tilelayerTdtExtraEvents = {
  init: (e: T.TileLayer.TDT) => e instanceof T.TileLayer.TDT,
}

export const tilelayerTdtProps = { ...tilelayerTdtNativeProps, ...tilelayerTdtExtraProps }
export const tilelayerTdtEmits = { ...tilelayerTdtNativeEvents, ...tilelayerTdtExtraEvents }
export type TilelayerTdtProps = ExtractPropTypes<typeof tilelayerTdtProps>
export type TilelayerTdtEmits = typeof tilelayerTdtEmits
