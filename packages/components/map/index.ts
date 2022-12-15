import type { MapEmitEvents } from "~/types";

import mitt from "mitt";
import { defineComponent, ref, provide, onMounted } from "vue-demi";

import { useApiLoader, useEvent } from "~/composables";
import { mapEmits, mapProps, useInit, useWatch, useControls, NATIVE_EVENTS } from "./composables";
import { h } from "~/utils";

export { mapProps, mapEmits } from "./composables";
export type { MapProps, MapEmits, MapEmitFn } from "./composables";
export type MapInstance = InstanceType<typeof TdtMap>;

export const TdtMap = defineComponent({
  name: "TdtMap",
  props: mapProps,
  emits: mapEmits,
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
