<script setup lang="ts">
import { computed } from "vue";
import "../styles/search-page.scss";

defineOptions({ name: "SearchPage" });
const props = withDefaults(defineProps<{ current?: number; size?: number; total?: number }>(), {
  current: 1,
  size: 10,
  total: 0,
});
const emit = defineEmits<{ "update:current": [current: number] }>();
const pageCount = computed(() => Math.max(1, Math.ceil(props.total / props.size)));
const pageCurrent = computed({
  get: () => props.current,
  set: (value) => emit("update:current", Math.min(pageCount.value, Math.max(1, value))),
});
</script>

<template>
  <div class="tdt-search-page">
    <span class="tdt-search-page__btn first-page" @click="pageCurrent = 1">«</span>
    <span class="tdt-search-page__btn prev-page" @click="pageCurrent--">‹</span>
    <span>{{ pageCurrent }}</span
    ><span> / </span><span>{{ pageCount }}</span>
    <span class="tdt-search-page__btn next-page" @click="pageCurrent++">›</span>
    <span class="tdt-search-page__btn last-page" @click="pageCurrent = pageCount">»</span>
  </div>
</template>
