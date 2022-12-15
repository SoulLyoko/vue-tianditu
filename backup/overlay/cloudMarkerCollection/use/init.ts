import { toLngLats } from "../../../utils";
import { Props } from "./";

export function useInit(props: Props) {
  const { ShapeType, SizeType, color, lnglats } = props;
  const instance = new T.CloudMarkerCollection(toLngLats(lnglats), {
    ShapeType,
    SizeType,
    color
  });
  return instance;
}
