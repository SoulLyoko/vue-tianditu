import { h, defineComponent, watch, computed } from "vue-demi";
import { useState } from "../use";

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
              onClick: () => (state.page = 1),
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
              onClick: () => state.page--,
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
              onClick: () => state.page++,
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
              onClick: () => (state.page = pages.value),
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
