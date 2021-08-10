import { toLngLat } from "../../utils";
import { Props } from "../types";

export function useInit(props: Props) {
  let { center, radius, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props;
  const instance = new T.Circle(toLngLat(center), radius, {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity
  });
  return instance;
}
