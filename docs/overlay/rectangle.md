# 矩形

## 示例

<<< @/docs/.vuepress/components/ex-rectangle.vue
<ex-rectangle></ex-rectangle>

## 属性

| 属性        | 类型    | 默认值    | 说明                                                   |
| ----------- | ------- | --------- | ------------------------------------------------------ |
| color       | String  | "#0000FF" | 矩形边线颜色。                                         |
| weight      | Number  | 3         | 矩形边线的宽度，以像素为单位。                         |
| opacity     | Number  | 0.5       | 矩形边线的透明度（范围 0-1 之间）                      |
| fillColor   | String  | "#0000FF" | 矩形填充颜色。当参数为空时，折线覆盖物将没有填充效果。 |
| fillOpacity | Number  | 0.2       | 矩形填充的透明度（范围 0-1 之间）。                    |
| lineStyle   | String  | "solid"   | 矩形边线的样式（solid 或 dashed）。                    |
| bounds      | Array   |           | 矩形范围。                                             |
| edit        | Boolean | false     | 是否可编辑                                             |
| extData     |         |           | 自定义属性                                             |

## 事件

| 事件      | 参数                                        | 描述                               |
| --------- | ------------------------------------------- | ---------------------------------- |
| click     | {type,target,lnglat,containerPoint,extData} | 点击矩形后会触发此事件。           |
| dblclick  | {type,target,lnglat,containerPoint,extData} | 双击矩形后会触发此事件。           |
| mousedown | {type,target,lnglat,containerPoint,extData} | 鼠标在矩形上按下触发此事件。       |
| mouseup   | {type,target,lnglat,containerPoint,extData} | 鼠标在矩形释放触发此事件。         |
| mouseout  | {type,target,lnglat,containerPoint,extData} | 鼠标离开矩形时触发此事件。         |
| mouseover | {type,target,lnglat,containerPoint,extData} | 当鼠标进入矩形区域时会触发此事件。 |
| remove    | {type,target,extData}                       | 移除矩形时触发。                   |
