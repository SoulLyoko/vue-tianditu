<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { useMapRoot, useEvent } from '../../use'
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from './use'

defineOptions({ name: 'TdtMarkerClusterer' })
const props = defineProps(PROPS)
const emit = defineEmits(EVENTS)
let instance: T.MarkerClusterer | undefined
let disposed = false

onMounted(async () => {
  const map = await useMapRoot()
  if (disposed) return
  instance = useInit(props, map)
  useEvent({ events: NATIVE_EVENTS, emit, instance })
  useWatch({ props, instance })
  emit('init', instance)
})

onUnmounted(() => {
  disposed = true
  instance?.clearMarkers()
})
</script>

<template></template>
