import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";

import { useMapRoot, useEvent } from "~/composables";
import { tilelayerProps, tilelayerEmits, useInit, useWatch, NATIVE_EVENTS } from "./composables";

export { tilelayerProps, tilelayerEmits } from "./composables";
export type { TilelayerProps, TilelayerEmits, TilelayerEmitFn } from "./composables";
export type TilelayerInstance = InstanceType<typeof TdtTilelayer>;

export const TdtTilelayer = defineComponent({
  name: "TdtTilelayer",
  props: tilelayerProps,
  emits: tilelayerEmits,
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
