import { defineComponent, computed } from "vue-demi";
import { h } from "../../../utils";
import "../styles/search-page.scss";

export const SearchPage = defineComponent({
  props: {
    /** 当前页码 */
    current: { type: Number, default: 1 },
    /** 每页条数 */
    size: { type: Number, default: 10 },
    /** 总条数 */
    total: { type: Number, default: 0 }
  },
  emits: {
    "update:current": (e: number) => true
  },
  setup(props, { emit }) {
    // 总页数
    const pageCount = computed(() => {
      return Math.ceil(Number(props.total) / Number(props.size));
    });

    const pageCurrent = computed({
      get() {
        return props.current;
      },
      set(val: number) {
        let current = val;
        if (val < 1) current = 1;
        if (val > pageCount.value) current = pageCount.value;
        emit("update:current", current);
      }
    });

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
              class: "tdt-search-page__btn first-page",
              on: {
                click: () => (pageCurrent.value = 1)
              }
            },
            "«"
          ),
          h(
            "span",
            {
              class: "tdt-search-page__btn prev-page",
              on: {
                click: () => pageCurrent.value--
              }
            },
            "‹"
          ),
          h("span", null, pageCurrent.value),
          h("span", null, " / "),
          h("span", null, pageCount.value),
          h(
            "span",
            {
              class: "tdt-search-page__btn next-page",
              on: {
                click: () => pageCurrent.value++
              }
            },
            "›"
          ),
          h(
            "span",
            {
              class: "tdt-search-page__btn last-page",
              on: {
                click: () => (pageCurrent.value = pageCount.value)
              }
            },
            "»"
          )
        ]
      );
  }
});
