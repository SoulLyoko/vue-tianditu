<script lang="ts">
export default {
  name: "TdtMarker",
  render() {}
};
</script>

<script lang="ts" setup>
import { ref, inject, onUnmounted } from "vue";
import type { MapEmitter } from "../../types";
import { useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);

const tdtMap = ref<Tianditu.Map>();
const tdtComponent = ref<Tianditu.Marker>();
defineExpose({ tdtComponent });

const mapEmitter = inject<MapEmitter>("mapEmitter");
mapEmitter?.on("mapInit", initComponent);

function initComponent(map: Tianditu.Map): void {
  mapEmitter?.off("mapInit", initComponent);
  tdtMap.value = map;
  tdtComponent.value = useInit(props);
  useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent.value, extData: props.extData });
  useWatch({ props, instance: tdtComponent.value });
  map.addOverLay(tdtComponent.value);
  emit("init", tdtComponent.value);
}

onUnmounted(() => {
  tdtComponent.value && tdtMap.value?.removeOverLay(tdtComponent.value);
});
</script>
