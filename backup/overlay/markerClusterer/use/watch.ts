import { watch } from "vue-demi";

import { toMarker, toPoint } from "../../../utils";
import { Props } from "./";

export function useWatch({ props, instance }: { props: Props; instance: T.MarkerClusterer }) {
  watch(
    () => props.girdSize,
    val => val && instance.setGridSize(val)
  );
  watch(
    () => props.maxZoom,
    val => val && instance.setMaxZoom(val)
  );
  watch(
    () => props.markers,
    val => {
      instance.clearMarkers();
      val?.length && instance.addMarkers(val.map(toMarker));
    }
  );
  watch(
    () => props.styles,
    val => {
      const styles =
        val?.map(item => {
          return {
            ...item,
            offset: item.offset && toPoint(item.offset)
          };
        }) ?? [];
      instance.setStyles(styles);
    },
    { immediate: true }
  );
}
