# 多边形

## 示例

<<< @/docs/.vuepress/components/ex-polygon.vue
<ex-polygon></ex-polygon>

## 属性

| 属性        | 类型    | 默认值    | 说明                                                     |
| ----------- | ------- | --------- | -------------------------------------------------------- |
| color       | String  | "#0000FF" | 多边形边线颜色。                                         |
| weight      | Number  | 3         | 多边形边线的宽度，以像素为单位。                         |
| opacity     | Number  | 0.5       | 多边形边线的透明度（范围 0-1 之间）                      |
| fillColor   | String  | "#0000FF" | 多边形填充颜色。当参数为空时，折线覆盖物将没有填充效果。 |
| fillOpacity | Number  | 0.2       | 多边形填充的透明度（范围 0-1 之间）。                    |
| lineStyle   | String  | "solid"   | 多边形边线的样式（solid 或 dashed）。                    |
| path        | Array   |           | 坐标数组。                                               |
| edit        | Boolean | false     | 是否可编辑                                               |
| extData     |         |           | 自定义属性                                               |

## 事件

| 事件      | 参数                                        | 描述                                 |
| --------- | ------------------------------------------- | ------------------------------------ |
| click     | {type,target,lnglat,containerPoint,extData} | 点击多边形后会触发此事件。           |
| dblclick  | {type,target,lnglat,containerPoint,extData} | 双击多边形后会触发此事件。           |
| mousedown | {type,target,lnglat,containerPoint,extData} | 鼠标在多边形上按下触发此事件。       |
| mouseup   | {type,target,lnglat,containerPoint,extData} | 鼠标在多边形释放触发此事件。         |
| mouseout  | {type,target,lnglat,containerPoint,extData} | 鼠标离开多边形时触发此事件。         |
| mouseover | {type,target,lnglat,containerPoint,extData} | 当鼠标进入多边形区域时会触发此事件。 |
| remove    | {type,target,extData}                       | 移除多边形时触发。                   |
