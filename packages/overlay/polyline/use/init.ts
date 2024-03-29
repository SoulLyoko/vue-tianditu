import { toLngLats } from "../../../utils";
import { Props } from "./";

export function useInit(props: Props) {
  const { path, color, weight, opacity, lineStyle } = props;
  const instance = new T.Polyline(toLngLats(path), {
    color,
    weight,
    opacity,
    lineStyle
  });
  return instance;
}
