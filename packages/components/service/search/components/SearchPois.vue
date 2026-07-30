<script setup lang="ts">
import SearchPage from "./SearchPage.vue";
import type { PageProps } from "./page";
import "../styles/search-pois.scss";

defineOptions({ name: "SearchPois" });
withDefaults(defineProps<{ pois?: T.LocalSearchPoi[]; page?: PageProps }>(), { pois: () => [] });
const emit = defineEmits<{
  "poi-click": [poi: T.LocalSearchPoi];
  "update:page": [page: PageProps];
}>();
</script>

<template>
  <div v-show="pois.length" class="tdt-search-pois">
    <div
      v-for="item in pois"
      :key="`${item.name}-${item.lonlat}`"
      class="search-pois-item"
      @click="emit('poi-click', item)"
    >
      <strong class="search-pois-item__name">{{ item.name }}</strong
      ><br />
      <span class="search-pois-item__address">{{ item.address }}</span>
    </div>
    <SearchPage
      :current="page?.current"
      :size="page?.size"
      :total="page?.total"
      @update:current="emit('update:page', { ...page, current: $event })"
    />
  </div>
</template>
