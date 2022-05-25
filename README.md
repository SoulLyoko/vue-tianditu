# vue-tianditu

- 天地图 vue 组件库

- vue-tianditu v2 同时支持 Vue3 和 Vue2(composition-api)

- [vue-tianditu v2 文档](https://soullyoko.github.io/vue-tianditu/)

## 安装

```sh
npm i vue-tianditu
# or
yarn add vue-tianditu
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
}).then(() => {
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

## 调用原生API

由于API是通过`useApiLoader`异步加载的，所以需要在API加载完成后才能使用天地图原生的API，有以下三种方式:

- 不使用组件，只使用API加载器
```html
<template>
  <div id="mapContainer"></div>
</template>

<script>
import { useApiLoader } from "vue-tianditu";
// 加载API
useApiLoader({
  v: "4.0",
  tk: "your map token",
  plugins: ["D3", "CarTrack", "HeatmapOverlay", "BufferTool", "ImageOverLayer"]
}).then(() => {
  const map = new T.Map("mapContainer", {...});
  const marker = new T.Marker({...});
  map.addOverlay(marker);
});
</script>
```
- 使用组件，监听组件的初始化事件
```html
<template>
  <tdt-map @init="mapInit"></tdt-map>
</template>

<script>
function mapInit(map){
  // 此时原生API中的T已存在window中
  const marker = new T.Marker({...})
  map.addOverlay(marker);
}
</script>
```
- 注册了组件，使用API加载器异步等待API加载完成
```js
// 不用传参数，异步等待之前注册组件时带参数加载的API加载完成
useApiLoader({}).then(() => {
  const marker = new T.Marker({...});
});
```
如果项目中用到了eslint，则需要在eslintrc配置文件中加入
```js
{
  ...
  globals: {
    ...
    T: "readonly"
  }
}
```

