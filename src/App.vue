<template>
  <div id="app">
    <tdt-map :center="center" :zoom="zoom" :controls="controls" :mapStyle="mapStyle">
      <tdt-tilelayer :url="tilelayer" v-if="tilelayer"></tdt-tilelayer>
      <tdt-marker :position="marker" @click="openInfowidow" :extData="marker"></tdt-marker>
      <tdt-label :position="label" text="Hello World!"></tdt-label>
      <tdt-polyline :path="polyline" :edit="edit" color="black" :opacity="1"></tdt-polyline>
      <tdt-polygon :path="polygon" :edit="edit" color="black" :opacity="1"></tdt-polygon>
      <tdt-rectangle :bounds="rectangle" :edit="edit" color="black" :opacity="1"></tdt-rectangle>
      <tdt-circle :center="circle" :radius="3000" :edit="edit" color="black" :opacity="1"></tdt-circle>
      <tdt-infowindow
        :target="infowindow.target"
        :content="infowindow.content"
        :offset="infowindow.offset"
        @close="infowindow.target = null"
      ></tdt-infowindow>
      <tdt-mousetool ref="mousetool" :markTool="{ follow: true }" :polygonTool="{ showLabel: true }"></tdt-mousetool>
      <tdt-search></tdt-search>
      <tdt-cartrack :Datas="cartrack" :interval="5" :speed="10" :startOnInit="true"></tdt-cartrack>
      <tdt-marker-cluster :markers="clusterMarkers" @click="clusterClick"></tdt-marker-cluster>
      <tdt-control position="topright">
        <el-button type="primary">自定义控件</el-button>
      </tdt-control>
    </tdt-map>
    <button @click="changeStyle">设置地图样式</button>
    <button @click="changeLayer">切换图层</button>
    <button @click="edit = !edit">编辑</button>
    <button @click="startTrack">车辆轨迹</button>
    <button @click="addCluster">点聚合</button>
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
      mapStyle: "",
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
            }
          ]
        },
        "overviewMap"
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
        content: "123123",
        offset: [0, 0],
        target: [113.280637, 23.125178]
      },
      edit: false,
      cartrack: [],
      clusterMarkers: []
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
      console.log(target);
      this.infowindow = {
        // target: target,
        target: [113.280637, 23.125178],
        offset: [0, -32],
        content: `<h3>${extData}</h3>`
      };
    },
    startTrack() {
      this.cartrack = tracks;
    },
    addCluster() {
      this.clusterMarkers = new Array(500).fill(0).map((item, index) => {
        return {
          position: [Math.random() * 40 + 85, Math.random() * 30 + 21],
          extData: "cluster-" + index
        };
      });
    },
    clusterClick({ layer }) {
      const {
        options: { extData }
      } = layer;
      this.infowindow = {
        target: layer,
        content: `<h3>${extData}</h3>`
      };
    },
    changeStyle() {
      this.mapStyle = "black";
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
