<script setup lang="ts">
import { toMarker, toPoint } from '@vue-tianditu/core'
import { onMounted, onUnmounted, watch } from 'vue'

import { useEvent, useMap, useWatch } from '../../composables'
import { markerClustererEmits, markerClustererNativeEvents, markerClustererProps } from './props'

defineOptions({ name: 'TdtMarkerClusterer' })
const props = defineProps(markerClustererProps)
const emit = defineEmits(markerClustererEmits)
const map = useMap()

onMounted(() => {
  const { markers, girdSize, maxZoom } = props
  console.log('markers', markers)
  const clusterer = new T.MarkerClusterer(map.value, {
    markers: markers?.map(toMarker),
    girdSize,
    maxZoom,
  })
  onUnmounted(() => clusterer.clearMarkers())
  useEvent({ events: markerClustererNativeEvents, instance: clusterer, emit })
  useWatch(props, {
    girdSize: (val) => val != null && clusterer.setGridSize(val),
    maxZoom: (val) => val != null && clusterer.setMaxZoom(val),
    styles: (val) =>
      val != null &&
      clusterer.setStyles(
        val?.map((item) => ({
          ...item,
          offset: item.offset && toPoint(item.offset),
        })) ?? [],
      ),
  })
  watch(
    () => props.markers,
    (val) => {
      clusterer.clearMarkers()
      if (val?.length) clusterer.addMarkers(val.map(toMarker))
    },
  )
  emit('init', clusterer)
})
</script>

<template></template>
