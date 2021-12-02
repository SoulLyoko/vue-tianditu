declare namespace T {
  class Circle extends OverlayBase<CircleEvents> {
    /**
     * 创建圆覆盖物
     * @param center 圆心经纬度坐标
     * @param radius 圆的半径，以米点单位
     */
    constructor(center: LngLat, radius: number, opts?: CircleOptions);
    /** 设置圆的中心点。 */
    setCenter(lnglat: LngLat): void;
    /** 返回圆的中心点。 */
    getCenter(): LngLat;
    /** 设置圆的半径。 */
    setRadius(radius: number): void;
    /** 返回圆的半径。 */
    getRadius(): number;
    /** 返回圆的地理区域范围 */
    getBounds(): LngLatBounds;
    /** 设置圆边线的颜色 */
    setColor(color: string): void;
    /** 返回圆边线的颜色 */
    getColor(): string;
    /** 设置圆边线的宽度 */
    setWeight(weight: number): void;
    /** 返回圆边线的宽度 */
    getWeight(): number;
    /** 设置圆边线是为实线或虚线 */
    setLineStyle(style: PolylineOptions["lineStyle"]): void;
    /** 返回当前圆边线样式状态，实线或者虚线 */
    getLineStyle(): string;
    /** 设置圆的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆覆盖物填充颜色与边线颜色相同 */
    setFillColor(color: string): void;
    /** 返回圆的填充颜色 */
    getFillColor(): string;
    /** 设置圆的填充透明度。当参数为0时，圆覆盖物将没有填充效果 */
    setFillOpacity(opacity: number): void;
    /** 返回圆的填充透明度 */
    getFillOpacity(): number;
    /** 启用圆编辑功能 */
    enableEdit(): void;
    /** 禁用圆编辑功能 */
    disableEdit(): void;
    /** 是否启用圆编辑功能，true表示启用，false表示禁止 */
    isEditable(): boolean;
  }

  interface CircleOptions {
    /** 圆边线颜色。default:"#0000FF" */
    color?: string;
    /** 圆边线的宽度，以像素为单位。default:3 */
    weight?: number;
    /** 圆边线的透明度（范围0-1 之间）。default:0.5 */
    opacity?: number;
    /** 圆填充颜色。当参数为空时，圆覆盖物将没有填充效果。default:"#0000FF" */
    fillColor?: string;
    /** 圆填充的透明度（范围0-1 之间）。default:0.2 */
    fillOpacity?: number;
    /** 圆边线的样式（solid或dashed）。default:"solid" */
    lineStyle?: "solid" | "dashed";
  }

  interface CircleEvents extends OverlayEvents<Circle, LngLat> {}
}
