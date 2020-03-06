# 基础地图

## 示例

当参数 center 和 zoom 正确时地图才会正常显示

<<< @/docs/.vuepress/components/ex-map.vue
<ex-map></ex-map>

## 属性

| 属性            | 类型    | 默认值        | 说明                                                                   |
| --------------- | ------- | ------------- | ---------------------------------------------------------------------- |
| drag            | Boolean | true          | 启用地图拖拽，默认启用。                                               |
| scrollWheelZoom | Boolean | true          | 启用滚轮放大缩小，默认启用。                                           |
| doubleClickZoom | Boolean | true          | 启用双击放大，默认启用。                                               |
| keyboard        | Boolean | true          | 启用键盘操作，默认启用。                                               |
| inertia         | Boolean | true          | 启用地图惯性拖拽，默认启用。                                           |
| continuousZoom  | Boolean | true          | 启用连续缩放效果，默认启用。                                           |
| pinchToZoom     | Boolean | true          | 启用双指操作缩放，默认启用。                                           |
| autoResize      | Boolean | true          | 启用自动适应容器尺寸变化，默认启用。                                   |
| maxBounds       | Array   |               | 当这个选项被设置后，地图被限制在给定的地理边界内                       |
| mid             | String  | 随机 id       | 地图容器 id                                                            |
| projection      | String  | "EPSG:900913" | EPSG:900913(墨卡托投影)，EPSG:4326(大地平面投影)                       |
| center          | Array   |               | 地图的初始化中心点。[lng,lat]                                          |
| zoom            | Number  | 10            | 地图的初始化级别。                                                     |
| minZoom         | Number  |               | 地图允许展示的最小级别。                                               |
| maxZoom         | Number  |               | 地图允许展示的最大级别。                                               |
| viewport        | Array   |               | 根据提供的坐标点数组设置地图视野，调整后的视野会保证包含提供的坐标点。 |
| controls        | Array   |               | 控件                                                                   |

## 事件

| 事件          | 参数                                    | 描述                                                                                               |
| ------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| init          | map                                     | 地图初始化完成触发此事件                                                                           |
| click         | {type, target, lnglat, containerPoint } | 左键单击地图时触发此事件。                                                                         |
| dblclick      | {type, target, lnglat, containerPoint } | 鼠标双击地图时会触发此事件。                                                                       |
| contextmenu   | {type, target, lnglat, containerPoint } | 右键单击地图时触发此事件。                                                                         |
| mousemove     | {type, target, lnglat, containerPoint } | 鼠标在地图区域移动过程中触发此事件。                                                               |
| mouseover     | {type, target, lnglat, containerPoint } | 鼠标移入地图区域时触发此事件。                                                                     |
| mouseout      | {type, target, lnglat, containerPoint } | 鼠标移出地图区域时触发此事件。                                                                     |
| movestart     | {type, target}                          | 地图移动开始时触发此事件。                                                                         |
| move          | {type, target}                          | 地图移动过程中触发此事件。                                                                         |
| moveend       | {type, target}                          | 地图移动结束时触发此事件。                                                                         |
| zoomstart     | {type, target}                          | 地图更改缩放级别开始时触发触发此事件。                                                             |
| zoomend       | {type, target}                          | 地图更改缩放级别结束时触发触发此事件。                                                             |
| addoverlay    | {type, target, addoverlay }             | 当使用 Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件。                                  |
| removeoverlay | {type, target, removeoverlay }          | 当使用 Map.removeOverlay()方法移除单个覆盖物时会触发此事件。                                       |
| addcontrol    | {type, target, addcontrol }             | 当使用 Map.addControl()方法向地图中添加单个控件时会触发此事件。                                    |
| removecontrol | {type, target, removecontrol }          | 当使用 Map.removeControl()方法移除单个控件时会触发此事件。                                         |
| clearoverlays | {type, target}                          | 当使用 Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件。                                 |
| dragstart     | {type, target }                         | 开始拖拽地图时触发。                                                                               |
| drag          | {type, target }                         | 拖拽地图过程中触发。                                                                               |
| dragend       | {type, target }                         | 停止拖拽地图时触发。                                                                               |
| layeradd      | {type, target, layer }                  | 添加一个自定义地图图层时触发此事件。                                                               |
| layerremove   | {type, target, layer }                  | 移除一个自定义地图图层时触发此事件。                                                               |
| load          | {type, target}                          | 调用 Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图瓦片。 |
| resize        | {type, target, newSize, oldSize }       | 地图可视区域大小发生变化时会触发此事件。                                                           |
| levels        | {type, target, minzoom, maxzoom }       | 调用 setMinZoom 和 setMaxZoom 时会触发此事件。                                                     |
| touchstart    | {type, target, lnglat, containerPoint } | 触摸开始时触发此事件，仅适用移动设备。                                                             |
| touchmove     | {type, target, lnglat, containerPoint } | 触摸移动时触发此事件，仅适用移动设备。                                                             |
| touchend      | {type, target, lnglat, containerPoint } | 触摸结束时触发此事件，仅适用移动设备。                                                             |
| longpress     | {type, target, lnglat, containerPoint } | 长按事件，仅适用移动设备。                                                                         |

## 所有组件共同方法

| 方法           | 返回值     | 描述                             |
| -------------- | ---------- | -------------------------------- |
| getMap()       | 地图实例   | 获取地图的实例对象               |
| getComponent() | 组件实例   | 获取地图下组件的实例对象         |
| getExtData()   | 自定义属性 | 获取传入的自定义属性（如果存在） |

<!-- 地图实例的所有方法参考 [天地图 API](http://lbs.tianditu.gov.cn/api/js4.0/class.html) -->
