<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

defineOptions({ name: "TdtPolygon" });
const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
let map: T.Map | undefined;
let instance: T.Polygon | undefined;
let disposed = false;

onMounted(async () => {
  map = await useMapRoot();
  if (disposed) return;
  instance = useInit(props);
  map.addOverLay(instance);
  useEvent({ events: NATIVE_EVENTS, emit, instance, extData: props.extData });
  useWatch({ props, instance });
  emit("init", instance);
});

onUnmounted(() => {
  disposed = true;
  if (instance) map?.removeOverLay(instance);
});
</script>

<template></template>
