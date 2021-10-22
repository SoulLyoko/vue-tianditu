import { toLngLat } from "../../../utils";
import { Props } from "../types";

export function useInit(props: Props) {
  const { /**icon,*/ draggable, title, zIndexOffset, opacity, position } = props;
  const instance = new T.Marker(toLngLat(position), {
    /** icon: icon ? toIcon(icon) : undefined,*/
    draggable,
    title,
    zIndexOffset,
    opacity
  });
  return instance;
}
