import type { PLUGINS_URL } from "~/constants";

export interface LoadConfig {
  v?: string;
  tk?: string;
  plugins?: (keyof typeof PLUGINS_URL)[];
}
