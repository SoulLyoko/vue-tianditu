import { toBounds } from "../../../utils";
import { Props } from "../types";

export function useInit(props: Props, attrs: Record<string, unknown>) {
  let { url, minZoom, maxZoom, errorTileUrl, opacity, zIndex, bounds } = props;
  const instance = new T.TileLayer.TDT(url, {
    minZoom,
    maxZoom,
    errorTileUrl,
    opacity,
    zIndex,
    bounds: toBounds(bounds),
    ...attrs
  });
  return instance;
}
