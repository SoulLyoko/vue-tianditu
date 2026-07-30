/** Convert a longitude/latitude tuple into a Tianditu object. */
export const toLngLat = (lnglat: VT.LngLat) => {
  const [lng, lat] = lnglat;
  return new T.LngLat(lng, lat);
};

export const toLngLats = (lnglats: VT.LngLats) => lnglats.map(toLngLat);

export const toBounds = (bounds: VT.Bounds) => {
  const [[lng1, lat1], [lng2, lat2]] = bounds;
  return new T.LngLatBounds(new T.LngLat(lng1, lat1), new T.LngLat(lng2, lat2));
};

export const toPoint = (point: VT.Point) => {
  const [x, y] = point;
  return new T.Point(x, y);
};

export const objectFilter = (obj: Record<string, unknown>) => {
  const result: Record<string, unknown> = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) result[key] = obj[key];
  });
  return result;
};

export const toIcon = (icon: VT.IconOptions | string) => {
  if (typeof icon === "string") return new T.Icon({ iconUrl: icon });
  const { iconUrl, iconSize, iconAnchor } = icon;
  return new T.Icon(
    objectFilter({
      iconUrl,
      iconSize: iconSize && toPoint(iconSize),
      iconAnchor: iconAnchor && toPoint(iconAnchor),
    }),
  );
};

export interface ToMarkerOptions extends Omit<T.MarkerOptions, "icon"> {
  position: VT.LngLat;
  icon?: VT.IconOptions | string;
  extData?: unknown;
}

export const toMarker = (option: ToMarkerOptions) => {
  const { position, icon, extData, ...markerOptions } = option;
  const marker = new T.Marker(toLngLat(position), markerOptions);
  if (icon) marker.setIcon(toIcon(icon));
  // Tianditu exposes extData as an open-ended instance property.
  (marker as T.Marker & { extData?: unknown }).extData = extData;
  return marker;
};
