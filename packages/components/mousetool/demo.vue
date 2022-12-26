<template>
  <button class="btn" @click="openTool('markTool')">标点</button>
  <button class="btn" @click="openTool('polygonTool')">画面</button>
  <button class="btn" @click="openTool('polylineTool')">画线</button>
  <button class="btn" @click="openTool('rectangleTool')">画矩形</button>
  <button class="btn" @click="openTool('circleTool')">画圆</button>
  <button class="btn" @click="openTool('paintBrushTool')">画笔</button>
  <br />
  <button class="btn" @click="clearTool('markTool')">清除标点</button>
  <button class="btn" @click="clearTool('polygonTool')">清除面</button>
  <button class="btn" @click="clearTool('polylineTool')">清除线</button>
  <button class="btn" @click="clearTool('rectangleTool')">清除矩形</button>
  <button class="btn" @click="clearTool('circleTool')">清除圆</button>
  <button class="btn" @click="clearTool('paintBrushTool')">清除画笔</button>
  <button class="btn" @click="clearTool()">清除全部</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-mousetool ref="mousetoolRef" :mark-tool="{ follow: true }" @mark-mouseup="onMarkMouseup"></tdt-mousetool>
    </tdt-map>
  </div>
</template>

<script setup lang="ts">
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

function onMarkMouseup(e: T.MarkToolEvent) {
  console.log(e);
}
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
