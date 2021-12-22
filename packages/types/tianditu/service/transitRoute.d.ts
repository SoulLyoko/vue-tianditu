declare namespace T {
  class TransitRoute {
    /** 创建一个公交导航实例，用于获取公交路线规划方案*/
    constructor(map: Map, opts: TransitRouteOptions);

    /** 发起检索 */
    search(start: LngLat, end: LngLat): void;
    /** 返回最近一次检索的结果 */
    getResults(): TransitRouteResult;
    /** 清除最近一次检索的结果 */
    clearResults(): void;
    /** 设置路线规划策略，参数为策略常量 */
    setPolicy(policy: TransitRouteOptions["policy"]): void;
    /** 设置检索结束后的回调函数 */
    setSearchCompleteCallback(fun: Function): void;
    /** 返回状态码 */
    getStatus(): TransitRouteResult["resultCode"];
  }

  interface TransitRouteOptions {
    /**
     * 公交导航的策略参数。
     * TMAP_TRANSIT_POLICY_LEAST_TIME = 1表示最少时间
     * TMAP_TRANSIT_POLICY_LEAST_TRANSFER = 2表示最少换乘
     * TMAP_TRANSIT_POLICY_LEAST_WALKING = 4表示最少步行
     * TMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 8表示不乘地铁
     */
    policy: number;
    /** 检索结束后的回调函数 */
    onSearchComplete?: (result: TransitRouteResult) => void;
  }

  interface TransitRouteResult {
    /** 是否包含地铁 */
    hasSubway: boolean;
    /**
     * 返回状态码。状态码如下：
     * 0表示正常返回线路；
     * 1表示找不到起点；
     * 2表示找不到终点；
     * 3表示规划不出线路；
     * 4表示起终点距离200米以内，不返回线路；
     * 5表示起终点距离500米内，返回线路；
     * 6表示输入参数错误
     */
    resultCode: number;
    results: {
      lineType: TransitRouteOptions["policy"];
      lines: {
        /** 方案线路名称 */
        lineName: string;
        segments: {
          segmentType: number;
          segmentLine: SegmentLine;
          stationStart: Station;
          stationEnd: Station;
        }[];
      }[];
    };
    /** 返回方案个数 */
    getNumPlans(): number;
    /** 返回索引指定的方案。索引0表示第一条方案 */
    getPlan(i: number): TransitRoutePlan;
  }

  interface TransitRoutePlan {
    Distance: number;
    Duration: number;
    LineName: string;
    LineType: number;
    NumSegments: number;
    /** 返回单个方案的详细信息段数 */
    getNumSegments(): number;
    /** 返回索引指定的详细信息。索引0表示第一条方案 */
    getDetails(i: number): TransitRouteLine;
    /** 返回方案描述文本 */
    getLineName(): string[];
    /** 返回方案总距离 */
    getDistance(): number;
    /** 返回方案总时间 */
    getDuration(): number;
    /** 返回公交导航的策略参数 */
    getLineType(): number;
  }

  interface TransitRouteLine {
    /**
     * 返回线路类型
     * 1表示步行；
     * 2表示公交；
     * 3表示地铁；
     * 4表示地铁站内换乘
     */
    getSegmentType(): number;
    /** 返回起站点信息 */
    getStationStart(): Station;
    /** 返回终站点信息 */
    getStationEnd(): Station;
    /** 返回线路内容 */
    getSegmentLine(): SegmentLine;
  }

  interface Station {
    /** 起终站点坐标 "lng,lat" */
    lonlat: string;
    /** 起终站点名称 */
    name: string;
    /** 起终站点id */
    uuid: string;
  }

  type SegmentLine = {
    /** 此段线路需要经过的站点数 */
    segmentStationCount: number;
    /** 此段线路需要的时间 */
    segmentTime: number;
    /** 此段线路的距离 */
    segmentDistance: number;
    /** 此段线路的完整线路名 */
    direction: string;
    /** 此段线路的坐标 "lng,lat;lng,lat;lng,lat" */
    linePoint: string;
    /** 线路名称 */
    lineName: string;
    /** 此段线路id */
    byuuid: string;
  }[];
}
