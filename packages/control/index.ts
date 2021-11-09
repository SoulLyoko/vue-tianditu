import { defineComponent, h, onBeforeMount, onUnmounted } from "vue-demi";
import { useEvent, useMapRoot } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtControl = defineComponent({
  name: "TdtControl",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    const controlRef = h("div", { class: "tdt-control-custom" }, slots.default?.());

    onBeforeMount(async () => {
      onUnmounted(() => tdtComponent && tdtMap?.removeControl(tdtComponent));

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props);
      // @ts-ignore: VNode.elm in Vue2
      tdtComponent.onAdd = () => controlRef.el || controlRef.elm;
      tdtComponent.onRemove = () => {};
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      tdtMap.addControl(tdtComponent);
      emit("init", tdtComponent);
    });

    return () => controlRef;
  }
});

export type TdtControl = InstanceType<typeof TdtControl>;
