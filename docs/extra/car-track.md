# 搜索

## 示例

<demo-car-track></demo-car-track>

<code-details>
<<< @/.vitepress/components/demo-car-track/index.vue
</code-details>

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| interval | number | 1000 | 从当前节点到下一节点的时间间隔 |
| speed | number | 0 | 一个时间间隔移动的距离，单位是米。注：speed 为 0 时，按照 Datas 数组中每个元素的坐标移动 |
| dynamicLine | boolean | false | 为 true 时轨迹线随车移动，而变化。false 时，车辆运动轨迹提前画好且无动态变化 |
| Datas | array | [] | 数据来源。经纬度数组：[[116.26802, 39.90623],[116.28896, 39.90622],...] |
| carstyle | Object | ({ display: true, iconUrl: "car.png", width: 52, height: 26 }) | 车辆样式 |
| polylinestyle | Object | ({ display: true, color: "red", width: 3, opacity: 0.8 }) | 车辆轨迹线样式 |

## 事件

| 事件 | 参数 | 描述 |
| --- | --- | --- |
| passOneNode | (lnglat: VT.LngLat, index: number, length: number) | 车辆移动一次时触发调用的方法。 lnglat：经过的坐标 index：节点序号 length:总节点数量 |
