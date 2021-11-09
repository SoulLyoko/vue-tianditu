import { toPoint } from "../../../utils";
import { Props } from "./";

export function useInit(props: Props) {
  const { minWidth, maxWidth, maxHeight, autoPan, closeButton, offset, autoPanPadding, closeOnClick, content } = props;
  const instance = new T.InfoWindow(content, {
    minWidth,
    maxWidth,
    maxHeight,
    autoPan,
    closeButton,
    offset: toPoint(offset),
    autoPanPadding: toPoint(autoPanPadding),
    closeOnClick
  });
  return instance;
}
