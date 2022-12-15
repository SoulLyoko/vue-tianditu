import { PropType } from "vue-demi";

import { DefineEmits, DefineProps } from "../../../types";

export const NATIVE_PROPS = {
  /** 图标类用来表达注记。default:T.Icon.Default() */
  icon: { type: [String, Object] as PropType<VT.IconOptions | string> },
  /** 决定注记是否可被鼠标或触摸拖动 */
  draggable: { type: Boolean, default: false },
  /** 默认情况下，注记图片的叠置顺序由纬度自动设置。如果你想将某一注记放置于其他之上可用这个选项，设置一个较大的值即可，比如1000（或是相反地设置一个较大的负值） */
  title: { type: String, default: "" },
  /** 设置z-index */
  zIndexOffset: { type: Number, default: 0 },
  /** 设置标注透明度 */
  opacity: { type: Number, default: 1.0 }
};

export const EXTRA_PROPS = {
  /** 经纬度 */
  position: { type: Array as unknown as PropType<VT.LngLat>, default: () => [0, 0] },
  /** 是否可见 */
  visible: { type: Boolean, default: true },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> }
};

export const NATIVE_EVENTS: T.MakerEvents = {
  click: () => true,
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
  init: (e: T.Marker) => e instanceof T.Marker
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
