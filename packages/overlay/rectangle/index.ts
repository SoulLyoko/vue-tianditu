import { defineComponent, onUnmounted } from "vue-demi";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtRectangle = defineComponent({
  name: "TdtRectangle",
  props: PROPS,
  emits: EVENTS,
  async setup(props, { emit, expose }) {
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

export type TdtRectangle = InstanceType<typeof TdtRectangle>;
