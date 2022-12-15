import { defineComponent, computed, isVue2 } from "vue-demi";

import { IconClose } from "./icons";
import { h, slot } from "../../../utils";
import "../styles/search-box.scss";

export const SearchBox = defineComponent({
  props: {
    value: { type: String, default: "" },
    modelValue: { type: String, default: "" },
    /** 显示在输入框的提示 */
    placeholder: { type: String, default: "输入关键字搜索" },
    /** 是否显示搜索按钮 */
    searchBtn: { type: Boolean, default: true },
    /** 是否显示导航按钮 */
    routeBtn: { type: Boolean, default: true }
  },
  emits: {
    input: (e: string) => true,
    "update:modelValue": (e: string) => true,
    // 点击搜索按钮或回车时触发
    search: (e: string) => true
  },
  setup(props, { emit, slots }) {
    let isComposition = false;

    const keyword = computed({
      get() {
        return isVue2 ? props.value : props.modelValue;
      },
      set(val: string) {
        isVue2 ? emit("input", val) : emit("update:modelValue", val);
      }
    });

    return () =>
      h(
        "div",
        {
          class: "tdt-search-box"
        },
        [
          h("input", {
            class: "tdt-search-box__input",
            attrs: {
              type: "text",
              placeholder: props.placeholder
            },
            domProps: {
              value: keyword.value
            },
            on: {
              compositionstart: () => (isComposition = true),
              compositionend: () => (isComposition = false),
              input: (e: any) => setTimeout(() => !isComposition && (keyword.value = e.target.value)),
              // input: debounce((e: any) => !isComposition && (keyword.value = e.target.value), 100),
              // input: (e: any) => (keyword.value = e.target.value),
              keyup: (e: KeyboardEvent) => e.code === "Enter" && emit("search", keyword.value)
            }
          }),
          h(
            "i",
            {
              class: "tdt-search-box__close",
              style: { display: props.value || props.modelValue ? "block" : "none" },
              on: {
                click: () => (keyword.value = "")
              }
            },
            [h(IconClose)]
          ),
          slot(slots.default)
        ]
      );
  }
});
