import { defineComponent, onBeforeMount, watch, reactive, h, provide } from "vue-demi";
import { useMapRoot } from "../../use";
import { PROPS, EVENTS, useMethods } from "./use";
import { debounce } from "../../utils";
import "./index.scss";
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
      page: 1,
      total: 0
    };
    const state = reactive({ ...searchLocalState, ...searchResultState, ...searchViewState });

    provide("searchState", state);

    const { onSearch, onSearchComplete } = useMethods(state);

    onBeforeMount(async () => {
      state.tdtMap = await useMapRoot();
      state.localSearch = new T.LocalSearch(state.tdtMap, {
        pageCapacity: props.pageCapacity,
        onSearchComplete: result => onSearchComplete(result, emit)
      });
      emit("init", state.localSearch);

      watch(
        () => state.keyword,
        () => {
          debounce(onSearch, 100)();
        }
      );
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-search",
          // 解决地图的滚动冒泡和点击及双击冒泡
          onMousewheel: (e: Event) => e.stopPropagation(),
          onClick: (e: Event) => {
            e.stopPropagation();
            if (state.tdtMap?.isDoubleClickZoom()) {
              state.tdtMap?.disableDoubleClickZoom();
              setTimeout(() => state.tdtMap?.enableDoubleClickZoom(), 300);
            }
          },
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
            placeholder: props.placeholder,
            props: {
              placeholder: props.placeholder
            }
          }),
          h(SearchSuggests),
          h(SearchPois, {
            onPoiClick: (poi: T.LocalSearchResultPois[0]) => emit("poi-click", poi),
            on: {
              "poi-click": (poi: T.LocalSearchResultPois[0]) => emit("poi-click", poi)
            }
          }),
          h(SearchMapView, {
            onPoiClick: (poi: T.LocalSearchResultPois[0]) => emit("poi-click", poi),
            on: {
              "poi-click": (poi: T.LocalSearchResultPois[0]) => emit("poi-click", poi)
            }
          })
        ]
      );
  }
});

export type TdtSearch = InstanceType<typeof TdtSearch>;
