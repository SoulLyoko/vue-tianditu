<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom"></tdt-map>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue-demi";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11
});
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
