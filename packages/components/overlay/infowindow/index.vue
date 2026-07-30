<script setup lang="ts">
import { onMounted, onUnmounted, useSlots, useTemplateRef } from "vue";
import { useMapRoot, useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

defineOptions({ name: "TdtInfowindow" });
const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
const slots = useSlots();
const contentElement = useTemplateRef<HTMLDivElement>("contentElement");
let map: T.Map | undefined;

onMounted(async () => {
  map = await useMapRoot();
  const instance = useInit(props, slots.default ? (contentElement.value ?? undefined) : undefined);
  useEvent({ events: NATIVE_EVENTS, emit, instance, emitted });
  useWatch({ props, instance, map });
  emit("init", instance);
});

onUnmounted(() => map?.closeInfoWindow());

function emitted(event: string) {
  if (event === "close") emit("update:target", null);
}
</script>

<template>
  <div
    v-show="$slots.default && target"
    ref="contentElement"
    class="tdt-infowindow-custom"
    :style="{ minWidth, maxWidth, maxHeight }"
  >
    <slot />
  </div>
</template>
