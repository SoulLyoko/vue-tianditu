<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-marker
        v-for="marker in markers"
        :position="marker.position"
        :extData="marker"
        @click="openInfowindow"
      ></tdt-marker>
      <tdt-infowindow v-model:target="state.currentMarker.position" :minWidth="150" :offset="[0, -30]">
        <div>
          <strong>{{ state.currentMarker.title }}</strong>
          <div>{{ state.currentMarker.position }}</div>
        </div>
      </tdt-infowindow>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue-demi";

const markers = [
  { title: "这是第一个标记点", position: [113.280637, 23.125178] },
  { title: "这是第二个标记点", position: [113.300637, 23.125178] },
  { title: "这是第三个标记点", position: [113.320637, 23.125178] },
  { title: "这是第四个标记点", position: [113.340637, 23.125178] }
];

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  currentMarker: {} as typeof markers[0]
});

function openInfowindow({ extData }: { extData: typeof markers[0] }) {
  state.currentMarker = { ...extData };
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
