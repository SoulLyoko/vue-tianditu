<script setup lang="ts">
import { toBounds } from '@vue-tianditu/core'
import { onMounted, useAttrs, watch } from 'vue'

import { useEvent, useInitLayer } from '../../composables'
import { tilelayerTdtEmits, tilelayerTdtNativeEvents, tilelayerTdtProps } from './props'

defineOptions({ name: 'TdtTilelayerTdt', inheritAttrs: false })
const props = defineProps(tilelayerTdtProps)
const emit = defineEmits(tilelayerTdtEmits)
const attrs = useAttrs()

onMounted(() => {
  const { url, minZoom, maxZoom, errorTileUrl, opacity, zIndex, bounds, attribution } = props
  const layer = new T.TileLayer.TDT(url, {
    minZoom,
    maxZoom,
    errorTileUrl,
    opacity,
    zIndex,
    bounds: bounds?.length ? toBounds(bounds) : undefined,
    attribution,
    ...attrs,
  })
  useInitLayer(props, layer)
  useEvent({ events: tilelayerTdtNativeEvents, instance: layer, emit })
  watch(
    () => props.url,
    (val) => layer.setUrl(val),
  )
  emit('init', layer)
})
</script>

<template></template>
