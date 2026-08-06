<script setup lang="ts">
import TdtMarker from '../../../overlay/marker/index.vue'
import TdtPolyline from '../../../overlay/polyline/index.vue'
import { useState } from '../use'

defineOptions({ name: 'RouteMapView' })
const state = useState()
const startIcon = {
  iconUrl: 'http://lbs.tianditu.gov.cn/images/bus/start.png',
  iconSize: [44, 34],
  iconAnchor: [12, 31],
}
const endIcon = {
  iconUrl: 'http://lbs.tianditu.gov.cn/images/bus/end.png',
  iconSize: [44, 34],
  iconAnchor: [12, 31],
}
const busIcon = {
  iconUrl: 'http://lbs.tianditu.gov.cn/images/bus/map_bus.png',
  iconSize: [23, 23],
  iconAnchor: [12, 12],
}
const metroIcon = {
  iconUrl: 'http://lbs.tianditu.gov.cn/images/bus/map_metro.png',
  iconSize: [23, 23],
  iconAnchor: [12, 12],
}
</script>

<template>
  <TdtMarker v-if="state.startMarker.length" :position="state.startMarker" :icon="startIcon" />
  <TdtMarker v-if="state.endMarker.length" :position="state.endMarker" :icon="endIcon" />
  <TdtPolyline
    v-for="(path, index) in state.drivingLines"
    :key="`driving-${index}`"
    :path="path"
    color="#2c64a7"
    line-style="solid"
    :weight="5"
    :opacity="1"
  />
  <TdtPolyline
    v-for="(path, index) in state.walkLines"
    :key="`walk-${index}`"
    :path="path"
    color="#2e9531"
    line-style="dashed"
    :weight="4"
    :opacity="1"
  />
  <TdtPolyline
    v-for="(path, index) in state.busLines"
    :key="`bus-${index}`"
    :path="path"
    color="#2c64a7"
    line-style="solid"
    :weight="4"
    :opacity="1"
  />
  <TdtMarker
    v-for="(position, index) in state.busMarkers"
    :key="`bus-marker-${index}`"
    :position="position"
    :icon="busIcon"
  />
  <TdtMarker
    v-for="(position, index) in state.metroMarkers"
    :key="`metro-marker-${index}`"
    :position="position"
    :icon="metroIcon"
  />
</template>
