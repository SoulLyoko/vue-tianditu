import { Props } from "../types";

export function useInit(props: Props, attrs: Record<string, unknown>) {
  let { url, layers, styles, format, transparent, version, srs } = props;
  const instance = new T.TileLayer.WMS(url, {
    layers,
    styles,
    format,
    transparent,
    version,
    srs,
    ...attrs
  });
  return instance;
}
