export type LngLat = number[];
export type LngLats = number[][];
export type Bounds = number[][];
export type Point = number[];
export interface IconOptions {
  iconUrl: string;
  iconSize: number[];
  iconAnchor: number[];
}
export interface MarkerOptions {
  icon?: IconOptions | string;
  draggable?: boolean;
  title?: string;
  zIndexOffset?: number;
  opacity?: number;
}
