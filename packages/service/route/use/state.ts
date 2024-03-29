import { reactive, inject } from "vue-demi";
import { SearchState, DrivingState, TransitState, RouteState } from "../types";

export function useState() {
  const searchState: SearchState = {
    tdtMap: null,
    localSearch: null,
    startKeyword: "",
    startMarker: [],
    endKeyword: "",
    endMarker: [],
    routeType: 0,
    poiType: "start",
    pois: [],
    current: 1,
    total: 0
  };
  const drivingState: DrivingState = {
    drivingRoute: null,
    drivingLines: [],
    drivingPolicy: 0,
    drivingPlans: [],
    drivingPlanIndex: 0
  };
  const transitState: TransitState = {
    transitRoute: null,
    transitPlans: [],
    transitPlanIndex: 0,
    transitPolicy: 1,
    walkLines: [],
    busLines: [],
    busMarkers: [],
    metroMarkers: []
  };

  const injectState = inject<RouteState>("routeState");
  const state = injectState || reactive({ ...searchState, ...drivingState, ...transitState });

  return state;
}
