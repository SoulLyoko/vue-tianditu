<template>
  <button @click="state.visible = !state.visible">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom" :controls="state.controls">
      <tdt-control position="topright" :visible="state.visible">
        <button>自定义控件</button>
      </tdt-control>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue-demi";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  controls: [
    { name: "Zoom", position: "topleft" },
    "Scale",
    "Copyright",
    {
      name: "MapType",
      mapTypes: [
        {
          title: "地图", //地图控件上所要显示的图层名称
          icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png", //地图控件上所要显示的图层图标（默认图标大小 80x80）
          layer: "TMAP_NORMAL_MAP" //地图类型，在原天地图api中以window.TMAP_NORMAL_MAP表示，此处为字符串
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
        }
        // {
        //   title: "地形",
        //   icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrain.png",
        //   layer: "TMAP_TERRAIN_MAP"
        // },
        // {
        //   title: "地形混合",
        //   icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrainpoi.png",
        //   layer: "TMAP_TERRAIN_HYBRID_MAP"
        // }
      ]
    },
    {
      name: "OverviewMap",
      isOpen: true,
      anchor: "bottomright"
    }
  ],
  visible: true
});
</script>

<script lang="ts">
export default { name: "demo-control" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
