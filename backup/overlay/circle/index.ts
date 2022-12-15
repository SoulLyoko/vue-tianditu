import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";

import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtCircle = defineComponent({
  name: "TdtCircle",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit }) {
    onBeforeMount(async () => {
      onUnmounted(() => tdtComponent && tdtMap?.removeOverLay(tdtComponent));

      const tdtMap = await useMapRoot();
      const tdtComponent = useInit(props);
      tdtMap.addOverLay(tdtComponent);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent, extData: props.extData });
      useWatch({ props, instance: tdtComponent });
      emit("init", tdtComponent);
    });

    return () => {};
  }
});
