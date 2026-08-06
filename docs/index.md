<center>

<h1>VueTianditu 3</h1>
<p>面向 Vue 3.5+ 的天地图组件库</p>

</center>

# 快速开始

## 安装

```sh
pnpm add vue-tianditu vue
```

项目同时发布四个职责明确的包：

| 包                         | 用途                         |
| -------------------------- | ---------------------------- |
| `@vue-tianditu/types`      | 天地图和组件类型             |
| `@vue-tianditu/core`       | API loader、转换器和通用函数 |
| `@vue-tianditu/components` | Vue 3 组件和样式             |
| `vue-tianditu`             | 统一导出和默认安装插件       |

## 全局引入

```ts
import { createApp } from 'vue'
import VueTianditu from 'vue-tianditu'
import 'vue-tianditu/dist/style.css'
import App from './App.vue'

createApp(App)
  .use(VueTianditu, {
    v: '4.0',
    tk: 'your map token',
  })
  .mount('#app')
```

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  center: [113.280637, 23.125178] as [number, number],
  zoom: 12,
})
</script>

<template>
  <div class="map-container">
    <TdtMap :center="state.center" :zoom="state.zoom" />
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 500px;
}
</style>
```

## 按需引入

```vue
<script setup lang="ts">
import { TdtMap, TdtMarker, type LoadConfig } from 'vue-tianditu'
import 'vue-tianditu/dist/style.css'

const loadConfig: LoadConfig = {
  apiUrl: '/map-api',
  tk: 'your map token',
}
</script>

<template>
  <TdtMap :center="[113.280637, 23.125178]" :zoom="12" :load-config="loadConfig">
    <TdtMarker :position="[113.280637, 23.125178]" />
  </TdtMap>
</template>
```

也可以直接从组件包引入：

```ts
import { TdtMap } from '@vue-tianditu/components'
import '@vue-tianditu/components/dist/style.css'
```

## 自定义 API 和插件地址

```ts
import { useApiLoader } from 'vue-tianditu'

await useApiLoader({
  apiUrl: '/map-api?tenant=demo',
  v: '4.0',
  tk: 'your map token',
  plugins: ['D3', 'CarTrack'],
  pluginUrls: {
    D3: ['/map-plugins/d3.min.js', '/map-plugins/D3SvgOverlay.min.js'],
    CarTrack: [
      '/map-plugins/d3.min.js',
      '/map-plugins/D3SvgOverlay.min.js',
      '/map-plugins/CarTrack.min.js',
    ],
  },
})
```

`apiUrl` 可以是绝对 URL 或相对代理路径。已有查询参数会被保留，显式传入的 `v` 和 `tk` 会覆盖同名参数。插件按声明顺序加载，并对 URL 去重。

## Core 工具

```ts
import { toBounds, toIcon, toLngLat, toLngLats, toMarker } from 'vue-tianditu'
```

## 从 2.x 升级

- 3.0 仅支持 Vue 3.5+，不再依赖 `vue-demi` 或 Vue 2 composition API。
- 仅发布 ESM，不再提供 CJS/UMD 文件。
- 样式入口由旧的 `vue-tianditu/lib/style.css` 改为 `vue-tianditu/dist/style.css`。
- `SearchBox` 使用 Vue 3 标准 `modelValue` / `update:modelValue`。
- 类型、core 和组件可以作为独立包安装，也可以继续从 `vue-tianditu` 统一导入。
