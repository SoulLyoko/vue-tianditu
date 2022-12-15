import type { ToolInstances } from "../types";
import type { MousetoolProps } from ".";

import { watch } from "vue-demi";

export function useWatch({ props, instances }: { props: MousetoolProps; instances: ToolInstances }) {
  watch(
    () => props.markTool?.icon,
    val => {
      if (!val) return;
      if (typeof val === "string") {
        instances.markTool?.setPointImage(val);
      } else {
        val?.iconUrl && instances.markTool?.setPointImage(val?.iconUrl);
      }
    }
  );
}
