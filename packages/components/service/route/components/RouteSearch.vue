<script setup lang="ts">
import { SearchBox, SearchPois } from '../../search/components'
import { useState, useMethods } from '../use'

defineOptions({ name: 'RouteSearch' })
const state = useState()
const { onSearch, onPoiClick, onPageChange } = useMethods(state)
</script>

<template>
  <div class="route-search">
    <SearchBox
      :model-value="state.startKeyword"
      placeholder="请输入起点"
      @focus="state.poiType = 'start'"
      @update:model-value="onSearch(1, $event, 'start')"
    />
    <SearchBox
      :model-value="state.endKeyword"
      placeholder="请输入终点"
      @focus="state.poiType = 'end'"
      @update:model-value="onSearch(1, $event, 'end')"
    />
    <SearchPois
      :pois="state.pois || []"
      :page="{ current: state.current, size: 10, total: state.total }"
      @poi-click="onPoiClick"
      @update:page="onPageChange"
    />
  </div>
</template>
