<script setup lang="ts">
import { toLngLats, fromLngLats } from '@vue-tianditu/core'
import { onMounted, nextTick } from 'vue'

import { useEvent, useInitOverlay, useWatch } from '../../composables'
import { polylineEmits, polylineNativeEvents, polylineProps } from './props'

defineOptions({ name: 'TdtPolyline' })
const props = defineProps(polylineProps)
const emit = defineEmits(polylineEmits)

onMounted(() => {
  const { path, color, weight, opacity, lineStyle } = props
  const polyline = new T.Polyline(toLngLats(path), { color, weight, opacity, lineStyle })
  useInitOverlay(polyline)

  polyline.addEventListener('edit', ({ target }) => {
    emit('update:path', fromLngLats(target.getLngLats()))
    nextTick(() => {
      polyline.disableEdit()
      if (props.edit) polyline.enableEdit()
    })
  })
  useEvent({ events: polylineNativeEvents, instance: polyline, emit, extData: props.extData })

  useWatch(props, {
    path: (val) => val != null && polyline.setLngLats(toLngLats(val)),
    color: (val) => val != null && polyline.setColor(val),
    weight: (val) => val != null && polyline.setWeight(val),
    opacity: (val) => val != null && polyline.setOpacity(val),
    lineStyle: (val) => val != null && polyline.setLineStyle(val),
    edit: (val) => (val ? polyline.enableEdit() : polyline.disableEdit()),
    visible: (val) => (val ? polyline.show() : polyline.hide()),
  })

  emit('init', polyline)
})
</script>

<template></template>
