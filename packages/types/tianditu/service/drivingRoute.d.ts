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
    policy: number;
    /** 检索结束后的回调函数 */
    onSearchComplete?: (result: DrivingRouteResult) => void;
  }

  interface DrivingRouteResult {
    /** 起点"lng,lat" */
    start: string;
    /** 终点"lng,lat" */
    end: string;
    results: {
      mid: string;
      /** 起点"lng,lat" */
      orig: string;
      /** 终点"lng,lat" */
      dest: string;
      /** 完整路径 */
      routes: {
        /** 路径条数 */
        count: string;
        time: string;
        item: {
          /** 路径id */
          id: string;
          /** 路径导航文本描述 */
          strguide: string;
          signage: null;
          /** 当前道路名称 */
          streetName: string;
          /** 下个道路名称 */
          nextStreetName: string;
          tollStatus: number;
          /** 节点经纬度"lng,lat" */
          turnlatlon: string;
        }[];
      };
      /** 简略路径 */
      simple: {
        item: {
          id: "0";
          strguide: "从清华东路出发，行驶到学院路,进入新街口南大街。";
          streetNames: "清华东路";
          lastStreetName: "学院路";
          linkStreetName: "新街口南大街";
          signage: null;
          tollStatus: 0;
          turnlatlon: "116.33297,39.99922";
          streetLatLon: "116.33297,39.99922;116.33303,39.99922;116.33303,39.99922;116.33339,39.99922;116.33339,39.99922;116.33372,39.99922;116.33372,39.99922;116.33484,39.99926;116.33484,39.99926;116.3353,39.99929;116.3353,39.99929;116.33705,39.99935;116.33705,39.99935;116.33805,39.99937;116.33805,39.99937;116.33912,39.99939;116.33912,39.99939;116.34087,39.99946;116.34087,39.99946;116.34142,39.99949;116.34142,39.99949;116.34158,39.99949;116.34158,39.99949;116.34206,39.99949;116.34206,39.99949;116.34222,39.99949;116.34222,39.99949;116.34256,39.99951;116.34256,39.99951;116.34283,39.99951;116.34283,39.99951;116.34302,39.99951;116.34302,39.99951;116.34351,39.99951;116.34351,39.99951;116.34384,39.99951;116.34384,39.99951;116.34432,39.99951;116.34432,39.99951;116.34486,39.99953;116.34486,39.99953;116.34528,39.99955;116.34528,39.99955;116.34568,39.99956;116.34568,39.99956;116.34602,39.99957;116.34602,39.99957;116.34628,39.99957;";
          streetDistance: 1134;
          segmentNumber: 0;
        }[];
      };
      /**  */
      distance: 17.5;
      duration: 1259;
      /** "lng,lat;lng,lat;..." */
      routelatlon: string;
    };
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
