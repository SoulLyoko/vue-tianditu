import { DefineEmits, DefineProps } from "../types";
import { PROPS, EVENTS } from "./use/const";

export type ControlNames = "Zoom" | "Scale" | "Copyright" | "OverviewMap" | "MapType";

export type ControlOpts = T.ControlZoomOptions &
  T.ControlScaleOptions &
  T.ControlCopyrightOptions &
  T.ControlOverviewMapOptions &
  T.ControlMapTypeOptions & {
    name: ControlNames;
  };

export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
