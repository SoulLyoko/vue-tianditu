import { PropType } from "vue";
import { IconOptions, LngLat } from "../../../types";

export const NATIVE_PROPS = {
  /** 图标类用来表达注记。default:T.Icon.Default() */
  icon: { type: [String, Object] as PropType<IconOptions | string> },
  /** 决定注记是否可被鼠标或触摸拖动 */
  draggable: { type: Boolean, default: false },
  /** 默认情况下，注记图片的叠置顺序由纬度自动设置。如果你想将某一注记放置于其他之上可用这个选项，设置一个较大的值即可，比如1000（或是相反地设置一个较大的负值） */
  title: { type: String, default: "" },
  /** 设置z-index */
  zIndexOffset: { type: Number, default: 0 },
  /** 设置标注透明度 */
  opacity: { type: Number, default: 1.0 }
};

export const OTHER_PROPS = {
  /** 经纬度 */
  position: { type: Array as unknown as PropType<LngLat>, default: () => [0, 0] },
  /** 自定义属性 */
  extData: { type: undefined as unknown as PropType<any> }
};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };

export const NATIVE_EVENTS: Tianditu.MakerEvents = {
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

export const OTHER_EVENTS = {
  init: (e: Tianditu.Marker) => e instanceof T.Marker
};

export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
