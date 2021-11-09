export interface MarkToolOptions {
  icon?: VT.IconOptions | string;
  follow?: boolean;
}

export interface ToolInstances {
  markTool?: T.MarkTool;
  polygonTool?: T.PolygonTool;
  polylineTool?: T.PolylineTool;
  rectangleTool?: T.RectangleTool;
  circleTool?: T.CircleTool;
}

export interface ToolEvents {
  "mark-draw": T.MarkToolEvents["mouseup"];
  "polygon-draw": T.PolygonToolEvents["draw"];
  "polygon-addpoint": T.PolygonToolEvents["addpoint"];
  "polyline-draw": T.PolylineToolEvents["draw"];
  "polyline-addpoint": T.PolylineToolEvents["addpoint"];
  "rectangle-draw": T.RectangleToolEvents["draw"];
  "circle-draw": T.CircleToolEvents["draw"];
  "circle-drawend": T.CircleToolEvents["drawend"];
}
