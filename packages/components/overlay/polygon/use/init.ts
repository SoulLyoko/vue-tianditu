import { toLngLats } from "@vue-tianditu/core";
import { Props } from "./";

export function useInit(props: Props) {
  const { path, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props;
  const instance = new T.Polygon(toLngLats(path), {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity,
  });
  return instance;
}
