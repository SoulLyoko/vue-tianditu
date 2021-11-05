declare namespace T {
  class LngLat {
    /**
     * 根据给定经度和纬度创建地理位置坐标点
     * @param lng 地理经度
     * @param lat 地理纬度
     */
    constructor(lng: number, lat: number);
    /** 经度 */
    lng: number;
    /** 纬度 */
    lat: number;
    /** 获取地理坐标点的经度 */
    getLng(): number;
    /** 获取地理坐标点的经度 */
    getLat(): number;
    /** 计算当前地理坐标点与给定坐标点之间的距离 */
    distanceTo(lnglat: LngLat): boolean;
    /** 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true */
    equals(other: LngLat): boolean;
  }

  class LngLatBounds {
    /**
     * 根据给定的多个地理位置坐标点创建矩形
     * @param sw 矩形区域的西南角
     * @param ne 矩形区域的东北角
     */
    constructor(sw: LngLat, ne: LngLat);
    /** 返回西南点坐标 */
    getSouthWest(): LngLat;
    /** 返回东北点坐标 */
    getNorthEast(): LngLat;
    /** 返回边界的中心点 */
    getCenter(): LngLat;
    /** 放大此矩形，使其包含给定的点 */
    extend(lnglat: LngLat): LngLatBounds;
    /** 如果点的地理坐标位于此矩形内或者传入的矩形区域完全包含于此矩形区域中，则返回true */
    contains(lnglat: LngLat | LngLatBounds): boolean;
    /** 如果矩形与给定边界相交则返回true */
    intersects(other: LngLatBounds): boolean;
  }

  class Point {
    /**
     * 根据给定x和y坐标创建地图上的一个像素坐标点
     * @param x 像素坐标中x坐标，x坐标向右增大
     * @param y 像素坐标中y坐标，y坐标向下增大
     */
    constructor(x: number, y: number);
    /** x坐标 */
    x: number;
    /** y坐标 */
    y: number;
    /** 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true */
    equals(point: Point): boolean;
    /**获得当前点与给定点的距离 */
    distanceTo(point: Point): number;
  }

  class LayerGroup {
    /**
     * 构建一个存储图层的容器。
     * @param layers 叠加层数组
     */
    constructor(layers: Overlay[]);
    /** 从容器中增加一个图层 */
    addLayer(layer: Overlay): void;
    /** 从容器中移除一个图层 */
    removeLayer(layer: Overlay): void;
    /** 判断图层是否在容器中 */
    hasLayer(layer: Overlay): boolean;
    /** 得到容器中的所有图层 */
    getLayers(): Overlay[];
    /** 清除容器中的所有图层 */
    clearLayers(): void;
    /**设置容器z-index值 */
    setZIndex(): void;
    /**通过ID获取其对应的图层 */
    getLayer(id: string): Overlay;
    /** 获取容器中存在图层的唯一ID */
    getLayerId(layer: Overlay): string;
  }

  class MapType {
    /** 创建TMapType对象实例 */
    constructor(layers: TileLayer[], name: string);
    /**	返回地图类型名称 */
    getName(): string;
    /** 返回地图类型对应的图层 */
    getLayers(): MapType;
  }
}
