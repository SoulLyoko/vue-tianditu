declare namespace T {
  class CircleTool extends Mousetool<CircleToolEvents> {
    /** 画圆工具，用来实现在地图上画圆的功能 */
    constructor(map: Map, opts?: CircleToolOptions);
    /** 获取工具中所有绘制的圆 */
    getCircles(): Circle[];
  }

  interface CircleToolOptions extends CircleOptions {}

  interface CircleToolEvents {
    /** 用户拖动绘制圆时触发 */
    draw(e: CircleToolEvent);
    /** 用户完成绘制圆时触发 */
    drawend(e: CircleToolEvent);
  }

  interface CircleToolEvent extends ToolEvent<Circle> {
    /** 中心点的地理坐标 */
    currentCenter: LngLat;
    /** 半径，单位为米 */
    currentRadius: LngLat;
    /** 用户最后绘制的圆对象 */
    currentCircle: Circle;
    /** 用户所有绘制的圆对象 */
    allCircles: Circle[];
  }
}
