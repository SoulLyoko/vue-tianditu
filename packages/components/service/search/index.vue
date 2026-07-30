<script setup lang="ts">
import { onMounted } from "vue";
import { fixMapPropagation } from "@vue-tianditu/core";
import { useMapRoot } from "../../use";
import { useState, useMethods } from "./use";
import {
  SearchBox,
  SearchSuggests,
  SearchPois,
  SearchMapView,
  IconSearch,
  IconRoute,
  IconClose,
} from "./components";
import TdtRoute from "../route/index.vue";
import "./styles/tdt-search.scss";
import "../../styles/tdt-icon.scss";

defineOptions({ name: "TdtSearch" });
withDefaults(defineProps<{ placeholder?: string; searchBtn?: boolean; routeBtn?: boolean }>(), {
  placeholder: "输入关键字搜索",
  searchBtn: true,
  routeBtn: true,
});
const emit = defineEmits<{
  "poi-click": [poi: T.LocalSearchPoi];
  "suggest-click": [suggest: T.LocalSearchSuggest];
  "search-complete": [result: T.LocalSearchResult];
}>();
const state = useState();
const { onSearchComplete, onPoiClick, onSuggestClick, onSearch, onPageChange } = useMethods(
  state,
  emit,
);

onMounted(async () => {
  state.tdtMap = await useMapRoot();
  state.localSearch = new T.LocalSearch(state.tdtMap, { pageCapacity: 10, onSearchComplete });
});

function updateKeyword(value: string) {
  state.keyword = value;
  onSearch(4, value);
}
</script>

<template>
  <div class="tdt-search" v-on="fixMapPropagation(state.tdtMap)">
    <template v-if="state.showRoute">
      <TdtRoute />
      <i class="tdt-search-route__close" @click="state.showRoute = false"><IconClose /></i>
    </template>
    <template v-else>
      <SearchBox
        :model-value="state.keyword"
        :placeholder
        @update:model-value="updateKeyword"
        @search="onSearch(1, $event)"
      >
        <button v-if="searchBtn" class="tdt-search-box__btn" @click="onSearch(1)">
          <IconSearch />
        </button>
        <button v-if="routeBtn" class="tdt-search-box__btn" @click="state.showRoute = true">
          <IconRoute />
        </button>
      </SearchBox>
      <SearchSuggests :suggests="state.suggests || []" @suggest-click="onSuggestClick" />
      <SearchPois
        :pois="state.pois || []"
        :page="{ current: state.current, size: 10, total: Number(state.total) }"
        @poi-click="onPoiClick"
        @update:page="onPageChange"
      />
      <SearchMapView
        :pois="state.pois || []"
        :target="state.target"
        :content="state.content"
        @poi-click="onPoiClick"
        @update:target="state.target = $event"
      />
    </template>
  </div>
</template>
