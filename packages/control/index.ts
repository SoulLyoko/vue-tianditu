import { defineComponent, h, onMounted, onUnmounted, ref } from "vue-demi";
import { VNodeEl } from "~/types";
import { useEvent, useMapRoot } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtControl = defineComponent({
  name: "TdtControl",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    const controlRef = ref(h("div") as VNodeEl);

    onMounted(async () => {
      onUnmounted(() => tdtComponent && tdtMap?.removeControl(tdtComponent));

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props);

      tdtComponent.onAdd = () => controlRef.value.el || controlRef.value.elm;
      tdtComponent.onRemove = () => {};
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      tdtMap.addControl(tdtComponent);
      emit("init", tdtComponent);
    });

    return () => {
      controlRef.value = h("div", { class: "tdt-control-custom" }, slots.default?.()) as VNodeEl;
      return controlRef.value;
    };
  }
});

export type TdtControl = InstanceType<typeof TdtControl>;
