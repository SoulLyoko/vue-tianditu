import { defineComponent, h, onMounted, onUnmounted } from "vue-demi";
import { VNodeEl } from "../types";
import { useEvent, useMapRoot } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtControl = defineComponent({
  name: "TdtControl",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    let controlRef = h("div") as VNodeEl;

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
      controlRef = h("div", { class: "tdt-control-custom" }, slots.default?.()) as VNodeEl;
      return controlRef;
    };
  }
});

export type TdtControl = InstanceType<typeof TdtControl>;
