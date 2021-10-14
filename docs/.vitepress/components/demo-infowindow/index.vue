<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-marker :position="state.marker1" @click="openInfowindow" extData="marker1"></tdt-marker>
      <tdt-marker :position="state.marker2" @click="openInfowindow" extData="marker2"></tdt-marker>
      <tdt-infowindow v-model="state.infowindow.target" :content="state.infowindow.content"></tdt-infowindow>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  marker1: [113.280637, 23.125178],
  marker2: [113.320037, 23.125178],
  infowindow: {
    content: "123",
    target: null
  }
});

function openInfowindow({ target, extData }: any) {
  state.infowindow = {
    target,
    content: `<span>${extData}</span>`
  };
}
</script>

<script lang="ts">
export default { name: "demo-infowindow" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
