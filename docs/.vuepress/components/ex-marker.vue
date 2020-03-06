<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-marker :position="marker1"></tdt-marker>
      <tdt-marker :position="marker2" :icon="icon"></tdt-marker>
    </tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-marker",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      marker1: [113.280637, 23.125178],
      marker2: [113.300037, 23.125178],
      icon: {
        iconUrl: "/marker_red.png",
        iconSize: [18, 26],
        iconAnchor: [9, 26]
      }
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