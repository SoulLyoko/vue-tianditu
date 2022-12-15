import type { VNode as _VNode } from "vue-demi";

import * as VueDemi from "vue-demi";
import { h as _h, isVue2 } from "vue-demi";

interface Options {
  attrs?: Object;
  props?: Object;
  domProps?: Object;
  on?: Object;
  scopedSlots?: Object;
  [x: string]: any;
}

/** VNode.elm in Vue2 */
type VNode = _VNode & { el?: HTMLElement; elm?: HTMLElement };

export const adaptOnsV3 = (ons?: Object) => {
  if (!ons) return null;
  return Object.entries(ons).reduce((ret, [key, handler]) => {
    key = key.charAt(0).toUpperCase() + key.slice(1);
    key = `on${key}`;
    return { ...ret, [key]: handler };
  }, {});
};

export const h = (type: string | any, options?: Options, chidren?: any) => {
  if (isVue2) return _h(type, options as any, chidren) as VNode;

  const { attrs, props, domProps, on, scopedSlots, ...extraOptions } = options ?? {};
  const ons = adaptOnsV3(on);
  const params = {
    ...(extraOptions ?? {}),
    ...(attrs ?? {}),
    ...(props ?? {}),
    ...(domProps ?? {}),
    ...(ons ?? {})
  };

  return _h(type, params as any, scopedSlots || chidren) as VNode;
};

export const slot = (s: any, attrs?: any) => {
  if (typeof s == "function") return s(attrs);
  return s;
};

export function dynamicComponent(name: string) {
  if (isVue2) {
    return name;
  } else {
    return VueDemi.resolveDynamicComponent?.(name);
  }
}
