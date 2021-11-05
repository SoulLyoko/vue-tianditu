import { PropType } from "vue-demi";
import { Bounds } from "../../../types";

export const NATIVE_PROPS = {
  /** 此图层的最低缩放级别 */
  minZoom: { type: Number as PropType<number> },
  /** 此图层的最高缩放级别 */
  maxZoom: { type: Number as PropType<number> },
  /** 当没有瓦片时所显示的错误图片地址 */
  errorTileUrl: { type: String as PropType<string> },
  /** 设置图层的透明度（0.0-1.0）。默认值为 1.0不透明 */
  opacity: { type: Number as PropType<number> },
  /** 图层的显示顺序 */
  zIndex: { type: Number as PropType<number> },
  /** 设置指定范围内显示瓦片 */
  bounds: { type: Array as PropType<Bounds>, default: () => [] },
  /** 图层服务地址 */
  url: { type: String as PropType<string>, default: "" }
};

export const OTHER_PROPS = {};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };

export const NATIVE_EVENTS: T.TileLayerEvents = {
  loading: () => true,
  load: () => true,
  tileloadstart: () => true,
  tileload: () => true,
  tileunload: () => true,
  tileerror: () => true
};

export const OTHER_EVENTS = {
  init: (e: T.TileLayer) => e instanceof T.TileLayer
};

export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
