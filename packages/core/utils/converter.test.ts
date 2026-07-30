import { beforeEach, describe, expect, it, vi } from "vite-plus/test";
import { objectFilter, toBounds, toIcon, toLngLat, toMarker, toPoint } from "./converter";

class ValueObject {
  constructor(...values: unknown[]) {
    Object.assign(this, { values });
  }
}

class Marker extends ValueObject {
  icon?: unknown;
  setIcon(icon: unknown) {
    this.icon = icon;
  }
}

describe("core converters", () => {
  beforeEach(() => {
    vi.stubGlobal("T", {
      LngLat: ValueObject,
      LngLatBounds: ValueObject,
      Point: ValueObject,
      Icon: ValueObject,
      Marker,
    });
  });

  it("converts coordinate values", () => {
    expect(toLngLat([1, 2])).toMatchObject({ values: [1, 2] });
    expect(toPoint([3, 4])).toMatchObject({ values: [3, 4] });
    expect(
      toBounds([
        [1, 2],
        [3, 4],
      ]),
    ).toHaveProperty("values");
  });

  it("drops undefined object properties", () => {
    expect(objectFilter({ a: 1, b: undefined, c: null })).toEqual({ a: 1, c: null });
  });

  it("creates icons and markers without component dependencies", () => {
    const icon = toIcon({ iconUrl: "/marker.png", iconSize: [20, 30] });
    expect(icon).toHaveProperty("values");
    const marker = toMarker({
      position: [1, 2],
      icon: "/marker.png",
      title: "marker",
      extData: { id: 1 },
    });
    expect((marker as T.Marker & { icon?: unknown }).icon).toBeDefined();
    expect(marker).toHaveProperty("extData", { id: 1 });
  });
});
