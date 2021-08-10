<script lang="ts">
export default {
  name: "TdtRectangle",
  render() {}
};
</script>

<script lang="ts" setup>
import { defineProps, defineExpose, ref, onUnmounted } from "vue";
import { mapEmitter } from "../utils";
import { useEvent } from "../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
const tdtMap = ref<Tianditu.Map>();
const tdtComponent = ref<Tianditu.Rectangle>();
defineExpose({ tdtComponent });

mapEmitter.on("mapInit", initComponent);

function initComponent(map: Tianditu.Map): void {
  mapEmitter.off("mapInit", initComponent);
  tdtMap.value = map;
  tdtComponent.value = useInit(props);
  emit("init", tdtComponent.value);
  useEvent({ events: NATIVE_EVENTS, emit, instance: tdtComponent.value, extData: props.extData });
  useWatch({ props, instance: tdtComponent.value });
  map.addOverLay(tdtComponent.value);
}

onUnmounted(() => {
  tdtComponent.value && tdtMap.value?.removeOverLay(tdtComponent.value);
});
</script>
