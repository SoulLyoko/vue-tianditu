<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-tilelayer :url="imageUrl"></tdt-tilelayer>
    </tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-tilelayer",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      imageUrl:
        "http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=7f013d0186775b063d6a046977bbefc6"
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