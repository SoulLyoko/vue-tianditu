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
import { defineProps, defineExpose, onMounted, ref } from "vue";
import { apiLoaderInstance } from "../api-loader";
import { mapEmitter } from "../utils";
import { useEvent } from "../use";
import { useInit, useWatch, useControls, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
const tdtMap = ref<Tianditu.Map>();
defineExpose({ tdtMap });

onMounted(() => {
  apiLoaderInstance.load().then(() => {
    tdtMap.value = useInit(props);
    emit("init", tdtMap.value);
    mapEmitter.emit("mapInit", tdtMap.value);
    useEvent({ events: NATIVE_EVENTS, emit, instance: tdtMap.value });
    useWatch({ props, instance: tdtMap.value });
    useControls(props, tdtMap.value, emit);
  });
});
</script>
