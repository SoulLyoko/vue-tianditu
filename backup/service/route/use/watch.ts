import { watch } from "vue-demi";

import { RouteState } from "../types";
import { toLngLat, toLngLats } from "../../../utils";

export function useWatch(state: RouteState) {
  function resetRoutes() {
    state.drivingLines = [];
    state.walkLines = [];
    state.busLines = [];
    state.busMarkers = [];
    state.metroMarkers = [];
  }
  function resetPlans() {
    state.transitPlans = [];
    state.transitPlanIndex = 0;
    state.drivingPlans = [];
    state.drivingPlanIndex = 0;
  }

  watch(
    () => {
      const { startMarker, endMarker, routeType, drivingPolicy, transitPolicy } = state;
      return { startMarker, endMarker, routeType, drivingPolicy, transitPolicy };
    },
    ({ startMarker, endMarker, routeType, drivingPolicy, transitPolicy }) => {
      resetPlans();
      resetRoutes();
      if (startMarker.length && endMarker.length) {
        switch (routeType) {
          case 0:
            state.drivingRoute?.setPolicy(drivingPolicy);
            state.drivingRoute?.search(toLngLat(startMarker), toLngLat(endMarker));
            break;
          case 1:
            state.transitRoute?.setPolicy(transitPolicy);
            state.transitRoute?.search(toLngLat(startMarker), toLngLat(endMarker));
            break;
          case 2:
            state.drivingRoute?.setPolicy(4);
            state.drivingRoute?.search(toLngLat(startMarker), toLngLat(endMarker));
            break;
          default:
            break;
        }
      }
    },
    { immediate: true }
  );

  watch(
    () => ({ drivingPlans: state.drivingPlans, drivingPlanIndex: state.drivingPlanIndex }),
    ({ drivingPlans, drivingPlanIndex }) => {
      resetRoutes();
      const { routelatlon } = drivingPlans[drivingPlanIndex] || {};
      if (!routelatlon) return;
      const lines = routelatlon
        .split(";")
        .filter(e => e)
        .map(e => e.split(",").map(Number));
      state.drivingLines.push(lines);
      //   drivingPlans.map(plan =>
      //   plan.routelatlon
      //     .split(";")
      //     .filter(e => e)
      //     .map(e => e.split(",").map(Number))
      // );
      state.tdtMap?.setViewport(toLngLats(state.drivingLines.flat()));
    },
    { immediate: true }
  );

  watch(
    () => ({ transitPlans: state.transitPlans, transitPlanIndex: state.transitPlanIndex }),
    ({ transitPlans, transitPlanIndex }) => {
      resetRoutes();
      const { segments } = transitPlans[transitPlanIndex] || {};
      if (!segments) return;
      segments.forEach(segment => {
        const lines = segment.segmentLine.map(line =>
          line.linePoint
            .split(";")
            .filter(e => e)
            .map(e => e.split(",").map(Number))
        );
        const markers = [segment.stationStart, segment.stationEnd].map(station =>
          station.lonlat.split(",").map(Number)
        );
        switch (segment.segmentType) {
          case 1:
          case 4:
            state.walkLines.push(...lines);
            break;
          case 2:
            state.busMarkers.push(...markers);
            state.busLines.push(...lines);
            break;
          case 3:
            state.metroMarkers.push(...markers);
            state.busLines.push(...lines);
            break;
          default:
            break;
        }
      });
      state.tdtMap?.setViewport(toLngLats([...state.busLines, ...state.walkLines].flat()));
    },
    { immediate: true }
  );
}
