import { PropType } from "vue";
import { LngLat, Bounds } from "../../types";
import { uuid } from "../../utils";
import { ControlNames, ControlOpts } from "../types";

export const NATIVE_PROPS = {
  /** EPSG:900913(墨卡托投影)，EPSG:4326(大地平面投影) */
  projection: { type: String, default: "EPSG:900913" },
  /** 地图允许展示的最小级别 */
  minZoom: { type: Number, default: 1 },
  /** 地图允许展示的最大级别 */
  maxZoom: { type: Number, default: 18 },
  /** 地图的初始化中心点 */
  center: { type: Array as unknown as PropType<LngLat>, default: () => [0, 0] },
  /** 地图的初始化级别 */
  zoom: { type: Number, default: 1 }
};

export const OTHER_PROPS = {
  /** 启用地图拖拽，默认启用 */
  drag: { type: Boolean, default: true },
  /** 启用滚轮放大缩小，默认启用 */
  scrollWheelZoom: { type: Boolean, default: true },
  /** 启用双击放大，默认启用 */
  doubleClickZoom: { type: Boolean, default: true },
  /** 启用键盘操作，默认启用 */
  keyboard: { type: Boolean, default: true },
  /** 启用地图惯性拖拽，默认启用 */
  inertia: { type: Boolean, default: true },
  /** 启用连续缩放效果，默认启用 */
  continuousZoom: { type: Boolean, default: true },
  /** 启用双指操作缩放，默认启用 */
  pinchToZoom: { type: Boolean, default: true },
  /** 启用自动适应容器尺寸变化，默认启用 */
  autoResize: { type: Boolean, default: true },
  /** 当这个选项被设置后，地图被限制在给定的地理边界内，当用户平移将地图拖动到视图以外的范围时会出现弹回的效果，并且也不允许缩小视图到给定范围以外的区域（这取决于地图的尺寸）。使用setMaxBounds方法可以动态地设置这种约束 */
  maxBounds: { type: Array as unknown as PropType<Bounds> },
  /** 根据提供的坐标点数组设置地图视野，调整后的视野会保证包含提供的坐标点 */
  viewport: { type: Array as PropType<LngLat[]> },
  /** 地图样式，原天地图api的style，分别为black，indigo */
  mapStyle: { type: String as PropType<"black" | "indigo"> },
  /** 地图容器id */
  mid: { type: String, default: uuid() },
  /** 控件 */
  controls: { type: Array as PropType<(ControlNames | ControlOpts)[]>, default: [] }
};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };

export const NATIVE_EVENTS: Tianditu.MapEvents = {
  click: () => true,
  dblclick: () => true,
  contextmenu: () => true,
  mousemove: () => true,
  mouseover: () => true,
  mouseout: () => true,
  movestart: () => true,
  move: () => true,
  moveend: () => true,
  zoomstart: () => true,
  zoomend: () => true,
  addoverlay: () => true,
  removeoverlay: () => true,
  addcontrol: () => true,
  removecontrol: () => true,
  clearoverlays: () => true,
  dragstart: () => true,
  drag: () => true,
  dragend: () => true,
  layeradd: () => true,
  layerremove: () => true,
  load: () => true,
  resize: () => true,
  levels: () => true,
  touchstart: () => true,
  touchmove: () => true,
  touchend: () => true,
  longpress: () => true
};

export const OTHER_EVENTS: { init(e: Tianditu.Map): void } & Tianditu.ControlOverviewMapEvents = {
  /** 地图初始化 */
  init: e => e instanceof T.Map,
  /** 鹰眼视图控件的开合状态变化时触发事件 */
  viewchange: () => true
};

export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
