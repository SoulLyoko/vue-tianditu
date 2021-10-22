import { toBounds } from "../../../utils";
import { Props } from "../types";

export function useInit(props: Props) {
  const { bounds, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props;
  const instance = new T.Rectangle(toBounds(bounds), {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity
  });
  return instance;
}
