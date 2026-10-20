<script setup lang="ts">
import { onMounted, useAttrs, watch } from 'vue'

import { useEvent, useInitLayer } from '../../composables'
import { tilelayerWmsEmits, tilelayerWmsNativeEvents, tilelayerWmsProps } from './props'

defineOptions({ name: 'TdtTilelayerWms', inheritAttrs: false })
const props = defineProps(tilelayerWmsProps)
const emit = defineEmits(tilelayerWmsEmits)
const attrs = useAttrs()

onMounted(() => {
  const { url, layers, styles, format, transparent, version, srs } = props
  const layer = new T.TileLayer.WMS(url, {
    layers,
    styles,
    format,
    transparent,
    version,
    srs,
    ...attrs,
  })
  useInitLayer(props, layer)
  useEvent({ events: tilelayerWmsNativeEvents, instance: layer, emit })
  watch(
    () => props.url,
    (val) => layer.setUrl(val),
  )
  emit('init', layer)
})
</script>

<template></template>
