declare namespace T {
  namespace TileLayer {
    /** 通过此类实现在地图上叠加天地图矢量地图服务，此接口只支持叠加经纬度投影的矢量地图服务。 */
    class TDT extends TileLayer {
      constructor(url: string, opts?: TDTOptions)
    }

    interface TDTOptions extends TileLayerOptions {
      /** 用来描述图层信息 */
      attribution?: string
    }
  }
}
