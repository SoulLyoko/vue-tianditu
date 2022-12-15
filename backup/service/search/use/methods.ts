import { toLngLat, debounce } from "../../../utils";
import { PageProps } from "../components";
import { SearchState } from "../types";

export function useMethods(state: SearchState, emit: any) {
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
    state.target = null;
    state.pois = result.pois;
    state.statistics = result.statistics;
    state.area = result.area;
    state.suggests = result.suggests;
    state.prompt = result.prompt;
    state.lineData = result.lineData;
    state.total = Number(result.count);
    emit("search-complete", result);
  }

  function onPoiClick(poi: T.LocalSearchPoi) {
    const position = poi.lonlat.split(" ").map(Number);
    state.tdtMap?.panTo(toLngLat(position));
    state.target = position;
    state.content = `
      <strong>${poi.name}</strong>
      <div>地址：${poi.address}</div>
      <div>坐标：${poi.lonlat}</div>
      `;
    emit("poi-click", poi);
  }

  function onSuggestClick(suggest: T.LocalSearchSuggest) {
    onSearch(1, suggest.name, Number(suggest.gbCode));
    emit("suggest-click", suggest);
  }

  function onPageChange(page: PageProps) {
    state.current = page.current || 1;
    state.localSearch?.gotoPage(state.current);
  }

  return {
    onSearch: debounce(onSearch, 100),
    onSearchComplete,
    onPoiClick,
    onSuggestClick,
    onPageChange
  };
}
