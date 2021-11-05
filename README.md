# vue-tianditu

天地图 vue 组件库

- vue-tianditu v2 同时支持 Vue3 和 Vue2(composition-api)

- [vue-tianditu 文档 v1](https://soullyoko.github.io/vue-tianditu/v1)

- [vue-tianditu 文档 v2](https://soullyoko.github.io/vue-tianditu/v2)

## 安装

```sh
npm i vue-tianditu@next
# or
yarn add vue-tianditu@next
```

## 快速上手

### 全局引入

全部引入，解放双手

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueTianditu from "vue-tianditu";

const app = createApp(App);
app.use(VueTianditu, {
  v: "4.0", //目前只支持4.0版本
  tk: "your map token"
});
app.mount("#app");
```

```html
<!-- App.vue -->
<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom"></tdt-map>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  import { TdtMap } from "vue-tianditu";
  const state = reactive({
    center: [113.280637, 23.125178],
    zoom: 12
  });
</script>

<style>
  .mapDiv {
    width: 100%;
    height: 100%;
  }
</style>
```

### 按需引入

按需引入，配合 ts 获得类型提示

`App.vue`

```html
<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom" :loadConfig="loadScript"></tdt-map>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  import { TdtMap } from "vue-tianditu";
  const loadConfig = { v: "4.0", tk: "your map token" };
  const state = reactive({
    center: [113.280637, 23.125178],
    zoom: 12
  });
</script>

<style>
  .mapDiv {
    width: 100%;
    height: 100%;
  }
</style>
```

### API 加载器

甚至可以把它当作无情的 API 加载工具

```ts
import { useApiLoader } from "vue-tianditu";

useApiLoader({
  v: "4.0",
  tk: "your map token",
  plugins: ["D3", "CarTrack", "HeatmapOverlay", "BufferTool", "ImageOverLayer"]
}).then(T => {
  new T.Map({...});
});
```

## 辅助函数

```ts
import { toLngLat, toBounds, toPoint, toIcon } from "vue-tianditu";
```

### 说明

| 函数名 | 返回值 | 描述 |
| --- | --- | --- |
| toLngLat(lnglat:[number,number]) | T.LngLat | 转换为经纬度对象。<br>参数说明:<br>lnglat:经纬度数组 |
| toBounds(bounds:[[number,number],[number,number]]) | T.Bounds | 转换为地理范围对象。<br>参数说明:<br>bounds:地理范围数组 |
| toPoint(point:[number,number]) | T.Point | 转换为像素坐标点对象。<br>参数说明:<br>point:像素坐标点数组 |
| toIcon(icon:IconOption\|string) | T.Icon | 转换为图标对象。<br>参数说明:<br>`icon:string//图片地址` 或 `{iconUrl:string,//图片地址`<br>`iconSize:[number,number],//图片大小`<br>`iconAnchor:[number,number]//偏移}` |
