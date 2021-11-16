import { SearchState } from "../types";
import { Emit } from "./";

export function useMethods(state: SearchState) {
  function onSearch(type: number = state.queryType, keyword: string = state.keyword) {
    state.queryType = type;
    state.keyword = keyword;
    state.page = 1;
    if (state.keyword) {
      state.localSearch?.search(state.keyword, state.queryType);
    } else {
      state.localSearch?.clearResults();
      state.target = null;
      state.pois = false;
      state.statistics = false;
      state.area = false;
      state.suggests = false;
      state.prompt = false;
      state.lineData = false;
    }
  }

  function onSearchComplete(result: T.LocalSearchResult, emit: Emit) {
    emit("search-complete", result);
    state.pois = result.pois;
    state.statistics = result.statistics;
    state.area = result.area;
    state.suggests = result.suggests;
    state.prompt = result.prompt;
    state.lineData = result.lineData;
    state.total = result.count;
  }

  function onPoiClick(poi: T.LocalSearchResultPois[0], emit: Emit) {
    emit("poi-click", poi);
    const position = poi.lonlat.split(" ").map(Number);
    state.target = position;
    state.content = `
      <strong>${poi.name}</strong>
      <div>地址：${poi.address}</div>
      <div>坐标：${poi.lonlat}</div>
      `;
  }

  return { onSearch, onSearchComplete, onPoiClick };
}
