<script setup lang="ts">
import { useApiLoader } from '@vue-tianditu/core'
import { onMounted, provide, shallowReadonly, shallowRef, useTemplateRef } from 'vue'

import { mapRootKey, useEvent } from '../use'
import { useInit, useWatch, useControls, PROPS, EVENTS, NATIVE_EVENTS } from './use'

defineOptions({ name: 'TdtMap' })
const props = defineProps(PROPS)
const emit = defineEmits(EVENTS)
const mapElement = useTemplateRef<HTMLDivElement>('mapElement')
const map = shallowRef<T.Map>()

provide(mapRootKey, shallowReadonly(map))

onMounted(async () => {
  await useApiLoader(props.loadConfig)
  if (!mapElement.value) throw new Error('TdtMap container is not mounted')
  map.value = useInit(props, mapElement.value)
  useEvent({ events: NATIVE_EVENTS, emit, instance: map.value })
  useWatch({ props, instance: map.value })
  useControls(props, map.value, emit)
  emit('init', map.value)
})
</script>

<template>
  <div class="tdt-map-container" style="width: 100%; height: 100%">
    <div :id="mid" ref="mapElement" class="tdt-map" style="width: 100%; height: 100%"></div>
    <slot />
  </div>
</template>
