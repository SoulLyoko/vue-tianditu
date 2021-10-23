import { watch } from "vue-demi";
import { toIcon, toLngLat } from "../../../utils";
import { Props } from "../types";

export function useWatch({ props, instance }: { props: Props; instance: Tianditu.Marker }) {
  watch(
    () => props.position,
    val => val && instance.setLngLat(toLngLat(val))
  );
  watch(
    () => props.draggable,
    val => (val ? instance.enableDragging() : instance.disableDragging())
  );
  watch(
    () => props.icon,
    val => val && instance.setIcon(toIcon(val)),
    { immediate: true }
  );
  watch(
    () => props.zIndexOffset,
    val => val && instance.setZIndexOffset(val),
    { immediate: true }
  );
  watch(
    () => props.opacity,
    val => val && instance.setOpacity(val),
    { immediate: true }
  );
}
