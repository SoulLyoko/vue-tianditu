import { PropType } from "vue";

export const NATIVE_PROPS = {
  /** 用","分隔的多个图层列表 */
  layers: { type: String as PropType<string> },
  /** 每个请求图层的用","分隔的描述样式 */
  styles: { type: String as PropType<string> },
  /** 输出图像的类型 */
  format: { type: String as PropType<string> },
  /** 输出图像背景是否透明 */
  transparent: { type: Boolean as PropType<boolean> },
  /** 请求服务的版本 */
  version: { type: String as PropType<string> },
  /** 地图投影类型 */
  srs: { type: String as PropType<string> },
  /** 图层服务地址 */
  url: { type: String as PropType<string>, default: "" }
};

export const OTHER_PROPS = {
  /** 设置图层的透明度（0.0-1.0）。默认值为 1.0不透明 */
  opacity: { type: Number as PropType<number> },
  /** 图层的显示顺序 */
  zIndex: { type: Number as PropType<number> }
};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };

export const NATIVE_EVENTS: Tianditu.TileLayerEvents = {
  loading: () => true,
  load: () => true,
  tileloadstart: () => true,
  tileload: () => true,
  tileunload: () => true,
  tileerror: () => true
};

export const OTHER_EVENTS = {
  init: (e: Tianditu.TileLayer.WMS) => e instanceof T.TileLayer.WMS
};

export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
