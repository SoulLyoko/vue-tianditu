declare namespace T {
  /** 以特殊高亮的形式直观展示数据分布状况。注：chrome、safari、IE9及以上浏览器，核心的代码主要来自于第三方heatmap.js。 */
  class HeatmapOverlay extends Overlay {
    /** 通过heatmap.js构建一个热力图的渲染容器 */
    constructor(opts?: HeatmapOverlayOptions)
    /** 热力图渲染的数据 */
    setDataSet(data: { max: string; data: any[] }): void
    /** 增加一个渲染的数据 */
    addDataPoint(lng: number, lat: number, count: number): void
    /** 更改热力图的展现或者关闭 */
    toggle(): void
    /** 重新设置热力图展现的配置 */
    setOptions(options: HeatmapOverlayOptions): void
  }

  interface HeatmapOverlayOptions {
    /**
     * 纬度字段名称
     * @default 'lat'
     */
    latField?: string
    /**
     * 经度字段名称
     * @default 'lng'
     */
    lngField?: string
    /**
     * 权重字段名称
     * @default 'count'
     */
    valueField?: string
    /**
     * 缓冲半径
     * @default 40
     */
    radius?: number
    /**
     * 颜色梯度变化
     * @default { 0.25:"rgb(0,0,255)", 0.55:"rgb(0,255,0)", 0.85:"yellow", 1.0:"rgb(255,0,0)" }
     */
    gradient?: Record<number | string, string>
    /**
     * 透明度
     * @default 0.6
     */
    opacity?: number
  }
}
