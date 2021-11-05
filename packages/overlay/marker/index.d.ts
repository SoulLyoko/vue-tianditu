declare const _default: import("vue-demi").DefineComponent<
  {
    position: {
      type: import("vue-demi").PropType<import("../../types").LngLat>;
      default: () => number[];
    };
    extData: {
      type: import("vue-demi").PropType<any>;
    };
    icon: {
      type: import("vue-demi").PropType<string | import("../../types").IconOptions>;
    };
    draggable: {
      type: BooleanConstructor;
      default: boolean;
    };
    title: {
      type: StringConstructor;
      default: string;
    };
    zIndexOffset: {
      type: NumberConstructor;
      default: number;
    };
    opacity: {
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
    init: (e: T.Marker) => boolean;
    dragstart(e: Pick<T.MarkerEvent, "type" | "target">): void;
    drag(e: Pick<T.MarkerEvent, "type" | "target" | "lnglat">): void;
    dragend(e: Pick<T.MarkerEvent, "type" | "target" | "lnglat">): void;
    click(e: T.OverlayEvent<T.Marker, T.LngLat>): void;
    dblclick(e: T.OverlayEvent<T.Marker, T.LngLat>): void;
    mousedown(e: T.OverlayEvent<T.Marker, T.LngLat>): void;
    mouseup(e: T.OverlayEvent<T.Marker, T.LngLat>): void;
    mouseout(e: T.OverlayEvent<T.Marker, T.LngLat>): void;
    mouseover(e: T.OverlayEvent<T.Marker, T.LngLat>): void;
    remove(e: T.OverlayEvent<T.Marker, T.LngLat>): void;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      position?: unknown;
      extData?: unknown;
      icon?: unknown;
      draggable?: unknown;
      title?: unknown;
      zIndexOffset?: unknown;
      opacity?: unknown;
    } & {
      position: import("../../types").LngLat;
      draggable: boolean;
      title: string;
      zIndexOffset: number;
      opacity: number;
    } & {
      extData?: unknown;
      icon?: string | import("../../types").IconOptions | undefined;
    }
  > & {
    onInit?: ((e: T.Marker) => any) | undefined;
    onDragstart?: ((e: Pick<T.MarkerEvent, "type" | "target">) => any) | undefined;
    onDrag?: ((e: Pick<T.MarkerEvent, "type" | "target" | "lnglat">) => any) | undefined;
    onDragend?: ((e: Pick<T.MarkerEvent, "type" | "target" | "lnglat">) => any) | undefined;
    onClick?: ((e: T.OverlayEvent<T.Marker, T.LngLat>) => any) | undefined;
    onDblclick?: ((e: T.OverlayEvent<T.Marker, T.LngLat>) => any) | undefined;
    onMouseout?: ((e: T.OverlayEvent<T.Marker, T.LngLat>) => any) | undefined;
    onMouseover?: ((e: T.OverlayEvent<T.Marker, T.LngLat>) => any) | undefined;
    onMousedown?: ((e: T.OverlayEvent<T.Marker, T.LngLat>) => any) | undefined;
    onMouseup?: ((e: T.OverlayEvent<T.Marker, T.LngLat>) => any) | undefined;
    onRemove?: ((e: T.OverlayEvent<T.Marker, T.LngLat>) => any) | undefined;
  },
  {
    position: import("../../types").LngLat;
    draggable: boolean;
    title: string;
    zIndexOffset: number;
    opacity: number;
  }
>;
export default _default;
