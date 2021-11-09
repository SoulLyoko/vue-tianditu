import { Emit, Props } from "./";

export function useControls(props: Props, map: T.Map, emit: Emit) {
  props.controls?.forEach((option: VT.ControlName | VT.ControlOptions) => {
    if (typeof option === "string") {
      addControlByName(option);
    } else if (typeof option === "object") {
      addControlByOption(option);
    }
  });

  function addControlByName(option: VT.ControlName) {
    const controlName = option;
    if (!T.Control[controlName]) {
      setTimeout(() => addControlByName(option));
      return;
    }
    const control = new T.Control[controlName]();
    if (controlName === "OverviewMap") {
      const c = control as T.ControlOverviewMap;
      c.addEventListener("viewchange", e => emit("viewchange", e));
    }
    map.addControl(control);
  }

  function addControlByOption(option: VT.ControlOptions) {
    const controlName = option.name;
    if (!T.Control[controlName]) {
      setTimeout(() => addControlByOption(option));
      return;
    }
    let control;
    if (controlName === "MapType") {
      const mapTypes = option.mapTypes?.map(item => {
        return {
          ...item,
          layer: window[item.layer]
        };
      });
      control = new T.Control.MapType({ mapTypes });
    } else if (controlName === "OverviewMap") {
      control = new T.Control[controlName](option);
      control.addEventListener("viewchange", e => emit("viewchange", e));
    } else {
      control = new T.Control[controlName](option);
    }
    map.addControl(control);
  }
}
