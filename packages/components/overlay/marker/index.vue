<script setup lang="ts">
import { toIcon, toLngLat, fromLngLat } from '@vue-tianditu/core'
import { onMounted, watch } from 'vue'

import { useEvent, useInitOverlay, useWatch } from '../../composables'
import { markerEmits, markerNativeEvents, markerProps } from './props'

defineOptions({ name: 'TdtMarker' })
const props = defineProps(markerProps)
const emit = defineEmits(markerEmits)

onMounted(() => {
  const { position, draggable, title, zIndexOffset, opacity, icon } = props
  const marker = new T.Marker(toLngLat(position), {
    draggable,
    title,
    zIndexOffset,
    opacity,
  })
  useInitOverlay(marker)

  marker.addEventListener('drag', ({ lnglat }) => {
    emit('update:position', fromLngLat(lnglat))
  })
  useEvent({ events: markerNativeEvents, instance: marker, emit, extData: props.extData })

  useWatch(props, {
    position: (val) => val != null && marker.setLngLat(toLngLat(val)),
    draggable: (val) => (val ? marker.enableDragging() : marker.disableDragging()),
    icon: (val) => val != null && marker.setIcon(toIcon(val)),
    zIndexOffset: (val) => val != null && marker.setZIndexOffset(val),
    opacity: (val) => val != null && marker.setOpacity(val),
    visible: (val) => (val ? marker.show() : marker.hide()),
  })

  emit('init', marker)
})
</script>

<template></template>
