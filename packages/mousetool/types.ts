import { DefineEmits, DefineProps } from "../types";
import { PROPS, EVENTS } from "./use/const";
import { IconOptions } from "../types";

export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;

export interface MarkToolOptions {
  icon?: IconOptions | string;
  follow?: boolean;
}

export interface ToolInstances {
  markTool?: Tianditu.MarkTool;
  polygonTool?: Tianditu.PolygonTool;
  polylineTool?: Tianditu.PolylineTool;
  rectangleTool?: Tianditu.RectangleTool;
  circleTool?: Tianditu.CircleTool;
}

export interface ToolEvents {
  "mark-draw": Tianditu.MarkToolEvents["mouseup"];
  "polygon-draw": Tianditu.PolygonToolEvents["draw"];
  "polygon-addpoint": Tianditu.PolygonToolEvents["addpoint"];
  "polyline-draw": Tianditu.PolylineToolEvents["draw"];
  "polyline-addpoint": Tianditu.PolylineToolEvents["addpoint"];
  "rectangle-draw": Tianditu.RectangleToolEvents["draw"];
  "circle-draw": Tianditu.CircleToolEvents["draw"];
  "circle-drawend": Tianditu.CircleToolEvents["drawend"];
}
