declare namespace T {
  class InfoWindow extends OverlayBase<InfoWindowEvents> {
    /** 创建一个信息窗实例 */
    constructor(content: string | HTMLElement, opts?: InfoWindowOptions);
    /** 设置或改变信息浮窗所指向的地理位置坐标 */
    setLngLat(lnglat: LngLat): void;
    /** 返回信息浮窗所指向的地理位置坐标 */
    getLngLat(): LngLat;
    /** 返回信息窗口的打开状态 */
    isOpen(): boolean;
    /** 设置信息浮窗的显示 HTML 内容 */
    setContent(content: string | HTMLElement): void;
    /** 返回信息浮窗的显示 HTML 内容 */
    getContent(): string | HTMLElement;
    /** 重绘信息窗口，当信息窗口内容发生变化时进行调用 */
    update(): void;
  }

  interface InfoWindowOptions {
    /** 弹出框的最小宽度。default:50 */
    minWidth?: number;
    /** 弹出框的最大宽度。default:300 */
    maxWidth?: number;
    /** 设置后，如果内容超过弹出窗口的给定高度则产生一个可以滚动的容器 */
    maxHeight?: number;
    /** 是否开启信息窗口打开时地图自动移动（默认关闭）。default:false */
    autoPan?: boolean;
    /** 控制弹出窗口中出现的关闭按钮。default:true */
    closeButton?: boolean;
    /** 弹出窗口位置的补偿值。在同一图层中打开弹出窗口时对于控制锚点比较有用。default:Point(0,7) */
    offset?: Point;
    /** 在地图视图自动平移产生后弹出窗口和地图视图之间的边缘。default:Point(5,5) */
    autoPanPadding?: Point;
    /** 是否开启点击地图关闭信息窗口（默认关闭）。default:false */
    closeOnClick?: boolean;
  }

  interface InfoWindowEvents {
    /** 信息窗口被关闭时触发此事件 */
    close(e: Pick<InfoWindowEvent, "type" | "target" | "lnglat">): void;
    /** 信息窗口被打开时触发此事件 */
    open(e: Pick<InfoWindowEvent, "type" | "target" | "lnglat">): void;
    /** 点击信息窗口的关闭按钮时触发此事件 */
    clickclose(e: Pick<InfoWindowEvent, "type" | "target">): void;
  }

  interface InfoWindowEvent extends OverlayEvent<InfoWindow, LngLat> {}
}
