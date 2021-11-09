import { PropType } from "vue-demi";
import { DefineEmits, DefineProps } from "../../types";

export const NATIVE_PROPS = {
  /** 控件的停靠位置 */
  position: { type: String as PropType<T.ControlPosition>, default: "topright" }
};

export const OTHER_PROPS = {
  /** 设置控件停靠的偏移量 */
  offset: { type: Array as unknown as PropType<VT.Point> }
};

export const NATIVE_EVENTS = {};

export const OTHER_EVENTS = {
  init: (e: T.Control) => e instanceof T.Control
};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
