declare namespace T {
  class DrivingRoute {
    /** 创建一个驾车导航实例，用于获取驾车路线规划方案 */
    constructor(map: Map, opts: DrivingRouteOptions);

    /** 发起检索 */
    search(start: LngLat, end: LngLat): void;
    /** 返回最近一次检索的结果 */
    getResults(): DrivingRouteResult;
    /** 清除最近一次检索的结果 */
    clearResults(): void;
    /** 设置路线规划策略，参数为策略常量 */
    setPolicy(policy: number): void;
    /** 设置检索结束后的回调函数 */
    setSearchCompleteCallback(fun: Function): void;
  }

  interface DrivingRouteOptions {
    /**
     * 驾车策略参数
     * TMAP_DRIVING_POLICY_LEAST_TIME = 0 最少时间
     * TMAP_DRIVING_POLICY_LEAST_DISTANCE = 1 最短距离
     * TMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 2 避开高速
     * TMAP_DRIVING_POLICY_WALK = 3 步行
     */
    policy?: number;
    /** 检索结束后的回调函数 */
    onSearchComplete?: (result: DrivingRouteResult) => void;
  }

  interface DrivingRouteResult {
    /** 返回起点 */
    getStart(): LngLat;
    /** 返回终点 */
    getEnd(): LngLat;
    /** 返回方案个数 */
    getNumPlans(): number;
    /** 返回索引指定的方案。索引0表示第一条方案 */
    getPlan(i: number): DrivingRoutePlan;
  }

  interface DrivingRoutePlan {
    /** 返回该方案包含的线路的个数 */
    getNumRoutes(): number;
    /** 返回方案中索引指定的线路信息。索引0表示第一条线路 */
    getRoute(i: number): Route;
    /** 返回方案总距离，单位为公里 */
    getDistance(): number;
    /** 返回方案总时间，单位为秒 */
    getDuration(): number;
    /** 返回途径点 */
    getWayPois(): LngLat[];
    /** 返回路线的经纬度 */
    getPath(): LngLat[];
  }

  interface Route {
    /** 返回该段路线包含的关键点个数 */
    getNumSteps(): number;
    /** 返回索引指定的关键点。索引0表示第一个关键点 */
    getStep(i: number): Step;
    /** 返回该段路线距离 */
    getDistance(): number;
    /** 返回该段路线在方案中的索引位置 */
    getIndex(): number;
    /** 返回该段路线的坐标 */
    getPath(): LngLat[];
  }

  interface Step {
    /** 返回关键点地理坐标 */
    getPosition(): LngLat;
    /** 返回本关键点在路线中的位置索引 */
    getIndex(): number;
    /** 返回关键点描述文本 */
    getDescription(): string;
  }
}
