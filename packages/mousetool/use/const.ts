import { PropType } from "vue-demi";
import { MarkToolOptions, PaintBrushToolOptions, ToolEvents, ToolInstances } from "../types";
import { DefineEmits, DefineProps } from "../../types";

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

export const OTHER_PROPS = {};

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
      e.circleTool instanceof T.CircleTool &&
      e.paintBrushTool instanceof T.PaintBrushTool
    );
  }
};

export const PROPS = { ...NATIVE_PROPS, ...OTHER_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...OTHER_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
