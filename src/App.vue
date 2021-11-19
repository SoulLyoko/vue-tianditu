<template>
  <div class="map-container">
    <button @click="openTool('markTool')">标点</button>
    <TdtMap
      :center="state.center"
      :zoom="state.zoom"
      :controls="['Zoom', 'MapType']"
      :load-config="{ tk: '7f013d0186775b063d6a046977bbefc6' }"
    >
      <TdtMarker
        v-for="marker in state.markers"
        :key="marker.name"
        :position="marker.position"
        :ext-data="marker.name"
        @click="openInfoWindow"
      ></TdtMarker>
      <TdtLabel :position="state.center" text="123"></TdtLabel>
      <TdtPolyline :path="state.polylinePath" ext-data="polyline" @click="openInfoWindow"></TdtPolyline>
      <TdtPolygon :path="state.polygonPath" ext-data="polygon" @click="openInfoWindow"></TdtPolygon>
      <TdtRectangle :bounds="state.bounds" ext-data="rectangle" @click="openInfoWindow"></TdtRectangle>
      <TdtCircle :center="state.center" :radius="1000" ext-data="circle" @click="openInfoWindow"></TdtCircle>
      <TdtInfowindow
        v-model:target="state.infowindow.target"
        :content="state.infowindow.content"
        :close-on-click="true"
      ></TdtInfowindow>
      <TdtMousetool ref="mousetoolRef" :mark-tool="{ follow: true }"></TdtMousetool>
      <TdtControl position="topleft">
        <TdtSearch></TdtSearch>
      </TdtControl>
    </TdtMap>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue-demi";
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
  TdtSearch
} from "~/index";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 12,
  polylinePath: [
    [113.280637, 23.125178],
    [113.290637, 23.135178]
  ],
  polygonPath: [
    [113.280637, 23.125178],
    [113.290637, 23.125178],
    [113.290637, 23.115178],
    [113.280637, 23.115178]
  ],
  bounds: [
    [113.280637, 23.125178],
    [113.270637, 23.115178]
  ],
  markers: [
    { name: "marker1", position: [113.280637, 23.125178] },
    { name: "marker2", position: [113.290637, 23.125178] },
    { name: "marker3", position: [113.290637, 23.115178] },
    { name: "marker4", position: [113.280637, 23.115178] }
  ],
  infowindow: {
    target: null as any,
    content: ""
  },
  keyword: ""
});

function openInfoWindow(e: any) {
  state.infowindow.target = e.target;
  state.infowindow.content = e.extData;
}

const mousetoolRef = ref();
function openTool(toolName: string) {
  console.log("🚀 ~ file: App.vue ~ line 89 ~ openTool ~ mousetoolRef.value", mousetoolRef.value);
  mousetoolRef.value?.open(toolName);
}
</script>

<style>
.map-container {
  width: 800px;
  height: 600px;
}
</style>
