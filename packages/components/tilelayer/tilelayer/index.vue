<script setup lang="ts">
import { toBounds } from '@vue-tianditu/core'
import { onMounted, useAttrs, watch } from 'vue'

import { useEvent, useInitLayer } from '../../composables'
import { tilelayerEmits, tilelayerNativeEvents, tilelayerProps } from './props'

defineOptions({ name: 'TdtTilelayer', inheritAttrs: false })
const props = defineProps(tilelayerProps)
const emit = defineEmits(tilelayerEmits)
const attrs = useAttrs()

onMounted(() => {
  const { url, minZoom, maxZoom, errorTileUrl, opacity, zIndex, bounds } = props
  const layer = new T.TileLayer(url, {
    minZoom,
    maxZoom,
    errorTileUrl,
    opacity,
    zIndex,
    bounds: bounds?.length ? toBounds(bounds) : undefined,
    ...attrs,
  })
  useInitLayer(props, layer)
  useEvent({ events: tilelayerNativeEvents, instance: layer, emit })
  watch(
    () => props.url,
    (val) => layer.setUrl(val),
  )
  emit('init', layer)
})
</script>

<template></template>
