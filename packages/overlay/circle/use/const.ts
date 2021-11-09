import { PropType } from "vue-demi";
import { DefineProps, DefineEmits } from "../../../types";

export const NATIVE_PROPS = {
  /** 圆边线颜色 */
  color: { type: String, default: "#0000ff" },
  /** 圆边线的宽度，以像素为单位 */
  weight: { type: Number, default: 3 },
  /** 圆边线的透明度（范围0-1 之间） */
  opacity: { type: Number, default: 0.5 },
  /** 圆边线的样式（solid或dashed） */
  lineStyle: { type: String as PropType<"solid" | "dashed">, default: "solid" },
  /** 圆填充颜色。当参数为空时，折线覆盖物将没有填充效果 */
  fillColor: { type: String, default: "#0000ff" },
  /** 圆填充的透明度（范围0-1 之间） */
  fillOpacity: { type: Number, default: 0.2 }
};

export const EXTRA_PROPS = {
  /** 启用/禁用编辑功能 */
  edit: { type: Boolean, default: false },
  /** 圆的中心点 */
  center: { type: Array as unknown as PropType<VT.LngLat>, default: () => [0, 0] },
  /** 圆的半径 */
  radius: { type: Number, default: 0 },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> }
};

export const NATIVE_EVENTS: T.CircleEvents = {
  click: () => true,
  dblclick: () => true,
  mousedown: () => true,
  mouseup: () => true,
  mouseout: () => true,
  mouseover: () => true,
  remove: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.Circle) => e instanceof T.Circle
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
