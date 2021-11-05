declare const _default: import("vue-demi").DefineComponent<
  {
    content: {
      type: import("vue-demi").PropType<string | HTMLElement>;
      default: string;
    };
    target: {
      type: import("vue-demi").PropType<import("../../types").LngLat | T.OverlayBase<any> | null>;
      default: null;
    };
    minWidth: {
      type: NumberConstructor;
      default: number;
    };
    maxWidth: {
      type: NumberConstructor;
      default: number;
    };
    maxHeight: {
      type: NumberConstructor;
      default: null;
    };
    autoPan: {
      type: BooleanConstructor;
      default: boolean;
    };
    closeButton: {
      type: BooleanConstructor;
      default: boolean;
    };
    offset: {
      type: import("vue-demi").PropType<import("../../types").Point>;
      default: () => number[];
    };
    autoPanPadding: {
      type: import("vue-demi").PropType<import("../../types").Point>;
      default: () => number[];
    };
    closeOnClick: {
      type: BooleanConstructor;
      default: boolean;
    };
  },
  () => void,
  unknown,
  {},
  {},
  import("vue-demi").ComponentOptionsMixin,
  import("vue-demi").ComponentOptionsMixin,
  {
    init: (e: T.InfoWindow) => boolean;
    "update:target": (e: any) => boolean;
    close(e: Pick<T.InfoWindowEvent, "type" | "target" | "lnglat">): void;
    open(e: Pick<T.InfoWindowEvent, "type" | "target" | "lnglat">): void;
    clickclose(e: Pick<T.InfoWindowEvent, "type" | "target">): void;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      content?: unknown;
      target?: unknown;
      minWidth?: unknown;
      maxWidth?: unknown;
      maxHeight?: unknown;
      autoPan?: unknown;
      closeButton?: unknown;
      offset?: unknown;
      autoPanPadding?: unknown;
      closeOnClick?: unknown;
    } & {
      offset: import("../../types").Point;
      target: import("../../types").LngLat | T.OverlayBase<any> | null;
      content: string | HTMLElement;
      minWidth: number;
      maxWidth: number;
      maxHeight: number;
      autoPan: boolean;
      closeButton: boolean;
      autoPanPadding: import("../../types").Point;
      closeOnClick: boolean;
    } & {}
  > & {
    onInit?: ((e: T.InfoWindow) => any) | undefined;
    onClose?: ((e: Pick<T.InfoWindowEvent, "type" | "target" | "lnglat">) => any) | undefined;
    onOpen?: ((e: Pick<T.InfoWindowEvent, "type" | "target" | "lnglat">) => any) | undefined;
    onClickclose?: ((e: Pick<T.InfoWindowEvent, "type" | "target">) => any) | undefined;
    "onUpdate:target"?: ((e: any) => any) | undefined;
  },
  {
    offset: import("../../types").Point;
    target: import("../../types").LngLat | T.OverlayBase<any> | null;
    content: string | HTMLElement;
    minWidth: number;
    maxWidth: number;
    maxHeight: number;
    autoPan: boolean;
    closeButton: boolean;
    autoPanPadding: import("../../types").Point;
    closeOnClick: boolean;
  }
>;
export default _default;
