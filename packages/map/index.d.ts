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
    loadConfig: {
      type: import("vue-demi").PropType<import("../use").LoadConfig>;
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
    init(e: T.Map): void;
    viewchange(e: T.ControlOverviewMapEvent): void;
    click(e: T.MapEvent): void;
    dblclick(e: T.MapEvent): void;
    contextmenu(e: T.MapEvent): void;
    mousemove(e: T.MapEvent): void;
    mouseover(e: T.MapEvent): void;
    mouseout(e: T.MapEvent): void;
    movestart(e: T.MapEventBase): void;
    move(e: T.MapEventBase): void;
    moveend(e: T.MapEventBase): void;
    zoomstart(e: T.MapEventBase): void;
    zoomend(e: T.MapEventBase): void;
    addoverlay(
      e: T.MapEventBase & {
        addoverlay: T.Overlay;
      }
    ): void;
    removeoverlay(
      e: T.MapEventBase & {
        removeoverlay: T.Overlay;
      }
    ): void;
    addcontrol(
      e: T.MapEventBase & {
        addcontrol: T.Control;
      }
    ): void;
    removecontrol(
      e: T.MapEventBase & {
        removecontrol: T.Control;
      }
    ): void;
    clearoverlays(e: T.MapEventBase): void;
    dragstart(e: T.MapEventBase): void;
    drag(e: T.MapEventBase): void;
    dragend(e: T.MapEventBase): void;
    layeradd(
      e: T.MapEventBase & {
        layer: T.TileLayer;
      }
    ): void;
    layerremove(
      e: T.MapEventBase & {
        layer: T.TileLayer;
      }
    ): void;
    load(e: T.MapEventBase): void;
    resize(
      e: T.MapEventBase & {
        newSize: T.Point;
        oldSize: T.Point;
      }
    ): void;
    levels(
      e: T.MapEventBase & {
        minZoom: number;
        maxZoom: number;
      }
    ): void;
    touchstart(e: T.MapEvent): void;
    touchmove(e: T.MapEvent): void;
    touchend(e: T.MapEvent): void;
    longpress(e: T.MapEvent): void;
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
      loadConfig?: unknown;
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
      loadConfig?: import("../use").LoadConfig | undefined;
    }
  > & {
    onInit?: ((e: T.Map) => any) | undefined;
    onDragstart?: ((e: T.MapEventBase) => any) | undefined;
    onDrag?: ((e: T.MapEventBase) => any) | undefined;
    onDragend?: ((e: T.MapEventBase) => any) | undefined;
    onClick?: ((e: T.MapEvent) => any) | undefined;
    onDblclick?: ((e: T.MapEvent) => any) | undefined;
    onMouseout?: ((e: T.MapEvent) => any) | undefined;
    onMouseover?: ((e: T.MapEvent) => any) | undefined;
    onViewchange?: ((e: T.ControlOverviewMapEvent) => any) | undefined;
    onContextmenu?: ((e: T.MapEvent) => any) | undefined;
    onMousemove?: ((e: T.MapEvent) => any) | undefined;
    onMovestart?: ((e: T.MapEventBase) => any) | undefined;
    onMove?: ((e: T.MapEventBase) => any) | undefined;
    onMoveend?: ((e: T.MapEventBase) => any) | undefined;
    onZoomstart?: ((e: T.MapEventBase) => any) | undefined;
    onZoomend?: ((e: T.MapEventBase) => any) | undefined;
    onAddoverlay?:
      | ((
          e: T.MapEventBase & {
            addoverlay: T.Overlay;
          }
        ) => any)
      | undefined;
    onRemoveoverlay?:
      | ((
          e: T.MapEventBase & {
            removeoverlay: T.Overlay;
          }
        ) => any)
      | undefined;
    onAddcontrol?:
      | ((
          e: T.MapEventBase & {
            addcontrol: T.Control;
          }
        ) => any)
      | undefined;
    onRemovecontrol?:
      | ((
          e: T.MapEventBase & {
            removecontrol: T.Control;
          }
        ) => any)
      | undefined;
    onClearoverlays?: ((e: T.MapEventBase) => any) | undefined;
    onLayeradd?:
      | ((
          e: T.MapEventBase & {
            layer: T.TileLayer;
          }
        ) => any)
      | undefined;
    onLayerremove?:
      | ((
          e: T.MapEventBase & {
            layer: T.TileLayer;
          }
        ) => any)
      | undefined;
    onLoad?: ((e: T.MapEventBase) => any) | undefined;
    onResize?:
      | ((
          e: T.MapEventBase & {
            newSize: T.Point;
            oldSize: T.Point;
          }
        ) => any)
      | undefined;
    onLevels?:
      | ((
          e: T.MapEventBase & {
            minZoom: number;
            maxZoom: number;
          }
        ) => any)
      | undefined;
    onTouchstart?: ((e: T.MapEvent) => any) | undefined;
    onTouchmove?: ((e: T.MapEvent) => any) | undefined;
    onTouchend?: ((e: T.MapEvent) => any) | undefined;
    onLongpress?: ((e: T.MapEvent) => any) | undefined;
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
