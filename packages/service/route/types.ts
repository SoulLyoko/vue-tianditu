export interface SearchState {
  tdtMap: T.Map | null;
  localSearch: T.LocalSearch | null;
  startKeyword: string;
  startMarker: VT.LngLat;
  endKeyword: string;
  endMarker: VT.LngLat;
  routeType: number; // 0: "驾车", 1: "公交", 2: "步行"
  poiType: "start" | "end";
  pois: T.LocalSearchPoi[] | false;
  current: number;
  total: number;
}

export interface DrivingState {
  drivingRoute: T.DrivingRoute | null;
  drivingLines: VT.LngLats[];
  drivingPolicy: T.DrivingRouteOptions["policy"];
  drivingPlans: T.DrivingRouteResult["results"][];
  drivingPlanIndex: number;
}

export interface TransitState {
  transitRoute: T.TransitRoute | null;
  transitPolicy: T.TransitRouteOptions["policy"];
  transitPlans: T.TransitRouteResult["results"]["lines"];
  transitPlanIndex: number;
  walkLines: VT.LngLats[];
  busLines: VT.LngLats[];
  busMarkers: VT.LngLat[];
  metroMarkers: VT.LngLat[];
}

export type RouteState = SearchState & DrivingState & TransitState;
