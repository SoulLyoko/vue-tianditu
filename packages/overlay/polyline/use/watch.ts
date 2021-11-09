import { watch } from "vue-demi";
import { toLngLats } from "../../../utils";
import { Props } from "./";

export function useWatch({ props, instance }: { props: Props; instance: T.Polyline }) {
  watch(
    () => props.path,
    val => val && instance.setLngLats(toLngLats(val))
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
