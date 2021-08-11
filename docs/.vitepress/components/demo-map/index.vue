<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom"></tdt-map>
  </div>
</template>

<script lang="ts">
export default {
  name: "demo-map"
};
</script>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 12
});
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
