<template>
  <div class="tdt-map-container" style="width: 100%; height: 100%">
    <div :id="mid" class="tdt-map" style="width: 100%; height: 100%"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "TdtMap"
};
</script>

<script lang="ts" setup>
import mitt from "mitt";
import { ref, provide, onMounted } from "vue";
import { apiLoaderInstance } from "../api-loader";
import { MapEmitEvents } from "../types";
import { useEvent } from "../use";
import { useInit, useWatch, useControls, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);

const tdtMap = ref<Tianditu.Map>();
defineExpose({ tdtMap });

const mapEmitter = mitt<MapEmitEvents>();
provide("mapEmitter", mapEmitter);

onMounted(() => {
  apiLoaderInstance.load().then(() => {
    tdtMap.value = useInit(props);
    useEvent({ events: NATIVE_EVENTS, emit, instance: tdtMap.value });
    useWatch({ props, instance: tdtMap.value });
    useControls(props, tdtMap.value, emit);
    emit("init", tdtMap.value);
    mapEmitter.emit("mapInit", tdtMap.value);
  });
});
</script>
