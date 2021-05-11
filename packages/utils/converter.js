/**
 * 转换为经纬度对象
 * @param {[Number,Number]} lnglat 经纬度数组
 */
export const toLngLat = lnglat => {
  if (lnglat instanceof Array) {
    const [lng, lat] = lnglat;
    return new T.LngLat(lng, lat);
  }
  return lnglat;
};

/**
 * 转换为地理范围对象
 * @param {[[Number,Number],[Number,Number]]} bounds 地理范围数组
 */
export const toBounds = bounds => {
  if (bounds instanceof Array) {
    const [[lng1, lat1], [lng2, lat2]] = bounds;
    return new T.LngLatBounds(new T.LngLat(lng1, lat1), new T.LngLat(lng2, lat2));
  }
  return bounds;
};

/**
 * 转换为像素坐标点对象
 * @param {[Number,Number]} point 像素坐标点数组
 */
export const toPoint = point => {
  if (point instanceof Array) {
    const [x, y] = point;
    return new T.Point(x, y);
  }
  return point;
};

/**
 * 过滤掉对象中undefined的属性
 * @param {Object} obj 对象
 */
export const objectFilter = obj => {
  let res = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      res[key] = obj[key];
    }
  });
  return res;
};

/**
 * 转换为图标对象
 * @param {Object} icon 图标，也可以是String
 * @param {String} icon.iconUrl
 * @param {[Number,Number]} icon.iconSize
 * @param {[Number,Number]} icon.iconAnchor
 */
export const toIcon = icon => {
  if (typeof icon === "string") {
    return new T.Icon({ iconUrl: icon });
  } else if (typeof icon === "object") {
    const { iconUrl, iconSize, iconAnchor } = icon;
    let iconOption = {
      iconUrl,
      iconSize: toPoint(iconSize),
      iconAnchor: toPoint(iconAnchor)
    };
    return new T.Icon(objectFilter(iconOption));
  }
  return icon;
};

/**
 * 转换为点标注对象
 * @param {Object} option
 */
export const toMarker = option => {
  option.icon = toIcon(option.icon);
  return new T.Marker(toLngLat(option.position), objectFilter(option));
};
