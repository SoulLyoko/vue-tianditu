# 折线

## 示例

<<< @/docs/.vuepress/components/ex-polyline.vue
<ex-polyline></ex-polyline>

## 属性

| 属性      | 类型    | 默认值    | 说明                            |
| --------- | ------- | --------- | ------------------------------- |
| color     | String  | "#0000FF" | 折线颜色。                      |
| weight    | Number  | 3         | 折线的宽度，以像素为单位。      |
| opacity   | Number  | 0.5       | 折线的透明度（范围 0-1 之间）。 |
| lineStyle | String  | "solid"   | 折线的样式（solid 或 dashed）。 |
| path      | Array   |           | 坐标数组。                      |
| edit      | Boolean | false     | 是否可编辑                      |
| extData   |         |           | 自定义属性                      |

## 事件

| 事件      | 参数                                        | 描述                               |
| --------- | ------------------------------------------- | ---------------------------------- |
| click     | {type,target,lnglat,containerPoint,extData} | 点击折线后会触发此事件。           |
| dblclick  | {type,target,lnglat,containerPoint,extData} | 双击折线后会触发此事件。           |
| mousedown | {type,target,lnglat,containerPoint,extData} | 鼠标在折线上按下触发此事件。       |
| mouseup   | {type,target,lnglat,containerPoint,extData} | 鼠标在折线释放触发此事件。         |
| mouseout  | {type,target,lnglat,containerPoint,extData} | 鼠标离开折线时触发此事件。         |
| mouseover | {type,target,lnglat,containerPoint,extData} | 当鼠标进入折线区域时会触发此事件。 |
| remove    | {type,target,extData}                       | 移除折线时触发。                   |
