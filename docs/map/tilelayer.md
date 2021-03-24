# 自定义图层

## 示例

实现在地图上叠加自定义的地图图块层。自定义图层会叠加在基础地图上

<<< @/docs/.vuepress/components/ex-tilelayer.vue
<ex-tilelayer></ex-tilelayer>

## 属性

| 属性         | 类型   | 默认值 | 说明                                               |
| ------------ | ------ | ------ | -------------------------------------------------- |
| minZoom      | Number | 0      | 此图层的最低缩放级别。                             |
| maxZoom      | Number | 18     | 此图层的最高缩放级别。                             |
| errorTileUrl | String | ""     | 当没有瓦片时所显示的错误图片地址。                 |
| opacity      | Number | 1.0    | 设置图层的透明度（0.0-1.0）。默认值为 1.0 不透明。 |
| zIndex       | Number |        | 图层的显示顺序。                                   |
| bounds       | Array  |        | 设置指定范围内显示瓦片。                           |
| url          | String |        | 图层服务地址。                                     |

## 事件

| 事件          | 参数                          | 描述                                                    |
| ------------- | ----------------------------- | ------------------------------------------------------- |
| loading       | {type, target}                | 当瓦片图层开始加载瓦片时触发。                          |
| load          | {type, target}                | 当瓦片图层加载完可见瓦片后触发。                        |
| tileloadstart | {type, target, coords, tile } | 瓦片请求和开始加载时触发。                              |
| tileload      | {type, target, coords, tile } | 在加载瓦片时触发。                                      |
| tileunload    | {type, target, coords, tile } | 在瓦片被移除时触发（比如打开了 unloadInvisibleTiles）。 |
| tileerror     | {type, target, coords, tile } | 瓦片错误时触发。                                        |
