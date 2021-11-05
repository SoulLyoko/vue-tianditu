<script lang="ts">
import { defineComponent, ref, inject, onUnmounted } from "vue-demi";
import type { Ref } from "vue-demi";
import type { MapEmitter } from "../../types";
import { useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

export default defineComponent({
  name: "TdtInfowindow",
  props: PROPS,
  emits: EVENTS,
  setup(props, { emit, expose }) {
    const tdtMap = ref<T.Map>();
    const tdtComponent = ref<T.InfoWindow>();
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
      tdtComponent.value = useInit(props);
      useEvent({
        events: NATIVE_EVENTS,
        emit,
        instance: tdtComponent.value,
        emitted: (event: string) => {
          event === "close" && emit("update:target", null);
        }
      });
      useWatch({ props, instance: tdtComponent.value, map });
      emit("init", tdtComponent.value);
    }

    onUnmounted(() => {
      tdtMap.value?.closeInfoWindow();
    });

    return () => {};
  }
});
</script>
