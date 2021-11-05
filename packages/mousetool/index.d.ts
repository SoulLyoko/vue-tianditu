import type { ToolInstances } from "./types";
declare const _default: import("vue-demi").DefineComponent<
  {
    markTool: {
      type: import("vue-demi").PropType<import("./types").MarkToolOptions>;
      default: () => {};
    };
    polygonTool: {
      type: import("vue-demi").PropType<T.PolygonToolOptions>;
      default: () => {};
    };
    polylineTool: {
      type: import("vue-demi").PropType<T.PolylineToolOptions>;
      default: () => {};
    };
    rectangleTool: {
      type: import("vue-demi").PropType<T.RectangleToolOptions>;
      default: () => {};
    };
    circleTool: {
      type: import("vue-demi").PropType<T.CircleToolOptions>;
      default: () => {};
    };
  },
  () => void,
  unknown,
  {},
  {},
  import("vue-demi").ComponentOptionsMixin,
  import("vue-demi").ComponentOptionsMixin,
  {
    init: (e: ToolInstances) => boolean;
    "mark-draw": (e: T.MarkToolEvent) => any;
    "polygon-draw": (e: T.PolygonToolEvent) => any;
    "polygon-addpoint": (e: T.PolygonToolEvent) => any;
    "polyline-draw": (e: T.PolylineToolEvent) => any;
    "polyline-addpoint": (e: T.PolylineToolEvent) => any;
    "rectangle-draw": (e: T.RectangleToolEvent) => any;
    "circle-draw": (e: T.CircleToolEvent) => any;
    "circle-drawend": (e: T.CircleToolEvent) => any;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      markTool?: unknown;
      polygonTool?: unknown;
      polylineTool?: unknown;
      rectangleTool?: unknown;
      circleTool?: unknown;
    } & {
      markTool: import("./types").MarkToolOptions;
      polygonTool: T.PolygonToolOptions;
      polylineTool: T.PolylineToolOptions;
      rectangleTool: T.RectangleToolOptions;
      circleTool: T.CircleToolOptions;
    } & {}
  > & {
    onInit?: ((e: ToolInstances) => any) | undefined;
    "onMark-draw"?: ((e: T.MarkToolEvent) => any) | undefined;
    "onPolygon-draw"?: ((e: T.PolygonToolEvent) => any) | undefined;
    "onPolygon-addpoint"?: ((e: T.PolygonToolEvent) => any) | undefined;
    "onPolyline-draw"?: ((e: T.PolylineToolEvent) => any) | undefined;
    "onPolyline-addpoint"?: ((e: T.PolylineToolEvent) => any) | undefined;
    "onRectangle-draw"?: ((e: T.RectangleToolEvent) => any) | undefined;
    "onCircle-draw"?: ((e: T.CircleToolEvent) => any) | undefined;
    "onCircle-drawend"?: ((e: T.CircleToolEvent) => any) | undefined;
  },
  {
    markTool: import("./types").MarkToolOptions;
    polygonTool: T.PolygonToolOptions;
    polylineTool: T.PolylineToolOptions;
    rectangleTool: T.RectangleToolOptions;
    circleTool: T.CircleToolOptions;
  }
>;
export default _default;
