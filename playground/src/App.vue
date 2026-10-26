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
  TdtTilelayer,
  TdtTilelayerTdt,
  TdtTilelayerWms,
  TdtGridlineLayer,
  TdtSearch,
  TdtCloudMarkerCollection,
  TdtMarkerClusterer,
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
  markerCollection: [] as number[][],
  markerClusterer: [] as any[],
})

fetch('/data.json')
  .then((r) => r.json())
  .then((r: number[][]) => (state.markerCollection = r.map((e) => [e[0], e[1]])))

state.markerClusterer = Array.from({ length: 1000 }).map((_, i) => {
  return { position: [Math.random() * 40 + 85, Math.random() * 30 + 21], title: i }
})

function resetCenterAndZoom() {
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
const imageUrl = `https://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${tk}`
const layerOptions = [
  { value: 'none', label: '无' },
  { value: 'TileLayer', label: '瓦片图层' },
  { value: 'TDT', label: 'TDT图层' },
  { value: 'WMS', label: 'WMS图层' },
  { value: 'GridlineLayer', label: '网格图层' },
] as const
const activeLayer = ref<(typeof layerOptions)[number]['value']>('none')

const controlVisible = ref(true)
</script>

<template>
  <div class="map-container">
    <button @click="openTool('markTool')">标点</button>
    <button @click="resetCenterAndZoom">重置中心点和缩放</button>
    <button @click="controlVisible = !controlVisible">控件显示:{{ controlVisible }}</button>
    <div>
      center: [<input v-model="state.center[0]" type="number" />,
      <input v-model="state.center[1]" type="number" />]
    </div>
    <div>zoom:<input v-model="state.zoom" type="number" /></div>
    <div>markers:{{ state.markers }}</div>
    <div>polyline:{{ state.polylinePath }}</div>
    <div>polygon:{{ state.polygonPath }}</div>
    <div>polygonHole:{{ state.polygonHolePath }}</div>
    <div>rectangleBounds:{{ state.rectangleBounds }}</div>
    <div>circle center:{{ state.circleCenter }} radius:{{ state.circleRadius }}</div>
    <label>layers: </label>
    <label v-for="option in layerOptions" :key="option.value">
      <input v-model="activeLayer" type="radio" name="tilelayer" :value="option.value" />
      {{ option.label }}
    </label>
    <TdtMap
      v-model:center="state.center"
      v-model:zoom="state.zoom"
      :load-config="{ tk, plugins: ['ImageOverLayer'] }"
    >
      <TdtTilelayer v-if="activeLayer === 'TileLayer'" :url="imageUrl" />
      <TdtTilelayerTdt v-if="activeLayer === 'TDT'" :url="imageUrl" attribution="天地图影像底图" />
      <TdtTilelayerWms
        v-if="activeLayer === 'WMS'"
        url="http://gisserver.tianditu.com/tiandituService/wms"
        version="1.1.1"
        layers="demo_city,demo_road,demo_anno"
        transparent
        format="image/png"
      />
      <TdtGridlineLayer v-if="activeLayer === 'GridlineLayer'" />
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
      <TdtCloudMarkerCollection
        :lnglats="state.markerCollection"
        color="blue"
      ></TdtCloudMarkerCollection>
      <TdtMarkerClusterer :markers="state.markerClusterer"></TdtMarkerClusterer>
    </TdtMap>
  </div>
</template>

<style>
.map-container {
  width: 800px;
  height: 600px;
}
</style>
