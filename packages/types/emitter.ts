import { Emitter } from "mitt";

export type MapEmitEvents = { mapInit: Tianditu.Map };
export type MapEmitter = Emitter<MapEmitEvents>;
