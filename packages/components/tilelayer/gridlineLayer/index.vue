<script setup lang="ts">
import { onMounted } from 'vue'

import { useEvent, useInitLayer } from '../../composables'
import { gridlineLayerEmits, gridlineLayerNativeEvents, gridlineLayerProps } from './props'

defineOptions({ name: 'TdtGridlineLayer' })
const props = defineProps(gridlineLayerProps)
const emit = defineEmits(gridlineLayerEmits)

onMounted(() => {
  const { tileSize, minZoom, maxZoom, opacity, outlineSize, textSize } = props
  const layer = new T.GridlineLayer({
    tileSize,
    minZoom,
    maxZoom,
    opacity,
    outlineSize,
    textSize,
  })
  useInitLayer(props, layer)
  useEvent({ events: gridlineLayerNativeEvents, instance: layer, emit })
  emit('init', layer)
})
</script>

<template></template>
