import { PropType } from "vue-demi";
import { Point } from "../../types";

export const NATIVE_PROPS = {
  /** 控件的停靠位置 */
  position: { type: String as PropType<Tianditu.ControlPosition>, default: "topright" }
};

export const OTHER_PROPS = {
  /** 设置控件停靠的偏移量 */
  offset: { type: Array as unknown as PropType<Point> }
};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };

export const NATIVE_EVENTS = {};

export const OTHER_EVENTS = {
  init: (e: Tianditu.Control) => e instanceof T.Control
};

export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
