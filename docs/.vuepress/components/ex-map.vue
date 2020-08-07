<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom" @click="mapClick"></tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-map",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11
    };
  },
  methods: {
    mapClick(evt) {
      alert("click map");
    }
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
