import { Emitter } from "mitt";

export type MapEmitEvents = { mapInit: T.Map };
export type MapEmitter = Emitter<MapEmitEvents>;
