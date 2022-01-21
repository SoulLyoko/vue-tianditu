declare namespace T {
  /**
   * 负责切换地图类型的控件
   */
  class ControlMapType extends T.Control {
    /**
     * 创建地图类型控件，opts为可选参数。
     * @param mapTypes 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图。通过此属性可配置控件展示的地图类型。
     */
    constructor(opts?: ControlMapTypeOptions);
  }

  type ControlMapTypeOptions = ControlMapTypeOptionsMapType[];

  /**
   * ```
   * [
   *   {
   *     title: "地图";
   *     icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png";
   *     layer: TMAP_NORMAL_MAP;
   *   },
   *   {
   *     title: "卫星";
   *     icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png";
   *     layer: TMAP_SATELLITE_MAP;
   *   },
   *   {
   *     title: "卫星混合";
   *     icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png";
   *     layer: TMAP_HYBRID_MAP;
   *   },
   *   {
   *     title: "地形";
   *     icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrain.png";
   *     layer: TMAP_TERRAIN_MAP;
   *   },
   *   {
   *     title: "地形混合";
   *     icon: " http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrainpoi.png";
   *     layer: TMAP_TERRAIN_HYBRID_MAP;
   *   }
   * ]
   * ```
   */
  interface ControlMapTypeOptionsMapType {
    /** 地图控件上所要显示的图层名称 */
    title?: string;
    /**  地图控件上所要显示的图层图标（默认图标大小80x80） */
    icon?: string;
    /** 地图类型对象，即MapType */
    layer?: MapType;
  }
}
