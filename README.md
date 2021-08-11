# vue-tianditu

天地图 vue 组件库

[vue-tianditu 文档 v1](https://soullyoko.github.io/vue-tianditu/v1/)
[vue-tianditu 文档 v2](https://soullyoko.github.io/vue-tianditu/v2/)

## 安装

### NPM

```sh
npm i vue-tianditu
# or
yarn add vue-tianditu
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-tianditu"></script>
```

## 快速上手

### 全局引入

`main.js`

```js
import Vue from "vue";
import VueTianditu from "vue-tianditu";
import App from "./App.vue";

Vue.use(VueTianditu, {
  v: "4.0",
  tk: "your map token"
});

new Vue({
  el: "#app",
  render: h => h(App)
});
```

`App.vue`

```html
<template>
  <div class="mapDiv">
    <tdt-map></tdt-map>
  </div>
</template>

<style>
  .mapDiv {
    width: 100%;
    height: 100%;
  }
</style>
```

### 按需引入(v1.2.9+)

`App.vue`

```html
<template>
  <div class="mapDiv">
    <tdt-map></tdt-map>
  </div>
</template>

<script>
  import { TdtMap, initApiLoader } from "vue-tianditu";
  initApiLoader({
    v: "4.0",
    tk: "your map token"
  });
  export default {
    components: { TdtMap }
  };
</script>

<style>
  .mapDiv {
    width: 100%;
    height: 100%;
  }
</style>
```

### CDN 引入

需手动加载 API

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-tianditu"></script>
<script>
  VueTianditu.initApiLoader({
    v: "4.0",
    tk: "your map token"
  });
  ...
</script>
```

## 辅助函数(v1.2.9+)

```js
import { toLngLat, toBounds, toPoint, toIcon } from "vue-tianditu";
```

### 说明

| 函数名                                             | 返回值   | 描述                                                                                                                                                                     |
| -------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| toLngLat(lnglat:[Number,Number])                   | T.LngLat | 转换为经纬度对象。<br>参数说明:<br>lnglat:经纬度数组                                                                                                                     |
| toBounds(bounds:[[Number,Number],[Number,Number]]) | T.Bounds | 转换为地理范围对象。<br>参数说明:<br>bounds:地理范围数组                                                                                                                 |
| toPoint(point:[Number,Number])                     | T.Point  | 转换为像素坐标点对象。<br>参数说明:<br>point:像素坐标点数组                                                                                                              |
| toIcon(icon:Object\|String)                        | T.Icon   | 转换为图标对象。<br>参数说明:<br>`icon:String//图片地址` 或 `{iconUrl:String,//图片地址`<br>`iconSize:[Number,Number],//图片大小`<br>`iconAnchor:[Number,Number]//偏移}` |
