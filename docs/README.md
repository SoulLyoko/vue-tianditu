## 安装

### NPM

```
$ npm install vue-tianditu
```

### CDN

```
<script src="https://unpkg.com/vue-tianditu"></script>
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

```vue
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

### CDN 引入

需手动加载 API

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-tianditu"></script>
<script>
  VueTianditu.initApiLoader({
    v: "4.0",
    tk: "your map token"
  });
  ...
</script>
```
