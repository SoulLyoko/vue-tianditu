# 网格图层

## 示例

实现在地图上叠加网格图层， 用户可以自定义格网的像素大小、边线颜色、边线宽度透明度等一系列参数

<demo-gridline-layer></demo-gridline-layer>

<code-details>
<<< @/.vitepress/components/demo-gridline-layer/index.vue
</code-details>

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| tileSize | number | 256 | 设置格网图层的网格大小，单位是像素 |
| minZoom | number | 0 | 显示格网图层的最小层级 |
| maxZoom | number | 18 | 显示格网图层的最大层级 |
| opacity | number | 1 | 设置格网图层的透明度 |
| outlineSize | object | `{ width:1, style:'solid', color:'#999' }` | 设置格网图层边线的颜色、宽度、线样式 |
| textSize | object | `{ display:false, fontSize:'14', fontWeight:true, color:'black' }` | 设置格网图层文字的样式，图层文字表现网格的行号、列号、层级 |

## 事件

| 事件    | 参数            | 描述                     |
| ------- | --------------- | ------------------------ |
| loading | ({type,target}) | 当图层开始加载格网时触发 |
| load    | ({type,target}) | 当图层加载完格网后触发   |
