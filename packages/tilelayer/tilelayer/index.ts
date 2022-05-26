import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtTilelayer = defineComponent({
  name: "TdtTilelayer",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, attrs }) {
    onBeforeMount(async () => {
      onUnmounted(() => tdtComponent && tdtMap?.removeLayer(tdtComponent));

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props, attrs);
      tdtMap.addLayer(tdtComponent);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      emit("init", tdtComponent);
    });

    return () => {};
  }
});
