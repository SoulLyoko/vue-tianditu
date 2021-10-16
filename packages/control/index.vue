<template>
  <div ref="controlRef" class="tdt-control-custom">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "TdtControl"
};
</script>

<script lang="ts" setup>
import { ref, inject, onUnmounted } from "vue-demi";
import type { Ref } from "vue-demi";
import type { MapEmitter } from "../types";
import { useEvent } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);

const tdtMap = ref<Tianditu.Map>();
const tdtComponent = ref<Tianditu.Control>();
// defineExpose({ tdtComponent });

const mapRoot = inject<Ref<Tianditu.Map>>("mapRoot");
const mapEmitter = inject<MapEmitter>("mapEmitter");
if (mapRoot?.value) {
  initComponent(mapRoot?.value);
} else {
  mapEmitter?.on("mapInit", initComponent);
}

const controlRef = ref();
function initComponent(map: Tianditu.Map): void {
  mapEmitter?.off("mapInit", initComponent);
  tdtMap.value = map;
  tdtComponent.value = useInit(props);
  tdtComponent.value.onAdd = () => controlRef.value;
  tdtComponent.value.onRemove = () => {};
  useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent.value });
  useWatch({ props, instance: tdtComponent.value });
  map.addControl(tdtComponent.value);
  emit("init", tdtComponent.value);
}

onUnmounted(() => {
  tdtComponent.value && tdtMap.value?.removeControl(tdtComponent.value);
});
</script>
