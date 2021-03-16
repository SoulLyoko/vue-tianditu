<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-marker :position="marker1" @click="openInfowindow" extData="marker1"></tdt-marker>
      <tdt-marker :position="marker2" @click="openInfowindow" extData="marker2"></tdt-marker>
      <tdt-infowindow
        :target="infowindow.target"
        :content="infowindow.content"
        @close="infowindow.target = null"
      ></tdt-infowindow>
    </tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-infowindow",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      marker1: [113.280637, 23.125178],
      marker2: [113.320037, 23.125178],
      infowindow: {
        content: "",
        target: null
      }
    };
  },
  methods: {
    openInfowindow({ target, extData }) {
      this.infowindow = {
        target,
        content: `<span>${extData}</span>`
      };
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
