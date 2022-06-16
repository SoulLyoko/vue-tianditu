declare namespace T {
  class Marker extends OverlayBase<MakerEvents> {
    /** 创建一个图像标注实例。lnglat参数指定了图像标注所在的地理位置 */
    constructor(lnglat: LngLat, opts?: MarkerOptions);
    /** 设置标注所在的地理位置坐标 */
    setLngLat(lnglat: LngLat): void;
    /** 返回标注所在的地理位置坐标 */
    getLngLat(): LngLat;
    /** 设置标注所用的图标对象 */
    setIcon(icon: Icon): void;
    /** 返回标记显示时所使用的图标对象 */
    getIcon(): Icon;
    /** 设置z-index */
    setZIndexOffset(num: number): void;
    /** 开启标注拖拽功能 */
    enableDragging(): void;
    /** 关闭标注拖拽功能 */
    disableDragging(): void;
  }

  interface MarkerOptions {
    /** 图标类用来表达注记。default:T.Icon.Default() */
    icon?: Icon;
    /** 决定注记是否可被鼠标或触摸拖动。default:false */
    draggable?: boolean;
    /** 默认情况下，注记图片的叠置顺序由纬度自动设置。如果你想将某一注记放置于其他之上可用这个选项，设置一个较大的值即可，比如1000（或是相反地设置一个较大的负值） */
    title?: string;
    /** 设置z-index。default:0 */
    zIndexOffset?: number;
    /** 设置透明度。default:1.0 */
    opacity?: number;
    /** 设置其他参数。 */
    [index:string]: any
  }

  interface MakerEvents extends OverlayEvents<Marker, LngLat> {
    dragstart(e: Pick<MarkerEvent, "type" | "target">): void;
    drag(e: Pick<MarkerEvent, "type" | "target" | "lnglat">): void;
    dragend(e: Pick<MarkerEvent, "type" | "target" | "lnglat">): void;
  }

  interface MarkerEvent extends OverlayEvent<Marker, LngLat> {}
}
