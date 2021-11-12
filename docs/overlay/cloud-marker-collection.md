# 海量密集点

## 示例

<demo-cloud-marker-collection></demo-cloud-marker-collection>

<code-details>
<<< @/.vitepress/components/demo-cloud-marker-collection/index.vue
</code-details>

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| ShapeType | String | "CIRCLE" | 海量点的预设形状。CIRCLE 圆形(默认)；RHOMBUS 星形；SQUARE 方形；STAR 菱形；WATERDROP 滴状 |
| SizeType | String | "NORMAL" | 海量点的预设尺寸。TINY 超小，宽高为 2px \* 2px；SMALLER 很小，宽高为 4px \* 4px；SMALL 小，宽高为 8px \* 8px；NORMAL 正常，宽高为 10px \* 10px(默认)；HUGE 大，宽高为 16px \* 16px；BIGGER 很大，宽高为 20px \* 20px；BIG 超大，宽高为 30px \* 30px |
| color | String | "#fa937e" | 海量点的颜色，默认为'#fa937e'，同时支持颜色字符串，如'red'；哈希字符串'#000000'；rgb 字符串，如'rgb(0,0,0)’；rgba 字符串，如'rgb(255,0,0,0.1)'；hsl 字符串，如'hsl(0,100%,50%)'；hsla 字符串，如'hsla(0,100%,50%,0.4)'。 |
| lnglats | Array<[Number,Number]> | [] | 在地图上展示的点坐标集合 |

## 事件

| 事件      | 参数                                          | 描述                                 |
| --------- | --------------------------------------------- | ------------------------------------ |
| click     | ({type,target,lnglat,containerPoint,extData}) | 点击标注图标后会触发此事件           |
| dblclick  | ({type,target,lnglat,containerPoint,extData}) | 双击标注图标后会触发此事件           |
| mousedown | ({type,target,lnglat,containerPoint,extData}) | 鼠标在标注图标上按下触发此事件       |
| mouseup   | ({type,target,lnglat,containerPoint,extData}) | 鼠标在标注图标释放触发此事件         |
| mouseout  | ({type,target,lnglat,containerPoint,extData}) | 鼠标离开标注图标时触发此事件         |
| mouseover | ({type,target,lnglat,containerPoint,extData}) | 当鼠标进入标注图标区域时会触发此事件 |
| dragstart | ({type,target,extData})                       | 当用户拖动标注图标时触发             |
| drag      | ({type,target,lnglat,extData})                | 当用户拖动标注图标时不断触发         |
| dragend   | ({type,target,lnglat,extData})                | 当用户停止拖动标注图标时触发         |
| remove    | ({type,target,extData})                       | 移除标注图标时触发                   |
