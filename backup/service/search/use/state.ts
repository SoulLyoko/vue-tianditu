import { reactive } from "vue-demi";

import { SearchLocalState, SearchResultState, SearchViewState } from "../types";

export function useState() {
  const searchLocalState: SearchLocalState = {
    tdtMap: null,
    localSearch: null,
    keyword: "",
    queryType: 1,
    showRoute: false
  };
  const searchResultState: SearchResultState = {
    pois: false,
    statistics: false,
    area: false,
    suggests: false,
    prompt: false,
    lineData: false
  };
  const searchViewState: SearchViewState = {
    markers: [],
    target: null,
    content: "",
    current: 1,
    total: 0
  };
  const state = reactive({ ...searchLocalState, ...searchResultState, ...searchViewState });

  return state;
}
