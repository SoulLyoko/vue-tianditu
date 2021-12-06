import { defineComponent, onBeforeMount, reactive, provide, watch, isVue2 } from "vue-demi";
import { useMapRoot } from "../../use";
import { h } from "../../utils";
import "../../styles/tdt-search.scss";
import "../../styles/tdt-icon.scss";
import { PROPS, EVENTS, useMethods } from "./use";
import { SearchBox, SearchSuggests, SearchPois, SearchMapView } from "./components";
import { SearchLocalState, SearchResultState, SearchViewState } from "./types";

export const TdtSearch = defineComponent({
  name: "TdtSearch",
  props: PROPS,
  emit: EVENTS,
  setup(props, { emit }) {
    const searchLocalState: SearchLocalState = {
      tdtMap: null,
      localSearch: null,
      keyword: "",
      queryType: 1
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

    provide("searchState", state);

    const { onSearchComplete, onPoiClick, onSuggestClick, onSearch, onPageChange } = useMethods(state, emit);

    onBeforeMount(async () => {
      state.tdtMap = await useMapRoot();
      state.localSearch = new T.LocalSearch(state.tdtMap, {
        pageCapacity: props.pageCapacity,
        onSearchComplete
      });
      emit("init", state.localSearch);
      watch(
        () => [props.value, props.modelValue],
        ([v, mV]: string[]) => {
          isVue2 ? emit("input", v) : emit("update:modelValue", mV);
        }
      );
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-search",
          // 解决地图的滚动冒泡和点击及双击冒泡
          on: {
            mousewheel: (e: Event) => e.stopPropagation(),
            click: (e: Event) => {
              e.stopPropagation();
              if (state.tdtMap?.isDoubleClickZoom()) {
                state.tdtMap?.disableDoubleClickZoom();
                setTimeout(() => state.tdtMap?.enableDoubleClickZoom(), 300);
              }
            }
          }
        },
        [
          h(SearchBox, {
            props: {
              value: state.keyword,
              modelValue: state.keyword,
              placeholder: props.placeholder
            },
            on: {
              input: (val: string) => onSearch(4, val),
              "update:modelValue": (val: string) => onSearch(4, val),
              search: (val: string) => onSearch(1, val)
            }
          }),
          h(SearchSuggests, {
            props: {
              suggests: state.suggests || []
            },
            on: {
              "suggest-click": onSuggestClick
            }
          }),
          h(SearchPois, {
            props: {
              pois: state.pois || [],
              page: {
                current: state.current,
                size: props.pageCapacity,
                total: state.total
              }
            },
            on: {
              "poi-click": onPoiClick,
              "update:page": onPageChange
            }
          }),
          h(SearchMapView, {
            props: {
              pois: state.pois || [],
              target: state.target,
              content: state.content
            },
            on: {
              "poi-click": onPoiClick,
              "update:target": (e: any) => (state.target = e)
            }
          })
        ]
      );
  }
});

export type TdtSearch = InstanceType<typeof TdtSearch>;
