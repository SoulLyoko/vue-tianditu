import { PropType } from "vue-demi";
import { DefineEmits, DefineProps } from "../../../types";

export const NATIVE_PROPS = {
  /** 文本标注的内容 */
  text: { type: String, default: "" },
  /** 文本标注的位置偏移值 */
  offset: { type: Array as unknown as PropType<VT.Point>, default: () => [0, 0] },
  /** 文本标注的地理位置 */
  position: { type: Array as unknown as PropType<VT.LngLat>, default: () => [0, 0] }
};

export const EXTRA_PROPS = {
  /** 设置文本的提示内容 */
  title: { type: String },
  /** 设置z-index */
  zIndex: { type: Number },
  /** 设置文本的文本内容字体大小 */
  fontSize: { type: Number },
  /** 设置文本的文本的字体颜色 */
  fontColor: { type: String },
  /** 设置文本的背景色 */
  backgroundColor: { type: String },
  /** 设置文本的边框线宽 */
  borderLine: { type: Number },
  /** 设置文本的边框颜色 */
  borderColor: { type: String },
  /** 设置文本的透明度 */
  opacity: { type: Number },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> }
};

export const NATIVE_EVENTS: T.LabelEvents = {
  click: () => true,
  dblclick: () => true,
  mousedown: () => true,
  mouseup: () => true,
  mouseout: () => true,
  mouseover: () => true,
  remove: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.Label) => e instanceof T.Label
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
