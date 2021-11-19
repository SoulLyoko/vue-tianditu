<template>
  <button @click="state.edit = !state.edit">editable:{{ state.edit }}</button>
  <button @click="state.visible = !state.visible">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-circle
        :center="state.center"
        :radius="3000"
        color="black"
        :opacity="1"
        :edit="state.edit"
        :visible="state.visible"
      ></tdt-circle>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue-demi";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  edit: false,
  visible: true
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
