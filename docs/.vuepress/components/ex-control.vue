<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom" :controls="controls"></tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-control",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      controls: [
        { name: "zoom", position: "topleft" },
        "scale",
        "copyright",
        "overviewMap",
        "mapType"
      ]
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