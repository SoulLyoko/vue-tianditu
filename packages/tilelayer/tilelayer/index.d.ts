declare const _default: import("vue-demi").DefineComponent<
  {
    minZoom: {
      type: import("vue-demi").PropType<number>;
    };
    maxZoom: {
      type: import("vue-demi").PropType<number>;
    };
    errorTileUrl: {
      type: import("vue-demi").PropType<string>;
    };
    opacity: {
      type: import("vue-demi").PropType<number>;
    };
    zIndex: {
      type: import("vue-demi").PropType<number>;
    };
    bounds: {
      type: import("vue-demi").PropType<import("../../types").Bounds>;
      default: () => never[];
    };
    url: {
      type: import("vue-demi").PropType<string>;
      default: string;
    };
  },
  () => void,
  unknown,
  {},
  {},
  import("vue-demi").ComponentOptionsMixin,
  import("vue-demi").ComponentOptionsMixin,
  {
    init: (e: Tianditu.TileLayer) => boolean;
    loading(e: Pick<Tianditu.TileLayerEvent, "type" | "target">): void;
    load(e: Pick<Tianditu.TileLayerEvent, "type" | "target">): void;
    tileloadstart(e: Tianditu.TileLayerEvent): void;
    tileload(e: Tianditu.TileLayerEvent): void;
    tileunload(e: Tianditu.TileLayerEvent): void;
    tileerror(e: Tianditu.TileLayerEvent): void;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      minZoom?: unknown;
      maxZoom?: unknown;
      errorTileUrl?: unknown;
      opacity?: unknown;
      zIndex?: unknown;
      bounds?: unknown;
      url?: unknown;
    } & {
      bounds: import("../../types").Bounds;
      url: string;
    } & {
      opacity?: number | undefined;
      minZoom?: number | undefined;
      maxZoom?: number | undefined;
      zIndex?: number | undefined;
      errorTileUrl?: string | undefined;
    }
  > & {
    onInit?: ((e: Tianditu.TileLayer) => any) | undefined;
    onLoad?: ((e: Pick<Tianditu.TileLayerEvent, "type" | "target">) => any) | undefined;
    onLoading?: ((e: Pick<Tianditu.TileLayerEvent, "type" | "target">) => any) | undefined;
    onTileloadstart?: ((e: Tianditu.TileLayerEvent) => any) | undefined;
    onTileload?: ((e: Tianditu.TileLayerEvent) => any) | undefined;
    onTileunload?: ((e: Tianditu.TileLayerEvent) => any) | undefined;
    onTileerror?: ((e: Tianditu.TileLayerEvent) => any) | undefined;
  },
  {
    bounds: import("../../types").Bounds;
    url: string;
  }
>;
export default _default;
