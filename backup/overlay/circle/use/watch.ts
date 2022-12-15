import { watch } from "vue-demi";

import { toLngLat } from "../../../utils";
import { Props } from "./";

export function useWatch({ props, instance }: { props: Props; instance: T.Circle }) {
  watch(
    () => props.center,
    val => val && instance.setCenter(toLngLat(val))
  );
  watch(
    () => props.radius,
    val => val && instance.setRadius(val)
  );
  watch(
    () => props.color,
    val => val && instance.setColor(val)
  );
  watch(
    () => props.opacity,
    val => val && instance.setOpacity(val)
  );
  watch(
    () => props.weight,
    val => val && instance.setWeight(val)
  );
  watch(
    () => props.lineStyle,
    val => val && instance.setLineStyle(val)
  );
  watch(
    () => props.fillColor,
    val => val && instance.setFillColor(val)
  );
  watch(
    () => props.fillOpacity,
    val => val && instance.setFillOpacity(val)
  );
  watch(
    () => props.edit,
    val => (val ? instance.enableEdit() : instance.disableEdit()),
    { immediate: true }
  );
  watch(
    () => props.visible,
    val => (val ? instance.show() : instance.hide()),
    { immediate: true }
  );
}
