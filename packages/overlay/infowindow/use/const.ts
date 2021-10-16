import { PropType } from "vue-demi";
import { LngLat, Point } from "../../../types";

export const NATIVE_PROPS = {
  /** 弹出框的最小宽度 */
  minWidth: { type: Number, default: 50 },
  /** 弹出框的最大宽度 */
  maxWidth: { type: Number, default: 300 },
  /** 设置后，如果内容超过弹出窗口的给定高度则产生一个可以滚动的容器 */
  maxHeight: { type: Number, default: null },
  /** 是否开启信息窗口打开时地图自动移动（默认关闭） */
  autoPan: { type: Boolean, default: false },
  /** 控制弹出窗口中出现的关闭按钮 */
  closeButton: { type: Boolean, default: true },
  /** 弹出窗口位置的补偿值。在同一图层中打开弹出窗口时对于控制锚点比较有用 */
  offset: { type: Array as unknown as PropType<Point>, default: [0, 7] },
  /** 在地图视图自动平移产生后弹出窗口和地图视图之间的边缘 */
  autoPanPadding: { type: Array as unknown as PropType<Point>, default: [5, 5] },
  /** 是否开启点击地图关闭信息窗口（默认关闭） */
  closeOnClick: { type: Boolean, default: false }
};

export const OTHER_PROPS = {
  /** 信息浮窗的显示 HTML 内容 */
  content: { type: [String, Object] as PropType<string | HTMLElement>, default: "" },
  /** 打开信息浮窗的覆盖物或信息浮窗所指向的地理位置坐标 */
  modelValue: { type: [Object, Array] as PropType<Tianditu.OverlayBase<any> | LngLat | null>, default: null }
};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };

export const NATIVE_EVENTS: Tianditu.InfoWindowEvents = {
  close: () => true,
  open: () => true,
  clickclose: () => true
};

export const OTHER_EVENTS = {
  init: (e: Tianditu.InfoWindow) => e instanceof T.InfoWindow,
  "update:modelValue": (e: any) => true
};

export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
