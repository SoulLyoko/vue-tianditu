<script lang="ts">
export default {
  name: "TdtInfowindow",
  render() {}
};
</script>

<script lang="ts" setup>
import { defineProps, defineExpose, ref } from "vue";
import { mapEmitter } from "../../utils";
import { useEvent } from "../../use";
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from "./use";

const props = defineProps(PROPS);
const emit = defineEmits(EVENTS);
const tdtMap = ref<Tianditu.Map>();
const tdtComponent = ref<Tianditu.InfoWindow>();
defineExpose({ tdtComponent });

mapEmitter.on("mapInit", initComponent);

function initComponent(map: Tianditu.Map): void {
  mapEmitter.off("mapInit", initComponent);
  tdtMap.value = map;
  tdtComponent.value = useInit(props);
  useEvent({
    events: NATIVE_EVENTS,
    emit,
    instance: tdtComponent.value,
    emitted: (event: string) => {
      event === "close" && emit("update:modelValue", null);
    }
  });
  useWatch({ props, instance: tdtComponent.value, map });
  emit("init", tdtComponent.value);
}
</script>
