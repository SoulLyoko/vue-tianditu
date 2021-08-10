import { DefineEmits, DefineProps } from "../types";
import { PROPS, EVENTS } from "./use/const";

export type ControlNames = "Zoom" | "Scale" | "Copyright" | "OverviewMap" | "MapType";

export type ControlOpts = Tianditu.ControlZoomOptions &
  Tianditu.ControlScaleOptions &
  Tianditu.ControlCopyrightOptions &
  Tianditu.ControlOverviewMapOptions &
  Tianditu.ControlMapTypeOptions & {
    name: ControlNames;
  };

export type Props = DefineProps<typeof PROPS>;
export type Emit = DefineEmits<typeof EVENTS>;
