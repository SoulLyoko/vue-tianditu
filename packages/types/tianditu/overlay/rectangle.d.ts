declare namespace T {
  class Rectangle extends OverlayBase<RectangleEvents> {
    /** 创建矩形覆盖物对象 */
    constructor(bounds: LngLatBounds, opts?: RectangleOptions);
    /** 设置矩形的显示范围 */
    setBounds(bounds: LngLatBounds): void;
    /** 返回矩形的地理区域范围 */
    getBounds(): LngLatBounds;
    /** 设置矩形边线的颜色 */
    setColor(color: string): void;
    /** 返回矩形边线的颜色 */
    getColor(): string;
    /** 设置矩形边线的宽度 */
    setWeight(weight: number): void;
    /** 返回矩形边线的宽度 */
    getWeight(): number;
    /** 设置矩形边线是为实线或虚线 */
    setLineStyle(style: PolylineOptions["lineStyle"]): void;
    /** 返回当前矩形边线样式状态，实线或者虚线 */
    getLineStyle(): string;
    /** 设置矩形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，矩形覆盖物填充颜色与边线颜色相同 */
    setFillColor(color: string): void;
    /** 返回矩形的填充颜色 */
    getFillColor(): string;
    /** 设置矩形的填充透明度。当参数为0时，矩形覆盖物将没有填充效果 */
    setFillOpacity(opacity: number): void;
    /** 返回矩形的填充透明度 */
    getFillOpacity(): number;
    /** 启用矩形编辑功能 */
    enableEdit(): void;
    /** 禁用矩形编辑功能 */
    disableEdit(): void;
    /** 是否启用矩形编辑功能，true表示启用，false表示禁止 */
    isEditable(): boolean;
  }

  interface RectangleOptions {
    /** 矩形边线颜色。default:"#0000FF" */
    color?: string;
    /** 矩形边线的宽度，以像素为单位。default:3 */
    weight?: number;
    /** 矩形边线的透明度（范围0-1 之间）。default:0.5 */
    opacity?: number;
    /** 矩形填充颜色。当参数为空时，矩形覆盖物将没有填充效果。default:"#0000FF" */
    fillColor?: string;
    /** 矩形填充的透明度（范围0-1 之间）。default:0.2 */
    fillOpacity?: number;
    /** 矩形边线的样式（solid或dashed）。default:"solid" */
    lineStyle?: "solid" | "dashed";
  }

  interface RectangleEvents extends OverlayEvents<Rectangle, LngLatBounds> {}
}
