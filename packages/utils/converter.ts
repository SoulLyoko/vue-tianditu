import { Props as MarkerProps, useInit as useInitMarker } from "../overlay/marker/use";

/**
 * 转换为经纬度对象
 * @param lnglat 经纬度
 */
export const toLngLat = (lnglat: VT.LngLat) => {
  const [lng, lat] = lnglat;
  return new T.LngLat(lng, lat);
};

/**
 * 转换为经纬度数组对象
 * @param lngLats 经纬度数组
 */
export const toLngLats = (lnglats: VT.LngLats) => {
  return lnglats.map(lnglat => {
    const [lng, lat] = lnglat;
    return new T.LngLat(lng, lat);
  });
};

/**
 * 转换为地理范围对象
 * @param bounds 地理范围数组
 */
export const toBounds = (bounds: VT.Bounds) => {
  const [[lng1, lat1], [lng2, lat2]] = bounds;
  return new T.LngLatBounds(new T.LngLat(lng1, lat1), new T.LngLat(lng2, lat2));
};

/**
 * 转换为像素坐标点对象
 * @param point 像素坐标点数组
 */
export const toPoint = (point: VT.Point) => {
  const [x, y] = point;
  return new T.Point(x, y);
};

/**
 * 过滤掉对象中undefined的属性
 * @param obj 对象
 */
export const objectFilter = (obj: Record<string, any>) => {
  const res: Record<string, any> = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      res[key] = obj[key];
    }
  });
  return res;
};

/**
 * 转换为图标对象
 * @param icon 图标配置或者图片地址
 */
export const toIcon = (icon: VT.IconOptions | string) => {
  if (typeof icon === "string") {
    return new T.Icon({ iconUrl: icon });
  } else {
    const { iconUrl, iconSize, iconAnchor } = icon;
    const iconOption = {
      iconUrl,
      iconSize: iconSize && toPoint(iconSize),
      iconAnchor: iconAnchor && toPoint(iconAnchor)
    };
    return new T.Icon(objectFilter(iconOption));
  }
};

/**
 * 转换为点标注对象
 * @param option 点标注配置
 */
export const toMarker = (option: MarkerProps) => {
  const marker = useInitMarker(option);
  option.icon && marker.setIcon(toIcon(option.icon));
  // @ts-ignore
  marker.extData = option.extData;
  return marker;
};
