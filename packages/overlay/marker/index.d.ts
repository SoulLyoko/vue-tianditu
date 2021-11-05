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
    init: (e: Tianditu.Marker) => boolean;
    dragstart(e: Pick<Tianditu.MarkerEvent, "type" | "target">): void;
    drag(e: Pick<Tianditu.MarkerEvent, "type" | "target" | "lnglat">): void;
    dragend(e: Pick<Tianditu.MarkerEvent, "type" | "target" | "lnglat">): void;
    click(e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>): void;
    dblclick(e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>): void;
    mousedown(e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>): void;
    mouseup(e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>): void;
    mouseout(e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>): void;
    mouseover(e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>): void;
    remove(e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>): void;
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
    onInit?: ((e: Tianditu.Marker) => any) | undefined;
    onDragstart?: ((e: Pick<Tianditu.MarkerEvent, "type" | "target">) => any) | undefined;
    onDrag?: ((e: Pick<Tianditu.MarkerEvent, "type" | "target" | "lnglat">) => any) | undefined;
    onDragend?: ((e: Pick<Tianditu.MarkerEvent, "type" | "target" | "lnglat">) => any) | undefined;
    onClick?: ((e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>) => any) | undefined;
    onDblclick?: ((e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>) => any) | undefined;
    onMouseout?: ((e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>) => any) | undefined;
    onMouseover?: ((e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>) => any) | undefined;
    onMousedown?: ((e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>) => any) | undefined;
    onMouseup?: ((e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>) => any) | undefined;
    onRemove?: ((e: Tianditu.OverlayEvent<Tianditu.Marker, Tianditu.LngLat>) => any) | undefined;
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
