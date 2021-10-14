# WMS 服务图层

## 示例

实现在地图上叠加自定义的地图图块层，自定义图层会叠加在基础地图上

<demo-tilelayer-wms></demo-tilelayer-wms>

<code-details>
<<< @/.vitepress/components/demo-tilelayer-wms/index.vue
</code-details>

## 属性

| 属性        | 类型    | 默认值        | 说明                                           |
| ----------- | ------- | ------------- | ---------------------------------------------- |
| layers      | String  | ""            | 用","分隔的多个图层列表                        |
| styles      | String  | ""            | 每个请求图层的用","分隔的描述样式              |
| format      | String  | "image/jpeg"  | 输出图像的类型                                 |
| transparent | Boolean | false         | 输出图像背景是否透明                           |
| version     | String  | "1.1.1"       | 请求服务的版本                                 |
| srs         | String  | "EPSG:900913" | 地图投影类型                                   |
| crs         | String  | ""            | 地图投影类型                                   |
| opacity     | Number  | 1.0           | 设置图层的透明度（0.0-1.0）默认值为 1.0 不透明 |
| zIndex      | Number  |               | 图层的显示顺序                                 |
| url         | String  |               | 图层服务地址                                   |

## 事件

| 事件          | 参数                        | 描述                                                  |
| ------------- | --------------------------- | ----------------------------------------------------- |
| loading       | ({type,target})             | 当瓦片图层开始加载瓦片时触发                          |
| load          | ({type,target})             | 当瓦片图层加载完可见瓦片后触发                        |
| tileloadstart | ({type,target,coords,tile}) | 瓦片请求和开始加载时触发                              |
| tileload      | ({type,target,coords,tile}) | 在加载瓦片时触发                                      |
| tileunload    | ({type,target,coords,tile}) | 在瓦片被移除时触发（比如打开了 unloadInvisibleTiles） |
| tileerror     | ({type,target,coords,tile}) | 瓦片错误时触发                                        |
