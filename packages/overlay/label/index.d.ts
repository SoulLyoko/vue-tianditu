declare const _default: import("vue-demi").DefineComponent<
  {
    title: {
      type: StringConstructor;
    };
    zIndex: {
      type: NumberConstructor;
    };
    fontSize: {
      type: NumberConstructor;
    };
    fontColor: {
      type: StringConstructor;
    };
    backgroundColor: {
      type: StringConstructor;
    };
    borderLine: {
      type: NumberConstructor;
    };
    borderColor: {
      type: StringConstructor;
    };
    opacity: {
      type: NumberConstructor;
    };
    extData: {
      type: import("vue-demi").PropType<any>;
    };
    text: {
      type: StringConstructor;
      default: string;
    };
    offset: {
      type: import("vue-demi").PropType<import("../../types").Point>;
      default: () => number[];
    };
    position: {
      type: import("vue-demi").PropType<import("../../types").LngLat>;
      default: () => number[];
    };
  },
  () => void,
  unknown,
  {},
  {},
  import("vue-demi").ComponentOptionsMixin,
  import("vue-demi").ComponentOptionsMixin,
  {
    init: (e: Tianditu.Label) => boolean;
    click(e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>): void;
    dblclick(e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>): void;
    mousedown(e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>): void;
    mouseup(e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>): void;
    mouseout(e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>): void;
    mouseover(e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>): void;
    remove(e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>): void;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      title?: unknown;
      zIndex?: unknown;
      fontSize?: unknown;
      fontColor?: unknown;
      backgroundColor?: unknown;
      borderLine?: unknown;
      borderColor?: unknown;
      opacity?: unknown;
      extData?: unknown;
      text?: unknown;
      offset?: unknown;
      position?: unknown;
    } & {
      offset: import("../../types").Point;
      position: import("../../types").LngLat;
      text: string;
    } & {
      extData?: unknown;
      title?: string | undefined;
      opacity?: number | undefined;
      zIndex?: number | undefined;
      fontSize?: number | undefined;
      fontColor?: string | undefined;
      backgroundColor?: string | undefined;
      borderLine?: number | undefined;
      borderColor?: string | undefined;
    }
  > & {
    onInit?: ((e: Tianditu.Label) => any) | undefined;
    onClick?: ((e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>) => any) | undefined;
    onDblclick?: ((e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>) => any) | undefined;
    onMouseout?: ((e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>) => any) | undefined;
    onMouseover?: ((e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>) => any) | undefined;
    onMousedown?: ((e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>) => any) | undefined;
    onMouseup?: ((e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>) => any) | undefined;
    onRemove?: ((e: Tianditu.OverlayEvent<Tianditu.Label, Tianditu.LngLat>) => any) | undefined;
  },
  {
    offset: import("../../types").Point;
    position: import("../../types").LngLat;
    text: string;
  }
>;
export default _default;
