<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom">
      <tdt-mousetool
        ref="mousetool"
        :markTool="{follow:true}"
        :polygonTool="{showLabel:true}"
        @polyline-draw="polylineDraw"
      ></tdt-mousetool>
    </tdt-map>
    <button @click="openTool('markTool')">标点</button>
    <button @click="openTool('polygonTool')">测面</button>
    <button @click="openTool('polylineTool')">标线</button>
    <button @click="openTool('rectangleTool')">画矩形</button>
    <button @click="openTool('circleTool')">画圆</button>
    <button @click="clearAll()">清空</button>
  </div>
</template>

<script>
export default {
  name: "ex-control",
  data() {
    return {
      center: [113.280637, 23.125178],
      zoom: 11
    };
  },
  methods: {
    openTool(tool) {
      this.$refs.mousetool.open(tool);
    },
    clearAll() {
      this.$refs.mousetool.clearAll();
    },
    polylineDraw({ currentDistance }) {
      alert(currentDistance);
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