import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";

import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtMarkerClusterer = defineComponent({
  name: "TdtMarkerClusterer",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit }) {
    onBeforeMount(async () => {
      onUnmounted(() => tdtComponent?.clearMarkers());

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props, tdtMap);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      emit("init", tdtComponent);
    });

    return () => {};
  }
});
