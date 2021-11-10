import { ExtractPropTypes, EmitsOptions, SetupContext, ComponentPublicInstance, VNode } from "vue-demi";

export type Data<V = any> = Record<string, V>;

export type DefineProps<P> = ExtractPropTypes<P>;

export type DefineEmits<E extends EmitsOptions> = SetupContext<E>["emit"];

export type ComponentInstance<P, E extends EmitsOptions> = ComponentPublicInstance<P, Data, Data, Data, Data, E>;

export type VNodeEl = VNode & { el: HTMLElement; elm: HTMLElement };
