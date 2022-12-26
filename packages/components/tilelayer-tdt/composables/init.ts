import type { TilelayerTdtProps } from "./";

import { toBounds } from "~/utils";

export function useInit(props: TilelayerTdtProps, attrs: Record<string, unknown>) {
  const { url, minZoom, maxZoom, errorTileUrl, opacity, zIndex, bounds } = props;
  const instance = new T.TileLayer.TDT(url, {
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
