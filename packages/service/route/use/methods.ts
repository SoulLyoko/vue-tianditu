import { RouteState } from "../types";
import { PageProps } from "../../search/components";

export function useMethods(state: RouteState) {
  function onSearchComplete(result: T.LocalSearchResult) {
    state.pois = result.pois;
  }
  function onDrivingComplete(result: T.DrivingRouteResult) {
    state.drivingPlans = [];
    state.drivingPlans = [result.results];
  }
  function onTransitComplete(result: T.TransitRouteResult) {
    state.transitPlans = [];
    state.transitPlans = result.results.lines;
  }
  function onSearch(queryType: number, keyword: string, poiType: "start" | "end") {
    state.pois = [];
    state.poiType = poiType;
    state[`${poiType}Keyword`] = keyword;
    if (keyword) {
      state.localSearch?.search(keyword, queryType);
    }
  }
  function onPoiClick(poi: T.LocalSearchPoi) {
    state[`${state.poiType}Keyword`] = poi.name;
    state[`${state.poiType}Marker`] = poi.lonlat.split(" ").map(Number);
    state.pois = [];
  }
  function onPageChange(page: PageProps) {
    state.current = page.current || 1;
    state.localSearch?.gotoPage(state.current);
  }
  return {
    onSearchComplete,
    onDrivingComplete,
    onTransitComplete,
    onSearch,
    onPoiClick,
    onPageChange
  };
}
