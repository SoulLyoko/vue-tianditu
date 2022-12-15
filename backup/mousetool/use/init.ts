import { ToolInstances } from "../types";
import { Props } from "./";
import { toIcon } from "../../utils";

export function useInit(props: Props, map: T.Map) {
  const { markTool, polygonTool, polylineTool, rectangleTool, circleTool, paintBrushTool } = props;
  const instances: ToolInstances = {};
  if (markTool.icon) {
    instances.markTool = new T.MarkTool(map, {
      icon: toIcon(markTool.icon),
      follow: markTool.follow
    });
  } else {
    instances.markTool = new T.MarkTool(map, { follow: markTool.follow });
  }
  instances.polygonTool = new T.PolygonTool(map, polygonTool);
  instances.polylineTool = new T.PolylineTool(map, polylineTool);
  instances.rectangleTool = new T.RectangleTool(map, rectangleTool);
  instances.circleTool = new T.CircleTool(map, circleTool);
  instances.paintBrushTool = new T.PaintBrushTool(map, {
    keepdrawing: paintBrushTool.keepdrawing,
    style: { ...(paintBrushTool || {}) }
  });
  return instances;
}
