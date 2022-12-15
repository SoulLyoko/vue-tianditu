<template>
  <component :is="is"></component>
</template>

<script lang="ts">
export default { name: "markdown" };
</script>

<script setup lang="ts">
import { defineAsyncComponent, computed } from "vue";

const props = defineProps({
  path: { type: String }
});

const rootMds = import.meta.glob("/../*.md");
const packagesMds = import.meta.glob("/**/*.md");
const mds = { ...rootMds, ...packagesMds };
const is = computed(() => {
  const component = mds[props.path || ""]?.();
  return component && defineAsyncComponent(() => component as any);
});
</script>
