# 车辆轨迹组件

## 示例

```js
//注册时引入车辆轨迹插件
Vue.use(VueTianditu, {
  v: "4.0",
  tk: "your map token",
  plugins: ["CarTrack"]
});
```

<<< @/docs/.vuepress/components/ex-cartrack.vue
<ex-cartrack></ex-cartrack>

## 属性

| 属性          | 类型    | 默认值                                                   | 说明                                                                                        |
| ------------- | ------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| interval      | Number  | 1000                                                     | 从当前节点到下一节点的时间间隔。                                                            |
| speed         | Number  | 0                                                        | 一个时间间隔移动的距离，单位是米。 注：speed 为 0 时，按照 Datas 数组中每个元素的坐标移动。 |
| dynamicLine   | Boolean | false                                                    | 为 true 时轨迹线随车移动，而变化。 false 时，车辆运动轨迹提前画好且无动态变化。             |
| Datas         | Array   | []                                                       | 数据来源。                                                                                  |
| carstyle      | object  | { display:true, iconUrl:"car.png", width:52, height:26 } | 车辆样式。                                                                                  |
| polylinestyle | object  | { display:true, color:"red", width:"3", opacity:0.8 }    | 车辆轨迹线样式。                                                                            |
| startOnInit   | Boolean | false                                                    | 初始化完成后车辆立刻开始移动                                                                |

## 事件

| 事件        | 参数                      | 描述                                                                              |
| ----------- | ------------------------- | --------------------------------------------------------------------------------- |
| passOneNode | { lnglat, index, length } | 车辆移动一次时触发的事件 lnglat：经过的坐标 index：节点序号。 length:总节点数量。 |

## 方法

| 方法    | 返回值 | 说明                                     |
| ------- | ------ | ---------------------------------------- |
| start() | 无     | 车辆开始或者继续移动。                   |
| stop()  | 无     | 车辆停止移动。                           |
| pause() | 无     | 车辆暂停移动。                           |
| clear() | 无     | 清除所有绘制的元素，并注销相关地图事件。 |
