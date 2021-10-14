<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-tilelayer-wms v-bind="state.option"></tdt-tilelayer-wms>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  center: [116.40769, 39.89945],
  zoom: 6,
  option: {
    url: "http://gisserver.tianditu.com/tiandituService/wms",
    version: "1.1.1",
    layers: "demo_city,demo_road,demo_anno",
    transparent: true,
    styles: "",
    format: "image/png"
  }
});
</script>

<script lang="ts">
export default { name: "demo-tilelayer-wms" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 600px;
}
</style>
