declare const _default: import("vue-demi").DefineComponent<
  {
    opacity: {
      type: import("vue-demi").PropType<number>;
    };
    zIndex: {
      type: import("vue-demi").PropType<number>;
    };
    layers: {
      type: import("vue-demi").PropType<string>;
    };
    styles: {
      type: import("vue-demi").PropType<string>;
    };
    format: {
      type: import("vue-demi").PropType<string>;
    };
    transparent: {
      type: import("vue-demi").PropType<boolean>;
    };
    version: {
      type: import("vue-demi").PropType<string>;
    };
    srs: {
      type: import("vue-demi").PropType<string>;
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
    init: (e: T.TileLayer.WMS) => boolean;
    loading(e: Pick<T.TileLayerEvent, "type" | "target">): void;
    load(e: Pick<T.TileLayerEvent, "type" | "target">): void;
    tileloadstart(e: T.TileLayerEvent): void;
    tileload(e: T.TileLayerEvent): void;
    tileunload(e: T.TileLayerEvent): void;
    tileerror(e: T.TileLayerEvent): void;
  },
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      opacity?: unknown;
      zIndex?: unknown;
      layers?: unknown;
      styles?: unknown;
      format?: unknown;
      transparent?: unknown;
      version?: unknown;
      srs?: unknown;
      url?: unknown;
    } & {
      url: string;
    } & {
      opacity?: number | undefined;
      zIndex?: number | undefined;
      layers?: string | undefined;
      styles?: string | undefined;
      format?: string | undefined;
      transparent?: boolean | undefined;
      version?: string | undefined;
      srs?: string | undefined;
    }
  > & {
    onInit?: ((e: T.TileLayer.WMS) => any) | undefined;
    onLoad?: ((e: Pick<T.TileLayerEvent, "type" | "target">) => any) | undefined;
    onLoading?: ((e: Pick<T.TileLayerEvent, "type" | "target">) => any) | undefined;
    onTileloadstart?: ((e: T.TileLayerEvent) => any) | undefined;
    onTileload?: ((e: T.TileLayerEvent) => any) | undefined;
    onTileunload?: ((e: T.TileLayerEvent) => any) | undefined;
    onTileerror?: ((e: T.TileLayerEvent) => any) | undefined;
  },
  {
    url: string;
  }
>;
export default _default;
