<script setup lang="ts">
import { toLngLats } from '@vue-tianditu/core'
import { onMounted, onUnmounted, watch } from 'vue'

import { useEvent, useInitOverlay } from '../../composables'
import {
  cloudMarkerCollectionEmits,
  cloudMarkerCollectionNativeEvents,
  cloudMarkerCollectionProps,
} from './props'

defineOptions({ name: 'TdtCloudMarkerCollection' })
const props = defineProps(cloudMarkerCollectionProps)
const emit = defineEmits(cloudMarkerCollectionEmits)

onMounted(() => {
  const { ShapeType, SizeType, color, lnglats } = props
  const collection = new T.CloudMarkerCollection(toLngLats(lnglats), {
    ShapeType,
    SizeType,
    color,
  })
  onUnmounted(() => collection.clear())
  useInitOverlay(collection)
  useEvent({ events: cloudMarkerCollectionNativeEvents, instance: collection, emit })
  watch(
    () => props.lnglats,
    (val) => collection.setLnglats(toLngLats(val)),
  )
  watch(
    () => [props.ShapeType, props.SizeType, props.color] as const,
    ([ShapeType, SizeType, color]) => collection.setStyles({ ShapeType, SizeType, color }),
  )
  emit('init', collection)
})
</script>

<template></template>
