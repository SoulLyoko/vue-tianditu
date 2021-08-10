import { DefineEmits, DefineProps } from "../types";
import { PROPS, EVENTS } from "./use/const";

export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
