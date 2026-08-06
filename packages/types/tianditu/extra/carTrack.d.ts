declare namespace T {
  /** 依赖于天地图的D3.js支持库，以SVG的形式对车辆行驶位置及轨迹进行实时跟踪和动态展示。实现车辆沿路线运动，并有暂停等功能。注：chrome、safari、IE9及以上浏览器。 */
  class CarTrack {
    /** 构建车辆的div元素，和轨迹节点的Svg元素 */
    constructor(map: Map, opts?: CarTrackOptions)
    /** 车辆开始或者继续移动 */
    start(): void
    /** 车辆停止移动 */
    stop(): void
    /** 车辆暂停移动 */
    pause(): void
    /** 清除所有绘制的元素，并注销相关地图事件 */
    clear(): void
  }

  interface CarTrackOptions {
    /**
     * 从当前节点到下一节点的时间间隔
     * @default 1000
     */
    interval?: number
    /**
     * 一个时间间隔移动的距离，单位是米。 注：speed为0时，按照Datas数组中每个元素的坐标移动
     * @default 0
     */
    speed?: number
    /**
     * 为true时轨迹线随车移动，而变化。 false时，车辆运动轨迹提前画好且无动态变化。
     * @default false
     */
    dynamicLine?: boolean
    /**
     * 数据来源
     * @default []
     */
    Datas?: LngLat[]
    /**
     * 车辆样式
     * @default { display:true, iconUrl:"car.png", width:52, height:26 }
     */
    carstyle?: {
      display?: boolean
      iconUrl?: string
      width?: number
      height?: number
    }
    /**
     * 车辆轨迹线样式
     * @default { display:true, color:"red", width:3, opacity:0.8 }
     */
    polylinestyle?: {
      display?: boolean
      color?: string
      width?: number
      opacity?: number
    }
    /**
     * 车辆移动一次时触发调用的方法
     * @param lnglat 经过的坐标
     * @param index 节点序号
     * @param length 总节点数量
     */
    passOneNode?: (lnglat: LngLat, index: number, length: number) => void
  }
}
