declare const _default: import("vue-demi").DefineComponent<
  {
    drag: {
      type: BooleanConstructor;
      default: boolean;
    };
    scrollWheelZoom: {
      type: BooleanConstructor;
      default: boolean;
    };
    doubleClickZoom: {
      type: BooleanConstructor;
      default: boolean;
    };
    keyboard: {
      type: BooleanConstructor;
      default: boolean;
    };
    inertia: {
      type: BooleanConstructor;
      default: boolean;
    };
    continuousZoom: {
      type: BooleanConstructor;
      default: boolean;
    };
    pinchToZoom: {
      type: BooleanConstructor;
      default: boolean;
    };
    autoResize: {
      type: BooleanConstructor;
      default: boolean;
    };
    maxBounds: {
      type: import("vue-demi").PropType<import("../types").Bounds>;
    };
    viewport: {
      type: import("vue-demi").PropType<import("../types").LngLat[]>;
    };
    mapStyle: {
      type: import("vue-demi").PropType<"black" | "indigo">;
    };
    mid: {
      type: StringConstructor;
      default: () => string;
    };
    controls: {
      type: import("vue-demi").PropType<(import("./types").ControlNames | import("./types").ControlOpts)[]>;
      default: () => never[];
    };
    projection: {
      type: StringConstructor;
      default: string;
    };
    minZoom: {
      type: NumberConstructor;
      default: number;
    };
    maxZoom: {
      type: NumberConstructor;
      default: number;
    };
    center: {
      type: import("vue-demi").PropType<import("../types").LngLat>;
      default: () => number[];
    };
    zoom: {
      type: NumberConstructor;
      default: number;
    };
  },
  () => import("vue-demi").VNode<
    import("vue-demi").RendererNode,
    import("vue-demi").RendererElement,
    {
      [key: string]: any;
    }
  >,
  unknown,
  {},
  {},
  import("vue-demi").ComponentOptionsMixin,
  import("vue-demi").ComponentOptionsMixin,
  {
    init(e: Tianditu.Map): void;
    viewchange(e: Tianditu.ControlOverviewMapEvent): void;
    click(e: Tianditu.MapEvent): void;
    dblclick(e: Tianditu.MapEvent): void;
    contextmenu(e: Tianditu.MapEvent): void;
    mousemove(e: Tianditu.MapEvent): void;
    mouseover(e: Tianditu.MapEvent): void;
    mouseout(e: Tianditu.MapEvent): void;
    movestart(e: Tianditu.MapEventBase): void;
    move(e: Tianditu.MapEventBase): void;
    moveend(e: Tianditu.MapEventBase): void;
    zoomstart(e: Tianditu.MapEventBase): void;
    zoomend(e: Tianditu.MapEventBase): void;
    addoverlay(
      e: Tianditu.MapEventBase & {
        addoverlay: Tianditu.Overlay;
      }
    ): void;
    removeoverlay(
      e: Tianditu.MapEventBase & {
        removeoverlay: Tianditu.Overlay;
      }
    ): void;
    addcontrol(
      e: Tianditu.MapEventBase & {
        addcontrol: Tianditu.Control;
      }
    ): void;
    removecontrol(
      e: Tianditu.MapEventBase & {
        removecontrol: Tianditu.Control;
      }
    ): void;
    clearoverlays(e: Tianditu.MapEventBase): void;
    dragstart(e: Tianditu.MapEventBase): void;
    drag(e: Tianditu.MapEventBase): void;
    dragend(e: Tianditu.MapEventBase): void;
    layeradd(
      e: Tianditu.MapEventBase & {
        layer: Tianditu.TileLayer;
      }
    ): void;
    layerremove(
      e: Tianditu.MapEventBase & {
        layer: Tianditu.TileLayer;
      }
    ): void;
    load(e: Tianditu.MapEventBase): void;
    resize(
      e: Tianditu.MapEventBase & {
        newSize: Tianditu.Point;
        oldSize: Tianditu.Point;
      }
    ): void;
    levels(
      e: Tianditu.MapEventBase & {
        minZoom: number;
        maxZoom: number;
      }
    ): void;
    touchstart(e: Tianditu.MapEvent): void;
    touchmove(e: Tianditu.MapEvent): void;
    touchend(e: Tianditu.MapEvent): void;
    longpress(e: Tianditu.MapEvent): void;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      drag?: unknown;
      scrollWheelZoom?: unknown;
      doubleClickZoom?: unknown;
      keyboard?: unknown;
      inertia?: unknown;
      continuousZoom?: unknown;
      pinchToZoom?: unknown;
      autoResize?: unknown;
      maxBounds?: unknown;
      viewport?: unknown;
      mapStyle?: unknown;
      mid?: unknown;
      controls?: unknown;
      projection?: unknown;
      minZoom?: unknown;
      maxZoom?: unknown;
      center?: unknown;
      zoom?: unknown;
    } & {
      drag: boolean;
      scrollWheelZoom: boolean;
      doubleClickZoom: boolean;
      keyboard: boolean;
      inertia: boolean;
      continuousZoom: boolean;
      pinchToZoom: boolean;
      autoResize: boolean;
      mid: string;
      controls: (import("./types").ControlNames | import("./types").ControlOpts)[];
      projection: string;
      minZoom: number;
      maxZoom: number;
      center: import("../types").LngLat;
      zoom: number;
    } & {
      maxBounds?: import("../types").Bounds | undefined;
      viewport?: import("../types").LngLat[] | undefined;
      mapStyle?: "black" | "indigo" | undefined;
    }
  > & {
    onInit?: ((e: Tianditu.Map) => any) | undefined;
    onDragstart?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onDrag?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onDragend?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onClick?: ((e: Tianditu.MapEvent) => any) | undefined;
    onDblclick?: ((e: Tianditu.MapEvent) => any) | undefined;
    onMouseout?: ((e: Tianditu.MapEvent) => any) | undefined;
    onMouseover?: ((e: Tianditu.MapEvent) => any) | undefined;
    onViewchange?: ((e: Tianditu.ControlOverviewMapEvent) => any) | undefined;
    onContextmenu?: ((e: Tianditu.MapEvent) => any) | undefined;
    onMousemove?: ((e: Tianditu.MapEvent) => any) | undefined;
    onMovestart?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onMove?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onMoveend?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onZoomstart?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onZoomend?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onAddoverlay?:
      | ((
          e: Tianditu.MapEventBase & {
            addoverlay: Tianditu.Overlay;
          }
        ) => any)
      | undefined;
    onRemoveoverlay?:
      | ((
          e: Tianditu.MapEventBase & {
            removeoverlay: Tianditu.Overlay;
          }
        ) => any)
      | undefined;
    onAddcontrol?:
      | ((
          e: Tianditu.MapEventBase & {
            addcontrol: Tianditu.Control;
          }
        ) => any)
      | undefined;
    onRemovecontrol?:
      | ((
          e: Tianditu.MapEventBase & {
            removecontrol: Tianditu.Control;
          }
        ) => any)
      | undefined;
    onClearoverlays?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onLayeradd?:
      | ((
          e: Tianditu.MapEventBase & {
            layer: Tianditu.TileLayer;
          }
        ) => any)
      | undefined;
    onLayerremove?:
      | ((
          e: Tianditu.MapEventBase & {
            layer: Tianditu.TileLayer;
          }
        ) => any)
      | undefined;
    onLoad?: ((e: Tianditu.MapEventBase) => any) | undefined;
    onResize?:
      | ((
          e: Tianditu.MapEventBase & {
            newSize: Tianditu.Point;
            oldSize: Tianditu.Point;
          }
        ) => any)
      | undefined;
    onLevels?:
      | ((
          e: Tianditu.MapEventBase & {
            minZoom: number;
            maxZoom: number;
          }
        ) => any)
      | undefined;
    onTouchstart?: ((e: Tianditu.MapEvent) => any) | undefined;
    onTouchmove?: ((e: Tianditu.MapEvent) => any) | undefined;
    onTouchend?: ((e: Tianditu.MapEvent) => any) | undefined;
    onLongpress?: ((e: Tianditu.MapEvent) => any) | undefined;
  },
  {
    drag: boolean;
    scrollWheelZoom: boolean;
    doubleClickZoom: boolean;
    keyboard: boolean;
    inertia: boolean;
    continuousZoom: boolean;
    pinchToZoom: boolean;
    autoResize: boolean;
    mid: string;
    controls: (import("./types").ControlNames | import("./types").ControlOpts)[];
    projection: string;
    minZoom: number;
    maxZoom: number;
    center: import("../types").LngLat;
    zoom: number;
  }
>;
export default _default;
