export type MapEmitEvents = { mapInit: T.Map };

export interface MapEmitter {
  on(type: "mapInit", handler: (map: T.Map) => void): void;
  off(type: "mapInit", handler: (map: T.Map) => void): void;
  emit(type: "mapInit", map: T.Map): void;
}
