import { PropType } from "vue";
import { LngLat } from "../../types";

export const NATIVE_PROPS = {
  /** 多边形边线颜色 */
  color: { type: String, default: "#0000ff" },
  /** 多边形边线的宽度，以像素为单位 */
  weight: { type: Number, default: 3 },
  /** 多边形边线的透明度（范围0-1 之间） */
  opacity: { type: Number, default: 0.5 },
  /** 多边形边线的样式（solid或dashed） */
  lineStyle: { type: String as PropType<"solid" | "dashed">, default: "solid" },
  /** 多边形填充颜色。当参数为空时，折线覆盖物将没有填充效果 */
  fillColor: { type: String, default: "#0000ff" },
  /** 多边形填充的透明度（范围0-1 之间） */
  fillOpacity: { type: Number, default: 0.2 }
};

export const OTHER_PROPS = {
  /** 启用/禁用编辑功能 */
  edit: { type: Boolean, default: false },
  /** 坐标数组 */
  path: { type: Array as unknown as PropType<LngLat[]>, default: () => [] },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> }
};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };

export const NATIVE_EVENTS: Tianditu.PolygonEvents = {
  click: () => true,
  dblclick: () => true,
  mousedown: () => true,
  mouseup: () => true,
  mouseout: () => true,
  mouseover: () => true,
  remove: () => true
};

export const OTHER_EVENTS = {
  init: (e: Tianditu.Polygon) => e instanceof T.Polygon
};

export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
