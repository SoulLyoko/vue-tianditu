import { toLngLat } from "../../../utils";
import { PageProps } from "../components";
import { SearchState } from "../types";
import { Emit } from "./";

export function useMethods(state: SearchState, emit: Emit) {
  function onSearch(type = state.queryType, keyword = state.keyword, gbCode = 0) {
    state.queryType = type;
    state.keyword = keyword;
    state.current = 1;
    state.localSearch?.setSpecifyAdminCode(gbCode);
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

  function onSearchComplete(result: T.LocalSearchResult) {
    emit("search-complete", result);
    state.target = null;
    state.pois = result.pois;
    state.statistics = result.statistics;
    state.area = result.area;
    state.suggests = result.suggests;
    state.prompt = result.prompt;
    state.lineData = result.lineData;
    state.total = Number(result.count);
  }

  function onPoiClick(poi: T.LocalSearchPoi) {
    emit("poi-click", poi);
    const position = poi.lonlat.split(" ").map(Number);
    state.tdtMap?.centerAndZoom(toLngLat(position), 15);
    state.target = position;
    state.content = `
      <strong>${poi.name}</strong>
      <div>地址：${poi.address}</div>
      <div>坐标：${poi.lonlat}</div>
      `;
  }

  function onSuggestClick(suggest: T.LocalSearchSuggest) {
    emit("suggest-click", suggest);
    onSearch(1, suggest.name, Number(suggest.gbCode));
  }

  function onPageChange(page: PageProps) {
    state.current = page.current || 1;
    state.localSearch?.gotoPage(state.current);
  }

  return { onSearch, onSearchComplete, onPoiClick, onSuggestClick, onPageChange };
}
