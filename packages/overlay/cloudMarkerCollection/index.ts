import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtCloudMarkerCollection = defineComponent({
  name: "TdtCloudMarkerCollection",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit }) {
    onBeforeMount(async () => {
      onUnmounted(() => {
        tdtComponent?.clear();
        tdtComponent && tdtMap?.removeOverLay(tdtComponent);
      });

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props);
      tdtMap.addOverLay(tdtComponent);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      emit("init", tdtComponent);
    });

    return () => {};
  }
});

export type TdtCloudMarkerCollection = InstanceType<typeof TdtCloudMarkerCollection>;
