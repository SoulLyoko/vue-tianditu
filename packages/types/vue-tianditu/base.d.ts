declare namespace VT {
  type LngLat = number[];

  type LngLats = number[][];

  type Bounds = number[][];

  type Point = number[];

  interface IconOptions {
    iconUrl: string;
    iconSize: number[];
    iconAnchor: number[];
  }

  interface MarkerOptions {
    icon?: IconOptions | string;
    draggable?: boolean;
    title?: string;
    zIndexOffset?: number;
    opacity?: number;
  }
}
