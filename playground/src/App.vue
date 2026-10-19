<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  TdtMap,
  TdtMarker,
  TdtLabel,
  TdtPolyline,
  TdtPolygon,
  TdtRectangle,
  TdtCircle,
  TdtInfowindow,
  TdtMousetool,
  TdtControl,
  TdtControlScale,
  TdtControlZoom,
  TdtControlCopyright,
  TdtControlOverviewMap,
  TdtControlMapType,
  TdtSearch,
} from 'vue-tianditu'

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 12,
  labelPosition: [113.280637, 23.125178],
  polylinePath: [
    [113.280637, 23.125178],
    [113.290637, 23.135178],
  ],
  polygonPath: [
    [113.280637, 23.125178],
    [113.290637, 23.125178],
    [113.290637, 23.115178],
    [113.280637, 23.115178],
  ],
  polygonHolePath: [
    [
      [113.2935, 23.12489],
      [113.3041, 23.12489],
      [113.3041, 23.11514],
      [113.2935, 23.11514],
    ],
    [
      [113.2955, 23.12189],
      [113.3021, 23.12189],
      [113.3021, 23.11814],
      [113.2955, 23.11814],
    ],
  ],
  rectangleBounds: [
    [113.26917, 23.11515],
    [113.27917, 23.12515],
  ],
  imageOverlayBounds: [
    [113.25993, 23.11514],
    [113.2689, 23.12516],
  ],
  markers: [
    { name: 'marker1', position: [113.280637, 23.125178] },
    { name: 'marker2', position: [113.290637, 23.125178] },
    { name: 'marker3', position: [113.290637, 23.115178] },
    { name: 'marker4', position: [113.280637, 23.115178] },
  ],
  circleCenter: [113.28578, 23.10437],
  circleRadius: 1000,
  infowindow: {
    target: null as any,
    content: '',
  },
  keyword: '',
})

function resetMap() {
  state.center = [113.280637, 23.125178]
  state.zoom = 12
}

function openInfoWindow(e: any) {
  console.log('🚀 ~ openInfoWindow ~ e:', e)
  state.infowindow.target = e.target
  state.infowindow.content = e.extData
}

const mousetoolRef = ref()
function openTool(toolName: string) {
  mousetoolRef.value?.open(toolName)
}

const tk = import.meta.env.VITE_TMAP_AUTHKEY

const controlVisible = ref(true)
</script>

<template>
  <div class="map-container">
    <button @click="openTool('markTool')">标点</button>
    <button @click="resetMap">重置地图</button>
    <button @click="controlVisible = !controlVisible">控件显示:{{ controlVisible }}</button>
    <div>center: {{ state.center }} zoom: <input v-model="state.zoom" /></div>
    <div>markers:{{ state.markers }}</div>
    <div>polyline:{{ state.polylinePath }}</div>
    <div>polygon:{{ state.polygonPath }}</div>
    <div>polygonHole:{{ state.polygonHolePath }}</div>
    <div>rectangleBounds:{{ state.rectangleBounds }}</div>
    <div>circle center:{{ state.circleCenter }} radius:{{ state.circleRadius }}</div>
    <TdtMap
      v-model:center="state.center"
      v-model:zoom="state.zoom"
      :controls="['Zoom', 'MapType']"
      :load-config="{ tk, plugins: ['ImageOverLayer'] }"
    >
      <TdtMarker
        v-for="marker in state.markers"
        :key="marker.name"
        v-model:position="marker.position"
        :ext-data="marker.name"
        draggable
        @click="openInfoWindow"
      >
      </TdtMarker>
      <TdtLabel :position="state.labelPosition" :text="state.labelPosition.toString()"></TdtLabel>
      <TdtPolyline
        v-model:path="state.polylinePath"
        ext-data="polyline"
        edit
        @click="openInfoWindow"
      ></TdtPolyline>
      <TdtPolygon
        v-model:path="state.polygonPath"
        ext-data="polygon"
        edit
        @click="openInfoWindow"
      ></TdtPolygon>
      <TdtPolygon
        v-model:path="state.polygonHolePath"
        ext-data="polygonHole"
        edit
        @click="openInfoWindow"
      ></TdtPolygon>
      <TdtRectangle
        v-model:bounds="state.rectangleBounds"
        ext-data="rectangle"
        edit
        @click="openInfoWindow"
      >
      </TdtRectangle>
      <TdtImageOverlay
        :bounds="state.imageOverlayBounds"
        url="http://lbs.tianditu.gov.cn/images/openlibrary/gugong.jpg"
        ext-data="image"
        @click="openInfoWindow"
      >
      </TdtImageOverlay>
      <TdtCircle
        v-model:center="state.circleCenter"
        v-model:radius="state.circleRadius"
        ext-data="circle"
        edit
        @click="openInfoWindow"
      >
      </TdtCircle>
      <TdtInfowindow v-model:target="state.infowindow.target" :close-on-click="true">
        {{ state.infowindow.content }}
      </TdtInfowindow>
      <TdtMousetool ref="mousetoolRef" :mark-tool="{ follow: true }"></TdtMousetool>
      <TdtControl position="topleft">
        <TdtSearch></TdtSearch>
      </TdtControl>
      <TdtControlMapType :visible="controlVisible"></TdtControlMapType>
      <TdtControlZoom :visible="controlVisible"></TdtControlZoom>
      <TdtControlCopyright id="test" content="test" :visible="controlVisible"></TdtControlCopyright>
      <TdtControlScale :visible="controlVisible"></TdtControlScale>
      <TdtControlOverviewMap :visible="controlVisible"></TdtControlOverviewMap>
    </TdtMap>
  </div>
</template>

<style>
.map-container {
  width: 800px;
  height: 600px;
}
</style>
