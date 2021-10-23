import { PropType } from "vue-demi";
import { MarkToolOptions, ToolEvents, ToolInstances } from "../types";

export const NATIVE_PROPS = {
  /** 标点的配置项 */
  markTool: { type: Object as PropType<MarkToolOptions>, default: () => ({}) },
  /** 多边形的配置项 */
  polygonTool: { type: Object as PropType<Tianditu.PolygonToolOptions>, default: () => ({}) },
  /** 折线的配置项 */
  polylineTool: { type: Object as PropType<Tianditu.PolylineToolOptions>, default: () => ({}) },
  /** 矩形的配置项 */
  rectangleTool: { type: Object as PropType<Tianditu.RectangleToolOptions>, default: () => ({}) },
  /** 圆形的配置项 */
  circleTool: { type: Object as PropType<Tianditu.CircleToolOptions>, default: () => ({}) }
};

export const OTHER_PROPS = {};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };

export const NATIVE_EVENTS: ToolEvents = {
  "mark-draw": () => true,
  "polygon-draw": () => true,
  "polygon-addpoint": () => true,
  "polyline-draw": () => true,
  "polyline-addpoint": () => true,
  "rectangle-draw": () => true,
  "circle-draw": () => true,
  "circle-drawend": () => true
};

export const OTHER_EVENTS = {
  init: (e: ToolInstances) => {
    return (
      e.markTool instanceof T.MarkTool &&
      e.polygonTool instanceof T.PolygonTool &&
      e.polylineTool instanceof T.PolylineTool &&
      e.rectangleTool instanceof T.RectangleTool &&
      e.circleTool instanceof T.CircleTool
    );
  }
};

export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
