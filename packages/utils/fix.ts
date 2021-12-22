/**
 * 解决地图的滚动冒泡和点击及双击冒泡
 */
export function fixMapPropagation(map: T.Map | null) {
  return {
    mousewheel: (e: Event) => e.stopPropagation(),
    click: (e: Event) => {
      e.stopPropagation();
      if (map?.isDoubleClickZoom()) {
        map?.disableDoubleClickZoom();
        setTimeout(() => map?.enableDoubleClickZoom(), 300);
      }
    }
  };
}
