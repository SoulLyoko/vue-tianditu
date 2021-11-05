import type { ToolInstances } from "./types";
declare const _default: import("vue-demi").DefineComponent<
  {
    markTool: {
      type: import("vue-demi").PropType<import("./types").MarkToolOptions>;
      default: () => {};
    };
    polygonTool: {
      type: import("vue-demi").PropType<Tianditu.PolygonToolOptions>;
      default: () => {};
    };
    polylineTool: {
      type: import("vue-demi").PropType<Tianditu.PolylineToolOptions>;
      default: () => {};
    };
    rectangleTool: {
      type: import("vue-demi").PropType<Tianditu.RectangleToolOptions>;
      default: () => {};
    };
    circleTool: {
      type: import("vue-demi").PropType<Tianditu.CircleToolOptions>;
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
    "mark-draw": (e: Tianditu.MarkToolEvent) => any;
    "polygon-draw": (e: Tianditu.PolygonToolEvent) => any;
    "polygon-addpoint": (e: Tianditu.PolygonToolEvent) => any;
    "polyline-draw": (e: Tianditu.PolylineToolEvent) => any;
    "polyline-addpoint": (e: Tianditu.PolylineToolEvent) => any;
    "rectangle-draw": (e: Tianditu.RectangleToolEvent) => any;
    "circle-draw": (e: Tianditu.CircleToolEvent) => any;
    "circle-drawend": (e: Tianditu.CircleToolEvent) => any;
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
      polygonTool: Tianditu.PolygonToolOptions;
      polylineTool: Tianditu.PolylineToolOptions;
      rectangleTool: Tianditu.RectangleToolOptions;
      circleTool: Tianditu.CircleToolOptions;
    } & {}
  > & {
    onInit?: ((e: ToolInstances) => any) | undefined;
    "onMark-draw"?: ((e: Tianditu.MarkToolEvent) => any) | undefined;
    "onPolygon-draw"?: ((e: Tianditu.PolygonToolEvent) => any) | undefined;
    "onPolygon-addpoint"?: ((e: Tianditu.PolygonToolEvent) => any) | undefined;
    "onPolyline-draw"?: ((e: Tianditu.PolylineToolEvent) => any) | undefined;
    "onPolyline-addpoint"?: ((e: Tianditu.PolylineToolEvent) => any) | undefined;
    "onRectangle-draw"?: ((e: Tianditu.RectangleToolEvent) => any) | undefined;
    "onCircle-draw"?: ((e: Tianditu.CircleToolEvent) => any) | undefined;
    "onCircle-drawend"?: ((e: Tianditu.CircleToolEvent) => any) | undefined;
  },
  {
    markTool: import("./types").MarkToolOptions;
    polygonTool: Tianditu.PolygonToolOptions;
    polylineTool: Tianditu.PolylineToolOptions;
    rectangleTool: Tianditu.RectangleToolOptions;
    circleTool: Tianditu.CircleToolOptions;
  }
>;
export default _default;
