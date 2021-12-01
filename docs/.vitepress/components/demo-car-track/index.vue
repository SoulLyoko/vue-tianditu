<template>
  <button @click="getData()">getData</button>
  <button @click="onBtnClick('start')">start</button>
  <button @click="onBtnClick('pause')">pause</button>
  <button @click="onBtnClick('stop')">stop</button>
  <button @click="state.Datas = []">clear</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-car-track ref="carTrack" :Datas="state.Datas" :interval="5" :speed="10"></tdt-car-track>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue-demi";
import { data } from "./data";

const state = reactive({
  center: [116.31809, 39.92027],
  zoom: 13,
  Datas: [] as number[][]
});

function getData() {
  state.Datas = data.features.map(feature => feature.geometry.coordinates);
}

const carTrack = ref();
function onBtnClick(handle: string) {
  carTrack.value[handle]();
}
</script>

<script lang="ts">
export default { name: "demo-car-track" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
