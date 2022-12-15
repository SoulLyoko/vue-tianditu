import { toLngLat } from "../../utils";
import { Props } from "./";

export function useInit(props: Props, dom?: HTMLElement) {
  const { mid, projection, minZoom, maxZoom, center, zoom } = props;
  const instance = new T.Map(dom ?? mid, {
    projection,
    minZoom,
    maxZoom,
    center: toLngLat(center),
    zoom
  });
  instance.centerAndZoom(toLngLat(center), zoom);
  return instance;
}
