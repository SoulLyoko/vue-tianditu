import { h, defineComponent } from "vue-demi";
import { useMethods, useState } from "../use";
import { IconSearch, IconClose } from "./icons";

export const SearchBox = defineComponent({
  props: {
    placeholder: { type: String, default: "输入关键字搜索" }
  },
  setup(props) {
    let isComposition = false;
    const state = useState();
    const { onSearch } = useMethods(state);

    return () =>
      h(
        "div",
        {
          class: "tdt-search-box"
        },
        [
          h("input", {
            class: "search-input",
            type: "text",
            value: state.keyword,
            placeholder: props.placeholder,
            onFocus: () => (state.queryType = 4),
            onCompositionstart: () => (isComposition = true),
            onCompositionend: () => (isComposition = false),
            onInput: (e: any) => setTimeout(() => !isComposition && (state.keyword = e.target.value)),
            attrs: {
              type: "text",
              placeholder: props.placeholder
            },
            domProps: {
              value: state.keyword
            },
            on: {
              focus: () => (state.queryType = 4),
              compositionstart: () => (isComposition = true),
              compositionend: () => (isComposition = false),
              input: (e: any) => setTimeout(() => !isComposition && (state.keyword = e.target.value))
            }
          }),
          h(
            "i",
            {
              class: "search-close",
              style: state.keyword ? "" : "display:none",
              onClick: () => (state.keyword = ""),
              on: {
                click: () => (state.keyword = "")
              }
            },
            [h(IconClose)]
          ),
          h(
            "button",
            {
              class: "search-btn",
              onClick: () => onSearch(1),
              on: {
                click: () => onSearch(1)
              }
            },
            [h(IconSearch)]
          )
        ]
      );
  }
});
