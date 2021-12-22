import { defineComponent, onBeforeMount } from "vue-demi";
import { useMapRoot } from "../../use";
import { h, fixMapPropagation } from "../../utils";
import { useState, useMethods } from "./use";
import { SearchBox, SearchSuggests, SearchPois, SearchMapView, IconSearch, IconRoute, IconClose } from "./components";
import { TdtRoute } from "../route";
import "./styles/tdt-search.scss";
import "../../styles/tdt-icon.scss";

export const TdtSearch = defineComponent({
  name: "TdtSearch",
  props: {
    placeholder: { type: String, default: "输入关键字搜索" },
    searchBtn: { type: Boolean, default: true },
    routeBtn: { type: Boolean, default: true }
  },
  setup(props) {
    const state = useState();
    const { onSearchComplete, onPoiClick, onSuggestClick, onSearch, onPageChange } = useMethods(state);

    onBeforeMount(async () => {
      state.tdtMap = await useMapRoot();
      state.localSearch = new T.LocalSearch(state.tdtMap, {
        pageCapacity: 10,
        onSearchComplete
      });
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-search",
          // 解决地图的滚动冒泡和点击及双击冒泡
          on: {
            ...fixMapPropagation(state.tdtMap)
          }
        },
        [
          state.showRoute
            ? h(TdtRoute)
            : h(
                SearchBox,
                {
                  props: {
                    value: state.keyword,
                    modelValue: state.keyword,
                    placeholder: props.placeholder
                  },
                  on: {
                    input: (val: string) => {
                      state.keyword = val;
                      onSearch(4, val);
                    },
                    "update:modelValue": (val: string) => {
                      state.keyword = val;
                      onSearch(4, val);
                    },
                    search: (val: string) => onSearch(1, val)
                  }
                },
                () => [
                  props.searchBtn &&
                    h(
                      "button",
                      {
                        class: "tdt-search-box__btn",
                        on: {
                          click: () => onSearch(1)
                        }
                      },
                      [h(IconSearch)]
                    ),
                  props.routeBtn &&
                    h(
                      "button",
                      {
                        class: "tdt-search-box__btn",
                        on: {
                          click: () => (state.showRoute = true)
                        }
                      },
                      [h(IconRoute)]
                    )
                ]
              ),
          state.showRoute
            ? h(
                "i",
                {
                  class: "tdt-search-route__close",
                  on: {
                    click: () => (state.showRoute = false)
                  }
                },
                [h(IconClose)]
              )
            : "",
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
                size: 10,
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
