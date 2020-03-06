# 圆形

## 示例

<<< @/docs/.vuepress/components/ex-circle.vue
<ex-circle></ex-circle>

## 属性

| 属性        | 类型    | 默认值    | 说明                                                 |
| ----------- | ------- | --------- | ---------------------------------------------------- |
| color       | String  | "#0000FF" | 圆边线颜色。                                         |
| weight      | Number  | 3         | 圆边线的宽度，以像素为单位。                         |
| opacity     | Number  | 0.5       | 圆边线的透明度（范围 0-1 之间）                      |
| fillColor   | String  | "#0000FF" | 圆填充颜色。当参数为空时，折线覆盖物将没有填充效果。 |
| fillOpacity | Number  | 0.2       | 圆填充的透明度（范围 0-1 之间）。                    |
| lineStyle   | String  | "solid"   | 圆边线的样式（solid 或 dashed）。                    |
| center      | Array   |           | 圆心经纬度坐标。                                     |
| radius      | Number  |           | 圆的半径，以米为单位。                               |
| edit        | Boolean | false     | 是否可编辑                                           |
| extData     |         |           | 自定义属性                                           |

## 事件

| 事件      | 参数                                        | 描述                             |
| --------- | ------------------------------------------- | -------------------------------- |
| click     | {type,target,lnglat,containerPoint,extData} | 点击圆后会触发此事件。           |
| dblclick  | {type,target,lnglat,containerPoint,extData} | 双击圆后会触发此事件。           |
| mousedown | {type,target,lnglat,containerPoint,extData} | 鼠标在圆上按下触发此事件。       |
| mouseup   | {type,target,lnglat,containerPoint,extData} | 鼠标在圆释放触发此事件。         |
| mouseout  | {type,target,lnglat,containerPoint,extData} | 鼠标离开圆时触发此事件。         |
| mouseover | {type,target,lnglat,containerPoint,extData} | 当鼠标进入圆区域时会触发此事件。 |
| remove    | {type,target,extData}                       | 移除圆时触发。                   |
