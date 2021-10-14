<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-rectangle :bounds="state.bounds" :edit="state.edit" color="black" :opacity="1"></tdt-rectangle>
    </tdt-map>
    <button @click="state.edit = !state.edit">editable</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  bounds: [
    [113.22716, 23.14162],
    [113.27316, 23.105]
  ],
  edit: false
});
</script>

<script lang="ts">
export default { name: "demo-rectangle" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
