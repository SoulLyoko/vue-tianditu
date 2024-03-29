import { watch } from "vue-demi";
import { toLngLat, toPoint } from "../../../utils";
import { Props } from "./";

export function useWatch({ props, instance, map }: { props: Props; instance: T.InfoWindow; map: T.Map }) {
  watch(
    () => props.offset,
    val => val && instance.setOffset(toPoint(val))
  );
  watch(
    () => props.content,
    val => val && instance.setContent(val)
  );
  watch(
    () => props.target,
    val => {
      if (val instanceof Array) {
        map.openInfoWindow(instance, toLngLat(val));
      } else {
        val ? val.openInfoWindow(instance) : instance.closeInfoWindow();
      }
    },
    { immediate: true }
  );
}
