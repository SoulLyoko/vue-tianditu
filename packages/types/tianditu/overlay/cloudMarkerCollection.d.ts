declare namespace T {
  class CloudMarkerCollection extends OverlayBase<CloudMarkerCollectionEvents> {
    constructor(lnglats: LngLat[], opts: CloudMarkerCollectionOptions);
    setLnglats(lnglats: LngLat[]): void;
    setStyles(styles: CloudMarkerCollectionOptions): void;
    clear(): void;
  }

  interface CloudMarkerCollectionOptions {
    /**
     * 海量点的预设形状。
     * CIRCLE 圆形(默认)；
     * RHOMBUS 星形；
     * SQUARE 方形；
     * STAR 菱形；
     * WATERDROP 滴状
     */
    ShapeType?: "CIRCLE" | "RHOMBUS" | "SQUARE" | "STAR" | "WATERDROP";
    /**
     * 海量点的预设尺寸。
     * TINY 超小，宽高为2px * 2px；
     * SMALLER 很小，宽高为4px * 4px；
     * SMALL 小，宽高为8px * 8px；
     * NORMAL 正常，宽高为10px * 10px(默认)；
     * HUGE 大，宽高为16px * 16px；
     * BIGGER 很大，宽高为20px * 20px；
     * BIG 超大，宽高为30px * 30px
     */
    SizeType?: "TINY" | "SMALLER" | "SMALL" | "NORMAL" | "HUGE" | "BIGGER" | "BIG";
    /**
     * 海量点的颜色，默认为'#fa937e'。
     * 同时支持颜色字符串，如'red'；
     * 哈希字符串'#000000'；
     * rgb字符串，如'rgb(0,0,0)’；
     * rgba字符串，如'rgb(255,0,0,0.1)'；
     * hsl字符串，如'hsl(0,100%,50%)'；
     * hsla字符串，如'hsla(0,100%,50%,0.4)'
     */
    color?: string;
  }

  interface CloudMarkerCollectionEvents
    extends Pick<OverlayEvents<CloudMarkerCollection, LngLat, Overlay>, "click" | "mouseover" | "mouseout"> {}
}
