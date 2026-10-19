<script setup lang="ts">
import { toBounds, toLngLat, toLngLats, useApiLoader } from '@vue-tianditu/core'
import { onMounted, shallowRef, useTemplateRef, watch } from 'vue'

import { provideMap, useEvent, useWatch } from '../composables'
import { mapEmits, mapNativeEvents, mapProps } from './props'

defineOptions({ name: 'TdtMap' })
const props = defineProps(mapProps)
const emit = defineEmits(mapEmits)
const mapEl = useTemplateRef('mapEl')
const mapRef = shallowRef<T.Map>()
provideMap(mapRef)

onMounted(async () => {
  await useApiLoader(props.loadConfig)
  if (!mapEl.value) throw new Error('map container is not mounted')

  const { projection, minZoom, maxZoom, center, zoom } = props
  const map = new T.Map(mapEl.value, {
    projection,
    minZoom,
    maxZoom,
    center: toLngLat(center),
    zoom,
  })
  mapRef.value = map
  map.centerAndZoom(toLngLat(center), zoom)
  emit('init', map)

  map.addEventListener('zoomend', (e) => {
    emit('update:zoom', e.target.getZoom())
    const { lng, lat } = e.target.getCenter()
    emit('update:center', [lng, lat])
  })
  map.addEventListener('drag', (e) => {
    const { lng, lat } = e.target.getCenter()
    emit('update:center', [lng, lat])
  })
  map.addEventListener('touchmove', (e) => {
    const { lng, lat } = e.target.getCenter()
    emit('update:center', [lng, lat])
  })
  useEvent({ events: mapNativeEvents, instance: map, emit })

  watch(
    () => [props.center, props.zoom] as const,
    ([center, zoom]) => {
      if (!center || !zoom) return
      if (map.getCenter().equals(toLngLat(center)) && map.getZoom() === zoom) return
      map.panTo(toLngLat(center), zoom)
    },
    { deep: true },
  )
  useWatch(props, {
    drag: (val) => (val ? map.enableDrag() : map.disableDrag()),
    scrollWheelZoom: (val) => (val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom()),
    doubleClickZoom: (val) => (val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom()),
    keyboard: (val) => (val ? map.enableKeyboard() : map.disableKeyboard()),
    inertia: (val) => (val ? map.enableInertia() : map.disableInertia()),
    continuousZoom: (val) => (val ? map.enableContinuousZoom() : map.disableContinuousZoom()),
    pinchToZoom: (val) => (val ? map.enablePinchToZoom() : map.disablePinchToZoom()),
    autoResize: (val) => (val ? map.enableAutoResize() : map.disableAutoResize()),
    minZoom: (val) => val && map.setMinZoom(val),
    maxZoom: (val) => val && map.setMaxZoom(val),
    maxBounds: (val) => val && map.setMaxBounds(toBounds(val)),
    viewport: (val) => val && map.setViewport(toLngLats(val)),
    mapStyle: (val) => (val ? map.setStyle(val) : map.removeStyle()),
  })
})
</script>

<template>
  <div class="tdt-map-container">
    <div ref="mapEl" class="tdt-map"></div>
    <slot v-if="mapRef" />
  </div>
</template>

<style lang="scss" scoped>
.tdt-map-container,
.tdt-map {
  width: 100%;
  height: 100%;
}
</style>
