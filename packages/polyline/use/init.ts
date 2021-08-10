import { toLngLats } from "../../utils";
import { Props } from "../types";

export function useInit(props: Props) {
  let { path, color, weight, opacity, lineStyle } = props;
  const instance = new T.Polyline(toLngLats(path), {
    color,
    weight,
    opacity,
    lineStyle
  });
  return instance;
}
