import { toMarker } from "../../../utils";
import { Props } from "./";

export function useInit(props: Props, map: T.Map) {
  const { markers, girdSize, maxZoom } = props;
  const marker = markers?.map(item => toMarker(item));
  const instance = new T.MarkerClusterer(map, {
    markers: marker,
    girdSize,
    maxZoom
  });
  return instance;
}
