<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-tilelayer-wms v-bind="option"></tdt-tilelayer-wms>
    </tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-tilelayer-wms",
  data() {
    return {
      center: [116.40769, 39.89945],
      zoom: 6,
      option: {
        url: "http://gisserver.tianditu.com/tiandituService/wms",
        version: "1.1.1",
        layers: "demo_city,demo_road,demo_anno",
        transparent: true,
        styles: "",
        format: "image/png"
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
