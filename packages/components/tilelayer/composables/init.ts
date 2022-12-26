import type { TilelayerProps } from ".";

import { toBounds } from "~/utils";

export function useInit(props: TilelayerProps, attrs: Record<string, unknown>) {
  const { url, minZoom, maxZoom, errorTileUrl, opacity, zIndex, bounds } = props;
  const instance = new T.TileLayer(url, {
    minZoom,
    maxZoom,
    errorTileUrl,
    opacity,
    zIndex,
    bounds: bounds.length ? toBounds(bounds) : undefined,
    ...attrs
  });
  return instance;
}
