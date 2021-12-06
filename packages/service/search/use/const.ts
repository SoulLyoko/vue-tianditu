// import { PropType } from "vue-demi";
import { DefineProps, DefineEmits } from "../../../types";

export const NATIVE_PROPS = {
  value: { type: String, default: "" },
  modelValue: { type: String, default: "" },
  pageCapacity: { type: Number, default: 10 },
  placeholder: { type: String, default: "输入关键字搜索" }
  // queryType: { type: Number, default: 1 },
  // onSearchComplete: { type: Function as PropType<T.LocalSearchOptions["onSearchComplete"]> },
  // bounds: { type: Array as PropType<VT.Bounds> },
  // center: { type: Array as PropType<VT.LngLat> },
  // radius: { type: Number },
  // ui: { type: Boolean, default: true }
};

export const EXTRA_PROPS = {};

export const NATIVE_EVENTS = {};

export const EXTRA_EVENTS = {
  init: (e: T.LocalSearch) => e instanceof T.LocalSearch,
  "search-complete": (e: T.LocalSearchResult) => true,
  "poi-click": (e: T.LocalSearchPoi) => true,
  "suggest-click": (e: T.LocalSearchSuggest) => true,
  input: (e: string) => true,
  "update:modelValue": (e: string) => true
};

export const PROPS = { ...NATIVE_PROPS, ...EXTRA_PROPS };
export const EVENTS = { ...NATIVE_EVENTS, ...EXTRA_EVENTS };
export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
