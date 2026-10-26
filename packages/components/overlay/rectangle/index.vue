<script setup lang="ts">
import { fromBounds, toBounds } from '@vue-tianditu/core'
import { onMounted, nextTick } from 'vue'

import { useEvent, useInitOverlay, useWatch } from '../../composables'
import { rectangleEmits, rectangleNativeEvents, rectangleProps } from './props'

defineOptions({ name: 'TdtRectangle' })
const props = defineProps(rectangleProps)
const emit = defineEmits(rectangleEmits)

onMounted(() => {
  const { bounds, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props
  const rectangle = new T.Rectangle(toBounds(bounds), {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity,
  })
  useInitOverlay(rectangle)

  rectangle.addEventListener('edit', ({ target }) => {
    emit('update:bounds', fromBounds(target.getBounds()))
    nextTick(() => {
      rectangle.disableEdit()
      if (props.edit) rectangle.enableEdit()
    })
  })
  useEvent({ events: rectangleNativeEvents, instance: rectangle, emit, extData: props.extData })

  useWatch(props, {
    bounds: (val) => val != null && rectangle.setBounds(toBounds(val)),
    color: (val) => val != null && rectangle.setColor(val),
    weight: (val) => val != null && rectangle.setWeight(val),
    opacity: (val) => val != null && rectangle.setOpacity(val),
    lineStyle: (val) => val != null && rectangle.setLineStyle(val),
    fillColor: (val) => val != null && rectangle.setFillColor(val),
    fillOpacity: (val) => val != null && rectangle.setFillOpacity(val),
    edit: (val) => (val ? rectangle.enableEdit() : rectangle.disableEdit()),
    visible: (val) => (val ? rectangle.show() : rectangle.hide()),
  })

  emit('init', rectangle)
})
</script>

<template></template>
