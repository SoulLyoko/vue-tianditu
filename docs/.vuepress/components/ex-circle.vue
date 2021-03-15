<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-circle :center="center" :radius="3000" :edit="edit" color="black" :opacity="1"></tdt-circle>
    </tdt-map>
    <button @click="edit = !edit">editable</button>
  </div>
</template>

<script>
export default {
  name: "ex-circle",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
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
