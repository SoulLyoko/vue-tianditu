<script lang="ts">
export default {
  name: "TdtTileLayer",
  render() {}
};
</script>

<script lang="ts" setup>
import { defineProps, defineExpose, ref, onUnmounted, useAttrs } from "vue";
import { mapEmitter } from "../../utils";
import { useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
const tdtMap = ref<Tianditu.Map>();
const tdtComponent = ref<Tianditu.TileLayer>();
defineExpose({ tdtComponent });

mapEmitter.on("mapInit", initComponent);

function initComponent(map: Tianditu.Map): void {
  mapEmitter.off("mapInit", initComponent);
  tdtMap.value = map;
  tdtComponent.value = useInit(props, useAttrs());
  useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent.value });
  useWatch({ props, instance: tdtComponent.value });
  map.addLayer(tdtComponent.value);
  emit("init", tdtComponent.value);
}

onUnmounted(() => {
  tdtComponent.value && tdtMap.value?.removeLayer(tdtComponent.value);
});
</script>
