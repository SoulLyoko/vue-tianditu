# 工具

## 示例

mousetool 组件初始化时会创建五个工具对象，分别对应标注工具、多边形工具、折线工具、矩形工具、画圆工具。
使用默认配置时不需要传值，手动配置时传入相应工具的配置项参数即可。

<<< @/docs/.vuepress/components/ex-mousetool.vue
<ex-mousetool></ex-mousetool>
<br>

## 属性

| 属性      | 类型   | 默认值 | 说明                         |
| --------- | ------ | ------ | ---------------------------- |
| mark      | Object |        | 标点的配置项，下方详细说明   |
| polygon   | Object |        | 多边形的配置项，下方详细说明 |
| polyline  | Object |        | 折线的配置项，下方详细说明   |
| rectangle | Object |        | 矩形的配置项，下方详细说明   |
| circle    | Object |        | 圆形的配置项，下方详细说明   |

## 方法

通过 ref 调用

| 方法                   | 返回值 | 说明                       |
| ---------------------- | ------ | -------------------------- |
| open(toolName:String)  |        | 开启工具                   |
| close(toolName:String) |        | 关闭工具                   |
| clear(toolName:String) |        | 清除该工具绘制的所有图形。 |
| clearAll()             |        | 清除绘制的所有图形。       |

## 标注工具

markTool 标注工具，用来让用户在地图上标注一个点，可以通过该工具获得用户标点的经纬度位置。

### 属性

| 属性   | 类型          | 默认值 | 说明                                                                                                                                      |
| ------ | ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| icon   | String/Object |        | 标注的图标。可以是网络地址或本地图片地址，也可以是对象`{iconUrl:String //地址,`<br>`iconSize:Array //大小,`<br>`iconAnchor:Array //偏移}` |
| follow | Boolean       | false  | 标记图标是否跟随鼠标。                                                                                                                    |

### 事件

| 事件    | 参数                                                          | 描述                           |
| ------- | ------------------------------------------------------------- | ------------------------------ |
| markend | { type, target, currentLnglat,<br>currentMarker, allMarkers } | 在用户每完成一次标注时触发事件 |

## 多边形工具

polygonTool 多边形工具，可以通过事件来获取用户绘制的多边形，包含测面积功能。

### 属性

| 属性        | 类型    | 默认值    | 说明                                                                   |
| ----------- | ------- | --------- | ---------------------------------------------------------------------- |
| color       | String  | "#0000FF" | 多边形边线颜色。                                                       |
| weight      | Number  | 3         | 多边形边线的宽度，以像素为单位。                                       |
| opacity     | Number  | 0.5       | 多边形边线的透明度（范围 0-1 之间）。                                  |
| fillColor   | String  | "#0000FF" | 多边形填充颜色。当参数为空时，折线覆盖物将没有填充效果。               |
| fillOpacity | Number  | 0.2       | 多边形填充的透明度（范围 0-1 之间）。                                  |
| lineStyle   | String  | "solid"   | 多边形边线的样式（solid 或 dashed）。                                  |
| showLabel   | Boolean | false     | 是否显示面积，如果不显示面积，则可以作为画面控件使用，默认值为 false。 |

### 事件

| 事件             | 参数                                                                     | 描述                                                     |
| ---------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| polygon-draw     | {type,target,currentLnglats,currentArea,<br>currentPolygon,allPolygons } | 用户双击完成一次折线绘制时触发事件。                     |
| polygon-addpoint | {type,target,currentLnglats,currentArea,<br>currentPolygon,allPolygons } | 用户在多边形绘制过程中，每次点击底图添加节点时触发事件。 |

## 折线工具

polylineTool 折线工具，可以通过事件来获取用户绘制的折线，包含测距功能。

### 属性

| 属性      | 类型    | 默认值    | 说明                                                                   |
| --------- | ------- | --------- | ---------------------------------------------------------------------- |
| color     | String  | "#0000FF" | 折线颜色。                                                             |
| weight    | Number  | 3         | 折线的宽度，以像素为单位。                                             |
| opacity   | Number  | 0.5       | 折线的透明度（范围 0-1 之间）。                                        |
| lineStyle | String  | "solid"   | 拆线的样式（solid 或 dashed）。                                        |
| showLabel | Boolean | false     | 是否显示距离，如果不显示距离，则可以作为画线控件使用，默认值为 false。 |

### 事件

| 事件              | 参数                                                                           | 说明                                             |
| ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------ |
| polyline-draw     | {type,target,currentLnglats,currentDistance,<br>currentPolyline,allPolylines } | 用户每次完成拉框操作时触发事件。                 |
| polyline-addpoint | {type,target,currentLnglats,currentDistance,<br>currentPolyline,allPolylines } | 用户测距过程中，每次点击底图添加节点时触发事件。 |

## 矩形工具

rectangleTool 矩形工具，用来实现在地图上选择一个矩形区域或绘制矩形的功能。

### 属性

| 属性        | 类型   | 默认值    | 说明                                                   |
| ----------- | ------ | --------- | ------------------------------------------------------ |
| color       | String | "#0000FF" | 矩形边线颜色。                                         |
| weight      | Number | 3         | 矩形边线的宽度，以像素为单位。                         |
| opacity     | Number | 0.5       | 矩形边线的透明度（范围 0-1 之间）。                    |
| fillColor   | String | "#0000FF" | 矩形填充颜色。当参数为空时，折线覆盖物将没有填充效果。 |
| fillOpacity | Number | 0.2       | 矩形填充的透明度（范围 0-1 之间）。                    |
| lineStyle   | String | "solid"   | 矩形边线的样式（solid 或 dashed）。                    |

### 事件

| 事件           | 参数                                                            | 描述                             |
| -------------- | --------------------------------------------------------------- | -------------------------------- |
| rectangle-draw | {type,target,currentBounds,<br>currentRectangle,allRectangles } | 用户每次完成拉框操作时触发事件。 |

## 画圆工具

circleTool 画圆工具，用来实现在地图上画圆的功能。

### 属性

| 属性        | 类型   | 默认值    | 说明                                                 |
| ----------- | ------ | --------- | ---------------------------------------------------- |
| color       | String | "#0000FF" | 圆边线颜色。                                         |
| weight      | Number | 3         | 圆边线的宽度，以像素为单位。                         |
| opacity     | Number | 0.5       | 圆边线的透明度（范围 0-1 之间）。                    |
| fillColor   | String | "#0000FF" | 圆填充颜色。当参数为空时，折线覆盖物将没有填充效果。 |
| fillOpacity | Number | 0.2       | 圆填充的透明度（范围 0-1 之间）。                    |
| lineStyle   | String | "solid"   | 圆边线的样式（solid 或 dashed）。                    |

### 事件

| 事件           | 参数                                                                    | 描述                   |
| -------------- | ----------------------------------------------------------------------- | ---------------------- |
| circle-draw    | {type,target,currentCenter,currentRadius,<br>currentCircle,allCircles } | 用户拖动绘制圆时触发。 |
| circle-drawend | {type,target,currentCenter,currentRadius,<br>currentCircle,allCircles } | 用户完成绘制圆时触发。 |
