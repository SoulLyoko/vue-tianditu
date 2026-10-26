<script setup lang="ts">
import { fromLngLats, toLngLats } from '@vue-tianditu/core'
import { onMounted, nextTick } from 'vue'

import { useEvent, useInitOverlay, useWatch } from '../../composables'
import { polygonEmits, polygonNativeEvents, polygonProps } from './props'

defineOptions({ name: 'TdtPolygon' })
const props = defineProps(polygonProps)
const emit = defineEmits(polygonEmits)

onMounted(() => {
  const { path, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props
  const polygon = new T.Polygon(toLngLats(path), {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity,
  })
  useInitOverlay(polygon)

  polygon.addEventListener('edit', ({ target }) => {
    emit('update:path', fromLngLats(target.getLngLats()))
    nextTick(() => {
      polygon.disableEdit()
      if (props.edit) polygon.enableEdit()
    })
  })
  useEvent({ events: polygonNativeEvents, instance: polygon, emit, extData: props.extData })

  useWatch(props, {
    path: (val) => val != null && polygon.setLngLats(toLngLats(val)),
    color: (val) => val != null && polygon.setColor(val),
    weight: (val) => val != null && polygon.setWeight(val),
    opacity: (val) => val != null && polygon.setOpacity(val),
    lineStyle: (val) => val != null && polygon.setLineStyle(val),
    fillColor: (val) => val != null && polygon.setFillColor(val),
    fillOpacity: (val) => val != null && polygon.setFillOpacity(val),
    edit: (val) => (val ? polygon.enableEdit() : polygon.disableEdit()),
    visible: (val) => (val ? polygon.show() : polygon.hide()),
  })

  emit('init', polygon)
})
</script>

<template></template>
