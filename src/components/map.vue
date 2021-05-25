<template>
  <tdt-map :center="center" :zoom="zoom" :controls="controls" :mapStyle="mapStyle" @init="mapInit"></tdt-map>
</template>

<script>
import { TdtMap, initApiLoader } from "@/../packages";
initApiLoader({
  v: "4.0",
  tk: "7f013d0186775b063d6a046977bbefc6"
});

export default {
  name: "test-map",
  components: { TdtMap },
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      map: null,
      mapStyle: "black",
      controls: [
        "zoom",
        "copyright",
        {
          name: "scale",
          position: "bottomright"
        },
        {
          name: "mapType",
          mapTypes: [
            {
              title: "地图",
              icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png",
              layer: "TMAP_NORMAL_MAP"
            },
            {
              title: "卫星",
              icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png",
              layer: "TMAP_SATELLITE_MAP"
            },
            {
              title: "卫星混合",
              icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png",
              layer: "TMAP_HYBRID_MAP"
            },
            {
              title: "地形",
              icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrain.png",
              layer: "TMAP_TERRAIN_MAP"
            },
            {
              title: "地形混合",
              icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrainpoi.png",
              layer: "TMAP_TERRAIN_HYBRID_MAP"
            }
          ]
        },
        "overviewMap"
      ]
    };
  },
  methods: {
    mapInit(map) {
      this.map = map;
    }
  }
};
</script>

<style lang="" scoped></style>
