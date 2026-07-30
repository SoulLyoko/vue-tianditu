import { watch } from "vue";
import { toLngLat, toPoint } from "@vue-tianditu/core";
import { Props } from "./";

export function useWatch({
  props,
  instance,
  map,
}: {
  props: Props;
  instance: T.InfoWindow;
  map: T.Map;
}) {
  watch(
    () => props.offset,
    (val) => val && instance.setOffset(toPoint(val)),
  );
  watch(
    () => props.content,
    (val) => val && instance.setContent(val),
  );
  watch(
    () => props.target,
    (val) => {
      if (val instanceof Array) {
        map.openInfoWindow(instance, toLngLat(val));
      } else {
        if (val) val.openInfoWindow(instance);
        else instance.closeInfoWindow();
      }
    },
    { immediate: true },
  );
}
