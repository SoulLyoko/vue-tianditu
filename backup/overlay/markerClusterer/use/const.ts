import { PropType } from "vue-demi";

import { DefineEmits, DefineProps } from "../../../types";
import { Props as MarkerProps } from "../../marker/use/const";

export const NATIVE_PROPS = {
  /** 要聚合的标注点数组 */
  markers: { type: Array as PropType<MarkerProps[]> },
  /** 聚合计算时网格的像素大小，默认60 */
  girdSize: { type: Number },
  /** 最大的聚合级别，大于该级别就不进行聚合 */
  maxZoom: { type: Number },
  /** 自定义聚合后的图标风格 */
  styles: { type: Array as PropType<VT.MarkerClustererStyle[]> }
};

export const EXTRA_PROPS = {};

export const NATIVE_EVENTS: T.MarkerClustererEvents = {
  click: () => true,
  clusterclick: () => true,
  dblclick: () => true,
  mousedown: () => true,
  mouseup: () => true,
  mouseout: () => true,
  mouseover: () => true,
  dragstart: () => true,
  drag: () => true,
  dragend: () => true,
  remove: () => true
};

export const EXTRA_EVENTS = {
  init: (e: T.MarkerClusterer) => e instanceof T.MarkerClusterer
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
