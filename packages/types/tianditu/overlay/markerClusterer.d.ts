declare namespace T {
  class MarkerClusterer extends OverlayBase<MarkerClustererEvents> {
    /** 创建一个点聚合组件 */
    constructor(map: Map, opts: MarkerClustererOptions);
    /** 添加一个聚合的标记 */
    addMarker(marker: Marker): void;
    /** 添加要聚合的标记数组 */
    addMarkers(markers: Marker[]): void;
    /** 获取聚合的总数量 */
    getClustersCount(): number;
    /** 从地图上彻底清除所有的标记 */
    clearMarkers(): void;
    /** 获取网格大小 */
    getGridSize(): number;
    /** 获取所有的标记数组 */
    getMarkers(): Marker[];
    /** 获取聚合的最大缩放级别 */
    getMaxZoom(): number;
    /** 获取单个聚合的最小数量 */
    getMinClusterSize(): number;
    /** 获取聚合的样式风格集合 */
    getStyles(): MarkerClustererStyle[];
    /** 删除单个标记 */
    removeMarker(marker: Marker): void;
    /** 删除一组标记 */
    removeMarkers(markers: Marker[]): void;
    /** 设置网格大小 */
    setGridSize(gridSize: number): void;
    /** 设置聚合的最大缩放级别 */
    setMaxZoom(maxZoom: number): void;
    /** 设置聚合的样式风格集合 */
    setStyles(styles: MarkerClustererStyle[]): void;
  }

  interface MarkerClustererOptions {
    /** 要聚合的标注点数组 */
    markers?: Marker[];
    /** 聚合计算时网格的像素大小，默认60 */
    girdSize?: number;
    /** 最大的聚合级别，大于该级别就不进行聚合 */
    maxZoom?: number;
    /** 自定义聚合后的图标风格 */
    styles?: MarkerClustererStyle[];
  }

  interface MarkerClustererEvents extends OverlayEvents<MarkerClusterer, LngLat, Marker> {
    dragstart(e: Pick<MarkerClustererEvent, "type" | "target" | "layer">): void;
    drag(e: Pick<MarkerClustererEvent, "type" | "target" | "lnglat" | "layer">): void;
    dragend(e: Pick<MarkerClustererEvent, "type" | "target" | "lnglat" | "layer">): void;
    clusterclick(e: MarkerClustererEvent): void;
  }

  interface MarkerClustererEvent extends OverlayEvent<MarkerClusterer, LngLat, Marker> {}

  /**
   * ```
   * [
   *   {
   *     url: "http://api.tianditu.gov.cn/img/map/cluster/heart30.png",
   *     size: [30, 26], //图片大小
   *     offset: new T.Point(-15, -13), //显示图片的偏移量
   *     textColor: "#000000", //显示数字的颜色
   *     textSize: 8, //显示文字的大小
   *     range: [0, 50]
   *   },
   *   {
   *     url: "http://api.tianditu.gov.cn/img/map/cluster/heart40.png",
   *     size: [42, 36],
   *     offset: new T.Point(-20, -17),
   *     textColor: "#ff0000",
   *     textSize: 10,
   *     range: [50, 400]
   *   },
   *   {
   *     url: "http://api.tianditu.gov.cn/img/map/cluster/heart50.png",
   *     size: [52, 46],
   *     soffset: new T.Point(-10, -22),
   *     textColor: "white",
   *     textSize: 12,
   *     range: [400, 500]
   *   }
   * ];
   * ```
   */
  interface MarkerClustererStyle {
    /** 图片地址 */
    url?: string;
    /** 图片大小 */
    size?: number[];
    /** 显示图片的偏移量 */
    offset?: Point;
    /** 显示数字的颜色 */
    textColor?: string;
    /** 显示文字的大小 */
    textSize?: number;
    /** 显示图片的数字范围 */
    range?: number[];
  }
}
