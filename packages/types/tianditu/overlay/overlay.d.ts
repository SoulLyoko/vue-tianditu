declare namespace T {
  /**
   * 自定义覆盖物的构造类
   */
  class Overlay {
    constructor(opts: any);
    extend(opts: OverlayExtendOptions): Overlay;
  }
  /**
   * 自定义覆盖物构造类参数
   */
  interface OverlayExtendOptions {
    /** 构造函数时传递参数，对OverlayOptions属性值进行赋值 */
    initialize(...arg: any): void;
    /** 向地图上添加叠加物。当调用map.addOverLay时，API将调用此方法。自定义叠加物时需要实现此方法。自定义叠加物时需要将覆盖物对应的HTML元素返回 */
    onAdd(map: Map): void;
    /** 移除叠加物，释放覆盖物对象所占用的内存。自定义叠加物时需要实现此方法 */
    onRemove(): void;
    /** 当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法 */
    update(): void;
    /** 在地图上显示叠加层 */
    show(): void;
    /** 在地图上隐藏叠加层 */
    hide(): void;
    /** 判断叠加层是否隐藏，返回 true 表示当前叠加层是隐藏的，否则是处于显示状态 */
    isHidden(): boolean;
    /** 对OverlayOptions属性值赋值 */
    setOptions(opt: JSON): void;
    /** 返回叠加物所在的容器的标签 */
    getElement(): HTMLElement;
  }

  /**
   * 覆盖物公共类
   */
  class OverlayBase<E> {
    /** 返回叠加层类型 */
    getType(): number;
    /** 返回叠加层所在的map对象 */
    getMap(): Map;
    /** 设置叠加层的偏移值 */
    setOffset(offset: Point): void;
    /** 返回叠加层的偏移值 */
    getOffset(): Point;
    /** 设置z-index */
    setZIndex(zIndex: number): void;
    /** 设置叠加层的显示透明度 */
    setOpacity(opacity: number): void;
    /** 返回加层的显示透明度 */
    getOpacity(): number;
    /** 添加事件监听函数 */
    addEventListener<EE extends keyof E>(event: EE, handler: E[EE]): void;
    /** 移除事件监听函数 */
    removeEventListener<EE extends keyof E>(event: EE, handler: E[EE]): void;
    /** 打开信息窗口 */
    openInfoWindow(infowin: InfoWindow): void;
    /** 关闭信息窗口 */
    closeInfoWindow(): void;
    /** 显示 */
    show(): void;
    /** 隐藏 */
    hide(): void;
  }
  /**
   * 覆盖物共有事件
   */
  interface OverlayEvents<T, LL, L = undefined> {
    /** 点击叠加层后会触发此事件 */
    click(e: OverlayEvent<T, LL, L>): void;
    /** 双击叠加层后会触发此事件 */
    dblclick(e: OverlayEvent<T, LL, L>): void;
    /** 鼠标在叠加层上按下触发此事件 */
    mousedown(e: OverlayEvent<T, LL, L>): void;
    /** 鼠标在叠加层释放触发此事件 */
    mouseup(e: OverlayEvent<T, LL, L>): void;
    /** 鼠标离开叠加层时触发此事件 */
    mouseout(e: OverlayEvent<T, LL, L>): void;
    /** 当鼠标进入叠加层区域时会触发此事件 */
    mouseover(e: OverlayEvent<T, LL, L>): void;
    /** 移除叠加层时触发 */
    remove(e: OverlayEvent<T, LL, L>): void;
  }
  /**
   * 覆盖物共有事件参数
   */
  interface OverlayEvent<T, LL, L = undefined> {
    /** 事件类型 */
    type: string;
    /** 叠加层对象 */
    target: T;
    /** 叠加层经纬度坐标 */
    lnglat: LL;
    /** 点聚合组件的点标注对象 */
    layer: L;
    /** 叠加层像素坐标 */
    containerPoint: Point;
  }
}
