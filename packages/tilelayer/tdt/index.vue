<script lang="ts">
import { defineComponent, ref, inject, onUnmounted } from "vue-demi";
import type { Ref } from "vue-demi";
import type { MapEmitter } from "../../types";
import { useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export default defineComponent({
  name: "TdtTilelayerTdt",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, expose, attrs }) {
    const tdtMap = ref<Tianditu.Map>();
    const tdtComponent = ref<Tianditu.TileLayer.TDT>();
    expose?.({ tdtComponent });

    const mapRoot = inject<Ref<Tianditu.Map>>("mapRoot");
    const mapEmitter = inject<MapEmitter>("mapEmitter");
    if (mapRoot?.value) {
      initComponent(mapRoot?.value);
    } else {
      mapEmitter?.on("mapInit", initComponent);
    }

    function initComponent(map: Tianditu.Map): void {
      mapEmitter?.off("mapInit", initComponent);
      tdtMap.value = map;
      tdtComponent.value = useInit(props, attrs);
      useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent.value });
      useWatch({ props, instance: tdtComponent.value });
      map.addLayer(tdtComponent.value);
      emit("init", tdtComponent.value);
    }

    onUnmounted(() => {
      tdtComponent.value && tdtMap.value?.removeLayer(tdtComponent.value);
    });

    return () => {};
  }
});
</script>
