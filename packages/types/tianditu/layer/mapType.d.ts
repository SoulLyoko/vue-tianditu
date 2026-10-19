declare namespace T {
  /** 此类表示一种地图类型，您可以通过实例化此类自定义地图类型。 */
  class MapType {
    /**
     * 创建TMapType对象实例
     * @param layers TileLayer图层对象数组。
     * @param name 地图类型名称。
     */
    constructor(layers: TileLayer[], name: string)
    /**	返回地图类型名称 */
    getName(): string
    /** 返回地图类型对应的图层 */
    getLayers(): MapType
  }
}
