import type { ToolInstances } from "../types";
import type { MousetoolProps } from ".";

import { toIcon } from "~/utils";

export function useInit(props: MousetoolProps, map: T.Map) {
  const { markTool, polygonTool, polylineTool, rectangleTool, circleTool, paintBrushTool } = props;
  const instances: ToolInstances = {};
  if (markTool.icon) {
    instances.markTool = new T.MarkTool(map, {
      icon: toIcon(markTool.icon),
      follow: markTool.follow
    });
  } else {
    instances.markTool = T.MarkTool && new T.MarkTool(map, { follow: markTool.follow });
  }
  instances.polygonTool = T.PolygonTool && new T.PolygonTool(map, polygonTool);
  instances.polylineTool = T.PolylineTool && new T.PolylineTool(map, polylineTool);
  instances.rectangleTool = T.RectangleTool && new T.RectangleTool(map, rectangleTool);
  instances.circleTool = T.CircleTool && new T.CircleTool(map, circleTool);
  instances.paintBrushTool =
    T.PaintBrushTool &&
    new T.PaintBrushTool(map, {
      keepdrawing: paintBrushTool.keepdrawing,
      style: { ...(paintBrushTool || {}) }
    });
  return instances;
}
