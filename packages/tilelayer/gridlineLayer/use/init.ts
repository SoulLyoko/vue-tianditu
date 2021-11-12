import { Props } from ".";

export function useInit(props: Props) {
  const { tileSize, minZoom, maxZoom, opacity, outlineSize, textSize } = props;
  const instance = new T.GridlineLayer({
    tileSize,
    minZoom,
    maxZoom,
    opacity,
    outlineSize,
    textSize
  });
  return instance;
}
