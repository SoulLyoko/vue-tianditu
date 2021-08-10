import { toLngLat } from "../../utils";
import { Props } from "../types";

export function useInit(props: Props) {
  let { projection, minZoom, maxZoom, center, zoom } = props;
  const instance = new T.Map(props.mid, {
    projection,
    minZoom,
    maxZoom,
    center: toLngLat(center),
    zoom
  });
  instance.centerAndZoom(toLngLat(center), zoom);
  return instance;
}
