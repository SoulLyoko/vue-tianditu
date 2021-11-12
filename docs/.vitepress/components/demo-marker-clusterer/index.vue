<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-marker-clusterer :markers="state.markers" :styles="state.styles" @click="onClick"></tdt-marker-clusterer>
      <tdt-infowindow v-model:target="state.target" :content="state.content"></tdt-infowindow>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { withBase } from "vitepress";

const state = reactive({
  center: [116.40969, 37.43997],
  zoom: 3,
  markers: Array.from({ length: 500 }, (e, i) => {
    return {
      icon: {
        iconUrl: withBase("/marker_blue.png"),
        iconAnchor: [10, 41]
      },
      position: [Math.random() * 40 + 85, Math.random() * 30 + 21],
      extData: "cluster-" + i
    };
  }),
  styles: [
    {
      url: withBase("/cluster0.png"),
      size: [30, 30], //图片大小
      offset: [0, 0], //显示图片的偏移量
      textColor: "#000000", //显示数字的颜色
      textSize: 8, //显示文字的大小
      range: [0, 50] //显示该图标的范围
    },
    {
      url: withBase("/cluster1.png"),
      size: [40, 40],
      offset: [0, 0],
      textColor: "#000000",
      textSize: 10,
      range: [50, 400]
    },
    {
      url: withBase("/cluster2.png"),
      size: [50, 50],
      offset: [0, 0],
      textColor: "#000000",
      textSize: 12,
      range: [400, 500]
    }
  ],
  target: null,
  content: ""
});

function onClick(e: any) {
  console.log(e);
  state.target = e.layer;
  state.content = `[${e.lnglat.lng}, ${e.lnglat.lat}]`;
}
</script>

<script lang="ts">
export default { name: "demo-marker-clusterer" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 600px;
}
</style>
