<script lang="ts">
import { defineComponent, ref, inject, onUnmounted } from "vue-demi";
import type { Ref } from "vue-demi";
import type { MapEmitter } from "../../types";
import { useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export default defineComponent({
  name: "TdtTilelayer",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, expose, attrs }) {
    const tdtMap = ref<T.Map>();
    const tdtComponent = ref<T.TileLayer>();
    expose?.({ tdtComponent });

    const mapRoot = inject<Ref<T.Map>>("mapRoot");
    const mapEmitter = inject<MapEmitter>("mapEmitter");
    if (mapRoot?.value) {
      initComponent(mapRoot?.value);
    } else {
      mapEmitter?.on("mapInit", initComponent);
    }

    function initComponent(map: T.Map): void {
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
