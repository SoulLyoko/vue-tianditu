import { defineComponent, onMounted, onUnmounted } from "vue-demi";
import { useEvent, useMapRoot } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";
import { h } from "../utils";

export const TdtControl = defineComponent({
  name: "TdtControl",
  props: PROPS,
  emits: EVENTS,
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

export type TdtControl = InstanceType<typeof TdtControl>;
