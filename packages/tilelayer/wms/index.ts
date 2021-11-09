import { defineComponent, onUnmounted } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtTilelayerWms = defineComponent({
  name: "TdtTilelayerWms",
  props: PROPS,
  emits: EVENTS,
  async setup(props, { emit, attrs }) {
    onUnmounted(() => tdtComponent && tdtMap?.removeLayer(tdtComponent));

    const tdtMap = await useMapRoot();
    const tdtComponent = useInit(props, attrs);
    useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
    useWatch({ props, instance: tdtComponent });
    tdtMap.addLayer(tdtComponent);
    emit("init", tdtComponent);

    return () => {};
  }
});

export type TdtTilelayerWms = InstanceType<typeof TdtTilelayerWms>;
