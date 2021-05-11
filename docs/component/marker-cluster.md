# 点聚合

## 示例

<<< @/docs/.vuepress/components/ex-marker-cluster.vue
<ex-marker-cluster></ex-marker-cluster>

## 属性

| 属性     | 类型   | 默认值 | 说明                                     |
| -------- | ------ | ------ | ---------------------------------------- |
| markers  | array  | []     | 要聚合的标注点数组，详细配置见下方       |
| styles   | array  |        | 自定义聚合后的图标风格，详细配置见下方   |
| girdSize | number | 60     | 聚合计算时网格的像素大小，默认 60。      |
| maxZoom  | number | 无穷大 | 最大的聚合级别，大于该级别就不进行聚合。 |

## Markers

| 属性         | 类型          | 默认值 | 说明                                                                                                                            |
| ------------ | ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| icon         | Object/String |        | 标注的图标。可以是网络地址或本地图片地址，也可以是对象`{iconUrl:String //地址, iconSize:Array //大小, iconAnchor:Array //偏移}` |
| dragging     | Boolean       | false  | 决定标注是否可被鼠标或触摸拖动。                                                                                                |
| title        | String        | ""     | 默认情况下，标注图片的叠置顺序由纬度自动设置。                                                                                  |
| zIndexOffset | Number        | 0      | 设置 z-index。                                                                                                                  |
| opacity      | Number        | 1.0    | 设置透明度。                                                                                                                    |
| position     | Array         |        | 标点的坐标                                                                                                                      |
| extData      |               |        | 自定义属性，需要通过事件的`layer.options.extData`获取                                                                           |

## Styles

| 属性      | 类型   | 说明             |
| --------- | ------ | ---------------- |
| url       | String | 图片地址         |
| size      | Array  | 图片大小         |
| offset    | Array  | 显示图片的偏移量 |
| textColor | String | 显示数字的颜色   |
| textSize  | Number | 显示文字的大小   |
| range     | Array  | 显示范围         |

- styles 配置示例

```js
[
  {
    url: "http://api.tianditu.gov.cn/img/map/cluster/heart30.png",
    size: [30, 26], //图片大小
    offset: [-15, -13], //显示图片的偏移量
    textColor: "#000000", //显示数字的颜色
    textSize: 8, //显示文字的大小
    range: [0, 50] //显示该图标的范围
  },
  {
    url: "http://api.tianditu.gov.cn/img/map/cluster/heart40.png",
    size: [42, 36],
    offset: [-20, -17],
    textColor: "#ff0000",
    textSize: 10,
    range: [50, 400]
  },
  {
    url: "http://api.tianditu.gov.cn/img/map/cluster/heart50.png",
    size: [52, 46],
    soffset: [-10, -22],
    textColor: "white",
    textSize: 12,
    range: [400, 500]
  }
];
```

## 事件

::: tip 提示
在点聚合组件的事件中，target 为点聚合对象，layer 才是点标注对象
:::
| 事件 | 参数 | 描述 |
| --------- | ------------------------------------------------- | -------------------------------------- |
| click | {type,target,layer,lnglat,containerPoint} | 点击标注图标后会触发此事件。 |
| dblclick | {type,target,layer,lnglat,containerPoint} | 双击标注图标后会触发此事件。 |
| mousedown | {type,target,layer,lnglat,containerPoint} | 鼠标在标注图标上按下触发此事件。 |
| mouseup | {type,target,layer,lnglat,containerPoint} | 鼠标在标注图标释放触发此事件。 |
| mouseout | {type,target,layer,lnglat,containerPoint} | 鼠标离开标注图标时触发此事件。 |
| mouseover | {type,target,layer,lnglat,containerPoint} | 当鼠标进入标注图标区域时会触发此事件。 |
| dragstart | {type,target,layer} | 当用户拖动标注图标时触发。 |
| drag | {type,target,layer,lnglat} | 当用户拖动标注图标时不断触发。 |
| dragend | {type,target,layer,lnglat} | 当用户停止拖动标注图标时触发。 |
| remove | {type,target,layer} | 移除标注图标时触发。 |
