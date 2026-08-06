declare namespace T {
  /** 天地图缓冲工具类，对外开放。 允许用户在地图上拖拽完成地理空间目标（点、线、面、圆、多边形）的缓冲，用于表达地理空间目标的影响范围或服务范围等信息。 使用者可以自定义缓冲面的相关样式，例如缓冲面的填充颜色、透明度等等。注：chrome、safari、IE9及以上浏览器，缓冲算法函数依赖turf.js。 */
  class BufferTool {
    /** 初始化缓冲工具，传入地图对象和要缓冲的图层数组，以及缓冲的样式 */
    constructor(map: Map, layers?: OverlayBase[], opts?: BufferToolOptions)
    /** 增加一个可被操作缓冲的图层 */
    addLayer(layer: OverlayBase): void
    /** 获取所有的缓冲区图层 */
    getBufferLayers(): Polygon[]
    /** 清除所有绘制的缓冲多边形 */
    clear(): void
    /** 开启缓冲工具 */
    open(): void
    /** 关闭缓冲工具 */
    close(): void
  }

  interface BufferToolOptions {
    /**
     * 缓冲区的填充样式
     * @default { color:"red", weight:3, opacity:0.5, fillColor:"red", fillOpacity:0.5 }
     */
    style?: {
      color?: string
      weight?: number
      opacity?: number
      fillColor?: string
      fillOpacity?: number
    }
  }
}
