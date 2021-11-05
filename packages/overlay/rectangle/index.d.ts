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
    init: (e: T.Rectangle) => boolean;
    click(e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>): void;
    dblclick(e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>): void;
    mousedown(e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>): void;
    mouseup(e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>): void;
    mouseout(e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>): void;
    mouseover(e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>): void;
    remove(e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>): void;
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
    onInit?: ((e: T.Rectangle) => any) | undefined;
    onClick?: ((e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>) => any) | undefined;
    onDblclick?: ((e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>) => any) | undefined;
    onMouseout?: ((e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>) => any) | undefined;
    onMouseover?: ((e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>) => any) | undefined;
    onMousedown?: ((e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>) => any) | undefined;
    onMouseup?: ((e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>) => any) | undefined;
    onRemove?: ((e: T.OverlayEvent<T.Rectangle, T.LngLatBounds>) => any) | undefined;
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
