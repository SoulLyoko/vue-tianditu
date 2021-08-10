import mitt from "mitt";

type MapEvents = {
  mapInit: Tianditu.Map;
};

export const mapEmitter = mitt<MapEvents>();
