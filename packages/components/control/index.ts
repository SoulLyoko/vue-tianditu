import { defineComponent, onMounted, onUnmounted } from "vue-demi";

import { useEvent, useMapRoot } from "~/composables";
import { controlProps, controlEmits, useInit, useWatch, NATIVE_EVENTS } from "./composables";
import { h } from "~/utils";

export { controlProps, controlEmits } from "./composables";
export type { ControlProps, ControlEmits, ControlEmitFn } from "./composables";
export type ControlInstance = InstanceType<typeof TdtControl>;

export const TdtControl = defineComponent({
  name: "TdtControl",
  props: controlProps,
  emits: controlEmits,
  setup(props, { emit, slots }) {
    let controlRef = h("div");

    onMounted(async () => {
      onUnmounted(() => tdtComponent && tdtMap?.removeControl(tdtComponent));

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props);
      tdtComponent.onAdd = () => controlRef.el || controlRef.elm;
      tdtComponent.onRemove = () => {};
      tdtMap.addControl(tdtComponent);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      emit("init", tdtComponent);
    });

    return () => {
      controlRef = h("div", { class: "tdt-control-custom" }, slots.default?.());
      return controlRef;
    };
  }
});
