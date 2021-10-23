import { watch } from "vue-demi";
import { Props, ToolInstances } from "../types";

export function useWatch({ props, instances }: { props: Props; instances: ToolInstances }) {
  watch(
    () => props.markTool?.icon,
    val => {
      if (!val) return;
      if (typeof val === "string") {
        instances.markTool?.setPointImage(val);
      } else {
        instances.markTool?.setPointImage(val?.iconUrl);
      }
    }
  );
}
