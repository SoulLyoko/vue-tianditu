declare namespace T {
  class PolylineTool extends Mousetool<PolylineToolEvents> {
    /** 折线工具，可以通过事件来获取用户绘制的折线，包含测距功能 */
    constructor(map: Map, opts?: PolylineToolOptions);
    /**
     * 跟随鼠标移动的说明文字
     * @param text 文字内容
     */
    setTips(text: string): void;
    /**
     * 计算一系列地理坐标点的距离总和
     * @param points 点坐标LngLat数组
     */
    getDistance(points: LngLat[]): number;
    /** 获取所有编辑完成的线 */
    getPolylines(): Polyline[];
    /** 完成一个折线的绘制，运行此方法相当于用户点击双击结束当前折线的绘制 */
    endDraw();
  }

  interface PolylineToolOptions extends PolylineOptions {
    /** 是否显示距离，如果不显示距离，则可以作为画线控件使用。default:false */
    showLabel?: boolean;
  }

  interface PolylineToolEvents {
    /** 用户双击完成一次折线绘制时触发事件 */
    draw(e: PolylineToolEvent);
    /** 用户在多边形绘制过程中，每次点击底图添加节点时触发事件 */
    addpoint(e: PolylineToolEvent);
  }

  interface PolylineToolEvent extends ToolEvent<Polyline> {
    /** 用户当前绘制的折线的点坐标数组 */
    currentLnglats: LngLat;
    /** 用户当前绘制的折线的地理长度 */
    currentDistance: number;
    /** 当前测距所画线的对象 */
    currentPolyline: Polyline;
    /** 返回所有工具绘制的线对象 */
    allPolylines: Polyline[];
  }
}
