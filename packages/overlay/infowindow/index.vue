<script lang="ts">
export default {
  name: "TdtInfowindow",
  render() {}
};
</script>

<script lang="ts" setup>
import { ref, inject, onUnmounted } from "vue";
import type { Ref } from "vue";
import type { MapEmitter } from "../../types";
import { useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);

const tdtMap = ref<Tianditu.Map>();
const tdtComponent = ref<Tianditu.InfoWindow>();
defineExpose({ tdtComponent });

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
  tdtComponent.value = useInit(props);
  useEvent({
    events: NATIVE_EVENTS,
    emit,
    instance: tdtComponent.value,
    emitted: (event: string) => {
      event === "close" && emit("update:modelValue", null);
    }
  });
  useWatch({ props, instance: tdtComponent.value, map });
  emit("init", tdtComponent.value);
}

onUnmounted(() => {
  tdtMap.value?.closeInfoWindow();
});
</script>
