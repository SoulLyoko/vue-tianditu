import { watch } from "vue-demi";
import { toLngLat, toPoint } from "../../../utils";
import { Props } from "../types";

export function useWatch({ props, instance }: { props: Props; instance: Tianditu.Label }) {
  watch(
    () => props.position,
    val => val && instance.setLngLat(toLngLat(val))
  );
  watch(
    () => props.text,
    val => val && instance.setLabel(val)
  );
  watch(
    () => props.offset,
    val => val && instance.setOffset(toPoint(val))
  );
  watch(
    () => props.title,
    val => val && instance.setTitle(val),
    { immediate: true }
  );
  watch(
    () => props.zIndex,
    val => val && instance.setZIndex(val),
    { immediate: true }
  );
  watch(
    () => props.fontSize,
    val => val && instance.setFontSize(val),
    { immediate: true }
  );
  watch(
    () => props.fontColor,
    val => val && instance.setFontColor(val),
    { immediate: true }
  );
  watch(
    () => props.backgroundColor,
    val => val && instance.setBackgroundColor(val),
    { immediate: true }
  );
  watch(
    () => props.borderLine,
    val => val && instance.setBorderLine(val),
    { immediate: true }
  );
  watch(
    () => props.borderColor,
    val => val && instance.setBorderColor(val),
    { immediate: true }
  );
  watch(
    () => props.opacity,
    val => val && instance.setOpacity(val),
    { immediate: true }
  );
}
