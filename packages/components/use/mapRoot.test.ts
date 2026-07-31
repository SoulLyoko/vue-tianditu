import {
  createApp,
  defineComponent,
  h,
  provide,
  shallowReadonly,
  shallowRef,
  type App,
  type ShallowRef,
} from "vue";
import { afterEach, describe, expect, it } from "vite-plus/test";
import { mapRootKey, useMapRoot } from "./mapRoot";

const apps: App[] = [];

function mountConsumer(mapRoot?: ShallowRef<T.Map | undefined>) {
  let mapPromise!: Promise<T.Map>;
  const Consumer = defineComponent(() => {
    mapPromise = useMapRoot();
    return () => null;
  });
  const Root = defineComponent(() => {
    if (mapRoot) provide(mapRootKey, shallowReadonly(mapRoot));
    return () => h(Consumer);
  });
  const app = createApp(Root);

  app.mount(document.createElement("div"));
  apps.push(app);

  return mapPromise;
}

afterEach(() => {
  apps.splice(0).forEach((app) => app.unmount());
});

describe("useMapRoot", () => {
  it("resolves immediately when the map is already initialized", async () => {
    const map = {} as T.Map;

    await expect(mountConsumer(shallowRef(map))).resolves.toBe(map);
  });

  it("waits for and resolves with the first map instance", async () => {
    const mapRoot = shallowRef<T.Map>();
    const firstMap = {} as T.Map;
    const secondMap = {} as T.Map;
    const mapPromise = mountConsumer(mapRoot);

    mapRoot.value = firstMap;
    mapRoot.value = secondMap;

    await expect(mapPromise).resolves.toBe(firstMap);
  });

  it("rejects when used outside TdtMap", async () => {
    await expect(mountConsumer()).rejects.toThrow("useMapRoot must be used inside TdtMap");
  });
});
