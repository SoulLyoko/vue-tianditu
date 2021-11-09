import { defineComponent, h, ref, onUnmounted } from "vue-demi";
import { useEvent, useMapRoot } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export const TdtControl = defineComponent({
  name: "TdtControl",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    onUnmounted(() => tdtComponent && tdtMap?.removeControl(tdtComponent));

    let tdtMap: T.Map;
    let tdtComponent: T.Control;
    const controlRef = h("div", { class: "tdt-control-custom" }, slots.default?.());

    useMapRoot().then(map => {
      tdtMap = map;
      tdtComponent = useInit(props);
      // @ts-ignore: VNode.elm in Vue2
      tdtComponent.onAdd = () => controlRef.el || controlRef.elm;
      tdtComponent.onRemove = () => {};
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent });
      useWatch({ props, instance: tdtComponent });
      map.addControl(tdtComponent);
      emit("init", tdtComponent);
    });

    return () => controlRef;
  }
});

export type TdtControl = InstanceType<typeof TdtControl>;
