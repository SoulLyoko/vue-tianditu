import type { PropType } from "vue-demi";
import type { PropTypes, EmitFn } from "~/types";

export const NATIVE_PROPS = {
  /** 控件的停靠位置 */
  position: { type: String as PropType<T.ControlPosition>, default: "topright" }
};

export const EXTRA_PROPS = {
  /** 设置控件停靠的偏移量 */
  offset: { type: Array as unknown as PropType<VT.Point> },
  /** 是否可见 */
  visible: { type: Boolean, default: true }
};

export const NATIVE_EVENTS = {};

export const EXTRA_EVENTS = {
  init: (e: T.Control) => e instanceof T.Control
};

export const controlProps = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const controlEmits = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };

export type ControlProps = PropTypes<typeof controlProps>;
export type ControlEmits = typeof controlEmits;
export type ControlEmitFn = EmitFn<ControlEmits>;
