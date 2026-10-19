declare namespace T {
  namespace TileLayer {
    /** 通过此类实现在地图上叠加自定义的WMS地图图块层。 */
    class WMS extends TileLayer {
      constructor(url: string, opts?: WMSOptions)
    }

    interface WMSOptions {
      /** 用","分隔的多个图层列表 */
      layers?: string
      /** 每个请求图层的用","分隔的描述样式 */
      styles?: string
      /**
       * 输出图像的类型。
       * @default "image/jpeg"
       */
      format?: string
      /**
       * 输出图像背景是否透明。
       * @default false
       */
      transparent?: boolean
      /**
       * 请求服务的版本。
       * @default "1.1.1"
       */
      version?: string
      /**
       * 地图投影类型。
       * @default "EPSG:900913"
       */
      srs?: string
    }
  }
}
