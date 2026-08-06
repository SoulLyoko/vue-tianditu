<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue'

import { useMapRoot, useEvent } from '../use'
import { useInit, useWatch, PROPS, EVENTS, NATIVE_EVENTS } from './use'

defineOptions({ name: 'TdtControl' })
const props = defineProps(PROPS)
const emit = defineEmits(EVENTS)
const controlElement = useTemplateRef<HTMLDivElement>('controlElement')
let map: T.Map | undefined
let instance: T.Control | undefined
let disposed = false

onMounted(async () => {
  map = await useMapRoot()
  if (disposed || !controlElement.value) return
  instance = useInit(props)
  instance.onAdd = () => controlElement.value as HTMLDivElement
  instance.onRemove = () => undefined
  map.addControl(instance)
  useEvent({ events: NATIVE_EVENTS, emit, instance })
  useWatch({ props, instance })
  emit('init', instance)
})

onUnmounted(() => {
  disposed = true
  if (instance) map?.removeControl(instance)
})
</script>

<template>
  <div ref="controlElement" class="tdt-control-custom"><slot /></div>
</template>
