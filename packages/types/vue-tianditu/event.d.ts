declare namespace VT {
  type MapEventParam<E extends keyof T.MapEvents> = Parameters<T.MapEvents[E]>[0];
  type LabelParam<E extends keyof T.LabelEvents> = Parameters<T.LabelEvents[E]>[0];
  type MakerEventParam<E extends keyof T.MakerEvents> = Parameters<T.MakerEvents[E]>[0];
  type CircleEventParam<E extends keyof T.CircleEvents> = Parameters<T.CircleEvents[E]>[0];
  type PolygonEventParam<E extends keyof T.PolygonEvents> = Parameters<T.PolygonEvents[E]>[0];
  type PolylineEventParam<E extends keyof T.PolylineEvents> = Parameters<T.PolylineEvents[E]>[0];
  type RectangleEventParam<E extends keyof T.RectangleEvents> = Parameters<T.RectangleEvents[E]>[0];
  type InfoWindowEventParam<E extends keyof T.InfoWindowEvents> = Parameters<T.InfoWindowEvents[E]>[0];
  type TileLayerEventParam<E extends keyof T.TileLayerEvents> = Parameters<T.TileLayerEvents[E]>[0];
}
