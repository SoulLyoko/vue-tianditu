<template>
  <button @click="state.edit = !state.edit">editable:{{ state.edit }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-circle :center="state.center" :radius="3000" :edit="state.edit" color="black" :opacity="1"></tdt-circle>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  edit: false
});
</script>

<script lang="ts">
export default { name: "demo-circle" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
