<template>
  <div class="map-container">
    <button @click="openTool('markTool')">标点</button>
    <TdtMap :center="state.center" :zoom="state.zoom" :controls="['Zoom', 'MapType']">
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
        :target="state.infowindow.target"
        :content="state.infowindow.content"
        :close-on-click="true"
        @update:target="state.infowindow.target = $event"
      ></TdtInfowindow>
      <TdtMousetool ref="mousetoolRef" :mark-tool="{ follow: true }"></TdtMousetool>
      <TdtControl position="topleft">
        <TdtSearch></TdtSearch>
      </TdtControl>
    </TdtMap>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue-demi";

export default defineComponent({
  setup() {
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
      mousetoolRef.value?.open(toolName);
    }

    return {
      state,
      mousetoolRef,
      openInfoWindow,
      openTool
    };
  }
});
</script>

<style>
.map-container {
  width: 800px;
  height: 600px;
}
</style>
