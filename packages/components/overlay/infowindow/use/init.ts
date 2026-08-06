import { toPoint } from '@vue-tianditu/core'

import type { Props } from './'

export function useInit(props: Props, contentRef?: HTMLElement) {
  const {
    minWidth,
    maxWidth,
    maxHeight,
    autoPan,
    closeButton,
    offset,
    autoPanPadding,
    closeOnClick,
    content,
  } = props
  const instance = new T.InfoWindow(contentRef || content, {
    minWidth,
    maxWidth,
    maxHeight,
    autoPan,
    closeButton,
    offset: toPoint(offset),
    autoPanPadding: toPoint(autoPanPadding),
    closeOnClick,
  })
  return instance
}
