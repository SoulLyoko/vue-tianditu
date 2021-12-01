declare namespace T {
  /**
   * 构建车辆的div元素，和轨迹节点的Svg元素
   */
  class CarTrack {
    constructor(map: Map, opts: CarOverlayOptions);
    start(): void;
    stop(): void;
    pause(): void;
    clear(): void;
  }

  interface CarOverlayOptions {
    /** 从当前节点到下一节点的时间间隔。defalut:1000 */
    interval?: number;
    /** 一个时间间隔移动的距离，单位是米。 注：speed为0时，按照Datas数组中每个元素的坐标移动。 default:0*/
    speed?: number;
    /** 为true时轨迹线随车移动，而变化。 false时，车辆运动轨迹提前画好且无动态变化。 default:false*/
    dynamicLine?: boolean;
    /** 数据来源 */
    Datas?: LngLat[];
    /** 车辆样式。default: { display:true, iconUrl:"car.png", width:52, height:26 }	*/
    carstyle?: { display: boolean; iconUrl: string; width: number; height: number };
    /** 车辆轨迹线样式。default: { display:true, color:"red", width:3, opacity:0.8 } */
    polylinestyle?: { display: boolean; color: string; width: number; opacity: number };
    /** 	车辆移动一次时触发调用的方法。 lnglat：经过的坐标 index：节点序号 length:总节点数量 */
    passOneNode?: (lnglat: LngLat, index: number, length: number) => void;
  }
}
