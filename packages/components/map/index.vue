<script setup lang="ts">
import mitt from "mitt";
import { onMounted, provide, ref, useTemplateRef } from "vue";
import { useApiLoader } from "@vue-tianditu/core";
import type { MapEmitEvents } from "@vue-tianditu/types";
import { useEvent } from "../use";
import { useInit, useWatch, useControls, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

defineOptions({ name: "TdtMap" });
const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
const mapElement = useTemplateRef<HTMLDivElement>("mapElement");
const map = ref<T.Map>();
const mapEmitter = mitt<MapEmitEvents>();

provide("mapRoot", map);
provide("mapEmitter", mapEmitter);

onMounted(async () => {
  await useApiLoader(props.loadConfig);
  if (!mapElement.value) throw new Error("TdtMap container is not mounted");
  map.value = useInit(props, mapElement.value);
  useEvent({ events: NATIVE_EVENTS, emit, instance: map.value });
  useWatch({ props, instance: map.value });
  useControls(props, map.value, emit);
  emit("init", map.value);
  mapEmitter.emit("mapInit", map.value);
});
</script>

<template>
  <div class="tdt-map-container" style="width: 100%; height: 100%">
    <div :id="mid" ref="mapElement" class="tdt-map" style="width: 100%; height: 100%"></div>
    <slot />
  </div>
</template>
