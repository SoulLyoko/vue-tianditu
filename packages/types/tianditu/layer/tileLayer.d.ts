declare namespace T {
  /** 通过此类实现在地图上叠加自定义的地图图块层。 */
  class TileLayer extends EventListener<TileLayerEvents> {
    /**
     * 以指定的参数创建TileLayer对象,这个对象是在地图上叠加栅格地图的时候用到的
     * @param url 图层服务地址。
     * @param opts 图层属性对象。
     */
    constructor(url: string, opts?: TileLayerOptions)
    /**
     * 改变图层的透明度
     * @param opacity 取值范围0-1 之间
     */
    setOpacity(opacity: number): TileLayer
    /**
     * 设置图层的叠放顺序
     * @param zIndex 大于1的整数。
     */
    setZIndex(zIndex: number): TileLayer
    /**
     * 重新加载所有添加到此 TileLayer 的可见瓦片
     * @param url 图层服务地址。
     */
    refresh(): TileLayer
    /** 更新图层的URL地址并重绘他们 */
    setUrl(url: string): TileLayer
    /** 瓦片的标签容器 */
    getContainer(): HTMLElement
  }

  interface TileLayerOptions {
    /** 此图层的最低缩放级别。
     * @default 0
     */
    minZoom?: number
    /** 此图层的最高缩放级别。
     * @default 18
     */
    maxZoom?: number
    /** 当没有瓦片时所显示的错误图片地址 */
    errorTileUrl?: string
    /** 设置图层的透明度（0.0-1.0）。默认值为 1.0不透明。
     * @default 1.0
     */
    opacity?: number
    /** 图层的显示顺序 */
    zIndex?: number
    /** 设置指定范围内显示瓦片 */
    bounds?: LngLatBounds
  }

  interface TileLayerEvents {
    /** 当瓦片图层开始加载瓦片时触发 */
    loading(e: TileLayerEventBase): void
    /** 当瓦片图层加载完可见瓦片后触发 */
    load(e: TileLayerEventBase): void
    /** 瓦片请求和开始加载时触发 */
    tileloadstart(e: TileLayerEvent): void
    /** 在加载瓦片时触发 */
    tileload(e: TileLayerEvent): void
    /** 在瓦片被移除时触发（比如打开了unloadInvisibleTiles） */
    tileunload(e: TileLayerEvent): void
    /** 瓦片错误时触发 */
    tileerror(e: TileLayerEvent): void
  }

  interface TileLayerEventBase {
    /** 事件类型 */
    type: string
    /** 图层对象 */
    target: TileLayer
  }

  interface TileLayerEvent extends TileLayerEventBase {
    /** 像素坐标对象 */
    coords: Point
    /** 瓦片图片 */
    tile: HTMLImageElement
  }
}
