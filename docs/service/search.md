# 搜索

## 示例

:::tip

`TdtSearch`是单独的 UI 组件，需要使用`TdtControl`定位到地图上，或根据需要使用样式定位

无论全局引入还是按需引入搜索组件，都需要导入样式文件

:::

```js
import "vue-tianditu/lib/style.css";
```

<demo-search></demo-search>

<code-details>
<<< @/.vitepress/components/demo-search/index.vue
</code-details>

## 属性

| 属性        | 类型    | 默认值           | 说明               |
| ----------- | ------- | ---------------- | ------------------ |
| placeholder | number  | "输入关键字搜索" | 显示在输入框的提示 |
| searchBtn   | boolean | true             | 是否显示搜索按钮   |
| routeBtn    | boolean | true             | 是否显示导航按钮   |