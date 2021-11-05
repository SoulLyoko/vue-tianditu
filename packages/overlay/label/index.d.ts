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
    init: (e: T.Label) => boolean;
    click(e: T.OverlayEvent<T.Label, T.LngLat>): void;
    dblclick(e: T.OverlayEvent<T.Label, T.LngLat>): void;
    mousedown(e: T.OverlayEvent<T.Label, T.LngLat>): void;
    mouseup(e: T.OverlayEvent<T.Label, T.LngLat>): void;
    mouseout(e: T.OverlayEvent<T.Label, T.LngLat>): void;
    mouseover(e: T.OverlayEvent<T.Label, T.LngLat>): void;
    remove(e: T.OverlayEvent<T.Label, T.LngLat>): void;
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
    onInit?: ((e: T.Label) => any) | undefined;
    onClick?: ((e: T.OverlayEvent<T.Label, T.LngLat>) => any) | undefined;
    onDblclick?: ((e: T.OverlayEvent<T.Label, T.LngLat>) => any) | undefined;
    onMouseout?: ((e: T.OverlayEvent<T.Label, T.LngLat>) => any) | undefined;
    onMouseover?: ((e: T.OverlayEvent<T.Label, T.LngLat>) => any) | undefined;
    onMousedown?: ((e: T.OverlayEvent<T.Label, T.LngLat>) => any) | undefined;
    onMouseup?: ((e: T.OverlayEvent<T.Label, T.LngLat>) => any) | undefined;
    onRemove?: ((e: T.OverlayEvent<T.Label, T.LngLat>) => any) | undefined;
  },
  {
    offset: import("../../types").Point;
    position: import("../../types").LngLat;
    text: string;
  }
>;
export default _default;
