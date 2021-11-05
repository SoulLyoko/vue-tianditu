import { Props, ToolInstances } from "../types";
import { toIcon } from "../../utils";

export function useInit(props: Props, map: T.Map) {
  const { markTool, polygonTool, polylineTool, rectangleTool, circleTool } = props;
  const instances: ToolInstances = {};
  if (markTool) {
    if (markTool.icon) {
      instances.markTool = new T.MarkTool(map, {
        icon: toIcon(markTool.icon),
        follow: markTool.follow
      });
    } else {
      instances.markTool = new T.MarkTool(map, { follow: markTool?.follow });
    }
  }
  polygonTool && (instances.polygonTool = new T.PolygonTool(map, polygonTool));
  polylineTool && (instances.polylineTool = new T.PolylineTool(map, polylineTool));
  rectangleTool && (instances.rectangleTool = new T.RectangleTool(map, rectangleTool));
  circleTool && (instances.circleTool = new T.CircleTool(map, circleTool));
  return instances;
}
