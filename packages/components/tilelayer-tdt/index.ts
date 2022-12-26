import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";

import { useMapRoot, useEvent } from "~/composables";
import { tilelayerTdtProps, tilelayerTdtEmits, useInit, useWatch, NATIVE_EVENTS } from "./composables";

export { tilelayerTdtProps, tilelayerTdtEmits } from "./composables";
export type { TilelayerTdtProps, TilelayerTdtEmits, TilelayerTdtEmitFn } from "./composables";
export type TilelayerTdtInstance = InstanceType<typeof TdtTilelayerTdt>;

export const TdtTilelayerTdt = defineComponent({
  name: "TdtTilelayerTdt",
  props: tilelayerTdtProps,
  emits: tilelayerTdtEmits,
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
