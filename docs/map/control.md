# 控件

## 示例

controls 接收一个数组，数组的值可以是字符串或对象。传入控件名称字符串时，使用控件的默认配置。自由配置时可以传入对象，name 属性为控件名称。

::: tip

position 及 anchor 属性说明：

topleft：表示左上。topright：表示右上。bottomleft：表示左下。bottomright：表示右下。

:::

<demo-control></demo-control>

<code-details>
<<< @/.vitepress/components/demo-control/index.vue
</code-details>

## 自定义控件

| 属性     | 类型    | 默认值     | 说明                     |
| -------- | ------- | ---------- | ------------------------ |
| position | string  | "topright" | 控件的停靠位置，默认右上 |
| offset   | array   |            | 控件停靠的偏移量         |
| visible  | boolean | true       | 是否可见                 |

## 缩放控件

Zoom 地图缩放控件，可以缩放和移动地图。

| 属性         | 类型   | 默认值    | 说明                   |
| ------------ | ------ | --------- | ---------------------- |
| position     | string | "topleft" | 控件初始位置，默认左上 |
| zoomInText   | string | "+"       | 放大层级按钮的文字显示 |
| zoomOutText  | string | "-"       | 缩小层级按钮的文字显示 |
| zoomInTitle  | string | "放大"    | 放大层级按钮的标题显示 |
| zoomOutTitle | string | "缩小"    | 缩小层级按钮的标题显示 |

## 比例尺控件

Scale 地图比例尺控件，用来实时的显示地图的当前比例尺。

| 属性     | 类型   | 默认值       | 说明                 |
| -------- | ------ | ------------ | -------------------- |
| position | string | "bottomleft" | 控件的位置，默认左下 |

## 版权控件

Copyright 版权控件，您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。

| 属性    | 类型         | 默认值 | 说明                                               |
| ------- | ------------ | ------ | -------------------------------------------------- |
| id      | string       |        | 该版权信息的唯一标识符                             |
| content | string       |        | 该版权的文本信息，用于显示在地图上，支持 HTML 内容 |
| bounds  | LngLatBounds |        | 该版权信息所适用的地理区域                         |

## 鹰眼地图控件

OverviewMap 鹰眼地图控件，用来显示一个鹰眼地图, 继承自 Control 基类，拥有基类的所有方法。

| 属性   | 类型    | 默认值        | 说明                                                                      |
| ------ | ------- | ------------- | ------------------------------------------------------------------------- |
| anchor | string  | "bottomright" | 控件的停靠位置，默认右下                                                  |
| isOpen | boolean | false         | 缩略地图添加到地图后的开合状态，默认为关闭。true 表示显示，false 表示隐藏 |

## 地图类型控件

mapType 负责切换地图类型的控件

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| mapTypes | array |  | 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图。通过此属性可配置控件展示的地图类型。<br>mapTypes：参数的数据格式如下 |

```js
[
  {
    title: "地图", //地图控件上所要显示的图层名称
    icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png", //地图控件上所要显示的图层图标（默认图标大小 80x80）
    layer: "TMAP_NORMAL_MAP" //地图类型，在原天地图api中以window.TMAP_NORMAL_MAP表示，此处为字符串
  },
  {
    title: "卫星",
    icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png",
    layer: "TMAP_SATELLITE_MAP"
  },
  {
    title: "卫星混合",
    icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png",
    layer: "TMAP_HYBRID_MAP"
  },
  {
    title: "地形",
    icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrain.png",
    layer: "TMAP_TERRAIN_MAP"
  },
  {
    title: "地形混合",
    icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrainpoi.png",
    layer: "TMAP_TERRAIN_HYBRID_MAP"
  }
];
```
