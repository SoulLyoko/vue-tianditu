declare namespace T {
  class Polygon extends OverlayBase<PolygonEvents> {
    /** 创建多边形覆盖物对象 */
    constructor(points: LngLat[], opts?: PolygonOptions);
    /** 设置多边形的点数组 */
    setLngLats(lnglat: LngLat[]): void;
    /** 返回多边形的点数组 */
    getLngLats(): LngLat[];
    /** 设置多边形边线的颜色 */
    setColor(color: string): void;
    /** 返回多边形边线的颜色 */
    getColor(): string;
    /** 设置多边形边线的宽度 */
    setWeight(weight: number): void;
    /** 返回多边形边线的宽度。 */
    getWeight(): number;
    /** 设置多边形边线是为实线或虚线 */
    setLineStyle(style: PolylineOptions["lineStyle"]): void;
    /** 返回当前多边形边线样式状态，实线或者虚线 */
    getLineStyle(): string;
    /** 设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，多边形覆盖物填充颜色与边线颜色相同 */
    setFillColor(color: string): void;
    /** 返回多边形的填充颜色 */
    getFillColor(): string;
    /** 设置多边形的填充透明度。当参数为0时，多边形覆盖物将没有填充效果 */
    setFillOpacity(opacity: number): void;
    /** 返回多边形的填充透明度 */
    getFillOpacity(): number;
    /** 返回多边形的地理区域范围 */
    getBounds(): LngLatBounds;
    /** 启用多边形编辑功能 */
    enableEdit(): void;
    /** 禁用多边形编辑功能 */
    disableEdit(): void;
    /** 是否启用多边形编辑功能，true表示启用，false表示禁止 */
    isEditable(): boolean;
  }

  interface PolygonOptions {
    /** 多边形边线颜色。default:"#0000FF" */
    color?: string;
    /** 多边形边线的宽度，以像素为单位。default:3 */
    weight?: number;
    /** 多边形边线的透明度（范围0-1 之间）。default:0.5 */
    opacity?: number;
    /** 多边形填充颜色。当参数为空时，多边形覆盖物将没有填充效果。default:"#0000FF" */
    fillColor?: string;
    /** 多边形填充的透明度（范围0-1 之间）。default:0.2 */
    fillOpacity?: number;
    /** 多边形边线的样式（solid或dashed）。default:"solid" */
    lineStyle?: "solid" | "dashed";
  }

  interface PolygonEvents extends OverlayEvents<Polygon, LngLat[]> {}
}
