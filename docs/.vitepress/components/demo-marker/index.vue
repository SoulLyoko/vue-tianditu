<template>
  <button @click="state.draggable = !state.draggable">draggable</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-marker :position="state.marker1" :draggable="state.draggable"></tdt-marker>
      <tdt-marker :position="state.marker2" :draggable="state.draggable" :icon="state.icon"></tdt-marker>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  draggable: false,
  marker1: [113.280637, 23.125178],
  marker2: [113.300037, 23.125178],
  icon: {
    iconUrl: "/marker_red.png",
    iconSize: [18, 26],
    iconAnchor: [9, 26]
  }
});
</script>

<script lang="ts">
export default { name: "demo-marker" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
