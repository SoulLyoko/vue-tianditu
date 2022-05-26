import mitt from "mitt";
import { defineComponent, ref, provide, onMounted } from "vue-demi";
import { MapEmitEvents } from "../types";
import { useApiLoader, useEvent } from "../use";
import { useInit, useWatch, useControls, PROPS, EVENTS, NATIVE_EVENTS } from "./use";
import { h } from "../utils";

export const TdtMap = defineComponent({
  name: "TdtMap",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, slots }) {
    const tdtMap = ref<T.Map>();
    const mapEmitter = mitt<MapEmitEvents>();
    provide("mapRoot", tdtMap);
    provide("mapEmitter", mapEmitter);

    const tdtMapRef = h("div", {
      class: "tdt-map",
      style: "width:100%;height:100%",
      attrs: { id: props.mid }
    });

    onMounted(async () => {
      await useApiLoader(props.loadConfig);
      tdtMap.value = useInit(props, tdtMapRef.el || tdtMapRef.elm);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtMap.value });
      useWatch({ props, instance: tdtMap.value });
      useControls(props, tdtMap.value, emit);
      emit("init", tdtMap.value);
      mapEmitter.emit("mapInit", tdtMap.value);
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-map-container",
          style: "width:100%;height:100%"
        },
        [tdtMapRef, slots.default?.()]
      );
  }
});
