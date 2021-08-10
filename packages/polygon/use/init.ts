import { toLngLats } from "../../utils";
import { Props } from "../types";

export function useInit(props: Props) {
  let { path, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props;
  const instance = new T.Polygon(toLngLats(path), {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity
  });
  return instance;
}
