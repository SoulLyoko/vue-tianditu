import { watch } from "vue-demi";
import { Props } from ".";

export function useWatch({ props, instance }: { props: Props; instance: T.GridlineLayer }) {
  watch(
    () => props.opacity,
    val => val && instance.setOpacity(val)
  );
  watch(
    () => props.zIndex,
    val => val && instance.setZIndex(val)
  );
}
