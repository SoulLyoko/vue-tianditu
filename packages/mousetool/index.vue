<script lang="ts">
export default {
  name: "TdtMousetool",
  render() {}
};
</script>

<script lang="ts" setup>
import { ref, inject } from "vue";
import type { Ref } from "vue";
import type { MapEmitter } from "../types";
import type { ToolInstances } from "./types";
import { useInit, useWatch, PROPS, EVENTS, useEvent } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);

const tdtMap = ref<Tianditu.Map>();
const tdtComponent = ref<ToolInstances>({});
defineExpose({
  tdtComponent,
  open,
  close,
  clear,
  clearAll
});

const mapRoot = inject<Ref<Tianditu.Map>>("mapRoot");
const mapEmitter = inject<MapEmitter>("mapEmitter");
if (mapRoot?.value) {
  initComponent(mapRoot?.value);
} else {
  mapEmitter?.on("mapInit", initComponent);
}

function initComponent(map: Tianditu.Map): void {
  mapEmitter?.off("mapInit", initComponent);
  tdtMap.value = map;
  tdtComponent.value = useInit(props, tdtMap.value);
  useEvent({ emit, instances: tdtComponent.value });
  useWatch({ props, instances: tdtComponent.value });
  emit("init", tdtComponent.value);
}

function open(toolName: keyof ToolInstances) {
  tdtComponent.value[toolName]?.open();
}
function close(toolName: keyof ToolInstances) {
  tdtComponent.value[toolName]?.close();
}
function clear(toolName: keyof ToolInstances) {
  try {
    tdtComponent.value[toolName]?.clear();
  } catch (e) {
    // 当图层中没有该类型的图形时会报错，可忽略
    console.error(e);
  }
}
function clearAll() {
  Object.keys(tdtComponent.value).forEach(toolName => {
    close(toolName as keyof ToolInstances);
    clear(toolName as keyof ToolInstances);
  });
}
</script>
