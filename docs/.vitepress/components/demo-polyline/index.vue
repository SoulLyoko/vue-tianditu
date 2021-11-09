<template>
  <button @click="state.edit = !state.edit">editable:{{ state.edit }}</button>
  <button @click="state.visible = !state.visible">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-polyline
        :path="state.path"
        color="black"
        :opacity="1"
        :edit="state.edit"
        :visible="state.visible"
      ></tdt-polyline>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  path: [
    [113.32839, 23.14352],
    [113.280637, 23.125178],
    [113.3332, 23.11889]
  ],
  edit: false,
  visible: true
});
</script>

<script lang="ts">
export default { name: "demo-polyline" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
