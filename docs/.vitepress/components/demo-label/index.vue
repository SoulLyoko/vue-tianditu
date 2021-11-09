<template>
  <button @click="state.visible = !state.visible">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-label :position="state.center" text="Hello World!" :visible="state.visible"></tdt-label>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  visible: true
});
</script>

<script lang="ts">
export default { name: "demo-label" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
