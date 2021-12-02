declare namespace T {
  class Polyline extends OverlayBase<PolylineEvents> {
    /** 创建折线覆盖物对象 */
    constructor(points: LngLat[], opts?: PolylineOptions);
    /** 设置折线的点数组 */
    setLngLats(lnglat: LngLat[]): void;
    /** 返回折线的点数组 */
    getLngLats(): LngLat[];
    /** 设置折线的颜色 */
    setColor(color: string): void;
    /** 返回折线的颜色 */
    getColor(): string;
    /** 设置折线的宽度 */
    setWeight(weight: number): void;
    /** 返回线的宽度 */
    getWeight(): number;
    /** 设置折线是为实线或虚线 */
    setLineStyle(style: PolylineOptions["lineStyle"]): void;
    /** 返回当前折线样式状态，实线或者虚线 */
    getLineStyle(): string;
    /** 返回折线的地理区域范围 */
    getBounds(): LngLatBounds;
    /** 启用线编辑功能 */
    enableEdit(): void;
    /** 禁用线编辑功能 */
    disableEdit(): void;
    /** 是否启用线编辑功能，true表示启用，false表示禁止 */
    isEditable(): boolean;
  }

  interface PolylineOptions {
    /** 折线颜色。default:"#0000FF" */
    color?: string;
    /** 折线的宽度，以像素为单位。default:3 */
    weight?: number;
    /** 折线的透明度（范围0-1 之间）。default:0.5 */
    opacity?: number;
    /** 折线的样式（solid或dashed）。default:"solid" */
    lineStyle?: "solid" | "dashed";
  }

  interface PolylineEvents extends OverlayEvents<Polyline, LngLat[]> {}
}
