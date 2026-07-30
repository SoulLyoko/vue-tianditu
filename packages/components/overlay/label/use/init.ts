import { toLngLat, toPoint } from "@vue-tianditu/core";
import { Props } from "./";

export function useInit(props: Props) {
  const { position, offset, text } = props;
  const instance = new T.Label({
    position: toLngLat(position),
    offset: toPoint(offset),
    text,
  });
  return instance;
}
