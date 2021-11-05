declare const _default: import("vue-demi").DefineComponent<
  {
    edit: {
      type: BooleanConstructor;
      default: boolean;
    };
    center: {
      type: import("vue-demi").PropType<import("../../types").LngLat>;
      default: () => number[];
    };
    radius: {
      type: NumberConstructor;
      default: number;
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
    init: (e: T.Circle) => boolean;
    click(e: T.OverlayEvent<T.Circle, T.LngLat>): void;
    dblclick(e: T.OverlayEvent<T.Circle, T.LngLat>): void;
    mousedown(e: T.OverlayEvent<T.Circle, T.LngLat>): void;
    mouseup(e: T.OverlayEvent<T.Circle, T.LngLat>): void;
    mouseout(e: T.OverlayEvent<T.Circle, T.LngLat>): void;
    mouseover(e: T.OverlayEvent<T.Circle, T.LngLat>): void;
    remove(e: T.OverlayEvent<T.Circle, T.LngLat>): void;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      edit?: unknown;
      center?: unknown;
      radius?: unknown;
      extData?: unknown;
      color?: unknown;
      weight?: unknown;
      opacity?: unknown;
      lineStyle?: unknown;
      fillColor?: unknown;
      fillOpacity?: unknown;
    } & {
      opacity: number;
      center: import("../../types").LngLat;
      edit: boolean;
      radius: number;
      color: string;
      weight: number;
      lineStyle: "solid" | "dashed";
      fillColor: string;
      fillOpacity: number;
    } & {
      extData?: unknown;
    }
  > & {
    onInit?: ((e: T.Circle) => any) | undefined;
    onClick?: ((e: T.OverlayEvent<T.Circle, T.LngLat>) => any) | undefined;
    onDblclick?: ((e: T.OverlayEvent<T.Circle, T.LngLat>) => any) | undefined;
    onMouseout?: ((e: T.OverlayEvent<T.Circle, T.LngLat>) => any) | undefined;
    onMouseover?: ((e: T.OverlayEvent<T.Circle, T.LngLat>) => any) | undefined;
    onMousedown?: ((e: T.OverlayEvent<T.Circle, T.LngLat>) => any) | undefined;
    onMouseup?: ((e: T.OverlayEvent<T.Circle, T.LngLat>) => any) | undefined;
    onRemove?: ((e: T.OverlayEvent<T.Circle, T.LngLat>) => any) | undefined;
  },
  {
    opacity: number;
    center: import("../../types").LngLat;
    edit: boolean;
    radius: number;
    color: string;
    weight: number;
    lineStyle: "solid" | "dashed";
    fillColor: string;
    fillOpacity: number;
  }
>;
export default _default;
