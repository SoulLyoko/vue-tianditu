import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtInfowindow = defineComponent({
  name: "TdtInfowindow",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit }) {
    onBeforeMount(async () => {
      onUnmounted(() => tdtMap?.closeInfoWindow());

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent, emitted });
      useWatch({ props, instance: tdtComponent, map: tdtMap });
      emit("init", tdtComponent);
    });

    function emitted(event: string) {
      event === "close" && emit("update:target", null);
    }

    return () => {};
  }
});

export type TdtInfowindow = InstanceType<typeof TdtInfowindow>;
