<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { useMapRoot } from '../use'
import type { ToolInstances } from './types'
import { useInit, useWatch, PROPS, EVENTS, useEvent } from './use'

defineOptions({ name: 'TdtMousetool' })
const props = defineProps(PROPS)
const emit = defineEmits(EVENTS)
let instances: ToolInstances | undefined
let disposed = false

onMounted(async () => {
  const map = await useMapRoot()
  if (disposed) return
  instances = useInit(props, map)
  useEvent({ emit, instances })
  useWatch({ props, instances })
  emit('init', instances)
})

onUnmounted(() => {
  disposed = true
  clearAll()
})

function open(toolName: keyof ToolInstances) {
  instances?.[toolName]?.open()
}

function close(toolName: keyof ToolInstances) {
  instances?.[toolName]?.close()
}

function clear(toolName: keyof ToolInstances) {
  try {
    instances?.[toolName]?.clear()
  } catch (error) {
    console.error(error)
  }
}

function clearAll() {
  if (!instances) return
  ;(Object.keys(instances) as (keyof ToolInstances)[]).forEach((toolName) => {
    close(toolName)
    clear(toolName)
  })
}

defineExpose({ open, close, clear, clearAll })
</script>

<template></template>
