<script setup lang="ts">
import { fromLngLat, toLngLat } from '@vue-tianditu/core'
import { onMounted } from 'vue'

import { useEvent, useInitOverlay, useWatch } from '../../composables'
import { circleEmits, circleNativeEvents, circleProps } from './props'

defineOptions({ name: 'TdtCircle' })
const props = defineProps(circleProps)
const emit = defineEmits(circleEmits)

onMounted(() => {
  const { center, radius, color, weight, opacity, lineStyle, fillColor, fillOpacity } = props
  const circle = new T.Circle(toLngLat(center), radius, {
    color,
    weight,
    opacity,
    lineStyle,
    fillColor,
    fillOpacity,
  })
  useInitOverlay(circle)

  circle.addEventListener('edit', ({ target }) => {
    emit('update:center', fromLngLat(target.getCenter()))
    emit('update:radius', target.getRadius())
  })
  useEvent({ events: circleNativeEvents, instance: circle, emit, extData: props.extData })

  useWatch(props, {
    center: (val) => val != null && circle.setCenter(toLngLat(val)),
    radius: (val) => val != null && circle.setRadius(val),
    color: (val) => val != null && circle.setColor(val),
    weight: (val) => val != null && circle.setWeight(val),
    opacity: (val) => val != null && circle.setOpacity(val),
    lineStyle: (val) => val != null && circle.setLineStyle(val),
    fillColor: (val) => val != null && circle.setFillColor(val),
    fillOpacity: (val) => val != null && circle.setFillOpacity(val),
    edit: (val) => (val ? circle.enableEdit() : circle.disableEdit()),
    visible: (val) => (val ? circle.show() : circle.hide()),
  })

  emit('init', circle)
})
</script>

<template></template>
