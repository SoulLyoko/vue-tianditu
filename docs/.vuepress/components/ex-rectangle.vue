<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-rectangle :bounds="bounds" :edit="edit" color="black" :opacity="1"></tdt-rectangle>
    </tdt-map>
    <button @click="edit=!edit">editable</button>
  </div>
</template>

<script>
export default {
  name: "ex-rectangle",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      bounds: [
        [113.22716, 23.14162],
        [113.27316, 23.105]
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