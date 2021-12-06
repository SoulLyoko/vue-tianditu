declare namespace T {
  class LocalSearch {
    /** 创建一个搜索类实例用于位置检索、周边检索和范围检索 */
    constructor(map: Map, opts: LocalSearchOptions);

    /** 根据检索词发起检索 */
    search(keyword: string, type: QueryType): void;
    /** 根据范围和检索词发起范围检索 */
    searchInBounds(keyword: string, bounds: LngLatBounds): void;
    /** 根据中心点、半径与检索词发起周边检索 */
    searchNearby(keyword: string, center: LngLat, radius: number): void;
    /** 返回最近一次检索的结果 */
    getResults(): LocalSearchResult;
    /** 清除最近一次检索的结果 */
    clearResults(): void;
    /** 检索特定页面的结果 */
    gotoPage(page: number): void;
    /**
     * 设置检索范围
     * @param code 行政区的国标码
     */
    setSpecifyAdminCode(code: number): void;
    /** 设置搜索类型 */
    setQueryType(type: LocalSearchResult["resultType"]): void;
    /** 返回搜索类型 */
    getQueryType(): LocalSearchResult["resultType"];
    /** 设置每页容量 */
    setPageCapacity(count: number): void;
    /** 返回每页容量 */
    getPageCapacity(): number;
    /** 设置检索结束后的回调函数 */
    setSearchCompleteCallback(fn: LocalSearchOptions["onSearchComplete"]): void;
    /** 检索第一页 */
    firstPage(): void;
    /** 检索下一页 */
    nextPage(): void;
    /** 检索上一页 */
    prevPage(): void;
    /** 检索上一页 */
    lastPage(): void;
    /** 返回总记录数 */
    getCountNumber(): number;
    /** 返回总记录数 */
    getCountPage(): number;
    /** 返回当前页 */
    getPageIndex(): number;
  }

  interface LocalSearchOptions {
    /** 每页容量 */
    pageCapacity?: number;
    /** 检索结束后的回调函数 */
    onSearchComplete?: (result: LocalSearchResult) => void;
  }

  interface LocalSearchResult {
    /** 搜索类型。1表示普通搜索;2表示视野内搜索;4表示普通建议词搜索;5表示公交规划建议词搜索;7表示纯地名搜索(不搜公交线);10表示拉框搜索 */
    resultType: number | string;
    count: number | string;
    KeyWord: string;
    pois: LocalSearchPoi[] | false;
    statistics: LocalSearchStatistics | false;
    area: LocalSearchArea | false;
    suggests: LocalSearchSuggest[] | false;
    prompt: LocalSearchPrompt[] | false;
    lineData: LocalSearchLineData[] | false;
    /** 返回搜索类型 */
    getResultType(): QueryType;
    /** 返回检索总条数 */
    getCount(): number;
    /** 返回检索关键词 */
    getKeyword(): number;
    /** 返回点信息，当getResultType值为1时返回 */
    getPois(): LocalSearchPoi[];
    /** 返回统计信息，当getResultType值为2时返回 */
    getStatistics(): LocalSearchStatistics;
    /** 返回行政区省信息，当getResultType值为3时返回 */
    getArea(): LocalSearchArea;
    /** 返回建议词信息，当getResultType值为4时返回 */
    getSuggests(): LocalSearchSuggest[];
    /** 返回提示信息 */
    getPrompt(): LocalSearchPrompt;
    /** 返回线路信息，当getResultType值为5时返回 */
    getLineData(): LocalSearchLineData[];
  }

  /** 点信息 */
  interface LocalSearchPoi {
    /** 电话 */
    phone: string;
    /** 坐标 */
    lonlat: string;
    /** 地址 */
    address: string;
    /** Poi点名称 */
    name: string;
    /** poi类型（102表示公交站，普通poi该参数可以不返回） */
    poiType: string;
  }

  /** 统计信息 */
  interface LocalSearchStatistics {
    /** 推荐显示城市 */
    priorityCitys: LocalSearchAdmin[];
    /** 搜索的关键字 */
    keyword: string;
    /** 搜索的国家数量 */
    countryCount: number;
    /** 搜索的城市数量 */
    citysCount: number;
    /** 搜索的省份数量 */
    provinceCount: number;
    allAdmins: (LocalSearchAdmin & { childAdmins: LocalSearchAdmin[] })[];
  }

  /** 行政区省信息 */
  interface LocalSearchArea {
    /** 显示级别 */
    level: string;
    /** 定位中心点坐标 */
    lonlat: string;
    /** 名称 */
    name: string;
    /** 行政区边界坐标 */
    points: { region: string }[];
    /** 1表示正常区域，2表示特殊区域 */
    type: string;
  }

  /** 建议词信息 */
  interface LocalSearchSuggest {
    /** 地址 */
    address: string;
    /** 名称 */
    name: string;
    /** 国标码 */
    gbCode: string;
  }

  /** 提示信息 */
  interface LocalSearchPrompt {
    /** 关键字 */
    keyword: string;
    admins: LocalSearchAdmin[];
    type: number;
  }

  /** 线路信息 */
  interface LocalSearchLineData {
    /** poi点的poi类型（poiType =102表示公交站，其它值表示普通poi） */
    poiType: string;
    /** 站数 */
    stationNum: string;
    /** 线路名称 */
    name: string;
    /** 线路的id */
    uuid: string;
  }

  interface LocalSearchAdmin {
    /** 统计数量 */
    count: string;
    /** 城市名称 */
    name: string;
    /** 城市国标码 */
    adminCode: number;
  }
}
