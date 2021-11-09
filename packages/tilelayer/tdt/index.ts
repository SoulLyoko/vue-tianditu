import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtTilelayerTdt = defineComponent({
  name: "TdtTilelayerTdt",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, attrs }) {
    onBeforeMount(async () => {
      onUnmounted(() => tdtComponent && tdtMap?.removeLayer(tdtComponent));

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props, attrs);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      tdtMap.addLayer(tdtComponent);
      emit("init", tdtComponent);
    });

    return () => {};
  }
});

export type TdtTilelayerTdt = InstanceType<typeof TdtTilelayerTdt>;
