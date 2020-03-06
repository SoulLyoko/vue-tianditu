<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-polygon :path="path" :edit="edit" color="black" :opacity="1"></tdt-polygon>
    </tdt-map>
    <button @click="edit=!edit">editable</button>
  </div>
</template>

<script>
export default {
  name: "ex-polygon",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      path: [
        [113.22716, 23.14162],
        [113.26973, 23.14225],
        [113.27316, 23.105],
        [113.23265, 23.11131]
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