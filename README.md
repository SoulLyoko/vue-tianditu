# vue-tianditu

天地图 vue3 组件库

[vue-tianditu 文档](https://soullyoko.github.io/vue-tianditu/)

## 安装

```sh
npm i vue-tianditu@next
# or
yarn add vue-tianditu@next
```

## 快速上手

### 全局引入

`main.ts`

```ts
import { createApp } from "vue";
import App from "./App.vue";
import VueTianditu from "vue-tianditu";

const app = createApp(App);
app.use(VueTianditu, {
  v: "4.0",
  tk: "your map token"
});
app.mount("#app");
```

`App.vue`

```html
<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" zoom="state.zoom"></tdt-map>
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

- 建议按需引入配合 ts 获得类型提示

`App.vue`

```html
<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" zoom="state.zoom"></tdt-map>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  import { TdtMap, initApiLoader } from "vue-tianditu";
  initApiLoader({
    v: "4.0",
    tk: "your map token"
  });
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

## 辅助函数

```ts
import { toLngLat, toBounds, toPoint, toIcon } from "vue-tianditu";
```
