import { watch } from "vue";
import { toMarker, toPoint } from "@vue-tianditu/core";
import { Props } from "./";

export function useWatch({ props, instance }: { props: Props; instance: T.MarkerClusterer }) {
  watch(
    () => props.girdSize,
    (val) => val && instance.setGridSize(val),
  );
  watch(
    () => props.maxZoom,
    (val) => val && instance.setMaxZoom(val),
  );
  watch(
    () => props.markers,
    (val) => {
      instance.clearMarkers();
      if (val?.length) instance.addMarkers(val.map(toMarker));
    },
  );
  watch(
    () => props.styles,
    (val) => {
      const styles =
        val?.map((item) => {
          return {
            ...item,
            offset: item.offset && toPoint(item.offset),
          };
        }) ?? [];
      instance.setStyles(styles);
    },
    { immediate: true },
  );
}
