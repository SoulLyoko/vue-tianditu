<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-label :position="center" text="Hello World!"></tdt-label>
    </tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-label",
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
  width: 100%;
  height: 300px;
}
</style>