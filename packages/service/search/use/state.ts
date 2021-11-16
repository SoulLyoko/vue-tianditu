import { inject } from "vue-demi";
import { SearchState } from "../types";

export function useState() {
  const state = inject<SearchState>("searchState") as SearchState;
  return state;
}
