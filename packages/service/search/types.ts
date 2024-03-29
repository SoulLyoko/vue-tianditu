import { TdtMarker } from "../../components";

export interface SearchLocalState {
  tdtMap: T.Map | null;
  localSearch: T.LocalSearch | null;
  keyword: string;
  queryType: number;
  showRoute: boolean;
}

export interface SearchResultState
  extends Pick<T.LocalSearchResult, "pois" | "statistics" | "area" | "suggests" | "prompt" | "lineData"> {}

export interface SearchViewState {
  markers: TdtMarker["$props"][];
  target: VT.LngLat | null;
  content: string;
  current: number;
  total: number | string;
}

export type SearchState = SearchLocalState & SearchResultState & SearchViewState;
