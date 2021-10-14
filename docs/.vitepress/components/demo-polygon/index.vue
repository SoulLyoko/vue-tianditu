<template>
  <button @click="state.edit = !state.edit">editable</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-polygon :path="state.path" :edit="state.edit" color="black" :opacity="1"></tdt-polygon>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  path: [
    [113.22716, 23.14162],
    [113.26973, 23.14225],
    [113.27316, 23.105],
    [113.23265, 23.11131]
  ],
  edit: false
});
</script>

<script lang="ts">
export default { name: "demo-polygon" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
