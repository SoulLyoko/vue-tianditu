<template>
  <button @click="openTool('markTool')">标点</button>
  <button @click="openTool('polygonTool')">画面</button>
  <button @click="openTool('polylineTool')">画线</button>
  <button @click="openTool('rectangleTool')">画矩形</button>
  <button @click="openTool('circleTool')">画圆</button>
  <button @click="openTool('paintBrushTool')">画笔</button>
  <br />
  <button @click="clearTool('markTool')">清除标点</button>
  <button @click="clearTool('polygonTool')">清除面</button>
  <button @click="clearTool('polylineTool')">清除线</button>
  <button @click="clearTool('rectangleTool')">清除矩形</button>
  <button @click="clearTool('circleTool')">清除圆</button>
  <button @click="clearTool('paintBrushTool')">清除画笔</button>
  <button @click="clearTool()">清除全部</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-mousetool ref="mousetoolRef" :markTool="{ follow: true }"></tdt-mousetool>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue-demi";

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11
});

const mousetoolRef = ref();
function openTool(toolName: string) {
  mousetoolRef.value?.open(toolName);
}

function clearTool(toolName?: string) {
  toolName ? mousetoolRef.value?.clear(toolName) : mousetoolRef.value?.clearAll();
}
</script>

<script lang="ts">
export default { name: "demo-mousetool" };
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
