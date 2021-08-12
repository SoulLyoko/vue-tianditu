<template>
  <div ref="controlRef" class="tdt-control-custom">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "TdtControl",
  render() {}
};
</script>

<script lang="ts" setup>
import { defineProps, defineExpose, ref, onUnmounted } from "vue";
import { mapEmitter } from "../utils";
import { useEvent } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const controlRef = ref();
const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
const tdtMap = ref<Tianditu.Map>();
const tdtComponent = ref<Tianditu.Control>();
defineExpose({ tdtComponent });

mapEmitter.on("mapInit", initComponent);

function initComponent(map: Tianditu.Map): void {
  mapEmitter.off("mapInit", initComponent);
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
