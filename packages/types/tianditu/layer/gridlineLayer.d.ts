declare namespace T {
  /** 通过此类实现在地图上叠加网格图层，用户可以自定义格网的像素大小、变现颜色、边线宽度透明度等一系列参数。 */
  class GridlineLayer extends TileLayer {
    constructor(opts?: GridlineLayerOptions)
  }

  interface GridlineLayerOptions extends TileLayerOptions {
    /**
     * 设置格网图层的网格大小，单位是像素。
     * @default 256
     */
    tileSize?: number
    /**
     * 设置格网图层边线的颜色、宽度、线样式。
     * @default { width:1, style:'solid', color:'#999' }
     */
    outlineSize?: {
      width?: number
      style?: string
      color?: string
    }
    /**
     * 设置格网图层文字的样式，图层文字表现网格的行号、列号、层级。
     * @default { display:false, fontSize:'14', fontWeight:true, color:'black' }
     */
    textSize?: {
      display?: boolean
      fontSize?: string
      fontWeight?: boolean
      color?: string
    }
  }
}
