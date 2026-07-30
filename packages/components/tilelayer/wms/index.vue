<script setup lang="ts">
import { onMounted, onUnmounted, useAttrs } from "vue";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

defineOptions({ name: "TdtTilelayerWms", inheritAttrs: false });
const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
const attrs = useAttrs();
let map: T.Map | undefined;
let instance: T.TileLayer.WMS | undefined;
let disposed = false;

onMounted(async () => {
  map = await useMapRoot();
  if (disposed) return;
  instance = useInit(props, attrs);
  map.addLayer(instance);
  useEvent({ events: NATIVE_EVENTS, emit, instance });
  useWatch({ props, instance });
  emit("init", instance);
});

onUnmounted(() => {
  disposed = true;
  if (instance) map?.removeLayer(instance);
});
</script>

<template></template>
