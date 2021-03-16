<template>
  <div id="app">
    <tdt-map :center="center" :zoom="zoom" :controls="controls">
      <tdt-tilelayer :url="tilelayer" v-if="tilelayer"></tdt-tilelayer>
      <tdt-marker :position="marker" @click="openInfowidow" extData="marker-info"></tdt-marker>
      <tdt-label :position="label" text="Hello World!"></tdt-label>
      <tdt-polyline :path="polyline" :edit="edit" color="black" :opacity="1"></tdt-polyline>
      <tdt-polygon :path="polygon" :edit="edit" color="black" :opacity="1"></tdt-polygon>
      <tdt-rectangle :bounds="rectangle" :edit="edit" color="black" :opacity="1"></tdt-rectangle>
      <tdt-circle :center="circle" :radius="3000" :edit="edit" color="black" :opacity="1"></tdt-circle>
      <tdt-infowindow
        :target="infowindow.target"
        :content="infowindow.content"
        @close="infowindow.target = null"
      ></tdt-infowindow>
      <tdt-mousetool ref="mousetool" :markTool="{ follow: true }" :polygonTool="{ showLabel: true }"></tdt-mousetool>
      <tdt-search></tdt-search>
      <tdt-cartrack :Datas="cartrack" :interval="5" :speed="10" :startOnInit="true"></tdt-cartrack>
    </tdt-map>
    <button @click="changeLayer">切换图层</button>
    <button @click="edit = !edit">编辑</button>
    <button @click="startTrack">车辆轨迹</button>
    <br />
    <button @click="openTool('markTool')">标点</button>
    <button @click="openTool('polygonTool')">测面</button>
    <button @click="openTool('polylineTool')">标线</button>
    <button @click="openTool('rectangleTool')">画矩形</button>
    <button @click="openTool('circleTool')">画圆</button>
    <button @click="clearAll()">清空</button>
  </div>
</template>

<script>
const tilelayerUrl =
  "http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=7f013d0186775b063d6a046977bbefc6";
import tracks from "./tracks";

export default {
  name: "App",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      tilelayer: "",
      controls: [
        "zoom",
        "mapType",
        "copyright",
        "overviewMap",
        {
          name: "scale",
          position: "bottomright"
        }
      ],
      marker: [113.280637, 23.125178],
      label: [113.290637, 23.155178],
      polyline: [
        [113.32839, 23.14352],
        [113.280637, 23.125178],
        [113.3332, 23.11889]
      ],
      polygon: [
        [113.22716, 23.14162],
        [113.26973, 23.14225],
        [113.27316, 23.105],
        [113.23265, 23.11131]
      ],
      rectangle: [
        [113.22716, 23.14162],
        [113.27316, 23.105]
      ],
      circle: [113.280637, 23.125178],
      infowindow: {
        content: "",
        target: null
      },
      edit: false,
      cartrack: []
    };
  },
  methods: {
    changeLayer() {
      this.tilelayer = tilelayerUrl;
    },
    openTool(tool) {
      this.$refs.mousetool.open(tool);
    },
    clearAll() {
      this.$refs.mousetool.clearAll();
    },
    openInfowidow({ target, extData }) {
      this.infowindow = {
        target,
        content: `<h3>${extData}</h3>`
      };
    },
    startTrack() {
      this.cartrack = tracks;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 800px;
  height: 600px;
}

.tdt-search {
  position: absolute;
  left: 900px;
  top: 50px;
}
</style>
