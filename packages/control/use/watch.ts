import { watch } from "vue-demi";
import { toPoint } from "../../utils";
import { Props } from "../types";

export function useWatch({ props, instance }: { props: Props; instance: Tianditu.Control }) {
  watch(
    () => props.position,
    val => val && instance.setPosition(val)
  );
  watch(
    () => props.offset,
    val => val && instance.setOffset(toPoint(val))
  );
}
