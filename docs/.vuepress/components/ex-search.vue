<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-search></tdt-search>
    </tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-search",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11
    };
  }
};
</script>

<style scoped>
.mapDiv {
  width: 500px;
  height: 500px;
  position: relative;
}
.tdt-search {
  position: absolute;
  right: -250px;
  top: 0;
}
</style>
