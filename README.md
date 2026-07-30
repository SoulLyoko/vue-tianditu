# vue-tianditu

基于 Vue 3 的天地图组件库，提供地图、覆盖物、图层、搜索、路线和车辆轨迹组件。

- Vue 3.5+
- 天地图 JavaScript API 4.0
- ESM、TypeScript 类型声明、source map 和 CSS
- [在线文档](https://soullyoko.github.io/vue-tianditu/)

## 包结构

| 包                         | 用途                                            |
| -------------------------- | ----------------------------------------------- |
| `@vue-tianditu/types`      | 全局 `T` / `VT`、地图 API 和组件公共类型        |
| `@vue-tianditu/core`       | API loader、转换器和通用函数，不依赖 Vue 运行时 |
| `@vue-tianditu/components` | Vue 3 组件、安装插件和组件样式                  |
| `vue-tianditu`             | 统一导出以上三个包，默认导出组件安装插件        |

## 安装

通常只需安装统一入口：

```sh
pnpm add vue-tianditu vue
```

也可以按职责单独安装：

```sh
pnpm add @vue-tianditu/types
pnpm add @vue-tianditu/core
pnpm add @vue-tianditu/components vue
```

## 全局注册

```ts
import { createApp } from "vue";
import VueTianditu from "vue-tianditu";
import "vue-tianditu/style.css";
import App from "./App.vue";

createApp(App)
  .use(VueTianditu, {
    v: "4.0",
    tk: "your map token",
  })
  .mount("#app");
```

```vue
<script setup lang="ts">
import { reactive } from "vue";

const map = reactive({
  center: [113.280637, 23.125178] as [number, number],
  zoom: 12,
});
</script>

<template>
  <TdtMap :center="map.center" :zoom="map.zoom" />
</template>
```

## 按需使用

```vue
<script setup lang="ts">
import { TdtMap, TdtMarker, type LoadConfig } from "vue-tianditu";
import "vue-tianditu/style.css";

const loadConfig: LoadConfig = {
  tk: "your map token",
};
</script>

<template>
  <TdtMap :center="[113.280637, 23.125178]" :zoom="12" :load-config="loadConfig">
    <TdtMarker :position="[113.280637, 23.125178]" />
  </TdtMap>
</template>
```

组件包也提供相同的按需入口：

```ts
import { TdtMap } from "@vue-tianditu/components";
import "@vue-tianditu/components/style.css";
```

## API Loader

`useApiLoader` 支持绝对地址和相对代理路径。自定义地址中已有的查询参数会保留，显式传入的 `v`、`tk` 会覆盖同名参数。

```ts
import { useApiLoader } from "vue-tianditu";

await useApiLoader({
  apiUrl: "/map-api?tenant=demo",
  v: "4.0",
  tk: "your map token",
  plugins: ["D3", "CarTrack"],
  pluginUrls: {
    D3: ["/map-plugins/d3.min.js", "/map-plugins/D3SvgOverlay.min.js"],
    CarTrack: [
      "/map-plugins/d3.min.js",
      "/map-plugins/D3SvgOverlay.min.js",
      "/map-plugins/CarTrack.min.js",
    ],
  },
});

const map = new T.Map("map-container");
```

只有列在 `plugins` 中的插件才会加载。`pluginUrls` 仅覆盖对应插件的内置地址；插件按声明顺序加载，重复 URL 只加载一次。

也可以只安装无 Vue 运行时依赖的 core 包：

```ts
import { useApiLoader, toBounds, toIcon, toLngLat, toMarker } from "@vue-tianditu/core";
```

## 3.0 破坏性变更

- 仅支持 Vue 3.5+，删除 Vue 2、`@vue/composition-api` 和 `vue-demi` 支持。
- 仅发布 ESM，不再提供 CJS 或 UMD 构建。
- 包拆分为 `types`、`core`、`components` 和统一入口四部分。
- 样式入口改为 `vue-tianditu/style.css` 或 `@vue-tianditu/components/style.css`。
- `SearchBox` 仅支持 `modelValue` / `update:modelValue`。
- `toMarker` 接收独立的 `ToMarkerOptions`，不再依赖组件 props。
- 删除旧的 `public/vue-tianditu.d.ts` 和单包 UMD 入口。

## 开发

仓库要求 Node 24、pnpm 11 和 TypeScript 6.0.x。

```sh
corepack pnpm install
vp check
vp test --run
vp run -r build
vp run docs:build
```
