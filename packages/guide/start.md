<div align="center">
<h3>ViteLibStarter</h3>
<span>A template for building Vue components library</span> 
<br>
<a href="https://soullyoko.github.io/vite-lib-starter/">Docs</a>
</div>

## Install

```bash
npm i vite-lib-starter
```

## Usage

### Full Import

```ts
import { createApp } from "vue";
import App from "./App.vue";
import ViteLibStarter from "vite-lib-starter";
import "vite-lib-starter/lib/style.css";

const app = createApp(App);
app.use(ViteLibStarter);
// global config
// app.use(ViteLibStarter, { size: "small" });
app.mount("#app");
```

### Manually import

```html
<!-- App.vue -->
<template>
  <v-button>VButton</v-button>
</template>
<script setup>
  import { VButton } from "vite-lib-starter";
  import "vite-lib-starter/es/styles/button.css";
</script>
```

### On-demand Import

Use unplugin-vue-components to auto import

```bash
npm i unplugin-vue-components -D
```

```ts
//vite.config.ts
import Components from "unplugin-vue-components/vite";
import { kebabCase } from "unplugin-vue-components";

const LibResolver = componentName => {
  if (componentName.startsWith("V")) {
    const partialName = kebabCase(componentName.slice(1));
    return {
      name: componentName,
      from: "vite-lib-starter",
      sideEffects: `vite-lib-starter/es/styles/${partialName}.css`
    };
  }
};

export default {
  plugins: [
    // ...
    Components({
      resolvers: [LibResolver]
    })
  ]
};
```

### Volar Support

Add the global component type definition for `Volar`

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vite-lib-starter/global"]
  }
}
```
