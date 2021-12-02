declare namespace T {
  class BusLineSearch {
    /** 创建一个公交导航实例，用于获取公交路线规划方案*/
    constructor(map: Map, opts: BusLineSearchOptions);

    /** 检索公交信息 */
    getBusList(keyword: string): void;
    /** 检索公交路线 */
    getBusLine(busListItem: BusListItem): void;
    /** 设置公交列表查询后的回调函数 */
    setGetBusListCompleteCallback(callback: Function): void;
    /** 设置公交线路查询后的回调函数 */
    setGetBusLineCompleteCallback(callback: Function): void;
  }

  interface BusLineSearchOptions {
    /** 设置公交列表查询后的回调函数 */
    onGetBusListComplete?: (result: BusListResult) => void;
    /** 设置公交线路查询后的回调函数 */
    onGetBusLineComplete?: (result: BusLine) => void;
  }

  interface BusListResult {
    /** 公交列表个数 */
    getNumBusList(): number;
    /** 获取某一个具体的公交列表中的对象 */
    getBusListItem(i: number): BusListItem;
  }

  interface BusListItem {
    /** 站数 */
    stationNum: string;
    /** 线路名称 */
    name: string;
    /** 线路的id */
    uuid: string;
  }

  interface BusLine {
    /**	线路名称，如：68路 */
    lineName: string;
    /**	线路类型，1表示公交；2表示地铁；3表示磁悬浮 */
    lineType: number;
    /**	线路的长度，单位米 */
    length: number;
    /**	线路的详细点信息，格式：x,y;x,y; */
    linePoint: string;
    /**	始发车时间格式为：hh:mm 24小时制 */
    startTime: string;
    /**	末班车时间格式为：hh:mm 24小时制 */
    endTime: string;
    /**	公交线路的全程运营总时间，单位分钟 */
    totalTime: number;
    /**	该线路所具有的站点总数量 */
    stationCount: number;
    /**	发车间隔，单位秒 */
    interval: number;
    /**	计费模式，0表示单一；1表示按距离；2表示按站 */
    ticketcal: number;
    /**	全程票价，单位分 */
    totalPrice: number;
    /**	起步票价，单位分 */
    startPrice: number;
    /**	递增距离票价，单位千米 */
    increasedPrice: number;
    /**	车站递增票价，按站 */
    increasedStep: number;
    /**	是否支持月票，0表示不支持；1表示支持 */
    ismonTicket: number;
    /**	是否双向行驶，0表示单项；1表示双向 */
    isBidirectional: number;
    /**	是否人工售票，0表示有人；1表示无人 */
    isManual: number;
    /**	状态，0表示使用中；1表示非使用中 */
    status: number;
    /**	所属公交公司，公交线路所属公司 */
    company: string;
    /** 返回公交站点个数 */
    getNumBusStations(): number;
    /** 返回某一个具体的公交站信息 */
    getBusStation(i: number): Station;
    /** 返回公交线地理坐标点数组 */
    getPath(): [];
  }
}
