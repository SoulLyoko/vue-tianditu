<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-polyline :path="path" :edit="edit" color="black" :opacity="1"></tdt-polyline>
    </tdt-map>
    <button @click="edit=!edit">editable</button>
  </div>
</template>

<script>
export default {
  name: "ex-polyline",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      path: [
        [113.32839, 23.14352],
        [113.280637, 23.125178],
        [113.3332, 23.11889]
      ],
      edit: false
    };
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>