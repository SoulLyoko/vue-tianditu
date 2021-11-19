<template>
  <button @click="state.visible = !state.visible">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom" :controls="state.controls">
      <tdt-control position="topright" :visible="state.visible">
        <button>自定义控件</button>
      </tdt-control>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue-demi";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  controls: [{ name: "Zoom", position: "topleft" }, "Scale", "Copyright", "MapType", "OverviewMap"],
  visible: true
});
</script>

<script lang="ts">
export default { name: "demo-control" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
