import { PropType } from "vue-demi";
import { DefineEmits, DefineProps } from "../../../types";

export const NATIVE_PROPS = {
  /** 海量点的预设形状 */
  ShapeType: { type: String as PropType<T.CloudMarkerCollectionOptions["ShapeType"]>, default: "CIRCLE" },
  /** 海量点的预设尺寸 */
  SizeType: { type: String as PropType<T.CloudMarkerCollectionOptions["SizeType"]>, default: "TINY" },
  /** 海量点的颜色，默认为'#fa937e' */
  color: { type: String, default: "#fa937e" }
};

export const EXTRA_PROPS = {
  /** 在地图上展示的点坐标集合 */
  lnglats: { type: Array as PropType<VT.LngLat[]>, default: () => [] }
};

export const NATIVE_EVENTS: T.CloudMarkerCollectionEvents = {
  click: () => true,
  mouseover: () => true,
  mouseout: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.CloudMarkerCollection) => e instanceof T.CloudMarkerCollection
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
