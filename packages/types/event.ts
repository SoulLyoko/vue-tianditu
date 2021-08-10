export type MapEventParam<E extends keyof Tianditu.MapEvents> = Parameters<Tianditu.MapEvents[E]>[0];
export type LabelParam<E extends keyof Tianditu.LabelEvents> = Parameters<Tianditu.LabelEvents[E]>[0];
export type MakerEventParam<E extends keyof Tianditu.MakerEvents> = Parameters<Tianditu.MakerEvents[E]>[0];
export type CircleEventParam<E extends keyof Tianditu.CircleEvents> = Parameters<Tianditu.CircleEvents[E]>[0];
export type PolygonEventParam<E extends keyof Tianditu.PolygonEvents> = Parameters<Tianditu.PolygonEvents[E]>[0];
export type PolylineEventParam<E extends keyof Tianditu.PolylineEvents> = Parameters<Tianditu.PolylineEvents[E]>[0];
export type RectangleEventParam<E extends keyof Tianditu.RectangleEvents> = Parameters<Tianditu.RectangleEvents[E]>[0];
export type InfoWindowEventParam<E extends keyof Tianditu.InfoWindowEvents> = Parameters<
  Tianditu.InfoWindowEvents[E]
>[0];
export type TileLayerEventParam<E extends keyof Tianditu.TileLayerEvents> = Parameters<Tianditu.TileLayerEvents[E]>[0];
