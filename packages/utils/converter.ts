import { LngLat, LngLats, Bounds, Point, IconOptions } from "../types";
import { Props as MarkerOptions } from "../marker/types";

/**
 * 转换为经纬度对象
 * @param lnglat 经纬度
 */
export const toLngLat = (lnglat: LngLat) => {
  const [lng, lat] = lnglat;
  return new T.LngLat(lng, lat);
};

/**
 * 转换为经纬度数组对象
 * @param lngLats 经纬度数组
 */
export const toLngLats = (lnglats: LngLats) => {
  return lnglats.map(lnglat => {
    const [lng, lat] = lnglat;
    return new T.LngLat(lng, lat);
  });
};

/**
 * 转换为地理范围对象
 * @param bounds 地理范围数组
 */
export const toBounds = (bounds: Bounds) => {
  const [[lng1, lat1], [lng2, lat2]] = bounds;
  return new T.LngLatBounds(new T.LngLat(lng1, lat1), new T.LngLat(lng2, lat2));
};

/**
 * 转换为像素坐标点对象
 * @param point 像素坐标点数组
 */
export const toPoint = (point: Point) => {
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
export const toIcon = (icon: IconOptions | string) => {
  if (typeof icon === "string") {
    return new T.Icon({ iconUrl: icon });
  } else {
    const { iconUrl, iconSize, iconAnchor } = icon;
    const iconOption = {
      iconUrl,
      iconSize: toPoint(iconSize),
      iconAnchor: toPoint(iconAnchor)
    };
    return new T.Icon(objectFilter(iconOption));
  }
};

/**
 * 转换为点标注对象
 * @param option 点标注配置
 */
export const toMarker = (option: MarkerOptions) => {
  const markerOpt = {
    ...option,
    icon: option.icon ? toIcon(option.icon) : undefined,
    position: toLngLat(option.position)
  };
  return new T.Marker(markerOpt.position, objectFilter(option));
};
