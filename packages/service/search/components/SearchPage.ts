import { defineComponent, watch, computed } from "vue-demi";
import { useState } from "../use";
import { h } from "../../../utils";

export const SearchPage = defineComponent({
  setup() {
    const state = useState();

    const pages = computed(() => {
      const size = state.localSearch?.getPageCapacity();
      return Math.ceil(Number(state.total) / Number(size));
    });

    watch(
      () => state.page,
      val => {
        if (val < 1) state.page = 1;
        if (val > pages.value) state.page = pages.value;
        state.localSearch?.gotoPage(state.page);
      }
    );

    return () =>
      h(
        "div",
        {
          class: "tdt-search-page"
        },
        [
          h(
            "span",
            {
              class: "search-page-btn first-page",
              on: {
                click: () => (state.page = 1)
              }
            },
            "«"
          ),
          h(
            "span",
            {
              class: "search-page-btn prev-page",
              on: {
                click: () => state.page--
              }
            },
            "‹"
          ),
          h("span", null, state.page),
          h("span", null, " / "),
          h("span", null, pages.value),
          h(
            "span",
            {
              class: "search-page-btn next-page",
              on: {
                click: () => state.page++
              }
            },
            "›"
          ),
          h(
            "span",
            {
              class: "search-page-btn last-page",
              on: {
                click: () => (state.page = pages.value)
              }
            },
            "»"
          )
        ]
      );
  }
});
