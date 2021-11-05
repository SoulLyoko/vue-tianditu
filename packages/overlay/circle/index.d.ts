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
    init: (e: Tianditu.Circle) => boolean;
    click(e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>): void;
    dblclick(e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>): void;
    mousedown(e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>): void;
    mouseup(e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>): void;
    mouseout(e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>): void;
    mouseover(e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>): void;
    remove(e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>): void;
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
    onInit?: ((e: Tianditu.Circle) => any) | undefined;
    onClick?: ((e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>) => any) | undefined;
    onDblclick?: ((e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>) => any) | undefined;
    onMouseout?: ((e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>) => any) | undefined;
    onMouseover?: ((e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>) => any) | undefined;
    onMousedown?: ((e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>) => any) | undefined;
    onMouseup?: ((e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>) => any) | undefined;
    onRemove?: ((e: Tianditu.OverlayEvent<Tianditu.Circle, Tianditu.LngLat>) => any) | undefined;
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
