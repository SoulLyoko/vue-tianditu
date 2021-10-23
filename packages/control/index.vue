<script lang="ts">
import { defineComponent, h, ref, inject, onUnmounted } from "vue-demi";
import type { Ref } from "vue-demi";
import type { MapEmitter } from "../types";
import { useEvent } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export default defineComponent({
  name: "TdtControl",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, expose, slots }) {
    const tdtMap = ref<Tianditu.Map>();
    const tdtComponent = ref<Tianditu.Control>();
    expose?.({ tdtComponent });

    const mapRoot = inject<Ref<Tianditu.Map>>("mapRoot");
    const mapEmitter = inject<MapEmitter>("mapEmitter");
    if (mapRoot?.value) {
      initComponent(mapRoot?.value);
    } else {
      mapEmitter?.on("mapInit", initComponent);
    }

    const controlRef = h(
      "div",
      {
        class: "tdt-control-custom"
      },
      slots.default?.()
    );
    function initComponent(map: Tianditu.Map): void {
      mapEmitter?.off("mapInit", initComponent);
      tdtMap.value = map;
      tdtComponent.value = useInit(props);
      // @ts-ignore: VNode.elm in Vue2
      tdtComponent.value.onAdd = () => controlRef.el || controlRef.elm;
      tdtComponent.value.onRemove = () => {};
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent.value });
      useWatch({ props, instance: tdtComponent.value });
      map.addControl(tdtComponent.value);
      emit("init", tdtComponent.value);
    }

    onUnmounted(() => {
      tdtComponent.value && tdtMap.value?.removeControl(tdtComponent.value);
    });

    return () => controlRef;
  }
});
</script>
