# 搜索

## 示例

:::tip

`TdtSearch`是单独的 UI 组件，需要使用`TdtControl`定位到地图上，或根据需要使用css定位。

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

## 事件`(v2.7.6)`

| 事件            | 参数                         | 描述                             |
| --------------- | ---------------------------- | -------------------------------- |
| poi-click       | (poi:LocalSearchPoi)         | 点击搜索结果项或地图上的标点触发 |
| suggest-click   | (suggest:LocalSearchSuggest) | 点击搜索建议项触发               |
| search-complete | (result:LocalSearchResult)   | 搜索完成后触发(包括搜索建议)     |
