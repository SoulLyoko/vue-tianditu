import { defineComponent, onUnmounted } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtMarker = defineComponent({
  name: "TdtMarker",
  props: PROPS,
  emits: EVENTS,
  async setup(props, { emit }) {
    onUnmounted(() => tdtComponent && tdtMap?.removeOverLay(tdtComponent));

    const tdtMap = await useMapRoot();
    const tdtComponent = useInit(props);
    useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent, extData: props.extData });
    useWatch({ props, instance: tdtComponent });
    tdtMap.addOverLay(tdtComponent);
    emit("init", tdtComponent);

    return () => {};
  }
});

export type TdtMarker = InstanceType<typeof TdtMarker>;
