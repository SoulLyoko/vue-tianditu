<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-tilelayer :url="state.url" :z-index="1"></tdt-tilelayer>
    </tdt-map>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue-demi";

import { TOKEN } from "~/constants";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  url:
    "http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" +
    TOKEN
});
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
