<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

import { useMapRoot } from '../../use'
import { useInit, PROPS, EVENTS } from './use'

defineOptions({ name: 'TdtCarTrack' })
const props = defineProps(PROPS)
const emit = defineEmits(EVENTS)
let map: T.Map | undefined
let instance: T.CarTrack | null = null
let disposed = false

onMounted(async () => {
  map = await useMapRoot()
  if (disposed) return
  watch(
    () => props.Datas,
    (data) => {
      instance?.clear()
      instance = data.length ? useInit(props, emit, map as T.Map) : null
      if (instance) emit('init', instance)
    },
    { immediate: true },
  )
})

onUnmounted(() => {
  disposed = true
  instance?.clear()
})

function start() {
  instance?.start()
}
function pause() {
  instance?.pause()
}
function stop() {
  instance?.stop()
}
function clear() {
  instance?.clear()
}

defineExpose({ start, pause, stop, clear })
</script>

<template></template>
