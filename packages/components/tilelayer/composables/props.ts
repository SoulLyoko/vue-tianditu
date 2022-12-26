import type { PropType } from "vue-demi";
import type { EmitFn, PropTypes } from "~/types";

export const NATIVE_PROPS = {
  /** 此图层的最低缩放级别 */
  minZoom: { type: Number },
  /** 此图层的最高缩放级别 */
  maxZoom: { type: Number },
  /** 当没有瓦片时所显示的错误图片地址 */
  errorTileUrl: { type: String },
  /** 设置图层的透明度（0.0-1.0）。默认值为 1.0不透明 */
  opacity: { type: Number },
  /** 图层的显示顺序 */
  zIndex: { type: Number },
  /** 设置指定范围内显示瓦片 */
  bounds: { type: Array as PropType<VT.Bounds>, default: () => [] },
  /** 图层服务地址 */
  url: { type: String, default: "" }
};

export const EXTRA_PROPS = {};

export const NATIVE_EVENTS: T.TileLayerEvents = {
  loading: () => true,
  load: () => true,
  tileloadstart: () => true,
  tileload: () => true,
  tileunload: () => true,
  tileerror: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.TileLayer) => e instanceof T.TileLayer
};

export const tilelayerProps = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const tilelayerEmits = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };

export type TilelayerProps = PropTypes<typeof tilelayerProps>;
export type TilelayerEmits = typeof tilelayerEmits;
export type TilelayerEmitFn = EmitFn<TilelayerEmits>;
