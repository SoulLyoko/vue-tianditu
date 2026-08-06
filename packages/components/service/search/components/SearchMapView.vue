<script setup lang="ts">
import { toLngLats } from '@vue-tianditu/core'
import { computed, onMounted, watch } from 'vue'

import TdtInfowindow from '../../../overlay/infowindow/index.vue'
import TdtMarker from '../../../overlay/marker/index.vue'
import { useMapRoot } from '../../../use'

defineOptions({ name: 'SearchMapView' })
const props = withDefaults(
  defineProps<{ pois?: T.LocalSearchPoi[]; target?: VT.LngLat | null; content?: string }>(),
  { pois: () => [], target: null, content: '' },
)
const emit = defineEmits<{
  'poi-click': [poi: T.LocalSearchPoi]
  'update:target': [target: VT.LngLat | null]
}>()
const markers = computed(() =>
  props.pois.map((poi) => ({
    position: poi.lonlat.split(' ').map(Number) as VT.LngLat,
    extData: poi,
  })),
)

function updateTarget(target: unknown) {
  emit('update:target', target as VT.LngLat | null)
}

onMounted(async () => {
  const map = await useMapRoot()
  watch(
    markers,
    (value) => value.length && map.setViewport(toLngLats(value.map((item) => item.position))),
    { immediate: true },
  )
})
</script>

<template>
  <TdtMarker
    v-for="item in markers"
    :key="`${item.extData.name}-${item.extData.lonlat}`"
    v-bind="item"
    @click="emit('poi-click', item.extData)"
  />
  <TdtInfowindow
    :target="target"
    :content="content"
    :offset="[0, -30]"
    :min-width="150"
    @update:target="updateTarget"
  />
</template>
