declare namespace T {
  class PolygonTool extends Mousetool<PolygonToolEvents> {
    /** 多边形工具，可以通过事件来获取用户绘制的多边形，包含测面积功能 */
    constructor(map: Map, opts?: PolygonToolOptions);
    /**
     * 跟随鼠标移动的说明文字
     * @param text 文字内容
     */
    setTips(text: string): void;
    /**
     * 计算由地理点组成的多边形的面积
     * @param points 点坐标LngLat数组
     */
    getArea(points: LngLat[]): number;
    /** 获得所有绘制的多边形 */
    getPolygons(): Polygon[];
    /** 完成一个多边形的绘制，运行此方法相当于用户点击双击结束当前多边形的绘制 */
    endDraw();
  }

  interface PolygonToolOptions extends PolygonOptions {
    /** 是否显示面积，如果不显示面积，则可以作为画面控件使用。default:false */
    showLabel?: boolean;
  }

  interface PolygonToolEvents {
    /** 用户双击完成一次折线绘制时触发事件 */
    draw(e: PolygonToolEvent);
    /** 用户在多边形绘制过程中，每次点击底图添加节点时触发事件 */
    addpoint(e: PolygonToolEvent);
  }

  interface PolygonToolEvent extends ToolEvent<Polygon> {
    /** 用户当前绘制的多边形的点坐标数组 */
    currentLnglats: LngLat;
    /** 用户最后绘制的多边形的地理面积 */
    currentArea: number;
    /** 当前所画多边形的对象 */
    currentPolygon: Polygon;
    /** 获取工具所有绘制的多边形 */
    allPolygons: Polygon[];
  }
}
