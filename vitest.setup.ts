import { config } from "@vue/test-utils";
import { vi } from "vitest";

import VueTianditu from "./packages";
import T from "./scripts/tianditu.api";

vi.stubGlobal("T", T);

config.global.plugins = [VueTianditu];
