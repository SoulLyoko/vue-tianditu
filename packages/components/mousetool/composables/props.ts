import type { PropType } from "vue-demi";
import type { PropTypes, EmitFn } from "~/types";
import type { MarkToolOptions, PaintBrushToolOptions, ToolEvents, ToolInstances } from "../types";

export const NATIVE_PROPS = {
  /** 标点的配置项 */
  markTool: { type: Object as PropType<MarkToolOptions>, default: () => ({}) },
  /** 多边形的配置项 */
  polygonTool: { type: Object as PropType<T.PolygonToolOptions>, default: () => ({}) },
  /** 折线的配置项 */
  polylineTool: { type: Object as PropType<T.PolylineToolOptions>, default: () => ({}) },
  /** 矩形的配置项 */
  rectangleTool: { type: Object as PropType<T.RectangleToolOptions>, default: () => ({}) },
  /** 圆形的配置项 */
  circleTool: { type: Object as PropType<T.CircleToolOptions>, default: () => ({}) },
  /** 画笔的配置项 */
  paintBrushTool: { type: Object as PropType<PaintBrushToolOptions>, default: () => ({}) }
};

export const EXTRA_PROPS = {};

export const NATIVE_EVENTS: ToolEvents = {
  "mark-mouseup": () => true,
  "polygon-draw": () => true,
  "polygon-addpoint": () => true,
  "polyline-draw": () => true,
  "polyline-addpoint": () => true,
  "rectangle-draw": () => true,
  "circle-draw": () => true,
  "circle-drawend": () => true
};

export const EXTRA_EVENTS = {
  init: (e: ToolInstances) => {
    return (
      e.markTool instanceof T.MarkTool &&
      e.polygonTool instanceof T.PolygonTool &&
      e.polylineTool instanceof T.PolylineTool &&
      e.rectangleTool instanceof T.RectangleTool &&
      e.circleTool instanceof T.CircleTool &&
      e.paintBrushTool instanceof T.PaintBrushTool
    );
  }
};

export const mousetoolProps = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const mousetoolEmits = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };

export type MousetoolProps = PropTypes<typeof mousetoolProps>;
export type MousetoolEmits = typeof mousetoolEmits;
export type MousetoolEmitFn = EmitFn<MousetoolEmits>;
