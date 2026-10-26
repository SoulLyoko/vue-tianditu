<script setup lang="ts">
import { toLngLat, toPoint } from '@vue-tianditu/core'
import { onMounted, onUnmounted, useSlots, useTemplateRef, watch } from 'vue'

import { useEvent, useMap } from '../../composables'
import { infowindowEmits, infowindowNativeEvents, infowindowProps } from './props'

defineOptions({ name: 'TdtInfowindow' })
const props = defineProps(infowindowProps)
const emit = defineEmits(infowindowEmits)
const slots = useSlots()
const contentElement = useTemplateRef<HTMLDivElement>('contentElement')
const map = useMap()

onMounted(() => {
  const {
    minWidth,
    maxWidth,
    maxHeight,
    autoPan,
    closeButton,
    offset,
    autoPanPadding,
    closeOnClick,
  } = props
  const infowindow = new T.InfoWindow(slots.default ? contentElement.value! : props.content, {
    minWidth,
    maxWidth,
    maxHeight,
    autoPan,
    closeButton,
    offset: toPoint(offset),
    autoPanPadding: toPoint(autoPanPadding),
    closeOnClick,
  })
  infowindow.addEventListener('close', () => emit('update:target', null))
  useEvent({ events: infowindowNativeEvents, instance: infowindow, emit })
  watch(
    () => props.offset,
    (val) => infowindow.setOffset(toPoint(val)),
  )
  watch(
    () => props.content,
    (val) => !slots.default && infowindow.setContent(val),
  )
  watch(
    () => props.target,
    (val) => {
      if (Array.isArray(val)) map.value.openInfoWindow(infowindow, toLngLat(val))
      else if (val) val.openInfoWindow(infowindow)
      else infowindow.closeInfoWindow()
    },
    { immediate: true },
  )
  onUnmounted(() => map.value?.closeInfoWindow())
  emit('init', infowindow)
})
</script>

<template>
  <div
    v-show="$slots.default && target"
    ref="contentElement"
    class="tdt-infowindow-custom"
    :style="{ minWidth, maxWidth, maxHeight }"
  >
    <slot />
  </div>
</template>
