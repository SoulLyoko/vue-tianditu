<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-cartrack ref="tdtCartrack" :Datas="tracks" :interval="5" :speed="10"></tdt-cartrack>
    </tdt-map>
    <button @click="getData">获取数据</button>
    <button @click="ctrlTrack('start')">开始</button>
    <button @click="ctrlTrack('pause')">暂停</button>
    <button @click="ctrlTrack('stop')">停止</button>
    <button @click="ctrlTrack('clear')">清空</button>
  </div>
</template>

<script>
const tracks = [
  [113.282417, 23.112452],
  [113.282422, 23.112878],
  [113.28279, 23.113568],
  [113.283307, 23.113864],
  [113.283307, 23.113864],
  [113.283717, 23.114324],
  [113.283913, 23.114592],
  [113.283913, 23.114592],
  [113.283913, 23.114592],
  [113.28914, 23.137385],
  [113.291526, 23.137098],
  [113.29414, 23.137017],
  [113.296902, 23.137084],
  [113.24633, 23.142696],
  [113.244502, 23.14353],
  [113.251482, 23.140548],
  [113.25275, 23.140262],
  [113.254188, 23.139822],
  [113.252869, 23.140541],
  [113.250713, 23.141234],
  [113.249815, 23.141546],
  [113.25071, 23.141067],
  [113.252108, 23.140466]
];

export default {
  name: "ex-cartrack",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11,
      tracks: []
    };
  },
  methods: {
    getData() {
      this.tracks = tracks;
    },
    ctrlTrack(type) {
      this.$refs.tdtCartrack[type]();
      if (type === "clear") {
        this.tracks = [];
      }
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
