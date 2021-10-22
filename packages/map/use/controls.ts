import { ControlNames, ControlOpts, Emit, Props } from "../types";

export function useControls(props: Props, map: Tianditu.Map, emit: Emit) {
  props.controls?.forEach((option: ControlNames | ControlOpts) => {
    if (typeof option === "string") {
      addControlByName(option);
    } else if (typeof option === "object") {
      addControlByOption(option);
    }
  });

  function addControlByName(option: ControlNames) {
    const controlName = option;
    if (!T.Control[controlName]) {
      return setTimeout(() => {
        addControlByName(option);
      });
    }
    const control = new T.Control[controlName]();
    if (controlName === "OverviewMap") {
      const c = control as Tianditu.ControlOverviewMap;
      c.addEventListener("viewchange", e => {
        emit("viewchange", e);
      });
    }
    map.addControl(control);
  }

  function addControlByOption(option: ControlOpts) {
    const controlName = option.name;
    if (!T.Control[controlName]) {
      return setTimeout(() => {
        addControlByOption(option);
      });
    }
    let control;
    if (controlName === "MapType") {
      const mapTypes = option.mapTypes?.map(item => {
        return {
          ...item,
          layer: window[item.layer as any]
        };
      }) as typeof option.mapTypes;
      control = new T.Control.MapType({ mapTypes });
    } else if (controlName === "OverviewMap") {
      control = new T.Control[controlName](option);
      control.addEventListener("viewchange", e => {
        emit("viewchange", e);
      });
    } else {
      control = new T.Control[controlName](option);
    }

    map.addControl(control);
  }
}
