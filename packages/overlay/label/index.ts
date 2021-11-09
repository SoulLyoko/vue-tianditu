import { defineComponent, onUnmounted } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtLabel = defineComponent({
  name: "TdtLabel",
  props: PROPS,
  emits: EVENTS,
  async setup(props, { emit }) {
    let tdtMap: T.Map | null = null;
    let tdtComponent: T.Label | null = null;
    onUnmounted(() => tdtComponent && tdtMap?.removeOverLay(tdtComponent));

    tdtMap = await useMapRoot();
    tdtComponent = useInit(props);
    useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent, extData: props.extData });
    useWatch({ props, instance: tdtComponent });
    tdtMap.addOverLay(tdtComponent);
    emit("init", tdtComponent);

    return () => {};
  }
});

export type TdtLabel = InstanceType<typeof TdtLabel>;
