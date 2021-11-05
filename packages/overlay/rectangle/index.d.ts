declare const _default: import("vue-demi").DefineComponent<
  {
    edit: {
      type: BooleanConstructor;
      default: boolean;
    };
    bounds: {
      type: import("vue-demi").PropType<import("../../types").Bounds>;
      default: () => never[];
    };
    extData: {
      type: import("vue-demi").PropType<any>;
    };
    color: {
      type: StringConstructor;
      default: string;
    };
    weight: {
      type: NumberConstructor;
      default: number;
    };
    opacity: {
      type: NumberConstructor;
      default: number;
    };
    lineStyle: {
      type: import("vue-demi").PropType<"solid" | "dashed">;
      default: string;
    };
    fillColor: {
      type: StringConstructor;
      default: string;
    };
    fillOpacity: {
      type: NumberConstructor;
      default: number;
    };
  },
  () => void,
  unknown,
  {},
  {},
  import("vue-demi").ComponentOptionsMixin,
  import("vue-demi").ComponentOptionsMixin,
  {
    init: (e: Tianditu.Rectangle) => boolean;
    click(e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>): void;
    dblclick(e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>): void;
    mousedown(e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>): void;
    mouseup(e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>): void;
    mouseout(e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>): void;
    mouseover(e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>): void;
    remove(e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>): void;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      edit?: unknown;
      bounds?: unknown;
      extData?: unknown;
      color?: unknown;
      weight?: unknown;
      opacity?: unknown;
      lineStyle?: unknown;
      fillColor?: unknown;
      fillOpacity?: unknown;
    } & {
      opacity: number;
      edit: boolean;
      color: string;
      weight: number;
      lineStyle: "solid" | "dashed";
      fillColor: string;
      fillOpacity: number;
      bounds: import("../../types").Bounds;
    } & {
      extData?: unknown;
    }
  > & {
    onInit?: ((e: Tianditu.Rectangle) => any) | undefined;
    onClick?: ((e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>) => any) | undefined;
    onDblclick?: ((e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>) => any) | undefined;
    onMouseout?: ((e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>) => any) | undefined;
    onMouseover?: ((e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>) => any) | undefined;
    onMousedown?: ((e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>) => any) | undefined;
    onMouseup?: ((e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>) => any) | undefined;
    onRemove?: ((e: Tianditu.OverlayEvent<Tianditu.Rectangle, Tianditu.LngLatBounds>) => any) | undefined;
  },
  {
    opacity: number;
    edit: boolean;
    color: string;
    weight: number;
    lineStyle: "solid" | "dashed";
    fillColor: string;
    fillOpacity: number;
    bounds: import("../../types").Bounds;
  }
>;
export default _default;
