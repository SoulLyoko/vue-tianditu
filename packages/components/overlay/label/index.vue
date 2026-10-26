<script setup lang="ts">
import { toLngLat, toPoint } from '@vue-tianditu/core'
import { onMounted, watch } from 'vue'

import { useEvent, useInitOverlay, useWatch } from '../../composables'
import { labelEmits, labelNativeEvents, labelProps } from './props'

defineOptions({ name: 'TdtLabel' })
const props = defineProps(labelProps)
const emit = defineEmits(labelEmits)

onMounted(() => {
  const { position, offset, text } = props
  const label = new T.Label({ position: toLngLat(position), offset: toPoint(offset), text })
  useInitOverlay(label)
  useEvent({ events: labelNativeEvents, instance: label, emit, extData: props.extData })
  useWatch(props, {
    position: (val) => val != null && label.setLngLat(toLngLat(val)),
    offset: (val) => val != null && label.setOffset(toPoint(val)),
    text: (val) => val != null && label.setLabel(val),
    title: (val) => val != null && label.setTitle(val),
    zIndex: (val) => val != null && label.setZIndex(val),
    fontSize: (val) => val != null && label.setFontSize(val),
    fontColor: (val) => val != null && label.setFontColor(val),
    backgroundColor: (val) => val != null && label.setBackgroundColor(val),
    borderLine: (val) => val != null && label.setBorderLine(val),
    borderColor: (val) => val != null && label.setBorderColor(val),
    opacity: (val) => val != null && label.setOpacity(val),
    visible: (val) => (val ? label.show() : label.hide()),
  })
  emit('init', label)
})
</script>

<template></template>
