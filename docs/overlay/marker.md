# 点标注

## 示例

<<< @/docs/.vuepress/components/ex-marker.vue
<ex-marker></ex-marker>

## 属性

| 属性         | 类型          | 默认值 | 说明                                                                                                                                      |
| ------------ | ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| icon         | Object/String |        | 标注的图标。可以是网络地址或本地图片地址，也可以是对象`{iconUrl:String //地址,`<br>`iconSize:Array //大小,`<br>`iconAnchor:Array //偏移}` |
| dragging     | Boolean       | false  | 决定标注是否可被鼠标或触摸拖动。                                                                                                          |
| title        | String        | ""     | 默认情况下，标注图片的叠置顺序由纬度自动设置。                                                                                            |
| zIndexOffset | Number        | 0      | 设置 z-index。                                                                                                                            |
| opacity      | Number        | 1.0    | 设置透明度。                                                                                                                              |
| position     | Array         |        | 标点的坐标                                                                                                                                |
| extData      |               |        | 自定义属性                                                                                                                                |

## 事件

| 事件      | 参数                                        | 描述                                   |
| --------- | ------------------------------------------- | -------------------------------------- |
| click     | {type,target,lnglat,containerPoint,extData} | 点击标注图标后会触发此事件。           |
| dblclick  | {type,target,lnglat,containerPoint,extData} | 双击标注图标后会触发此事件。           |
| mousedown | {type,target,lnglat,containerPoint,extData} | 鼠标在标注图标上按下触发此事件。       |
| mouseup   | {type,target,lnglat,containerPoint,extData} | 鼠标在标注图标释放触发此事件。         |
| mouseout  | {type,target,lnglat,containerPoint,extData} | 鼠标离开标注图标时触发此事件。         |
| mouseover | {type,target,lnglat,containerPoint,extData} | 当鼠标进入标注图标区域时会触发此事件。 |
| dragstart | {type,target,extData}                       | 当用户拖动标注图标时触发。             |
| drag      | {type,target,lnglat,extData}                | 当用户拖动标注图标时不断触发。         |
| dragend   | {type,target,lnglat,extData}                | 当用户停止拖动标注图标时触发。         |
| remove    | {type,target,extData}                       | 移除标注图标时触发。                   |
