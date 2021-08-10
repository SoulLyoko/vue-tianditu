import { PLUGINS_URL } from "./const";

export type Options = {
  v?: string;
  tk?: string;
  plugins?: (keyof typeof PLUGINS_URL)[];
};
