declare namespace T {
  class GridlineLayer extends TileLayer {
    constructor(opts?: GridlineLayerOptions);
  }

  interface GridlineLayerOptions {
    /** 设置格网图层的网格大小，单位是像素。default:256 */
    tileSize?: number;
    /** 显示格网图层的最小层级。default:0 */
    minZoom?: number;
    /** 显示格网图层的最大层级。default:18 */
    maxZoom?: number;
    /** 设置格网图层的透明度。default:1 */
    opacity?: number;
    /** 设置格网图层边线的颜色、宽度、线样式。default:{width:1, style:'solid', color:'#999'} */
    outlineSize?: {
      width: number;
      style: string;
      color: string;
    };
    /** 设置格网图层文字的样式，图层文字表现网格的行号、列号、层级。default:{display:false, fontSize:'14', fontWeight:true, color:'black'} */
    textSize?: {
      display: boolean;
      fontSize: string;
      fontWeight: boolean;
      color: string;
    };
  }
}
