import { PropType } from "vue-demi";
import { DefineEmits, DefineProps } from "../../../types";

export const NATIVE_PROPS = {
  /** 折线颜色 */
  color: { type: String, default: "#0000ff" },
  /** 折线的宽度，以像素为单位 */
  weight: { type: Number, default: 3 },
  /** 折线的透明度（范围0-1 之间） */
  opacity: { type: Number, default: 0.5 },
  /** 拆线的样式（solid或dashed） */
  lineStyle: { type: String as PropType<"solid" | "dashed">, default: "solid" }
};

export const EXTRA_PROPS = {
  /** 启用/禁用编辑功能 */
  edit: { type: Boolean, default: false },
  /** 坐标数组 */
  path: { type: Array as unknown as PropType<VT.LngLat[]>, default: () => [] },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> }
};

export const NATIVE_EVENTS: T.PolylineEvents = {
  click: () => true,
  dblclick: () => true,
  mousedown: () => true,
  mouseup: () => true,
  mouseout: () => true,
  mouseover: () => true,
  remove: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.Polyline) => e instanceof T.Polyline
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
