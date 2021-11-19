import { PropType } from "vue-demi";
import { DefineEmits, DefineProps } from "../../../types";

export const NATIVE_PROPS = {
  /** 用","分隔的多个图层列表 */
  layers: { type: String },
  /** 每个请求图层的用","分隔的描述样式 */
  styles: { type: String },
  /** 输出图像的类型 */
  format: { type: String },
  /** 输出图像背景是否透明 */
  transparent: { type: Boolean },
  /** 请求服务的版本 */
  version: { type: String },
  /** 地图投影类型 */
  srs: { type: String },
  /** 图层服务地址 */
  url: { type: String, default: "" }
};

export const EXTRA_PROPS = {
  /** 设置图层的透明度（0.0-1.0）。默认值为 1.0不透明 */
  opacity: { type: Number },
  /** 图层的显示顺序 */
  zIndex: { type: Number }
};

export const NATIVE_EVENTS: T.TileLayerEvents = {
  loading: () => true,
  load: () => true,
  tileloadstart: () => true,
  tileload: () => true,
  tileunload: () => true,
  tileerror: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.TileLayer.WMS) => e instanceof T.TileLayer.WMS
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
