import mitt from "mitt";

type MapEvents = {
  mapInit: T.Map;
};

export const mapEmitter = mitt<MapEvents>();
