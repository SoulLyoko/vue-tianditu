import { noop } from '@vue-tianditu/core'
import type { ExtractPropTypes, PropType } from 'vue'

export const gridlineLayerNativeProps = {
  /** 格网的像素大小 */
  tileSize: { type: Number, default: 256 },
  /** 显示格网图层的最小层级 */
  minZoom: { type: Number, default: 0 },
  /** 显示格网图层的最大层级 */
  maxZoom: { type: Number, default: 18 },
  /** 格网图层的透明度 */
  opacity: { type: Number, default: 1 },
  /** 格网图层边线的样式 */
  outlineSize: {
    type: Object as PropType<T.GridlineLayerOptions['outlineSize']>,
    default: () => ({ width: 1, style: 'solid', color: '#999' }),
  },
  /** 格网图层文字的样式 */
  textSize: {
    type: Object as PropType<T.GridlineLayerOptions['textSize']>,
    default: () => ({ display: false, fontSize: '14', fontWeight: true, color: 'black' }),
  },
}

export const gridlineLayerExtraProps = {
  /** 图层的叠放顺序 */
  zIndex: { type: Number },
}

export const gridlineLayerNativeEvents: Pick<T.TileLayerEvents, 'load' | 'loading'> = {
  loading: noop,
  load: noop,
}
export const gridlineLayerExtraEvents = {
  init: (e: T.GridlineLayer) => e instanceof T.GridlineLayer,
}

export const gridlineLayerProps = { ...gridlineLayerNativeProps, ...gridlineLayerExtraProps }
export const gridlineLayerEmits = { ...gridlineLayerNativeEvents, ...gridlineLayerExtraEvents }
export type GridlineLayerProps = ExtractPropTypes<typeof gridlineLayerProps>
export type GridlineLayerEmits = typeof gridlineLayerEmits
